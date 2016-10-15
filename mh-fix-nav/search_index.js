var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#Documentation-1",
    "page": "Home",
    "title": "Documentation",
    "category": "section",
    "text": ""
},

{
    "location": "index.html#Index-Page-1",
    "page": "Home",
    "title": "Index Page",
    "category": "section",
    "text": "Pages = [\"index.md\"]\nDepth = 5"
},

{
    "location": "index.html#Functions-Contents-1",
    "page": "Home",
    "title": "Functions Contents",
    "category": "section",
    "text": "Pages = [\"lib/functions.md\"]\nDepth = 3"
},

{
    "location": "index.html#Tutorial-Contents-1",
    "page": "Home",
    "title": "Tutorial Contents",
    "category": "section",
    "text": "Pages = [\"man/tutorial.md\"]"
},

{
    "location": "index.html#Index-1",
    "page": "Home",
    "title": "Index",
    "category": "section",
    "text": ""
},

{
    "location": "index.html#Embedded-@ref-links-headers:-[ccall](@ref)-1",
    "page": "Home",
    "title": "Embedded @ref links headers: ccall",
    "category": "section",
    "text": "#60 #61zeros(5, 5)\nzeros(50, 50)DocTestSetup = quote\n    using Base\n    x = -3:0.01:3\n    y = -4:0.02:5\n    z = [Float64((xi^2 + yi^2)) for xi in x, yi in y]\nendjulia> [1.0, 2.0, 3.0]\n3-element Array{Float64,1}:\n 1.0\n 2.0\n 3.0\njulia> println(\" \"^5)\n\njulia> \"\\nfoo\\n\\nbar\\n\\n\\nbaz\"\n\"\\nfoo\\n\\nbar\\n\\n\\nbaz\"\n\njulia> println(ans)\n\nfoo\n\nbar\n\n\nbazjulia> info(\"...\")\nINFO: ...\none two three\nfour five six\none"
},

{
    "location": "index.html#Raw-Blocks-1",
    "page": "Home",
    "title": "Raw Blocks",
    "category": "section",
    "text": "<center>\n    <strong>CENTER</strong>\n</center>\\begin{verbatim}\\end{verbatim}"
},

{
    "location": "man/tutorial.html#",
    "page": "Tutorial",
    "title": "Tutorial",
    "category": "page",
    "text": ""
},

{
    "location": "man/tutorial.html#Tutorial-1",
    "page": "Tutorial",
    "title": "Tutorial",
    "category": "section",
    "text": "DocumentationIndexFunctionsMain.Mod.func(x)Main.Mod.Tjulia> using Base.Meta # `nothing` shouldn't be displayed.\n\njulia> Meta\nBase.Meta\n\njulia> a = 1\n1\n\njulia> b = 2;\n\njulia> a + b\n3a = 1\nb = 2\na + b\n\n# output\n\n3DocTestSetup =\n    quote\n        srand(1)\n    enda = 1\nb = 2\na / b\n\n# output\n\n0.5julia> a = 1;\n\njulia> b = 2\n2\n\njulia> a / b\n0.5code = string(sprint(Base.banner), \"julia>\")\nMarkdown.Code(code)julia> # First definition.\n       function f(x, y)\n           x + y\n       end\n       #\n       # Second definition.\n       #\n       type T\n           x\n       end\n\njulia> isdefined(:f), isdefined(:T) # Check for both definitions.\n(true,true)\n\njulia> import Base\n\njulia> using Base.Meta\n\njulia> r = isexpr(:(using Base.Meta), :using); # Discarded result.\n\njulia> !r\nfalsejulia> for i = 1:5\n           println(i)\n       end\n1\n2\n3\n4\n5\n\njulia> println(\"Printing with semi-comma ending.\");\nPrinting with semi-comma ending.\n\njulia> warn(\"...\");\nWARNING: ...\n\njulia> div(1, 0)\nERROR: DivideError: integer division error\n[...]\n\njulia> info(\"...\")   # ...\n       println(\"a\"); # Semi-colons *not* on the last expression shouldn't suppress output.\n       println(1)    # ...\n       2             # ...\nINFO: ...\na\n1\n2\n\njulia> info(\"...\")   # ...\n       println(\"a\"); # Semi-colons *not* on the last expression shouldn't suppress output.\n       println(1)    # ...\n       2;            # Only those in the last expression.\nINFO: ...\na\n1\na = 1\nb = 2; # Semi-colons don't affect script doctests.\n\n# output\n\n2f(x) = (sleep(x); x)\n@time f(0.1);f(0.01)\ndiv(1, 0)1 + 2\nnothing"
},

