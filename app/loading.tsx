export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white">
      <div className="text-center">
        <div className="inline-block w-16 h-16 border-4 border-brand-primary border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-slate-600 font-semibold">Loading...</p>
      </div>
    </div>
  )
}
