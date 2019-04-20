const keys = {
  foo: 'fooValue',
  bar: 'barValue'
} as const;
type Keys = typeof keys;
type Values = Keys[keyof Keys];

const foo: Values = 'fooValue';
