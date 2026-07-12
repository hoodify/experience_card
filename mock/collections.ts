import { Collection } from "@/types/collection";

export const collections: Collection[] = [
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
    image: "/collection-images/movie.png",
  },

  {
    id: "movie-korean",
    name: "국내",
    ownerId: "u1",
    parentId: "movie",
    createdAt: "2026-01-01",
  },
  {
    id: "movie-overseas",
    name: "해외",
    ownerId: "u1",
    parentId: "movie",
    createdAt: "2026-01-01",
  },

  {
    id: "movie-theater",
    name: "영화관",
    ownerId: "u1",
    parentId: "movie",
    createdAt: "2026-01-01",
  },

  {
    id: "direction-ref",
    name: "연출 ref",
    ownerId: "u1",
    parentId: "movie",
    createdAt: "2026-01-01",
  },

  {
    id: "reader",
    name: "독서가",
    ownerId: "u1",
    parentId: null,
    createdAt: "2026-01-01",
  },

  {
    id: "reading-records",
    name: "독서가의 기록",
    ownerId: "u1",
    parentId: "reader",
    createdAt: "2026-01-01",
  },

  {
    id: "reading-log",
    name: "독서 로그",
    ownerId: "u1",
    parentId: "reader",
    createdAt: "2026-01-01",
  },
  
  {
    id: "reading-place",
    name: "독서 장소",
    ownerId: "u1",
    parentId: "reader",
    createdAt: "2026-01-01",
  },
  {
    id: "bookshelf",
    name: "책장",
    ownerId: "u1",
    parentId: "reader",
    createdAt: "2026-01-01",
  },
  
  {
    id: "idea",
    name: "아이디어",
    ownerId: "u1",
    parentId: null,
    createdAt: "2026-01-01",
  },
  
  {
    id: "music",
    name: "음악",
    ownerId: "u1",
    parentId: null,
    createdAt: "2026-01-01",
  },
  {
    id: "music-live",
    name: "라이브 음악",
    ownerId: "u1",
    parentId: "music",
    createdAt: "2026-01-01",
  },
  {
    id: "music-collection",
    name: "음악 모음",
    ownerId: "u1",
    parentId: "music",
    createdAt: "2026-01-01",
  },
  {
    id: "music-record",
    name: "기록",
    ownerId: "u1",
    parentId: "music",
    createdAt: "2026-01-01",
  },
  {
    id: "music-moment",
    name: "순간",
    ownerId: "u1",
    parentId: "music",
    createdAt: "2026-01-01",
  },
  {
    id: "season",
    name: "계절",
    ownerId: "u1",
    parentId: null,
    createdAt: "2026-01-01",
  },
  {
    id: "season-insight",
    name: "인사이트",
    ownerId: "u1",
    parentId: "season",
    createdAt: "2026-01-01",
  },
  {
    id: "season-records",
    name: "일지",
    ownerId: "u1",
    parentId: "season",
    createdAt: "2026-01-01",
  },
  {
    id: "season-sky-color",
    name: "하늘색 수집",
    ownerId: "u1",
    parentId: "season",
    createdAt: "2026-01-01",
  },

  
  {
    id: "season-wind",
    name: "바람 수집",
    ownerId: "u1",
    parentId: "season",
    createdAt: "2026-01-01",
  },

  {
    id: "bucket-list",
    name: "버킷리스트",
    ownerId: "u1",
    parentId: null,
    createdAt: "2026-01-01",
  },
  {
    id: "knowledge-map",
    name: "지식의 지도",
    ownerId: "u1",
    parentId: null,
    createdAt: "2026-01-01",
  },
  {
    id: "history",
    name: "역사",
    ownerId: "u1",
    parentId: 'knowledge-map',
    createdAt: "2026-01-01",
  },
  {
    id: "in-english",
    name: "In English",
    ownerId: "u1",
    parentId: 'knowledge-map',
    createdAt: "2026-01-01",
  },
  {
    id: "etymology",
    name: "어원, 이름",
    ownerId: "u1",
    parentId: 'knowledge-map',
    createdAt: "2026-01-01",
  },
  {
    id: "contents-collection",
    name: "콘텐츠 수집",
    ownerId: "u1",
    parentId: null,
    createdAt: "2026-01-01",
  },
  {
    id: "recent-issues",
    name: "최근 이슈",
    ownerId: "u1",
    parentId: 'contents-collection',
    createdAt: "2026-01-01",
  },
  {
    id: "humor",
    name: "유머",
    ownerId: "u1",
    parentId: null,
    createdAt: "2026-01-01",
  },
  
  {
    id: "why-funny",
    name: "웃긴 것은 왜 웃긴가",
    ownerId: "u1",
    parentId: 'humor',
    createdAt: "2026-01-01",
  },
  {
    id: "funny-collection",
    name: "모음",
    ownerId: "u1",
    parentId: 'humor',
    createdAt: "2026-01-01",
  },
  {
    id: "delicious-world",
    name: "세상의 진미",
    ownerId: "u1",
    parentId: null,
    createdAt: "2026-01-01",
  },
  {
    id: "ingredient",
    name: "재료",
    ownerId: "u1",
    parentId: 'delicious-world',
    createdAt: "2026-01-01",
  },
  {
    id: "food-thoughts",
    name: "음식 생각",
    ownerId: "u1",
    parentId: 'delicious-world',
    createdAt: "2026-01-01",
  },
  {
    id: "food-diary",
    name: "음식 일지",
    ownerId: "u1",
    parentId: 'delicious-world',
    createdAt: "2026-01-01",
  },
  
  {
    id: "smell-and-memory",
    name: "냄새와 기억",
    ownerId: "u1",
    parentId: null,
    createdAt: "2026-01-01",
  },
  
];