{
    "location": "lib/functions.html#",
    "page": "Function Index",
    "title": "Function Index",
    "category": "page",
    "text": "CurrentModule = Main.Mod"
},

{
    "location": "lib/functions.html#Function-Index-1",
    "page": "Function Index",
    "title": "Function Index",
    "category": "section",
    "text": "Pages = [\"lib/functions.md\"]"
},

{
    "location": "lib/functions.html#Mod.func-Tuple{Any}",
    "page": "Function Index",
    "title": "Mod.func",
    "category": "Method",
    "text": "func(x)\n\nT\n\n\n\n"
},

{
    "location": "lib/functions.html#Mod.T",
    "page": "Function Index",
    "title": "Mod.T",
    "category": "Type",
    "text": "T\n\nfunc(x)\n\n\n\n"
},

{
    "location": "lib/functions.html#ccall",
    "page": "Function Index",
    "title": "ccall",
    "category": "Keyword",
    "text": "ccall((symbol, library) or function_pointer, ReturnType, (ArgumentType1, ...), ArgumentValue1, ...)\n\nCall function in C-exported shared library, specified by (function name, library) tuple, where each component is a string or symbol.\n\nNote that the argument type tuple must be a literal tuple, and not a tuple-valued variable or expression. Alternatively, ccall may also be used to call a function pointer, such as one returned by dlsym.\n\nEach ArgumentValue to the ccall will be converted to the corresponding ArgumentType, by automatic insertion of calls to unsafe_convert(ArgumentType, cconvert(ArgumentType, ArgumentValue)). (See also the documentation for each of these functions for further details.) In most cases, this simply results in a call to convert(ArgumentType, ArgumentValue).\n\n\n\n"
},

{
    "location": "lib/functions.html#for",
    "page": "Function Index",
    "title": "for",
    "category": "Keyword",
    "text": "for loops repeatedly evaluate the body of the loop by iterating over a sequence of values. For example:\n\nfor i in [1,4,0]\n    println(i)\nend\n\n\n\n"
},

{
    "location": "lib/functions.html#while",
    "page": "Function Index",
    "title": "while",
    "category": "Keyword",
    "text": "while loops repeatedly evaluate a conditional expression, and continues evaluating the body of the while loop so long as the expression remains true. If the condition expression is false when the while loop is first reached, the body is never evaluated. For example:\n\nwhile i <= 5\n    println(i)\n    i += 1\nend\n\n\n\n"
},

{
    "location": "lib/functions.html#Base.@time",
    "page": "Function Index",
    "title": "Base.@time",
    "category": "Macro",
    "text": "@time\n\nA macro to execute an expression, printing the time it took to execute, the number of allocations, and the total number of bytes its execution caused to be allocated, before returning the value of the expression.\n\nSee also @timev, @timed, @elapsed, and @allocated.\n\n\n\n"
},

{
    "location": "lib/functions.html#Base.@assert",
    "page": "Function Index",
    "title": "Base.@assert",
    "category": "Macro",
    "text": "@assert cond [text]\n\nThrow an AssertionError if cond is false. Preferred syntax for writing assertions. Message text is optionally displayed upon assertion failure.\n\n\n\n"
},

{
    "location": "lib/functions.html#Functions-1",
    "page": "Function Index",
    "title": "Functions",
    "category": "section",
    "text": "ccall, func(x), T, for, and while.func(x)\nT\nccall\nfor\nwhile\n@time\n@assert"
},

{
    "location": "lib/functions.html#Foo-1",
    "page": "Function Index",
    "title": "Foo",
    "category": "section",
    "text": "@show pwd()\na = 1...isdefined(:a)f(x) = 2x\ng(x) = 3x\nnothing # hidex, y = 1, 2\nprintln(x, y)type T end\nt = T()"
},

