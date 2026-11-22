# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

## Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

**Input**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).

# Para notas al pie
```bash
npm install markdown-it-footnote
```
En config.mts.
```js

import footnote from 'markdown-it-footnote'

export default defineConfig({
  markdown: {
    config(md) {
      md.use(footnote)
    }
  }
})
```

Uso:

```md
  - `var_export()`[^retorno]: genera  una representación de una variable como código PHP. 
  
[^retorno]:ambas funciones, admiten un segundo argumento booleano que, si es `true`, hace que devuelvan el resultado como un string en lugar de mostrarlo.
```
