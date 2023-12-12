type FindSanta<T extends unknown[], Count extends unknown[] = []> = T extends [
  // Setup Count as a store to track how many times we have not seen Santa
  infer Head, // Using infer, get the first item and store it as a temporary "variable" - Head
  ...infer Tail, // Using infer again, get the rest of the items, storing them in a temporary "variable" - Tail
]
  ? Head extends "🎅🏼" // If the first item is Santa, return the length of the Count type param on line one - 0 if it's the first time, 1 if it's the second time, etc.
    ? Count["length"] // Return the length of the Count
    : FindSanta<Tail, [...Count, 0]> // If the first item is not Santa, recursively call FindSanta with the Tail and Count, adding a 0 to the Count to increment its length property
  : never; // If Santa is not found, return never
