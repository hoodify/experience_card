import TagChip from "@/components/TagChip";
import { experiences } from "@/mock/experiences";
import Link from "next/link";

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
    <main className="max-w-4xl mx-auto p-8">

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
    </main>
  );
}