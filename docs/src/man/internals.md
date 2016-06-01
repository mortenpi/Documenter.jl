# Package Internals

```@meta
CurrentModule = Documenter
```

This section gives an overview of how Documenter works internally.

The [`makedocs`](@ref Documenter.makedocs) function does all the heavy lifting, going from the input
markdown files and docstring to the final output, which currently is a set of
markdown files and and should be further processed with `mkdocs`.

```
Input --[parse]-> Document Tree --[render]-> Output
```

The processing is done by the [`Builder.process`](@ref) function, based on a
[`Builder.Pipeline`](@ref), which defines a set of steps that get executed.
When [`makedocs`](@ref)  is called, [`Builder.DEFAULT_PIPELINE`](@ref) is the
default that gets used.

Every step in the pipeline then works on an instance of [`Documents.Document`](@ref).
In the default pipeline, initially the document is basically a reference to the
source and build directories.
The pipeline then

  - creates the necessary directories and copies files,
  - expands all various things in the source markdown (e.g. special code blocks),
  - creates cross-references,
  - writes the output markdown files.

## Block expansion

## Modularity
Documenter is written in a modular way to make it easy to overload and extend it.
A user can add functionality, such as additional processed code blocks,
by importing the necessary functions and overloading them.

```julia
using Documenter
using DocuExts
using PkgName

import Documenter.Builder: log, exec
type CustomNode end
function exec(node::CustomNode, ...) # !!!
```

**TODO:** How to extend the pipeline in a simple manner?
