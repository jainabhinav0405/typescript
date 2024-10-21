type Reverse<T extends any[]> = T extends [infer Head, ...infer Tail]
  ? [...Reverse<Tail>, Head]
  : [];

type OriginalTupleNumbers = [1, 2, 3, 4];
type ReversedTupleNumbers = Reverse<OriginalTupleNumbers>;
