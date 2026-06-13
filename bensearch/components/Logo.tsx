import Link from "next/link";
export default function Logo() {
    return (
        <h1 className="text-5xl font-bold text-center">
            <Link href="/">BenSearch</Link>
        </h1>
    );
}