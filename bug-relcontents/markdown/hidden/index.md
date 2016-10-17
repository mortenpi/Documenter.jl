
<a id='Hidden-pages-1'></a>

# Hidden pages


Pages can be hidden with the [`hide`](index.md#Documenter.hide) function.


<a id='List-of-hidden-pages-1'></a>

## List of hidden pages


  * [Hidden page 1](x.md)
  * [Hidden page 2](y.md)
  * [Hidden page 3](z.md)


<a id='Absolute-paths-1'></a>

### Absolute paths

- [Hidden 1](x.md#Hidden-1-1)
    - [First heading](x.md#First-heading-1)
    - [Second heading](x.md#Second-heading-1)
- [Hidden 2](y.md#Hidden-2-1)
- [Hidden 3](z.md#Hidden-3-1)


<a id='Relative-paths-1'></a>

### Relative paths


Equivalent to what I have in `lib/contents.md`.



<a id='Relative-paths-2'></a>

### Relative paths


Just have the `index.md` in to show it does parse this block.

- [Hidden pages](index.md#Hidden-pages-1)
    - [List of hidden pages](index.md#List-of-hidden-pages-1)
    - [Docs for `hide`](index.md#Docs-for-hide-1)


<a id='Docs-for-hide-1'></a>

## Docs for `hide`

<a id='Documenter.hide' href='#Documenter.hide'>#</a>
**`Documenter.hide`** &mdash; *Function*.



```julia
hide(page)

```

Allows a page to be hidden in the navigation menu. It will only show up if it happens to be the current page. The hidden page will still be present in the linear page list that can be accessed via the previous and next page links. The title of the hidden page can be overriden using the `=>` operator as usual.

**Usage**

```julia
makedocs(
    ...,
    pages = [
        ...,
        hide("page1.md"),
        hide("Title" => "page2.md")
    ]
)
```


<a target='_blank' href='https://github.com/JuliaDocs/Documenter.jl/tree/32c203fc02a6ea883abebbb1b672c2a7eeebb60d/src/Documenter.jl#L165' class='documenter-source'>source</a><br>


```julia
hide(root, children)

```

Allows a subsection of pages to be hidden from the navigation menu. `root` will be linked to in the navigation menu, with the title determined as usual. `children` should be a list of pages (note that it **can not** be hierarchical).

**Usage**

```julia
makedocs(
    ...,
    pages = [
        ...,
        hide("Hidden section" => "hidden_index.md", [
            "hidden1.md",
            "Hidden 2" => "hidden2.md"
        ]),
        hide("hidden_index.md", [...])
    ]
)
```


<a target='_blank' href='https://github.com/JuliaDocs/Documenter.jl/tree/32c203fc02a6ea883abebbb1b672c2a7eeebb60d/src/Documenter.jl#L189' class='documenter-source'>source</a><br>

