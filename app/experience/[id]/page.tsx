import { experiences } from "@/mock/experiences";

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

  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold">
        {experience.title}
      </h1>

      <p className="mt-2 text-gray-500">
        {experience.author}
      </p>

      <div className="mt-6 whitespace-pre-wrap">
        {experience.content}
      </div>
    </main>
  );
}