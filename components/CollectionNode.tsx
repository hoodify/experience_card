"use client";

import { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";

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
  const [isOpen, setIsOpen] = useState(false);

  const childCollections = collections.filter(
    (item) => item.parentId === collection.id
  );

  const collectionExperiences = experiences.filter((exp) =>
    exp.collectionIds?.includes(collection.id)
  );

  const totalCount =
    childCollections.length + collectionExperiences.length;

  return (
    <div className="mb-2">
      {/* HEADER */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          flex
          items-center
          gap-2
          w-full
          font-semibold
          text-lg
          hover:underline
          cursor-pointer
        "
      >
        {/* TOGGLE ICON (fixed width → layout 안정화 핵심) */}
        <span
          className="
            w-5
            h-5
            flex
            items-center
            justify-center
            shrink-0
          "
        >
          {isOpen ? (
            <ChevronDown size={16} />
          ) : (
            <ChevronRight size={16} />
          )}
        </span>

        {/* COLLECTION NAME */}
        <span className="truncate">
          {collection.name}
        </span>

        {/* COUNT (fixed width → 흔들림 방지) */}
        <span
          className="
            text-sm
            text-gray-500
            w-10
            text-left
            shrink-0
          "
        >
          ({totalCount})
        </span>
      </button>

      {/* CHILDREN */}
      {isOpen && (
        <div className="ml-6 mt-3">
          {/* child collections */}
          {childCollections.map((child) => (
            <CollectionNode
              key={child.id}
              collection={child}
              collections={collections}
              experiences={experiences}
            />
          ))}

          {/* experiences */}
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