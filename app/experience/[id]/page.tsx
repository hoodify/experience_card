import TagChip from "@/components/TagChip";
import { experiences } from "@/mock/experiences";
import Link from "next/link";
import { collections } from "@/mock/collections";
import { getCollectionPath } from "@/utils/getCollectionPath";
import { ChevronRight } from "lucide-react";
import ExperienceCard from "@/components/ExperienceCard";
import RelatedExperiences from "@/components/RelatedExperiences";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

  export default async function ExperiencePage({
    params,
  }: Props) {
    
  const { id } = await params;

  const experience = experiences.find(
    (exp) => exp.id === id
    
  );

  if (!experience) {
    return (
      <main className="p-8">
        Experience not found
      </main>
    );
  }

  const collectionPath =
  experience.collectionIds.length > 0
    ? getCollectionPath(
        experience.collectionIds[0],
        collections
      )
    : [];
  

  const relatedExperiences =
  experiences
    .filter(
      (exp) =>
        exp.id !== experience.id &&
        exp.tags.some((tag) =>
          experience.tags.includes(tag)
        )
    )
    .slice(0, 6);

  const date = new Date(
    experience.createdAt
  );

  const displayDate =
    date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
    });

  return (
    <main className="max-w-4xl mx-auto p-8 w-full">

      <Link
        href="/"
        className="
        inline-flex
        items-center
        gap-2
        mb-6
        px-3
        py-2
        border
        border-black
        rounded-md
        bg-white
        hover:bg-gray-100
        transition
        "
    >
        ← Home
    </Link>

    <div
      className="
        flex
        items-center
        gap-2
        flex-wrap
        text-sm
        text-gray-500
        mb-6
      "
    >
      {collectionPath.map(
        (collection) => (
          <div
            key={collection.id}
            className="
              flex
              items-center
              gap-2
            "
          >
            <span>
              {collection.name}
            </span>

            <ChevronRight
              size={14}
            />
          </div>
        )
      )}

      <span>
        {experience.title}
      </span>
    </div>


      <h1 className="text-4xl font-bold">
        {experience.title}
      </h1>

      <p className="mt-3 text-gray-500">
        {experience.author} · {displayDate}
      </p>

      {/* 태그 */}
      <div className="flex gap-2 mt-6 flex-wrap">
        {experience.tags.map((tag) => (
          <TagChip
            key={tag}
            tag={tag}
          />
        ))}
      </div>

      <hr className="my-8 border-gray-300" />

      {/* 본문 */}
      <div
        className="
          mt-8
          whitespace-pre-wrap
          leading-8
          text-gray-800
        "
      >
        {experience.content}
      </div>

      <RelatedExperiences
        experiences={relatedExperiences}
      />

    </main>
  );
}