


<a id='Function-Index-1'></a>

# Function Index



<a id='Functions-1'></a>

# Functions


[`ccall`](functions.md#ccall), [`func(x)`](functions.md#Mod.func-Tuple{Any}), [`T`](functions.md#Mod.T), [`for`](functions.md#for), and [`while`](functions.md#while).

<a id='Mod.func-Tuple{Any}' href='#Mod.func-Tuple{Any}'>#</a>
**`Mod.func`** &mdash; *Method*.



```
func(x)
```

[`T`](functions.md#Mod.T)


<a target='_blank' href='https://github.com/JuliaDocs/Documenter.jl/tree/32c203fc02a6ea883abebbb1b672c2a7eeebb60d/test/examples/make.jl#L14-L18' class='documenter-source'>source</a><br>

<a id='Mod.T' href='#Mod.T'>#</a>
**`Mod.T`** &mdash; *Type*.



```
T
```

[`func(x)`](functions.md#Mod.func-Tuple{Any})


<a target='_blank' href='https://github.com/JuliaDocs/Documenter.jl/tree/32c203fc02a6ea883abebbb1b672c2a7eeebb60d/test/examples/make.jl#L21-L25' class='documenter-source'>source</a><br>

<a id='ccall' href='#ccall'>#</a>
**`ccall`** &mdash; *Keyword*.



```
ccall((symbol, library) or function_pointer, ReturnType, (ArgumentType1, ...), ArgumentValue1, ...)
```

Call function in C-exported shared library, specified by `(function name, library)` tuple, where each component is a string or symbol.

Note that the argument type tuple must be a literal tuple, and not a tuple-valued variable or expression. Alternatively, `ccall` may also be used to call a function pointer, such as one returned by `dlsym`.

Each `ArgumentValue` to the `ccall` will be converted to the corresponding `ArgumentType`, by automatic insertion of calls to `unsafe_convert(ArgumentType, cconvert(ArgumentType, ArgumentValue))`. (See also the documentation for each of these functions for further details.) In most cases, this simply results in a call to `convert(ArgumentType, ArgumentValue)`.


<a target='_blank' href='https://github.com/JuliaLang/julia/tree/3c9d75391c72d7c32eea75ff187ce77b2d5effc8/base/docs/basedocs.jl#L550-L565' class='documenter-source'>source</a><br>

<a id='for' href='#for'>#</a>
**`for`** &mdash; *Keyword*.



`for` loops repeatedly evaluate the body of the loop by iterating over a sequence of values. For example:

```
for i in [1,4,0]
    println(i)
end
```


<a target='_blank' href='https://github.com/JuliaLang/julia/tree/3c9d75391c72d7c32eea75ff187ce77b2d5effc8/base/docs/basedocs.jl#L381-L388' class='documenter-source'>source</a><br>

<a id='while' href='#while'>#</a>
**`while`** &mdash; *Keyword*.



`while` loops repeatedly evaluate a conditional expression, and continues evaluating the body of the while loop so long as the expression remains `true`. If the condition expression is false when the while loop is first reached, the body is never evaluated. For example:

```
while i <= 5
    println(i)
    i += 1
end
```


<a target='_blank' href='https://github.com/JuliaLang/julia/tree/3c9d75391c72d7c32eea75ff187ce77b2d5effc8/base/docs/basedocs.jl#L391-L401' class='documenter-source'>source</a><br>

<a id='Base.@time' href='#Base.@time'>#</a>
**`Base.@time`** &mdash; *Macro*.



```
@time
```

A macro to execute an expression, printing the time it took to execute, the number of allocations, and the total number of bytes its execution caused to be allocated, before returning the value of the expression.

See also [`@timev`](:func:`@timev`), [`@timed`](:func:`@timed`), [`@elapsed`](:func:`@elapsed`), and [`@allocated`](:func:`@allocated`).


<a target='_blank' href='https://github.com/JuliaLang/julia/tree/3c9d75391c72d7c32eea75ff187ce77b2d5effc8/base/util.jl#L170-L179' class='documenter-source'>source</a><br>

<a id='Base.@assert' href='#Base.@assert'>#</a>
**`Base.@assert`** &mdash; *Macro*.



```
@assert cond [text]
```

Throw an `AssertionError` if `cond` is `false`. Preferred syntax for writing assertions. Message `text` is optionally displayed upon assertion failure.


<a target='_blank' href='https://github.com/JuliaLang/julia/tree/3c9d75391c72d7c32eea75ff187ce77b2d5effc8/base/docs/helpdb/Base.jl#L5710-L5715' class='documenter-source'>source</a><br>


<a id='Foo-1'></a>

# Foo


```julia
@show pwd()
a = 1
```

```
pwd() = "/home/morten/Julia/pkg/v0.5/Documenter/test/examples/builds/markdown/lib"
1
```


...


```julia
isdefined(:a)
```

```
false
```


```julia
f(x) = 2x
g(x) = 3x
```


```julia
x, y = 1, 2
println(x, y)
```

```
12
```


```julia
type T end
t = T()
```

```
ex-3.T()
```


<a id='Foo-2'></a>

## Foo


```julia
isdefined(:T)
@show typeof(T)
```

```
isdefined(:t) = true
typeof(T) = DataType
ex-3.T
```


```julia
x + y
```

```
3
```


```julia
f(2), g(2)
```

```
(4,6)
```


<a id='Foo-3'></a>

### Foo


```julia
x - y
```

```
-1
```


```julia
f(1), g(1)
```

```
(2,3)
```


```julia
@which T()
```

```
ex-3.T() at none:1
```


<a id='Foo-4'></a>

#### Foo


```julia
a = 1
b = ans
@assert a === b
```


```julia

julia> nothing

julia> rand()
0.23603334566204692

julia> a = 1
1

1
julia> println(a)

julia> b = 2
2

julia> a + b
3

julia> type T
           x :: Int
           y :: Vector
       end

julia> x = T(1, [1])
##repl-#273.T(1,[1])

julia> x.y
1-element Array{Int64,1}:
 1

julia> x.x
1
```


```julia
julia> d = 1
1
```


```julia
1
julia> println(d)
```


Test setup function




```julia
@assert w === 5
```


```julia
julia> @assert w === 5
ERROR: UndefVarError: w not defined
```


<a id='Autodocs-1'></a>

# Autodocs




<a id='AutoDocs-Module-1'></a>

## AutoDocs Module

<a id='AutoDocs' href='#AutoDocs'>#</a>
**`AutoDocs`** &mdash; *Module*.



`AutoDocs` module.


<a target='_blank' href='https://github.com/JuliaDocs/Documenter.jl/tree/32c203fc02a6ea883abebbb1b672c2a7eeebb60d/test/examples/make.jl#L29' class='documenter-source'>source</a><br>

<a id='AutoDocs.K' href='#AutoDocs.K'>#</a>
**`AutoDocs.K`** &mdash; *Constant*.



Constant `K`.


<a target='_blank' href='https://github.com/JuliaDocs/Documenter.jl/tree/32c203fc02a6ea883abebbb1b672c2a7eeebb60d/test/examples/make.jl#L42' class='documenter-source'>source</a><br>

<a id='AutoDocs.T' href='#AutoDocs.T'>#</a>
**`AutoDocs.T`** &mdash; *Type*.



Type `T`.


<a target='_blank' href='https://github.com/JuliaDocs/Documenter.jl/tree/32c203fc02a6ea883abebbb1b672c2a7eeebb60d/test/examples/make.jl#L45' class='documenter-source'>source</a><br>

<a id='AutoDocs.f-Tuple{Any}' href='#AutoDocs.f-Tuple{Any}'>#</a>
**`AutoDocs.f`** &mdash; *Method*.



Function `f`.


<a target='_blank' href='https://github.com/JuliaDocs/Documenter.jl/tree/32c203fc02a6ea883abebbb1b672c2a7eeebb60d/test/examples/make.jl#L39' class='documenter-source'>source</a><br>

<a id='AutoDocs.@m-Tuple{}' href='#AutoDocs.@m-Tuple{}'>#</a>
**`AutoDocs.@m`** &mdash; *Macro*.



Macro `@m`.


<a target='_blank' href='https://github.com/JuliaDocs/Documenter.jl/tree/32c203fc02a6ea883abebbb1b672c2a7eeebb60d/test/examples/make.jl#L48' class='documenter-source'>source</a><br>


<a id='Functions,-Modules,-and-Macros-1'></a>

## Functions, Modules, and Macros

<a id='AutoDocs.A' href='#AutoDocs.A'>#</a>
**`AutoDocs.A`** &mdash; *Module*.



Module `A`.


<a target='_blank' href='https://github.com/JuliaDocs/Documenter.jl/tree/32c203fc02a6ea883abebbb1b672c2a7eeebb60d/test/examples/make.jl#L51' class='documenter-source'>source</a><br>

<a id='AutoDocs.A.f-Tuple{Any}' href='#AutoDocs.A.f-Tuple{Any}'>#</a>
**`AutoDocs.A.f`** &mdash; *Method*.



Function `A.f`.


<a target='_blank' href='https://github.com/JuliaDocs/Documenter.jl/tree/32c203fc02a6ea883abebbb1b672c2a7eeebb60d/test/examples/make.jl#L53' class='documenter-source'>source</a><br>

<a id='AutoDocs.A.@m-Tuple{}' href='#AutoDocs.A.@m-Tuple{}'>#</a>
**`AutoDocs.A.@m`** &mdash; *Macro*.



Macro `B.@m`.


<a target='_blank' href='https://github.com/JuliaDocs/Documenter.jl/tree/32c203fc02a6ea883abebbb1b672c2a7eeebb60d/test/examples/make.jl#L62' class='documenter-source'>source</a><br>

<a id='AutoDocs.B' href='#AutoDocs.B'>#</a>
**`AutoDocs.B`** &mdash; *Module*.



Module `B`.


<a target='_blank' href='https://github.com/JuliaDocs/Documenter.jl/tree/32c203fc02a6ea883abebbb1b672c2a7eeebb60d/test/examples/make.jl#L66' class='documenter-source'>source</a><br>

<a id='AutoDocs.B.f-Tuple{Any}' href='#AutoDocs.B.f-Tuple{Any}'>#</a>
**`AutoDocs.B.f`** &mdash; *Method*.



Function `B.f`.


<a target='_blank' href='https://github.com/JuliaDocs/Documenter.jl/tree/32c203fc02a6ea883abebbb1b672c2a7eeebb60d/test/examples/make.jl#L68' class='documenter-source'>source</a><br>

<a id='AutoDocs.B.@m-Tuple{}' href='#AutoDocs.B.@m-Tuple{}'>#</a>
**`AutoDocs.B.@m`** &mdash; *Macro*.



Macro `B.@m`.


<a target='_blank' href='https://github.com/JuliaDocs/Documenter.jl/tree/32c203fc02a6ea883abebbb1b672c2a7eeebb60d/test/examples/make.jl#L77' class='documenter-source'>source</a><br>


<a id='Constants-and-Types-1'></a>

## Constants and Types

<a id='AutoDocs.A.K' href='#AutoDocs.A.K'>#</a>
**`AutoDocs.A.K`** &mdash; *Constant*.



Constant `A.K`.


<a target='_blank' href='https://github.com/JuliaDocs/Documenter.jl/tree/32c203fc02a6ea883abebbb1b672c2a7eeebb60d/test/examples/make.jl#L56' class='documenter-source'>source</a><br>

<a id='AutoDocs.A.T' href='#AutoDocs.A.T'>#</a>
**`AutoDocs.A.T`** &mdash; *Type*.



Type `B.T`.


<a target='_blank' href='https://github.com/JuliaDocs/Documenter.jl/tree/32c203fc02a6ea883abebbb1b672c2a7eeebb60d/test/examples/make.jl#L59' class='documenter-source'>source</a><br>

<a id='AutoDocs.B.K' href='#AutoDocs.B.K'>#</a>
**`AutoDocs.B.K`** &mdash; *Constant*.



Constant `B.K`.


<a target='_blank' href='https://github.com/JuliaDocs/Documenter.jl/tree/32c203fc02a6ea883abebbb1b672c2a7eeebb60d/test/examples/make.jl#L71' class='documenter-source'>source</a><br>

<a id='AutoDocs.B.T' href='#AutoDocs.B.T'>#</a>
**`AutoDocs.B.T`** &mdash; *Type*.



Type `B.T`.


<a target='_blank' href='https://github.com/JuliaDocs/Documenter.jl/tree/32c203fc02a6ea883abebbb1b672c2a7eeebb60d/test/examples/make.jl#L74' class='documenter-source'>source</a><br>


<a id='Autodocs-by-Page-1'></a>

## Autodocs by Page

<a id='AutoDocs.Pages.f-Tuple{Any}' href='#AutoDocs.Pages.f-Tuple{Any}'>#</a>
**`AutoDocs.Pages.f`** &mdash; *Method*.



`f` from page `a.jl`.

Links:

  * [`ccall`](functions.md#ccall)
  * [`while`](functions.md#while)
  * [`@time(x)`](functions.md#Base.@time)
  * [`T(x)`](functions.md#AutoDocs.Pages.T-Tuple{Any})
  * [`T(x, y)`](functions.md#AutoDocs.Pages.T-Tuple{Any,Any})
  * [`f(::Integer)`](functions.md#AutoDocs.Pages.f-Tuple{Any})
  * [`f(::Any)`](functions.md#AutoDocs.Pages.f-Tuple{Any})
  * [`f(::Any, ::Any)`](functions.md#AutoDocs.Pages.f-Tuple{Any,Any})
  * [`f(x, y, z)`](functions.md#AutoDocs.Pages.f-Tuple{Any,Any,Any})

[^footnote]: Footnote contents. [^footnote]


<a target='_blank' href='https://github.com/JuliaDocs/Documenter.jl/tree/32c203fc02a6ea883abebbb1b672c2a7eeebb60d/test/examples/pages/a.jl#L2-L21' class='documenter-source'>source</a><br>

<a id='AutoDocs.Pages.f-Tuple{Any,Any}' href='#AutoDocs.Pages.f-Tuple{Any,Any}'>#</a>
**`AutoDocs.Pages.f`** &mdash; *Method*.



`f` from page `b.jl`.

Links:

  * [`ccall`](functions.md#ccall)
  * [`while`](functions.md#while)
  * [`@time`](functions.md#Base.@time)
  * [`T`](functions.md#AutoDocs.Pages.T)
  * [`f`](functions.md#AutoDocs.Pages.f-Tuple{Any})
  * [`f(::Any)`](functions.md#AutoDocs.Pages.f-Tuple{Any})
  * [`f(::Any, ::Any)`](functions.md#AutoDocs.Pages.f-Tuple{Any,Any})
  * [`f(::Any, ::Any, ::Any)`](functions.md#AutoDocs.Pages.f-Tuple{Any,Any,Any})


<a target='_blank' href='https://github.com/JuliaDocs/Documenter.jl/tree/32c203fc02a6ea883abebbb1b672c2a7eeebb60d/test/examples/pages/b.jl#L2-L16' class='documenter-source'>source</a><br>

<a id='AutoDocs.Pages.f-Tuple{Any,Any,Any}' href='#AutoDocs.Pages.f-Tuple{Any,Any,Any}'>#</a>
**`AutoDocs.Pages.f`** &mdash; *Method*.



`f` from page `c.jl`.

Links:

  * [`ccall`](functions.md#ccall)
  * [`while`](functions.md#while)
  * [`@time`](functions.md#Base.@time)
  * [`T`](functions.md#AutoDocs.Pages.T)
  * [`f`](functions.md#AutoDocs.Pages.f-Tuple{Any})
  * [`f(::Any)`](functions.md#AutoDocs.Pages.f-Tuple{Any})
  * [`f(::Any, ::Any)`](functions.md#AutoDocs.Pages.f-Tuple{Any,Any})
  * [`f(::Any, ::Any, ::Any)`](functions.md#AutoDocs.Pages.f-Tuple{Any,Any,Any})


<a target='_blank' href='https://github.com/JuliaDocs/Documenter.jl/tree/32c203fc02a6ea883abebbb1b672c2a7eeebb60d/test/examples/pages/c.jl#L2-L16' class='documenter-source'>source</a><br>

<a id='AutoDocs.Pages.T' href='#AutoDocs.Pages.T'>#</a>
**`AutoDocs.Pages.T`** &mdash; *Type*.



`T` from page `d.jl`.

Links:

  * [`ccall`](functions.md#ccall)
  * [`while`](functions.md#while)
  * [`@time`](functions.md#Base.@time)
  * [`T`](functions.md#AutoDocs.Pages.T)
  * [`f`](functions.md#AutoDocs.Pages.f-Tuple{Any})
  * [`f(x)`](functions.md#AutoDocs.Pages.f-Tuple{Any})
  * [`f(x, y)`](functions.md#AutoDocs.Pages.f-Tuple{Any,Any})
  * [`f(::Any, ::Any, ::Any)`](functions.md#AutoDocs.Pages.f-Tuple{Any,Any,Any})


<a target='_blank' href='https://github.com/JuliaDocs/Documenter.jl/tree/32c203fc02a6ea883abebbb1b672c2a7eeebb60d/test/examples/pages/d.jl#L2-L16' class='documenter-source'>source</a><br>

<a id='AutoDocs.Pages.T-Tuple{Any,Any}' href='#AutoDocs.Pages.T-Tuple{Any,Any}'>#</a>
**`AutoDocs.Pages.T`** &mdash; *Method*.



`T` from page `d.jl`.

Links:

  * [`ccall`](functions.md#ccall)
  * [`while`](functions.md#while)
  * [`@time`](functions.md#Base.@time)
  * [`T()`](functions.md#AutoDocs.Pages.T)
  * [`T(x)`](functions.md#AutoDocs.Pages.T-Tuple{Any})
  * [`T(x, y)`](functions.md#AutoDocs.Pages.T-Tuple{Any,Any})
  * [`T(x, y, z)`](functions.md#AutoDocs.Pages.T)
  * [`f`](functions.md#AutoDocs.Pages.f-Tuple{Any})
  * [`f(x)`](functions.md#AutoDocs.Pages.f-Tuple{Any})
  * [`f(x, y)`](functions.md#AutoDocs.Pages.f-Tuple{Any,Any})
  * [`f(::Any, ::Any, ::Any)`](functions.md#AutoDocs.Pages.f-Tuple{Any,Any,Any})


<a target='_blank' href='https://github.com/JuliaDocs/Documenter.jl/tree/32c203fc02a6ea883abebbb1b672c2a7eeebb60d/test/examples/pages/d.jl#L39-L56' class='documenter-source'>source</a><br>

<a id='AutoDocs.Pages.T-Tuple{Any}' href='#AutoDocs.Pages.T-Tuple{Any}'>#</a>
**`AutoDocs.Pages.T`** &mdash; *Method*.



`T` from page `d.jl`.

Links:

  * [`ccall`](functions.md#ccall)
  * [`while`](functions.md#while)
  * [`@time`](functions.md#Base.@time)
  * [`T(x)`](functions.md#AutoDocs.Pages.T-Tuple{Any})
  * [`T(x, y)`](functions.md#AutoDocs.Pages.T-Tuple{Any,Any})
  * [`T(x, y, z)`](functions.md#AutoDocs.Pages.T)
  * [`f`](functions.md#AutoDocs.Pages.f-Tuple{Any})
  * [`f(x)`](functions.md#AutoDocs.Pages.f-Tuple{Any})
  * [`f(x, y)`](functions.md#AutoDocs.Pages.f-Tuple{Any,Any})
  * [`f(::Any, ::Any, ::Any)`](functions.md#AutoDocs.Pages.f-Tuple{Any,Any,Any})


<a target='_blank' href='https://github.com/JuliaDocs/Documenter.jl/tree/32c203fc02a6ea883abebbb1b672c2a7eeebb60d/test/examples/pages/d.jl#L20-L36' class='documenter-source'>source</a><br>


A footnote reference [^footnote].


<a id='Named-docstring-@refs-1'></a>

# Named docstring `@ref`s


  * a normal docstring `@ref` link: [`AutoDocs.Pages.f`](functions.md#AutoDocs.Pages.f-Tuple{Any});
  * a named docstring `@ref` link: [`f`](functions.md#AutoDocs.Pages.f-Tuple{Any});
  * and a link with custom text: [`@time 1 + 2`](functions.md#Base.@time);
  * some invalid syntax: [`for i = 1:10; ...`](functions.md#for).

