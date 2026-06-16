# BenSearch
BenSearch was originally an idea to practially dump Google Search because I hate their f-ing AI Shit-slop tbh. Anyways BenSearch works off of a community-maintained [json list](/bensearch/data/sites.json) but we also provide a simple crawler, which runs via python (you can also customise the seed sites), which can be used to rapidly provide updates and such to the system, otherwise you can manually edit and modify the json too.

With a recent update, BenSearch is now able to both show you relevant topics to your search while you type (typing predictions) and also uses a smart algorithm to show the most relevant and impactful content to you first using a new evidence-based algorithm which uses numbers to assign higher values depending on what matches (you can read more [here](/bensearch/app/search/page.tsx)).

While BenSearch does have a crawler (BenSearchBot), we don't use massive scrapers (similar to LLMs and those companies) to protect the world, your privacy and to just have less BS in our lives :D

When you use BenSearch, you are also able to use many parameters in your search to find and curate your search by using different arguments.

At the moment, you can use the following parameters/arguments to choose what you see.
- `site: example.com`: This will only show sites which have 'example.com' as their main domain.
- `!w answer to life`: This will redirect you to Wikipedia and will also automatically search for your desired term.
- `!y football highlights`: This will redirect you to YouTube and will also automatically search for what you want to watch.
- `!g hack club`: This will redirect you to GitHub and will also automatically search for whatever code stuff you're looking for..
- `!a MacOS 10`: This will redirect you to Archive.org and will automatically search for whatever archived stuff you need.
- `!r funny fails`: This will redirect you to reddit and will automatically search for whatever weird stuff you wanna see.

This service is provided via the bgBS team. You can access other bgBS services via the app drawer.

## Do you want to contribute to our database?
If someone like you says yes, then before adding **anything** to our database, please read the README in [/data here](/bensearch/data/README.md). Thank you!