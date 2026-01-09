"use client";

import { useState, useMemo } from "react";

type Video = {
  id: string;
  title: string;
  artist: string;
  genre: string;
  tag: string;
  videoUrl: string;
};

const VIDEOS: Video[] = [
  { id: "1", title: "Ocean Waves", artist: "Fresh Water", genre: "Electronic", tag: "nature", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: "2", title: "Sunset Dreams", artist: "Fresh Water", genre: "Ambient", tag: "relaxation", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: "3", title: "Electric Storm", artist: "Fresh Water", genre: "Electronic", tag: "electronic", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
];

export default function MusicLibraryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredVideos = useMemo(() => {
    return VIDEOS.filter((video) => {
      const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTag = !selectedTag || video.tag === selectedTag;
      return matchesSearch && matchesTag;
    });
  }, [searchQuery, selectedTag]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Fresh Water</h1>
        <p className="text-xl text-purple-300 mb-8">Music Library</p>

        <div className="mb-8">
          <input type="text" placeholder="Search videos..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-purple-500 focus:outline-none focus:border-cyan-500" />
        </div>

        <div className="mb-8 flex gap-2 flex-wrap">
          <button onClick={() => setSelectedTag(null)} className={px-3 py-1 rounded-full text-sm font-semibold transition \}>All</button>
          {["nature", "relaxation", "electronic"].map((tag) => (
            <button key={tag} onClick={() => setSelectedTag(tag)} className={px-3 py-1 rounded-full text-sm font-semibold transition \}>
              {tag}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <div key={video.id} className="bg-slate-800 rounded-lg overflow-hidden border border-purple-500 hover:border-cyan-500 transition hover:scale-105 transform">
              <div className="aspect-video bg-slate-900">
                <iframe src={video.videoUrl} title={video.title} className="w-full h-full" allowFullScreen />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-white">{video.title}</h3>
                <p className="text-sm text-purple-300">{video.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
