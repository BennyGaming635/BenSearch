import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import time
import json
import random

SEEDS = [
    "https://www.hackclub.com/",
    "https://www.python.org/",
    "https://www.wikipedia.org/",
    "https://www.github.com/",
    "https://www.reddit.com/"
]

MAX_PAGES = 100

visited = set()
results = []

def clean_text(text):
    return ' '.join(text.split())

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
    for a in soup.find.all("a", href=True):
        full = urljoin(url, a["href"])
        parsed = urlparse(full)

        if parsed.scheme in ["http", "https"]:
            links.append(full)

def crawl():
    queue = list(SEEDS)

    while queue and len(results) < MAX_PAGES:
        url = queue.pop(0)

        if url in visited:
            continue

        visited.add(url)

        try:
            r = requests.get(url, timeout=5, headers={
                "User-Agent": "BenSearchBot/1.0"
            })

            if "text/html" not in r.headers.get("Content-Type", ""):
                continue

            soup = BeautifulSoup(r.text, "lxml")

            page = extract_page(url)
            if page:
                results.append(page)
                print(f"Added: {url} ({len(results)})")

            links = get_links(url, soup)
            random.shuffle(links)

            queue.extend(links[:10])  # limit expansion

            time.sleep(0.5)

        except:
            continue

    with open("sites.json", "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2, ensure_ascii=False)

    print(f"\nDone. Saved {len(results)} sites to sites.json")

if __name__ == "__main__":
    crawl()