"use client";

import {
  useEffect,
  useState,
} from "react";

interface Props {
  images: {
    id: string;
    url: string;
    caption?: string;
  }[];
}

export default function MediaGallery({
  images,
}: Props) {
  const [
    selectedIndex,
    setSelectedIndex,
  ] = useState<number | null>(
    null
  );

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const goPrev = () => {
    if (selectedIndex === null) {
      return;
    }

    setSelectedIndex(
      (selectedIndex - 1 +
        images.length) %
        images.length
    );
  };

  const goNext = () => {
    if (selectedIndex === null) {
      return;
    }

    setSelectedIndex(
      (selectedIndex + 1) %
        images.length
    );
  };

  useEffect(() => {
    if (selectedIndex === null) {
      return;
    }

    const handleKeyDown = (
      e: KeyboardEvent
    ) => {
      if (e.key === "Escape") {
        closeModal();
      }

      if (e.key === "ArrowLeft") {
        goPrev();
      }

      if (e.key === "ArrowRight") {
        goNext();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [selectedIndex]);

  return (
    <>
      {/* Gallery */}
      <div
        className="
          grid
          grid-cols-2
          md:grid-cols-3
          gap-4
        "
      >
        {images.map(
          (item, index) => (
            <img
              key={item.id}
              src={item.url}
              alt={item.caption}
              onClick={() =>
                setSelectedIndex(index)
              }
              className="
                w-full
                rounded-lg
                object-cover
                cursor-pointer

                transition
                duration-200

                hover:scale-[1.02]
                hover:shadow-lg
              "
            />
          )
        )}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          onClick={closeModal}
          className="
            fixed
            inset-0
            z-50

            bg-black/85

            flex
            items-center
            justify-center

            p-6
          "
        >
          {/* Close */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeModal();
            }}
            className="
              absolute
              top-6
              right-6

              text-white
              text-4xl
              font-light

              hover:opacity-70
              transition
            "
          >
            ✕
          </button>

          {/* Prev */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="
                absolute
                left-6

                text-white
                text-5xl

                hover:opacity-70
                transition
              "
            >
              ‹
            </button>
          )}

          {/* Image */}
          <div
            onClick={(e) =>
              e.stopPropagation()
            }
            className="
              flex
              flex-col
              items-center
              gap-4
            "
          >
            <img
              src={
                images[selectedIndex].url
              }
              alt={
                images[selectedIndex]
                  .caption
              }
              className="
                max-w-[90vw]
                max-h-[80vh]
                rounded-lg
                object-contain
              "
            />

            {images[selectedIndex]
              .caption && (
              <p
                className="
                  text-white
                  text-sm
                  text-center
                "
              >
                {
                  images[
                    selectedIndex
                  ].caption
                }
              </p>
            )}
          </div>

          {/* Next */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="
                absolute
                right-6

                text-white
                text-5xl

                hover:opacity-70
                transition
              "
            >
              ›
            </button>
          )}
        </div>
      )}
    </>
  );
}