import sites from "@/data/sites.json";
import Logo from "@/components/Logo";
import SearchBar from "@/components/SearchBar";
import SearchResult from "@/components/SearchResult";

type SearchParams = Promise<{
    q: string;
}>;


