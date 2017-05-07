# Mobile CSS debug

![Matterhorn](http://wowslider.com/sliders/demo-34/data1/images/greatwilder1400498.jpg)

## Highlighting examples

```julia-repl
julia> using Stuff
Pkg.add("...")
```

```julia-repl
julia> function foo(x)
           x + 1
       end
foo (generic function with 1 method)
```

```julia-repl
julia> [x^2 for x in linspace(1:40)]
[2,3,45]
```

```julia-repl
# Assign the value 10 to the variable x
julia> x = 10
10

# Doing math with x's value
julia> x + 1
11

# Reassign x's value
julia> x = 1 + 1
2

# You can assign values of other types, like strings of text
julia> x = "Hello World!"
"Hello World!"
```

```julia-repl
julia> (typemin(Int32), typemax(Int32))
(-2147483648, 2147483647)

julia> println("$(lpad(T,7)): [$(typemin(T)),$(typemax(T))]")
julia> for T in [Int8,Int16,Int32,Int64,Int128,UInt8,UInt16,UInt32,UInt64,UInt128]
           println("$(lpad(T,7)): [$(typemin(T)),$(typemax(T))]")
       end
   Int8: [-128,127]
  Int16: [-32768,32767]
  Int32: [-2147483648,2147483647]
  Int64: [-9223372036854775808,9223372036854775807]
 Int128: [-170141183460469231731687303715884105728,170141183460469231731687303715884105727]
  UInt8: [0,255]
 UInt16: [0,65535]
 UInt32: [0,4294967295]
 UInt64: [0,18446744073709551615]
UInt128: [0,340282366920938463463374607431768211455]
```

## Doctests

```jldoctest
julia> function foo(x) x + 1 end
foo (generic function with 1 method)
```

```jldoctest
julia> function foo(x)
           x + 1
       end
foo (generic function with 1 method)
```
