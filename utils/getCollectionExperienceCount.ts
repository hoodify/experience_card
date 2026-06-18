import { Collection } from "@/types/collection";
import { Experience } from "@/types/experience";

export function getCollectionExperienceCount(
  collectionId: string,
  collections: Collection[],
  experiences: Experience[]
): number {
  // 현재 collection에 속한 경험
  const ownExperiences =
    experiences.filter((exp) =>
      exp.collectionIds?.includes(
        collectionId
      )
    ).length;

  // 자식 collection
  const childCollections =
    collections.filter(
      (c) =>
        c.parentId === collectionId
    );

  // 자식들의 경험 수 재귀 합산
  const childExperienceCount =
    childCollections.reduce(
      (sum, child) =>
        sum +
        getCollectionExperienceCount(
          child.id,
          collections,
          experiences
        ),
      0
    );

  return (
    ownExperiences +
    childExperienceCount
  );
}