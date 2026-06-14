"use client";

import { useState } from "react";

import CollectionTree from "@/components/CollectionTree";
import type { ViewMode } from "@/types/view";
import { collections } from "@/mock/collections";
import { experiences } from "@/mock/experiences";

import {
  Waypoints,
  FolderTree,
  Rows3,
  LayoutGrid,
} from "lucide-react";

export default function HomePage() {
  const [viewMode, setViewMode] =
    useState<ViewMode>("wide");

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
            justify-between
            mb-4
          "
        >
          <div
            className="
              flex
              items-center
              gap-2
            "
          >
            <FolderTree size={20} />

            <h2 className="text-xl font-bold">
              Collections
            </h2>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() =>
                setViewMode("wide")
              }
              className={`
                p-2
                border
                border-black
                rounded-md
                transition-all
                cursor-pointer
                ${
                  viewMode === "wide"
                    ? "bg-black text-white"
                    : "bg-white"
                }
              `}
            >
              <Rows3 size={18} />
            </button>

            <button
              onClick={() =>
                setViewMode("card")
              }
              className={`
                p-2
                border
                border-black
                rounded-md
                transition-all
                cursor-pointer
                ${
                  viewMode === "card"
                    ? "bg-black text-white"
                    : "bg-white"
                }
              `}
            >
              <LayoutGrid size={18} />
            </button>
          </div>
        </div>

        <CollectionTree
          collections={collections}
          experiences={experiences}
          viewMode={viewMode}
        />
      </section>
    </main>
  );
}