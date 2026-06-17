import Logo from "@/components/Logo";

export default function Privacy() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-12 text-center">
            <div className="mb-8">
                <Logo />
            </div>

            <hr className="border-border mb-8" />

            <h1 className="text-3xl font-bold mb-4">
                Privacy Policy
            </h1>

            <p className="text-muted-foreground mb-6">
                Your privacy is a core part of BenSearch. We aim to provide a
                search experience that does not rely on tracking, profiling,
                or advertising.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-3">
                Data Collection
            </h2>
            <p className="text-muted-foreground">
                BenSearch does not collect personal information or track
                individual users. We do not create user accounts or store
                identifiable profiles.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-3">
                Search Queries
            </h2>
            <p className="text-muted-foreground">
                Search queries are processed within the application and are
                not stored on external servers. Any processing is used only
                to return relevant results.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-3">
                Local Storage
            </h2>
            <p className="text-muted-foreground">
                BenSearch may store recent searches locally on your device
                using <code>localStorage</code>. This data never leaves your
                device and can be cleared at any time through your browser
                settings or the search history panel.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-3">
                Third-Party Sites
            </h2>
            <p className="text-muted-foreground">
                Search results may link to external websites. BenSearch is
                not responsible for the privacy practices of those sites.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-3">
                Our Commitment
            </h2>
            <p className="text-muted-foreground">
                BenSearch is designed to avoid ads, tracking scripts, and
                data selling practices commonly found in traditional search
                engines.
                <br />
                <br />
                <b>
                    We believe search should be private, simple, and user-first.
                </b>
            </p>
        </main>
    );
}