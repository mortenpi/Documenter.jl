# Package Internals

This section gives an overview of how Documenter works internally.

All the heavy lifting is done by the [`makedocs`](@ref) function, which goes from the input (markdown files,
usually in `<pkgdir>/docs/src` and the docstrings that are loaded by loading the package itself)
to the final output (which at this point is just a set of markdown files that can be parsed further
with `mkdocs`).

It works by constructing a [`Documents.Document`](@ref) by using the [`Documenter.Builder.*`](@ref) types and methods.