{
    "location": "lib/functions.html#Foo-2",
    "page": "Function Index",
    "title": "Foo",
    "category": "section",
    "text": "isdefined(:T)\n@show isdefined(:t) # hide\n@show typeof(T)\ntypeof(t) # hidex + yf(2), g(2)"
},

{
    "location": "lib/functions.html#Foo-3",
    "page": "Function Index",
    "title": "Foo",
    "category": "section",
    "text": "x - yf(1), g(1)@which T()"
},

{
    "location": "lib/functions.html#Foo-4",
    "page": "Function Index",
    "title": "Foo",
    "category": "section",
    "text": "a = 1\nb = ans\n@assert a === bsrand(1); # hide\nnothing\nrand()\na = 1\nprintln(a)\nb = 2\na + b\ntype T\n    x :: Int\n    y :: Vector\nend\nx = T(1, [1])\nx.y\nx.xd = 1println(d)Test setup functionw = 5@assert w === 5@assert w === 5"
},

{
    "location": "lib/functions.html#Autodocs-1",
    "page": "Function Index",
    "title": "Autodocs",
    "category": "section",
    "text": "CurrentModule = Main"
},

{
    "location": "lib/functions.html#AutoDocs",
    "page": "Function Index",
    "title": "AutoDocs",
    "category": "Module",
    "text": "AutoDocs module.\n\n\n\n"
},

{
    "location": "lib/functions.html#AutoDocs.K",
    "page": "Function Index",
    "title": "AutoDocs.K",
    "category": "Constant",
    "text": "Constant K.\n\n\n\n"
},

{
    "location": "lib/functions.html#AutoDocs.T",
    "page": "Function Index",
    "title": "AutoDocs.T",
    "category": "Type",
    "text": "Type T.\n\n\n\n"
},

{
    "location": "lib/functions.html#AutoDocs.f-Tuple{Any}",
    "page": "Function Index",
    "title": "AutoDocs.f",
    "category": "Method",
    "text": "Function f.\n\n\n\n"
},

{
    "location": "lib/functions.html#AutoDocs.@m-Tuple{}",
    "page": "Function Index",
    "title": "AutoDocs.@m",
    "category": "Macro",
    "text": "Macro @m.\n\n\n\n"
},

{
    "location": "lib/functions.html#AutoDocs-Module-1",
    "page": "Function Index",
    "title": "AutoDocs Module",
    "category": "section",
    "text": "Modules = [AutoDocs]"
},

{
    "location": "lib/functions.html#AutoDocs.A",
    "page": "Function Index",
    "title": "AutoDocs.A",
    "category": "Module",
    "text": "Module A.\n\n\n\n"
},

{
    "location": "lib/functions.html#AutoDocs.A.f-Tuple{Any}",
    "page": "Function Index",
    "title": "AutoDocs.A.f",
    "category": "Method",
    "text": "Function A.f.\n\n\n\n"
},

{
    "location": "lib/functions.html#AutoDocs.A.@m-Tuple{}",
    "page": "Function Index",
    "title": "AutoDocs.A.@m",
    "category": "Macro",
    "text": "Macro B.@m.\n\n\n\n"
},

{
    "location": "lib/functions.html#AutoDocs.B",
    "page": "Function Index",
    "title": "AutoDocs.B",
    "category": "Module",
    "text": "Module B.\n\n\n\n"
},

{
    "location": "lib/functions.html#AutoDocs.B.f-Tuple{Any}",
    "page": "Function Index",
    "title": "AutoDocs.B.f",
    "category": "Method",
    "text": "Function B.f.\n\n\n\n"
},

{
    "location": "lib/functions.html#AutoDocs.B.@m-Tuple{}",
    "page": "Function Index",
    "title": "AutoDocs.B.@m",
    "category": "Macro",
    "text": "Macro B.@m.\n\n\n\n"
},

{
    "location": "lib/functions.html#Functions,-Modules,-and-Macros-1",
    "page": "Function Index",
    "title": "Functions, Modules, and Macros",
    "category": "section",
    "text": "Modules = [AutoDocs.A, AutoDocs.B]\nOrder   = [:function, :module, :macro]"
},

