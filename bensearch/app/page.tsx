import Logo from '@/components/Logo';
import SearchBar from '@/components/SearchBar';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      <Logo />
      <p className="text-gray-500 mt-2 mb-8">
        Search without nonsense.
      </p>
      <div className="w-full max-w-2xl">
        <SearchBar />
      </div>
      <p className="mt-8 text-sm text-gray-400">
        Created by the team behind <a href="https://nobs.au" className="underline">NoBS</a>.
      </p>
    </main>
  )
}