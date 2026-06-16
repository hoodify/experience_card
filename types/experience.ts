import { Media } from "@/types/media";


export interface Experience {
  id: string;

  title: string;

  content: string;

  author: string;

  tags: string[];

  media: Media[];

  createdAt: string;

  updatedAt?: string;

  collectionIds: string[];

  visibility: "public" | "private";

  status: "draft" | "published";

  source: "manual" | "ai" | "import";
}