# BenSearch Crawler
This is an example crawler which fully supports the JSON protocol we use in BenSearch.
If you want to use this web crawler, you first need to download the script, then install all requirements [in the requirements.txt](/python/requirements.txt).

This crawler starts crawling from some base sites, which are fully customisable and we recommend doing so to reduce the impact on the JSON with duplicates.
If you want to modify the links, change the web domains in `SEEDS = []`.

Please note that BenSearchBot is slow due to currently being limited to single-threaded to avoid heavy loads on computers, but may be changed in the future. In your terminal once a site is successfully crawled, a note will appear in the terminal.

> [!NOTE]
> At the moment, crawlling will continue until a total of 100 pages has been found, this can be customised though.

At the end of crawlling a sites.json file will be returned to you looking like this
```json
[
    {
        "title": "website name",
        "description": "website description",
        "url": "https://thisisawebsite.link",
    },
    {
        "title": "another website",
        "description": "description for another website",
        "url": "https://thisisanotherweb.site",
    }
]
```

And so on and so on. However once this is made, add it to the main [sites.json](/bensearch/data/sites.json) and remove the leading `[`. Once done, simply commit to the repo!