{
    "location": "lib/functions.html#AutoDocs.A.K",
    "page": "Function Index",
    "title": "AutoDocs.A.K",
    "category": "Constant",
    "text": "Constant A.K.\n\n\n\n"
},

{
    "location": "lib/functions.html#AutoDocs.A.T",
    "page": "Function Index",
    "title": "AutoDocs.A.T",
    "category": "Type",
    "text": "Type B.T.\n\n\n\n"
},

{
    "location": "lib/functions.html#AutoDocs.B.K",
    "page": "Function Index",
    "title": "AutoDocs.B.K",
    "category": "Constant",
    "text": "Constant B.K.\n\n\n\n"
},

{
    "location": "lib/functions.html#AutoDocs.B.T",
    "page": "Function Index",
    "title": "AutoDocs.B.T",
    "category": "Type",
    "text": "Type B.T.\n\n\n\n"
},

{
    "location": "lib/functions.html#Constants-and-Types-1",
    "page": "Function Index",
    "title": "Constants and Types",
    "category": "section",
    "text": "Modules = [AutoDocs.A, AutoDocs.B]\nOrder   = [:constant, :type]"
},

{
    "location": "lib/functions.html#AutoDocs.Pages.f-Tuple{Any}",
    "page": "Function Index",
    "title": "AutoDocs.Pages.f",
    "category": "Method",
    "text": "f from page a.jl.\n\nLinks:\n\nccall\nwhile\n@time(x)\nT(x)\nT(x, y)\nf(::Integer)\nf(::Any)\nf(::Any, ::Any)\nf(x, y, z)\n\n[footnote]: Footnote contents. [footnote]\n\n\n\n"
},

{
    "location": "lib/functions.html#AutoDocs.Pages.f-Tuple{Any,Any}",
    "page": "Function Index",
    "title": "AutoDocs.Pages.f",
    "category": "Method",
    "text": "f from page b.jl.\n\nLinks:\n\nccall\nwhile\n@time\nT\nf\nf(::Any)\nf(::Any, ::Any)\nf(::Any, ::Any, ::Any)\n\n\n\n"
},

{
    "location": "lib/functions.html#AutoDocs.Pages.f-Tuple{Any,Any,Any}",
    "page": "Function Index",
    "title": "AutoDocs.Pages.f",
    "category": "Method",
    "text": "f from page c.jl.\n\nLinks:\n\nccall\nwhile\n@time\nT\nf\nf(::Any)\nf(::Any, ::Any)\nf(::Any, ::Any, ::Any)\n\n\n\n"
},

{
    "location": "lib/functions.html#AutoDocs.Pages.T",
    "page": "Function Index",
    "title": "AutoDocs.Pages.T",
    "category": "Type",
    "text": "T from page d.jl.\n\nLinks:\n\nccall\nwhile\n@time\nT\nf\nf(x)\nf(x, y)\nf(::Any, ::Any, ::Any)\n\n\n\n"
},

{
    "location": "lib/functions.html#AutoDocs.Pages.T-Tuple{Any,Any}",
    "page": "Function Index",
    "title": "AutoDocs.Pages.T",
    "category": "Method",
    "text": "T from page d.jl.\n\nLinks:\n\nccall\nwhile\n@time\nT()\nT(x)\nT(x, y)\nT(x, y, z)\nf\nf(x)\nf(x, y)\nf(::Any, ::Any, ::Any)\n\n\n\n"
},

{
    "location": "lib/functions.html#AutoDocs.Pages.T-Tuple{Any}",
    "page": "Function Index",
    "title": "AutoDocs.Pages.T",
    "category": "Method",
    "text": "T from page d.jl.\n\nLinks:\n\nccall\nwhile\n@time\nT(x)\nT(x, y)\nT(x, y, z)\nf\nf(x)\nf(x, y)\nf(::Any, ::Any, ::Any)\n\n\n\n"
},

{
    "location": "lib/functions.html#Autodocs-by-Page-1",
    "page": "Function Index",
    "title": "Autodocs by Page",
    "category": "section",
    "text": "Modules = [AutoDocs.Pages]\nPages = [\"a.jl\", \"b.jl\"]Modules = [AutoDocs.Pages]\nPages = [\"c.jl\", \"d.jl\"]A footnote reference [footnote]."
},

