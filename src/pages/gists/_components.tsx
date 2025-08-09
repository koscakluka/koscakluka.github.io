import { type ComponentProps } from "react";

export default {
  h1: (props: ComponentProps<"h1">) => (
    <h1 {...props} className="text-2xl pt-8 font-permanent-marker">
      {props.children}
    </h1>
  ),
  h2: (props: ComponentProps<"h2">) => (
    <h2 {...props} className="text-1xl pt-6 font-permanent-marker">
      {props.children}
    </h2>
  ),
  h3: (props: ComponentProps<"h3">) => (
    <h3 {...props} className="text-lg pt-4 font-medium underline">
      {props.children}
    </h3>
  ),
  p: (props: ComponentProps<"p">) => (
    <p {...props} className="mt-4">
      {props.children}
    </p>
  ),
  ol: (props: ComponentProps<"ol">) => (
    <ol {...props} className="pt-2 list-decimal pl-8">
      {props.children}
    </ol>
  ),
  ul: (props: ComponentProps<"ul">) => (
    <ul {...props} className="pt-2 list-disc pl-8">
      {props.children}
    </ul>
  ),
  li: (props: ComponentProps<"li">) => (
    <li {...props} className="pb-2">
      {props.children}
    </li>
  ),
  a: (props: ComponentProps<"a">) => <a {...props}>{props.children}</a>,
  blockquote: (props: ComponentProps<"blockquote">) => (
    <blockquote
      {...props}
      className="italic my-4 border-l-4 border-neutral-500 pl-2"
    >
      {props.children}
    </blockquote>
  ),
};
