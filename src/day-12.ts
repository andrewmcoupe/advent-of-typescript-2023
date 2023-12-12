type FindSanta<T extends unknown[], $count extends unknown[] = []> = T extends [
	infer Head,
	...infer Tail,
]
	? Head extends "🎅🏼"
		? $count["length"]
		: FindSanta<Tail, [...$count, 0]>
	: never;
