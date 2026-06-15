import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import time
import json
import random
from pathlib import Path

SEEDS = [
    "https://www.slack.com/",
    "https://www.stackoverflow.com/",
    "https://www.github.com/",
    "https://www.reddit.com/",
    "https://www.hackclub.com/",
    "https://www.wikipedia.org/",
    "https://www.medium.com/",
    "https://www.twitter.com/",
    "https://www.facebook.com/",
    "https://www.linkedin.com/",
    "https://www.youtube.com/"
]

MAX_NEW_PAGES = 100
REMOTE_JSON = "https://github.com/BennyGaming635/BenSearch/blob/main/bensearch/data/sites.json"
OUTPUT_JSON = Path(__file__).with_name("sites.json")

visited = set()
results = []

def clean_text(text):
    return ' '.join(text.split())

def resolve_raw_github_url(url):
    parsed = urlparse(url)

    if parsed.netloc == "github.com":
        parts = parsed.path.strip("/").split("/")

        if len(parts) >= 5 and parts[2] == "blob":
            owner, repo, _, branch, *path_parts = parts
            raw_path = "/".join(path_parts)
            return f"https://raw.githubusercontent.com/{owner}/{repo}/{branch}/{raw_path}"

    return url

def normalize_url(url):
    parsed = urlparse(url)
    path = parsed.path or "/"

    if path != "/":
        path = path.rstrip("/") or "/"

    return parsed._replace(fragment="", path=path).geturl()

def site_url(site):
    if not isinstance(site, dict):
        return ""

    return normalize_url(site.get("url", ""))

def extract_page(url):
    try:
        r = requests.get(url, timeout =5, headers={
            "User-Agent": "BenSearchBot/1.0"
        })
        if "text/html" not in r.headers.get("Content-Type", ""):
            return None
        
        soup = BeautifulSoup(r.text, "lxml")

        title = soup.title.text.strip() if soup.title else url

        description = ""
        meta = soup.find("meta", attrs={"name": "description"})
        if meta and meta.get("content"):
            description = meta["content"]

        if not description:
            description = clean_text(soup.get_text())[:160]

        return {
            "title": title,
            "url": url,
            "description": description
        }

    except:
        return None
    
def get_links(url, soup):
    links = []

    for a in soup.find_all("a", href=True):
        href = a["href"]
        if href.startswith(("javascript:", "mailto:", "#")):
            continue

        full = urljoin(url, href)
        parsed = urlparse(full)

        if parsed.scheme not in ["http", "https"]:
            continue

        clean_url = parsed._replace(fragment="").geturl()
        links.append(clean_url)

    return links

def load_exisiting_sites():
    try:
        r = requests.get(resolve_raw_github_url(REMOTE_JSON), timeout=10)
        r.raise_for_status()

        existing = r.json()

        urls = {
            site_url(site)
            for site in existing
            if isinstance(site, dict)
        }

        print(f"Loaded {len(existing)} existing sites")
        return existing, urls
    
    except Exception as e:
        print(f"Failed to load existing sites: {e}")
        return [], set()

def crawl():
    queue = list(SEEDS)
    existing_sites, existing_urls = load_exisiting_sites()
    results = list(existing_sites)
    result_urls = set(existing_urls)
    added_pages = 0

    while queue and added_pages < MAX_NEW_PAGES:
        url = queue.pop(0)
        normalized_url = normalize_url(url)

        if normalized_url in visited:
            continue

        visited.add(normalized_url)

        try:
            r = requests.get(url, timeout=5, headers={
                "User-Agent": "BenSearchBot/1.0"
            })

            if "text/html" not in r.headers.get("Content-Type", ""):
                continue

            soup = BeautifulSoup(r.text, "lxml")

            page = extract_page(url)
            page_url = normalize_url(page["url"]) if page else ""

            if page and page_url not in result_urls:
                results.append(page)
                result_urls.add(page_url)
                added_pages += 1
                print(f"Added: {url} ({len(results)})")

            links = get_links(url, soup)
            random.shuffle(links)

            for link in links[:10]:
                normalized_link = normalize_url(link)

                if normalized_link in visited:
                    continue

                queue.append(link)

            time.sleep(0.5)

        except:
            continue

    with open(OUTPUT_JSON, "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2, ensure_ascii=False)

    print(f"\nDone. Saved {len(results)} sites to {OUTPUT_JSON.name}")

if __name__ == "__main__":
    crawl()