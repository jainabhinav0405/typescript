type Reverse<T extends any[]> = T extends [infer Head,...infer Tail]
  ? [...Reverse<Tail>, Head]
  : [];


type OriginalTupleNumbers = [1, 2, 3, {a:1}];
type ReversedTupleNumbers = Reverse<OriginalTupleNumbers>;
