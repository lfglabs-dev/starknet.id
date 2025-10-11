import Image, { ImageProps } from "next/image";
import Link from "next/link";
import React from "react";

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

function CustomHeading(props: any) {
  const slug = slugify(String(props.children));
  return React.createElement(
    `h${props.level}`,
    { id: slug, className: "scroll-mt-24 inline-flex" },
    [
      React.createElement("a", {
        href: `#${slug}`,
        key: `link-${slug}`,
        className: "anchor-link",
      }),
    ],
    props.children
  );
}

export const H1 = ({ children }: React.HTMLProps<HTMLHeadingElement>) => (
  <CustomHeading level={1}>{children}</CustomHeading>
);
export const H2 = ({ children }: React.HTMLProps<HTMLHeadingElement>) => (
  <CustomHeading level={2}>{children}</CustomHeading>
);
export const H3 = ({ children }: React.HTMLProps<HTMLHeadingElement>) => (
  <CustomHeading level={3}>{children}</CustomHeading>
);

export const P = (props: React.HTMLProps<HTMLParagraphElement>) => <p {...props} />;

export const Ul = (props: React.HTMLAttributes<HTMLUListElement>) => <ul {...props} />;

export const Bold = (props: React.HTMLAttributes<HTMLSpanElement>) => (
  <span style={{ fontWeight: 600 }} {...props} />
);

export function CustomLink(props: any) {
  const href = props.href;
  if (href.startsWith("/"))
    return <Link href={href} {...props}>{props.children}</Link>;
  if (href.startsWith("#")) return <a {...props} />;
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

export function ArticleImage({ alt, width = 1200, height = 675, src, ...props }: ImageProps) {
  return <Image src={src} alt={alt} width={width} height={height} {...props} />;
}


