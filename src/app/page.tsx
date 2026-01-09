export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Fresh Water</h1>
        <p className="text-xl text-purple-300 mb-8">Music & Video Library</p>
        <a href="/music-library" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition">
          View Library
        </a>
      </div>
    </div>
  );
}
