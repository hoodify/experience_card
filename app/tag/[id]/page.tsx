import { experiences } from "@/mock/experiences";
import TagChip from "@/components/TagChip";
import ExperienceCard from "@/components/ExperienceCard";
import Link from "next/link";

import { ViewMode } from "@/types/view";



interface Props {
  params: Promise<{
    id: string;
  }>;
  
  viewMode: ViewMode;
}

export default async function TagPage({
  params,
  viewMode,
}: Props) {
  const { id } = await params;

  const tag = decodeURIComponent(id);

  const relatedExperiences =
    experiences.filter((exp) =>
      exp.tags.includes(tag)
    );

    const relatedTags = Array.from(
    new Set(
        relatedExperiences.flatMap(
        (exp) => exp.tags
        )
    )
    )
    .filter((t) => t !== tag)
    .slice(0, 15);

  return (
  <main className="max-w-5xl mx-auto p-8">

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


    <h1 className="text-4xl font-bold">
      #{tag}
    </h1>

    <p className="mt-2 text-gray-500">
      총 {relatedExperiences.length}개의 경험
    </p>

    {/* 관련 태그 */}
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-3">
        관련 태그
      </h2>

      <div className="flex flex-wrap gap-2">
        {relatedTags.map((t) => (
          <TagChip
            key={t}
            tag={t}
          />
        ))}
      </div>
    </div>

    {/* 경험 목록 */}
    <div className="mt-10 flex flex-wrap gap-4">
      {relatedExperiences.map((exp) => (
        <ExperienceCard
          key={exp.id}
          experience={exp}
          viewMode={'card'}
        />
      ))}
    </div>
  </main>
);
}