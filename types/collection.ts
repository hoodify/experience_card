export interface Collection {
  id: string;

  name: string;

  description?: string;

  ownerId: string;

  parentId?: string | null;

  createdAt: string;
}