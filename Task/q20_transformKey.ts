// Recursive generic type to transform the keys of the object
type TransformObject<T, Prefix extends string> = {
    [K in keyof T as `${Prefix}${K & string}`]: T[K] extends Object
      ? TransformObject<T[K], Prefix>
      : T[K];
  };
  
  type MyObject = {
    a: {
      b: number;
      c: {
        d: string;
      };
    };
    e: boolean;
  };
  
  type Transformed = TransformObject<MyObject, 'prefixed_'>;
  
const transform:Transformed ={
    prefixed_a: {
      prefixed_b: 45,
      prefixed_c: {
        prefixed_d: ","
      },
    },
    prefixed_e: true,
  }

  
  