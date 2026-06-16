import { Collection } from "@/types/collection";

export function getCollectionPath(
  collectionId: string,
  collections: Collection[]
) {
  const path: Collection[] = [];

  let current = collections.find(
    (c) => c.id === collectionId
  );

  while (current) {
    path.unshift(current);

    current = collections.find(
      (c) => c.id === current?.parentId
    );
  }

  return path;
}