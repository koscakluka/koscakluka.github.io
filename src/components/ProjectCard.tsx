// src/components/ProjectCard.tsx
import { ExternalLink } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardDescription, CardTitle } from "./ui/card";

type Props = {
  title: string;
  summary: string;
  href?: string;
  tags?: string[];
  image?: string;
};

export default function ProjectCard({
  title,
  summary,
  href,
  tags = [],
  image,
}: Props) {
  return (
    <Card className="flex flex-col gap-4">
      {image ? (
        <img
          src={image}
          alt=""
          className="aspect-[16/9] w-full rounded-md object-cover"
          loading="lazy"
        />
      ) : null}
      <div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{summary}</CardDescription>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
      {href ? (
        <a
          href={href}
          className="mt-1 inline-flex items-center gap-1 text-sm " +
            "text-[hsl(var(--accent-foreground))] hover:underline"
        >
          Visit <ExternalLink size={16} />
        </a>
      ) : null}
    </Card>
  );
}
