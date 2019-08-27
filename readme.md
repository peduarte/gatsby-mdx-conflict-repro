### repro

#### What's the problem?

You have 2 files: `one.mdx` and `two.mdx`. both import components from different files.

Here's `one.mdx`:

```mdx
# My first MDX Page

import { Button } from "../components/blue-button";

<Button />
```

And `two.mdx`:

```mdx
# Another one

import { Button } from "../components/red-button";

<Button />
```

You would assume that both the pages render differently colored buttons, but that's not what happens.

Because both import `{ Button }`, there's a name conflict and both render the same button - the blue button.

#### Implementation details:

- mdx files are brought into using `gatsby-source-filesystem` + `gatsby-plugin-mdx`
- and pages are created in `gatsby-node` using a template.
- the template uses `MDXRenderer` from `gatsby-plugin-mdx` to render the page.
