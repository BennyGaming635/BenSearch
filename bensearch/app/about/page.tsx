import Logo from "@/components/Logo";
import Link from "next/link";

export default function About() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-12">
            <div className="mb-8">
                <Logo />
            </div>
            <h1 className="text-4xl font-bold mb-4">
                About BenSearch
            </h1>
        </main>
    )
}