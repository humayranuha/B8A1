# Type Aliases vs. Interfaces in TypeScript

## Introduction

TypeScript offers both `type` aliases and `interface` declarations for
describing the shape of data. They often look interchangeable,
especially when defining object properties, but they have different
capabilities and extension rules. Understanding those differences helps
you choose a clear, maintainable design.

## Detailed Comparison

An `interface` is primarily designed to describe object shapes.
Interfaces can extend other interfaces, allowing related contracts to
build on one another:

``` typescript
interface Person {
  name: string;
}

interface Employee extends Person {
  employeeId: number;
}
```

Interfaces also support declaration merging. If the same interface is
declared more than once in the same scope, TypeScript combines its
members. This is useful when extending types from libraries or adding
properties to existing declarations.

A `type` alias can describe more than an object. It can represent
unions, intersections, tuples, primitives, and function types:

``` typescript
type Status = "pending" | "complete";
type Point = [number, number];
type Result = string | number;
```

Type aliases can also combine object shapes using intersections, such as
`type Admin = Person & { permissions: string[] }`. Unlike interfaces,
however, aliases cannot be reopened through declaration merging.

## Conclusion

Choose `interface` when defining extensible object contracts,
particularly public APIs and class-like structures. Choose `type` when
you need unions, tuples, primitives, or more complex type composition.
For ordinary object shapes, either works; consistency within a project
matters most.
