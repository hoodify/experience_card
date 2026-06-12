import { Collection } from "@/types/collection";
import { Experience } from "@/types/experience";

import CollectionNode from "./CollectionNode";

interface Props {
  collections: Collection[];
  experiences: Experience[];
}

export default function CollectionTree({
  collections,
  experiences,
}: Props) {
  const rootCollections = collections.filter(
    (collection) => !collection.parentId
  );

  return (
    <div className="space-y-2">
      {rootCollections.map((collection) => (
        <CollectionNode
          key={collection.id}
          collection={collection}
          collections={collections}
          experiences={experiences}
        />
      ))}
    </div>
  );
}