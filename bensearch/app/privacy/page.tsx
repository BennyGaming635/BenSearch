export default function PrivacyPage() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

      <p className="text-gray-300 mb-6">
        BenSearch is made for privacy.
      </p>

      <section className="space-y-4 text-gray-300 leading-relaxed">
        <p>
          BenSearch does not track personal user activity, sell data, or serve targeted ads.
        </p>

        <p>
          Search queries are processed locally within the application and are not stored on external servers.
        </p>

        <p>
          A local search history may be stored in your browser using localStorage for convenience. This data stays on your device and can be cleared at any time.
        </p>

        <p>
          The search index is generated from publicly available websites and may be updated periodically.
        </p>

        <p>
          BenSearch does not require user accounts or personal information to use the service.
        </p>

        <p>
          If you have questions about privacy, you can contact the project maintainer via the repository.
        </p>
      </section>
    </main>
  );
}