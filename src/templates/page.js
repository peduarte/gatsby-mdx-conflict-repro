import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Button as BlueButton } from "../components/blue-button";
import { Button as RedButton } from "../components/red-button";

export const components = {
  BlueButton,
  RedButton,
}

export default ({ data }) => {
  const post = data.mdx;

  return (
    <MDXProvider components={components}>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <MDXRenderer>{post.body}</MDXRenderer>
      </div>
    </MDXProvider>
  );
};

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
    }
  }
`;
