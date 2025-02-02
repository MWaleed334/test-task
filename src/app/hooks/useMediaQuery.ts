import { useEffect, useState } from "react";

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const matchMedia = window.matchMedia(query);

    const updateMatches = () => setMatches(matchMedia.matches);
    updateMatches();

    matchMedia.addEventListener("change", updateMatches);

    return () => matchMedia.removeEventListener("change", updateMatches);
  }, [query]);

  return matches;
}
