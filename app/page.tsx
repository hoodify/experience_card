import ExperienceCard from "@/components/ExperienceCard";
import { experiences } from "@/mock/experiences";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">
        Experience Platform
      </h1>

      {experiences.map((exp) => (
        <ExperienceCard
          key={exp.id}
          experience={exp}
        />
      ))}
    </main>
  );
}