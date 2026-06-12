"use client";

import { useState } from "react";

import { Collection } from "@/types/collection";
import { Experience } from "@/types/experience";

import ExperienceCard from "./ExperienceCard";

interface Props {
  collection: Collection;
  collections: Collection[];
  experiences: Experience[];
}

export default function CollectionNode({
  collection,
  collections,
  experiences,
}: Props) {
  const [isOpen, setIsOpen] = useState(true);

  const childCollections = collections.filter(
    (item) => item.parentId === collection.id
  );

  const collectionExperiences = experiences.filter((exp) =>
    exp.collectionIds?.includes(collection.id)
  );

  return (
    <div className="mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          flex
          items-center
          gap-2
          font-semibold
          text-lg
          hover:underline
        "
      >
        <span>{isOpen ? "⯆" : "➤"}</span>

        <span>{collection.name}</span>

        <span className="text-sm text-gray-500">
          (
          {childCollections.length +
            collectionExperiences.length}
          )
        </span>
      </button>

      {isOpen && (
        <div className="ml-6 mt-3">
          {childCollections.map((child) => (
            <CollectionNode
              key={child.id}
              collection={child}
              collections={collections}
              experiences={experiences}
            />
          ))}

          <div className="mt-2">
            {collectionExperiences.map((exp) => (
              <ExperienceCard
                key={exp.id}
                experience={exp}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}