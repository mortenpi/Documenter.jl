using Documenter

# Create a config object that has the default configuration for the document
doc = Documenter.DocumentConfig()

# Option 1. Assign to fields
doc.format = :html

# Option 2. Use functions
# configure!( <document>, <field>, <value> )
configure!(doc, :format, :html)

# Option 3. Use a macro
# Would probably require having functions anyway, but the macro would be the public
# syntactic sugar.
@conf doc.format :html

# Run the build process
# This will build and also deploy, if requested. It will also provide a command line
# interface to Documenter, so that you could override certain configurations or have
# Documenter do something completely different.
#
# Potential options:
#
#  - Just run doctests:
#
#        julia docs/make.jl doctest
#
#  - Deploy, even on a local machine.
#
#        julia docs/make.jl deploy
#
#  - Without a sub-command it should probably just build the docs (but not deploy).
#
#  - Serve docs with live re-build on changes
#
#        julia docs/make.jl serve
#
Documenter.run(ARGS, doc)


# -----------------------------------------------------------------------------------------

# Original:
makedocs(
    modules = [Documenter],
    clean = false,
    format = :html,
    sitename = "Documenter.jl",
    authors = "Michael Hatherly, Morten Piibeleht, and contributors.",
    analytics = "UA-89508993-1",
    linkcheck = !("skiplinks" in ARGS),
    pages = Any[ # Compat: `Any` for 0.4 compat
        "Home" => "index.md",
        "Manual" => Any[
            "Guide" => "man/guide.md",
            "man/examples.md",
            "man/syntax.md",
            "man/doctests.md",
            "man/hosting.md",
            "man/latex.md",
            "man/internals.md",
            "man/contributing.md",
        ],
        "Library" => Any[
            "Public" => "lib/public.md",
            hide("Internals" => "lib/internals.md", Any[
                "lib/internals/anchors.md",
                "lib/internals/builder.md",
                "lib/internals/cross-references.md",
                "lib/internals/docchecks.md",
                "lib/internals/docsystem.md",
                "lib/internals/documents.md",
                "lib/internals/dom.md",
                "lib/internals/expanders.md",
                "lib/internals/formats.md",
                "lib/internals/generator.md",
                "lib/internals/mdflatten.md",
                "lib/internals/selectors.md",
                "lib/internals/utilities.md",
                "lib/internals/walkers.md",
                "lib/internals/writers.md",
            ])
        ]
    ]
)

deploydocs(
    repo = "github.com/JuliaDocs/Documenter.jl.git",
    target = "build",
    deps = nothing,
    make = nothing,
)
