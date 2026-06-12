import { Collection } from "@/types/collection";

export const collections = [
  {
    id: "travel",
    name: "여행",
    ownerId: "u1",
    parentId: null,
    createdAt: "2026-01-01",
  },

  {
    id: "travel-domestic",
    name: "국내",
    ownerId: "u1",
    parentId: "travel",
    createdAt: "2026-01-01",
  },

  {
    id: "movie",
    name: "영화",
    ownerId: "u1",
    parentId: null,
    createdAt: "2026-01-01",
  },

  {
    id: "movie-korean",
    name: "국내",
    ownerId: "u1",
    parentId: "movie",
    createdAt: "2026-01-01",
  },
];