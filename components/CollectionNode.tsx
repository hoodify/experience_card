"use client";

import { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";

import { Collection } from "@/types/collection";
import { Experience } from "@/types/experience";

import { getCollectionExperienceCount } from "@/utils/getCollectionExperienceCount";
import ExperienceCard from "./ExperienceCard";
import { ViewMode } from "@/types/view";

interface Props {
  collection: Collection;
  collections: Collection[];
  experiences: Experience[];
  viewMode: ViewMode;
}

export default function CollectionNode({
  collection,
  collections,
  experiences,  
  viewMode,
}: Props) {


  const [isOpen, setIsOpen] = useState(false);

  const childCollections = collections.filter(
    (item) => item.parentId === collection.id
  );

  const collectionExperiences = experiences.filter((exp) =>
    exp.collectionIds?.includes(collection.id)
  );
  
const totalCount =
  getCollectionExperienceCount(
    collection.id,
    collections,
    experiences
  );

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

        <div
        className="
          flex
          items-center
          gap-2
          min-w-0
        "
      >
        <img
          src={
            collection.image ??
            "/collection-images/default2.png"
          }
          alt={collection.name}
          className="
            w-6
            h-6
            rounded
            object-cover
            shrink-0
          "
        />

          {/* COLLECTION NAME */}
          <span className="truncate">
            {collection.name}
          </span>

        </div>
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
      <div
        className={`
          ml-6
          overflow-hidden
          transition-all
          duration-500
          ease-in-out
          ${
            isOpen
              ? "max-h-[5000px] opacity-100 mt-3 mb-5"
              : "max-h-0 opacity-0 mt-0"
          }
        `}
      >
        {/* child collections */}
        {childCollections.map((child) => (
          <CollectionNode
            key={child.id}
            collection={child}
            collections={collections}
            experiences={experiences}
            viewMode={viewMode}
          />
        ))}

        {/* experiences */}
        <div
          className={
            viewMode === "card"
              ? "mt-2 flex flex-wrap gap-4"
              : "mt-2"
          }
        >
          {collectionExperiences.map((exp) => (
            <ExperienceCard
              key={exp.id}
              experience={exp}
              viewMode={viewMode}
              collections={collections}
            />
          ))}
        </div>
      </div>
    </div>
  );
}