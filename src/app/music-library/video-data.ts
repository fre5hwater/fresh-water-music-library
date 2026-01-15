export type Video = {
  id: string;
  title: string;
  artist: string;
  genre: string;
  durationSeconds: number;
  tag: string;
  featured: boolean;
  videoUrl: string;
};

export const VIDEOS: Video[] = [
  {
    id: "1",
    title: "Ocean Waves",
    artist: "Fresh Water",
    genre: "Electronic",
    durationSeconds: 240,
    tag: "nature",
    featured: true,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "2",
    title: "Sunset Dreams",
    artist: "Fresh Water",
    genre: "Ambient",
    durationSeconds: 180,
    tag: "relaxation",
    featured: true,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];