{
    "location": "lib/functions.html#Named-docstring-@refs-1",
    "page": "Function Index",
    "title": "Named docstring @refs",
    "category": "section",
    "text": "a normal docstring @ref link: AutoDocs.Pages.f;\na named docstring @ref link: f;\nand a link with custom text: @time 1 + 2;\nsome invalid syntax: for i = 1:10; ...."
},

{
    "location": "lib/autodocs.html#",
    "page": "@autodocs tests",
    "title": "@autodocs tests",
    "category": "page",
    "text": ""
},

{
    "location": "lib/autodocs.html#@autodocs-tests-1",
    "page": "@autodocs tests",
    "title": "@autodocs tests",
    "category": "section",
    "text": "CurrentModule = Main"
},

{
    "location": "lib/autodocs.html#AutoDocs.Pages.E.f_1-Tuple{Any}",
    "page": "@autodocs tests",
    "title": "AutoDocs.Pages.E.f_1",
    "category": "Method",
    "text": "f_1\n\n\n\n"
},

{
    "location": "lib/autodocs.html#AutoDocs.Pages.E.f_2-Tuple{Any}",
    "page": "@autodocs tests",
    "title": "AutoDocs.Pages.E.f_2",
    "category": "Method",
    "text": "f_2\n\n\n\n"
},

{
    "location": "lib/autodocs.html#AutoDocs.Pages.E.f_3-Tuple{Any}",
    "page": "@autodocs tests",
    "title": "AutoDocs.Pages.E.f_3",
    "category": "Method",
    "text": "f_3\n\n\n\n"
},

{
    "location": "lib/autodocs.html#Public-1",
    "page": "@autodocs tests",
    "title": "Public",
    "category": "section",
    "text": "Should include docs forAutoDocs.Pages.E.f_1\nAutoDocs.Pages.E.f_2\nAutoDocs.Pages.E.f_3in that order.Modules = [AutoDocs.Pages.E]\nPrivate = false\nOrder = [:function]"
},

{
    "location": "lib/autodocs.html#AutoDocs.Pages.E.g_1-Tuple{Any}",
    "page": "@autodocs tests",
    "title": "AutoDocs.Pages.E.g_1",
    "category": "Method",
    "text": "g_1\n\n\n\n"
},

{
    "location": "lib/autodocs.html#AutoDocs.Pages.E.g_2-Tuple{Any}",
    "page": "@autodocs tests",
    "title": "AutoDocs.Pages.E.g_2",
    "category": "Method",
    "text": "g_2\n\n\n\n"
},

{
    "location": "lib/autodocs.html#AutoDocs.Pages.E.g_3-Tuple{Any}",
    "page": "@autodocs tests",
    "title": "AutoDocs.Pages.E.g_3",
    "category": "Method",
    "text": "g_3\n\n\n\n"
},

{
    "location": "lib/autodocs.html#Private-1",
    "page": "@autodocs tests",
    "title": "Private",
    "category": "section",
    "text": "Should include docs forAutoDocs.Pages.E.g_1\nAutoDocs.Pages.E.g_2\nAutoDocs.Pages.E.g_3in that order.Modules = [AutoDocs.Pages.E]\nPublic = false\nOrder = [:function]"
},

{
    "location": "lib/autodocs.html#AutoDocs.Pages.E.T_1",
    "page": "@autodocs tests",
    "title": "AutoDocs.Pages.E.T_1",
    "category": "Type",
    "text": "T_1\n\n\n\n"
},

{
    "location": "lib/autodocs.html#AutoDocs.Pages.E.T_2",
    "page": "@autodocs tests",
    "title": "AutoDocs.Pages.E.T_2",
    "category": "Type",
    "text": "T_2\n\n\n\n"
},

{
    "location": "lib/autodocs.html#Ordering-of-Public-and-Private-1",
    "page": "@autodocs tests",
    "title": "Ordering of Public and Private",
    "category": "section",
    "text": "Should include docs forAutoDocs.Pages.E.T_1\nAutoDocs.Pages.E.T_2in that order.Modules = [AutoDocs.Pages.E]\nOrder = [:type]"
},

]}
