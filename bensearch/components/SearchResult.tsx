interface SearchResultProps {
    title: string;
    url: string;
    description: string;
}

export default function SearchResult({
    title,
    url,
    description
}: SearchResultProps) {
    const domain = new URL(url).hostname;

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg p-4 hover:bg-muted transition"
        >
            <div className="flex items-center gap-3 mb-2">
                <img
                    src={`https://www.google.com/s2/favicons?domain=${domain}&sz=64`}
                    alt=""
                    width={24}
                    height={24}
                    className="rounded"
                />

                <div>
                    <p className="text-sm text-muted-foreground">
                        {domain}
                    </p>

                    <h2 className="text-lg text-blue-600 hover:underline">
                        {title}
                    </h2>
                </div>
            </div>

            <p className="text-sm text-muted-foreground">
                {description}
            </p>
        </a>
    );
}