"use client";

import { useState } from "react";
import {
  ChevronRight,
  ChevronDown,
} from "lucide-react";

import ExperienceCard from "./ExperienceCard";
import { Experience } from "@/types/experience";
import { collections } from "@/mock/collections";

interface Props {
  experiences: Experience[];
}

export default function RelatedExperiences({
  experiences,
}: Props) {
  const [isOpen, setIsOpen] =
    useState(false);

  if (experiences.length === 0) {
    return null;
  }

  return (
    <div className="mt-12">
      <button
        onClick={() =>
          setIsOpen(!isOpen)
        }
        className="
          flex
          items-center
          gap-2
          text-2xl
          font-bold
          cursor-pointer
        "
      >
        {isOpen ? (
          <ChevronDown size={22} />
        ) : (
          <ChevronRight size={22} />
        )}

        <span>
          Related Experiences
        </span>

        <span className="text-gray-500 text-lg">
          ({experiences.length})
        </span>
      </button>

      {isOpen && (
        <div className="mt-4 space-y-1">
          {experiences.map((exp) => (
            <ExperienceCard
              key={exp.id}
              experience={exp}
              viewMode="compact"
              collections={collections}
            />
          ))}
        </div>
      )}
    </div>
  );
}