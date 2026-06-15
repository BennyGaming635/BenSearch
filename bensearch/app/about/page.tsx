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
        </main>
    )
}