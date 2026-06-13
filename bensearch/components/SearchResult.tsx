interface ResultProps {
    title: string;
    url: string;
    description: string;
}

export default function SearchResult({
    title,
    url,
    description
}: ResultProps) {
    return (
        <a
            href={url}
            target="_blank"
            className="block p-4 rounded-lg border"
        >
            <h2 className="text-xl font-semibold">
                {title}
            </h2>
            <p>{description}</p>
            <span className="text-black/50">
                {url}
            </span>
        </a>
    );
}