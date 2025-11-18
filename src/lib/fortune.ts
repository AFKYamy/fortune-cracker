import { inspirationalQuotes } from "@/data/inspirational";
import { fortunesQuotes } from "@/data/fortunes";
import type { Fortune, FortuneQuote } from "@/types/Fortune";

function pickQuotesForMode(mode: string) {
  switch (mode) {
    case "fortunes":
      return fortunesQuotes;
    case "inspirational":
      return inspirationalQuotes;
    default:
      return fortunesQuotes;
  }
}

export function getRandomQuote(mode: string): FortuneQuote {
  const list = pickQuotesForMode(mode);
  const index = Math.floor(Math.random() * list.length);
  return list[index];
}

export function sortFortunes(updatedFortunes: Fortune[]) {
  return [...updatedFortunes].sort((a, b) => b.count - a.count);
}

export function findMatchingFortuneIndex(
  fortunes: Fortune[],
  quote: string
) {
  return fortunes.findIndex((fortune) => fortune.quote === quote);
}

export function createNewFortune(quote: FortuneQuote) {
  return {
    id: crypto.randomUUID(),
    count: 1,
    quote: quote.quote,
    author: quote.author
  };
}
