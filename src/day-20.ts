type Letters = {
    A: ["█▀█ ", "█▀█ ", "▀ ▀ "];
    B: ["█▀▄ ", "█▀▄ ", "▀▀  "];
    C: ["█▀▀ ", "█ ░░", "▀▀▀ "];
    E: ["█▀▀ ", "█▀▀ ", "▀▀▀ "];
    H: ["█ █ ", "█▀█ ", "▀ ▀ "];
    I: ["█ ", "█ ", "▀ "];
    M: ["█▄░▄█ ", "█ ▀ █ ", "▀ ░░▀ "];
    N: ["█▄░█ ", "█ ▀█ ", "▀ ░▀ "];
    P: ["█▀█ ", "█▀▀ ", "▀ ░░"];
    R: ["█▀█ ", "██▀ ", "▀ ▀ "];
    S: ["█▀▀ ", "▀▀█ ", "▀▀▀ "];
    T: ["▀█▀ ", "░█ ░", "░▀ ░"];
    Y: ["█ █ ", "▀█▀ ", "░▀ ░"];
    W: ["█ ░░█ ", "█▄▀▄█ ", "▀ ░ ▀ "];
    " ": ["░", "░", "░"];
    ":": ["#", "░", "#"];
    "*": ["░", "#", "░"];
};

type CreateLineRow<
    Line,
    Row extends number,
    A extends string = "",
> = Line extends `${infer Letter extends keyof Letters}${infer Rest}`
    ? CreateLineRow<Rest, Row, `${A}${Letters[Letter][Row]}`>
    : A;

type ToInt<T> = T extends `${infer U extends number}` ? U : never;

type TransformLine<Line, A = Letters["A"]> = {
    [Key in keyof A]: CreateLineRow<Line, ToInt<Key>>;
};

type ToAsciiArt<
    Str extends string,
    Result extends unknown[] = [],
    Uppercased extends string = Uppercase<Str>,
> = Uppercased extends `${infer Line}\n${infer Rest}`
    ? ToAsciiArt<Rest, [...Result, ...TransformLine<Line>]>
    : [...Result, ...TransformLine<Uppercased>];

type Test1 = ToAsciiArt<"  Happy new  \n  * : * : * Year * : * : *  ">;
