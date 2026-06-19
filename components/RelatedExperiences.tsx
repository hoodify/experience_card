"use client";

import { useState } from "react";
import {
  ChevronRight,
  ChevronDown,
} from "lucide-react";

import ExperienceCard from "./ExperienceCard";
import { Experience } from "@/types/experience";
import { collections } from "@/mock/collections";

interface RelatedExperience {
  experience: Experience;
  sharedTags: string[];
}

interface Props {
  experiences: RelatedExperience[];
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

        <span
          className="
            text-gray-500
            text-lg
          "
        >
          ({experiences.length})
        </span>
      </button>

      {isOpen && (
        <div className="mt-4">
          {experiences.map(
            ({
              experience,
              sharedTags,
            }) => (
              <div
                key={experience.id}
                className="mb-4"
              >
                <ExperienceCard
                  experience={
                    experience
                  }
                  viewMode="compact"
                  collections={
                    collections
                  }
                />

                <div
                  className="
                    ml-6
                    mt-1
                    mb-3
                    flex
                    flex-wrap
                    items-center
                    gap-2
                  "
                >
                  <span
                    className="
                      text-xs
                      text-gray-400
                    "
                  >
                    Related by
                  </span>

                  {sharedTags.map(
                    (tag) => (
                      <span
                        key={tag}
                        className="
                          text-xs
                          font-medium
                        "
                      >
                        #{tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}