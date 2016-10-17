# Hidden pages

Pages can be hidden with the [`hide`](@ref) function.

## List of hidden pages

- [Hidden page 1](x.md)
- [Hidden page 2](y.md)
- [Hidden page 3](z.md)


### Absolute paths
```@contents
Pages = ["x.md", "y.md", "z.md"]
```

### Relative paths

Equivalent to what I have in `lib/contents.md`.

```@contents
Pages = ["../hidden/x.md", "../hidden/y.md", "../hidden/z.md"]
```

### Relative paths

Just have the `index.md` in to show it does parse this block.

```@contents
Pages = ["index.md", "../hidden/x.md", "../hidden/y.md", "../hidden/z.md"]
```

## Docs for `hide`

```@docs
hide
```
