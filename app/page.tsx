import CollectionTree from "@/components/CollectionTree";

import { collections } from "@/mock/collections";
import { experiences } from "@/mock/experiences";

import {
  Waypoints,
  FolderTree,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="max-w-4xl mx-auto w-full p-6">
      {/* Header */}
      <header className="mb-10">
        <div className="flex items-center gap-4">
          <div
            className="
              p-0.5
              border
              border-black
              rounded-xl
              shadow-[2px_2px_0px_1px_rgba(0,0,0,0.7)]
              bg-white
            "
          >
            <img
              src="/images/icon.png"
              alt="Experience Platform Logo"
              className="w-14 h-14 object-contain"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold">
              Experience Platform
            </h1>

            <p className="mt-1 text-gray-500">
            </p>
          </div>
        </div>
      </header>

      {/* Collection */}
      <section>
        <div
          className="
            flex
            items-center
            gap-2
            mb-4
          "
        >
          <FolderTree size={20} />

          <h2 className="text-xl font-bold">
            Collections
          </h2>
        </div>

        <CollectionTree
          collections={collections}
          experiences={experiences}
        />
      </section>
    </main>
  );
}