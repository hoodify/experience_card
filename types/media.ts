export interface Media {
  id: string;
  type: "image" | "video" | "audio";
  url: string;
  caption?: string;
}