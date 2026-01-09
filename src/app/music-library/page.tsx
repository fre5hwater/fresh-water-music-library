"use client";

import { useState, useMemo } from "react";

type Video = {
  id: string;
  title: string;
  artist: string;
  genre: string;
  durationSeconds: number;
  tag: string;
  featured: boolean;
  videoUrl: string;
};

const VIDEOS: Video[] = [
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

export default function MusicLibraryPage() {
  const [selectedTheme, setSelectedTheme] = useState("neon-grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredVideos = useMemo(() => {
    return VIDEOS.filter((video) => {
      const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.artist.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTag = !selectedTag || video.tag === selectedTag;
      return matchesSearch && matchesTag;
    });
  }, [searchQuery, selectedTag]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">Fresh Water</h1>
          <p className="text-xl text-purple-300">Music & Video Library</p>
        </div>

        {/* Theme Selector */}
        <div className="mb-8 flex gap-4">
          <button
            onClick={() => setSelectedTheme("neon-grid")}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              selectedTheme === "neon-grid"
                ? "bg-cyan-500 text-black"
                : "bg-slate-700 text-white hover:bg-slate-600"
            }`}
          >
            Neon Grid
          </button>
          <button
            onClick={() => setSelectedTheme("midnight")}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              selectedTheme === "midnight"
                ? "bg-indigo-500 text-white"
                : "bg-slate-700 text-white hover:bg-slate-600"
            }`}
          >
            Midnight
          </button>
          <button
            onClick={() => setSelectedTheme("electric")}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              selectedTheme === "electric"
                ? "bg-yellow-400 text-black"
                : "bg-slate-700 text-white hover:bg-slate-600"
            }`}
          >
            Electric
          </button>
        </div>

        {/* Search */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search videos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white placeholder-slate-400 border border-purple-500 focus:outline-none focus:border-cyan-500 transition"
          />
        </div>

        {/* Tag Filter */}
        <div className="mb-8 flex gap-2 flex-wrap">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-3 py-1 rounded-full text-sm font-semibold transition ${
              selectedTag === null
                ? "bg-purple-500 text-white"
                : "bg-slate-700 text-white hover:bg-slate-600"
            }`}
          >
            All
          </button>
          {["nature", "relaxation", "electronic", "ambient"].map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 rounded-full text-sm font-semibold transition ${
                selectedTag === tag
                  ? "bg-purple-500 text-white"
                  : "bg-slate-700 text-white hover:bg-slate-600"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="group bg-slate-800 rounded-lg overflow-hidden border border-purple-500 hover:border-cyan-500 transition transform hover:scale-105"
            >
              <div className="aspect-video bg-slate-900 relative overflow-hidden">
                <iframe
                  src={video.videoUrl}
                  title={video.title}
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-1">{video.title}</h3>
                <p className="text-sm text-purple-300 mb-2">{video.artist}</p>
                <p className="text-xs text-slate-400">{video.genre}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="bg-slate-800 rounded-lg border border-purple-500 p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg bg-slate-700 text-white placeholder-slate-400 border border-purple-500 focus:outline-none focus:border-cyan-500 transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-lg bg-slate-700 text-white placeholder-slate-400 border border-purple-500 focus:outline-none focus:border-cyan-500 transition"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-2 rounded-lg bg-slate-700 text-white placeholder-slate-400 border border-purple-500 focus:outline-none focus:border-cyan-500 transition"
            />
            <button
              type="submit"
              className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}