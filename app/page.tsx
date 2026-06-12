import CollectionTree from "@/components/CollectionTree";

import { collections } from "@/mock/collections";
import { experiences } from "@/mock/experiences";

export default function HomePage() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <CollectionTree
        collections={collections}
        experiences={experiences}
      />
    </main>
  );
}