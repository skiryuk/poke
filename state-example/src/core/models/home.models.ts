
export class PokemonResult {
  count: number | undefined;
  next: string | undefined;
  previous: PokemonResult | undefined;
  results: Array<Pokemon> | undefined | null;
}

export class Pokemon {
  name: string | undefined;
  url: string | undefined;
}
