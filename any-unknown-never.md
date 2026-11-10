# Understanding `any`, `unknown`, and `never` in TypeScript

## Introduction

TypeScript's type system includes special types that affect how values
can be assigned and used. `any`, `unknown`, and `never` serve very
different purposes. Knowing their roles helps preserve type safety while
handling uncertain data and impossible program states.

## Detailed Explanation

The `any` type effectively disables type checking for a value. You can
assign it to almost any type and call methods without first proving that
they exist:

``` typescript
let value: any = "hello";
value.toFixed(); // Compiles, but fails at runtime
```

This flexibility can hide bugs, so `any` should generally be avoided.

The `unknown` type also accepts values of any kind, but it does not
allow arbitrary operations until the value has been narrowed. For
example:

``` typescript
let input: unknown = "hello";

if (typeof input === "string") {
  console.log(input.toUpperCase());
}
```

The check establishes that `input` is a string before the operation.
This makes `unknown` the safer choice for values from APIs, user input,
or other untrusted sources.

The `never` type represents values that cannot occur. It is commonly
used for functions that always throw or for exhaustive checks:

``` typescript
function fail(message: string): never {
  throw new Error(message);
}
```

In the type hierarchy, `unknown` is the top type because all values can
be assigned to it, while `never` is the bottom type because it is
assignable to every type. `any` is an escape hatch that bypasses these
safety guarantees.

## Conclusion

Prefer `unknown` over `any` when a value's type is not yet known. Use
`never` to model impossible outcomes and enforce exhaustive logic.
Reserve `any` for exceptional cases where opting out of checking is
deliberate.
