import type { MDXComponents } from "mdx/types";
import { Bold, CustomLink, H1, H2, H3, P, Ul, ArticleImage } from "./components/mdx";

export const customComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  Bold,
  ul: Ul,
  a: CustomLink,
  ArticleImage,
};

export function useMDXComponents(components: MDXComponents) {
  return { ...customComponents, ...components };
}


