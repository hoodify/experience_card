"use client";

import { useRouter } from "next/navigation";

import TagChip from "@/components/TagChip";
import { Experience } from "@/types/experience";
import { ViewMode } from "@/types/view";

interface Props {
  experience: Experience;
  viewMode: ViewMode;
}

export default function ExperienceCard({
  experience,
  viewMode,
}: Props) {
 
 
  const router = useRouter();

  const thumbnail = experience.media.find(
    (item) => item.type === "image"
  );

  const preview =
    experience.content.length > 120
      ? experience.content.slice(0, 120) + "..."
      : experience.content;

  const date = new Date(experience.createdAt);

  const displayDate = date.toLocaleDateString(
    "ko-KR",
    {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }
  );

  if (viewMode === "card") {
  return (
    <div
      onClick={() =>
        router.push(
          `/experience/${experience.id}`
        )
      }
      className="
        w-64
        border
        border-black
        rounded-lg
        bg-white
        overflow-hidden
        cursor-pointer

        transition-all
        duration-200

        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      {thumbnail ? (
        <img
          src={thumbnail.url}
          alt={
            thumbnail.caption ??
            experience.title
          }
          className="
            w-full
            h-40
            object-cover
          "
        />
      ) : (
        <div
          className="
            w-full
            h-40
            border-b
            flex
            items-center
            justify-center
            text-gray-400
          "
        >
          🖼️ Media 없음
        </div>
      )}

      <div className="p-3">
        <h2
          className="
            font-bold
            text-lg
            line-clamp-2
          "
        >
          {experience.title}
        </h2>

        <div
          className="
            flex
            flex-wrap
            gap-1
            mt-3
          "
        >
          {experience.tags
            .slice(0, 3)
            .map((tag) => (
              <TagChip
                key={tag}
                tag={tag}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
if (viewMode === "compact") {
  return (
    <div
      onClick={() =>
        router.push(
          `/experience/${experience.id}`
        )
      }
      className="
        py-3
        border-b
        border-gray-200
        cursor-pointer
        hover:bg-gray-50
        transition
      "
    >
      <h2
        className="
          font-semibold
          text-lg
        "
      >
        • {experience.title}
      </h2>

      <p
        className="
          mt-1
          text-sm
          text-gray-500
        "
      >
        {experience.tags
          .slice(0, 4)
          .map(
            (tag) => `#${tag}`
          )
          .join(" · ")}
      </p>
    </div>
  );
}


  return (
    <div
      onClick={() =>
        router.push(
          `/experience/${experience.id}`
        )
      }
      className="
        border
        border-black
        rounded-lg
        p-4
        mb-4
        bg-white

        cursor-pointer

        transition-all
        duration-200

      "
    >
      <div className="flex justify-between items-start">
        <div>
          <h2 className="font-bold text-xl">
            {experience.title}
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            {experience.author} · {displayDate}
          </p>
        </div>
      </div>

      {thumbnail ? (
        <img
          src={thumbnail.url}
          alt={
            thumbnail.caption ??
            experience.title
          }
          className="
            w-full
            h-52
            object-cover
            rounded-md
            mt-4
          "
        />
      ) : (
        <div
          className="
            h-52
            mt-4
            rounded-md

            border
            border-gray-300

            flex
            items-center
            justify-center

            text-gray-400
          "
        >
          🖼️ Media 없음
        </div>
      )}

      <p className="mt-4 text-gray-800">
        {preview}
      </p>

      <div className="flex gap-2 mt-4 flex-wrap">
        {experience.tags.map((tag) => (
          <TagChip
            key={tag}
            tag={tag}
          />
        ))}
      </div>

    </div>
  );
}