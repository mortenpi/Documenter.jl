
<a id='Tutorial-1'></a>

# Tutorial


[Documentation](../index.md#Documentation-1)


[Index](../index.md#Index-1)


[Functions](../lib/functions.md#Functions-1)


[`Main.Mod.func(x)`](../lib/functions.md#Mod.func-Tuple{Any})


[`Main.Mod.T`](../lib/functions.md#Mod.T)


```jlcon
julia> using Base.Meta # `nothing` shouldn't be displayed.

julia> Meta
Base.Meta

julia> a = 1
1

julia> b = 2;

julia> a + b
3
```


```julia
a = 1
b = 2
a + b

# output

3
```




```julia
a = 1
b = 2
a / b

# output

0.5
```


```jlcon
julia> a = 1;

julia> b = 2
2

julia> a / b
0.5
```


```
[1m               [32m_[0m[1m
   [34m_[0m[1m       [0m[1m_[0m[1m [31m_[32m(_)[35m_[0m[1m     |  A fresh approach to technical computing
  [34m(_)[0m[1m     | [31m(_)[0m[1m [35m(_)[0m[1m    |  Documentation: http://docs.julialang.org
   [0m[1m_ _   _| |_  __ _[0m[1m   |  Type "?help" for help.
  [0m[1m| | | | | | |/ _` |[0m[1m  |
  [0m[1m| | |_| | | | (_| |[0m[1m  |  Version 0.5.0 (2016-09-19 18:14 UTC)
 [0m[1m_/ |\__'_|_|_|\__'_|[0m[1m  |  
[0m[1m|__/[0m[1m                   |  x86_64-linux-gnu

[0mjulia>
```


```jlcon
julia> # First definition.
       function f(x, y)
           x + y
       end
       #
       # Second definition.
       #
       type T
           x
       end

julia> isdefined(:f), isdefined(:T) # Check for both definitions.
(true,true)

julia> import Base

julia> using Base.Meta

julia> r = isexpr(:(using Base.Meta), :using); # Discarded result.

julia> !r
false
```


```jlcon
julia> for i = 1:5
           println(i)
       end
1
2
3
4
5

julia> println("Printing with semi-comma ending.");
Printing with semi-comma ending.

julia> warn("...");
WARNING: ...

julia> div(1, 0)
ERROR: DivideError: integer division error
[...]

julia> info("...")   # ...
       println("a"); # Semi-colons *not* on the last expression shouldn't suppress output.
       println(1)    # ...
       2             # ...
INFO: ...
a
1
2

julia> info("...")   # ...
       println("a"); # Semi-colons *not* on the last expression shouldn't suppress output.
       println(1)    # ...
       2;            # Only those in the last expression.
INFO: ...
a
1

```


```julia
a = 1
b = 2; # Semi-colons don't affect script doctests.

# output

2
```


```julia
julia> f(x) = (sleep(x); x)
f (generic function with 1 method)

  0.163780 seconds (32.42 k allocations: 1.375 MB)
julia> @time f(0.1);
```


```julia
julia> f(0.01)
0.01

julia> div(1, 0)
ERROR: DivideError: integer division error
```

