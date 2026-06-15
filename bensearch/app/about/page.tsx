import Logo from "@/components/Logo";
import Link from "next/link";

export default function About() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-12 text-center">
            <div className="mb-8">
                <Logo />
            </div>

            <hr className="border-border mb-8" />

            <h1 className="text-3xl font-bold mb-4">
                About BenSearch
            </h1>
            <p className="text-muted-foreground mb-6">
                BenSearch is a community-driven search engine built to help
                you discover useful websites and resources which are actually
                trusted, without the clutter, tracking and endless sponsored
                results found on many <i>traditional</i> search engines.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-3">
                How does it work?
            </h2>
            <p className="text-muted-foreground">
                BenSearch uses a curated index of websites. With results
                collected and stored in our master-index, then searched
                directly when <b>you</b> perform a search. This means
                that BenSearch is able to provide a fast and seemless
                search experience without the need for tracking, ads,
                or sponsored results.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-3">
                Search Features
            </h2>
            <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                <li>
                    <code>filter:programming python</code> - Search within a category.
                </li>
                <li>
                    <code>!w cats</code> - Search within Wikipedia.
                </li>
                <li>
                    <code>!y minecraft speedruns</code> - Search within YouTube.
                </li>
                <li>
                    <code>!g bensearch</code> - Search within GitHub.
                </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-3">
                Our goal
            </h2>
        </main>
    )
}