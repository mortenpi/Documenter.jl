module Mod

"""
    func(x)

[`T`](@ref)
"""
func(x) = x

"""
    T

[`func(x)`](@ref)
"""
type T end

end

"`AutoDocs` module."
module AutoDocs

module Pages

include("../pages/a.jl")
include("../pages/b.jl")
include("../pages/c.jl")
include("../pages/d.jl")
include("../pages/e.jl")

end

"Function `f`."
f(x) = x

"Constant `K`."
const K = 1

"Type `T`."
type T end

"Macro `@m`."
macro m() end

"Module `A`."
module A

"Function `A.f`."
f(x) = x

"Constant `A.K`."
const K = 1

"Type `B.T`."
type T end

"Macro `B.@m`."
macro m() end

end

"Module `B`."
module B

"Function `B.f`."
f(x) = x

"Constant `B.K`."
const K = 1

"Type `B.T`."
type T end

"Macro `B.@m`."
macro m() end

end

end

module Tests
    using Documenter

    info("Building mock package docs: HTMLWriter")
    doc = makedocs(
        debug = true,
        build = "build-html",
        format   = Documenter.Formats.HTML,
        sitename = "Documenter example",
        pages    = Any[
            "Home" => "index.md",
            "Manual" => [
                "man/tutorial.md",
            ],
            "Library" => [
                "lib/functions.md",
                "lib/autodocs.md",
            ],
            Hidden("hidden/index.md", [
                "hidden/index.md",
                "hidden/x.md",
                "Hidden 2 (override)" => "hidden/y.md",
                "hidden/z.md",
            ])
        ]
    )
end
