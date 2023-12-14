/*
 * @link https://typehero.dev/challenge/day-14
 * */

/*
 * 1. If the list is a string with a forward slash, split it into Head and Tail.
 * 2. Return a union of Head and the result of recursively calling DecipherNaughtyList with the Tail.
 * 3. Otherwise, return the list in the case of it being a string without a forward slash.
 * */

type DecipherNaughtyList<List> = List extends `${infer Head}/${infer Tail}`
  ? Head | DecipherNaughtyList<Tail>
  : List;
