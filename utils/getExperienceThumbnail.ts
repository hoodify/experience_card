import { Collection } from "@/types/collection";
import { Experience } from "@/types/experience";

export function getExperienceThumbnail(
  experience: Experience,
  collections: Collection[]
) {
  const thumbnail =
    experience.media.find(
      (m) => m.type === "image"
    );

  if (thumbnail) {
    return thumbnail.url;
  }

  const collection =
    collections.find(
      (c) =>
        c.id ===
        experience.collectionIds?.[0]
    );

  return (
    collection?.image ??
    "/collection-images/default.png"
  );
}