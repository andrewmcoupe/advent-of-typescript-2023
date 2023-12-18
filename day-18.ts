type Count<List, Toy> = Filter<List, Toy>["length"];

type Filter<List, Target> = List extends [infer First, ...infer Rest]
  ? First extends Target
    ? [First, ...Filter<Rest, Target>]
    : Filter<Rest, Target>
  : [];
