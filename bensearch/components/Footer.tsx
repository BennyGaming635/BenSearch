import Link from "next/link";
import { GitCommitVertical , LineStyle, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 w-full border-t bg-background">
            <div className="flex items-center justify-between px-6 py-3">
                <div className="flex items-center gap-4">
                    <Link
                        href="https://github.com/bennygaming635/BenSearch"
                        target="_blank"
                        aria-label="GitHub Repository"
                    >
                        <GitCommitVertical className="w-5 h-5 hover-opacity-70 transition" />
                    </Link>
                    <Link
                        href="mailto:rjhj8647@gmail.com"
                        aria-label="Contact via Email"
                    >
                        <Mail className="w-5 h-5 hover-opacity-70 transition" />
                    </Link>
                </div>
                <p className="text-sm text-muted-foreground">
                    Created by the team behind <a href="https://bgbs.au" className="underline">NoBS</a>.
                </p>
            </div>
        </footer>
    )
}