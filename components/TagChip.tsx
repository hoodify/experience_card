"use client";

import { useRouter } from "next/navigation";

interface Props {
  tag: string;
}

export default function TagChip({
  tag,
}: Props) {
  const router = useRouter();

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        router.push(
          `/tag/${encodeURIComponent(tag)}`
        );
      }}
      className="
        cursor-pointer
        m-1
        px-3
        py-1.5
        rounded
        bg-white
        border
        border-black
        text-black
        text-sm
        shadow-[1px_1px_0px_1px_rgba(0,0,0,0.7)]
        transition-all
        duration-200
        hover:-translate-y-1
      "
    >
      #{tag}
    </button>
  );
}