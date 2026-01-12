import Link from 'next/link'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white">
      <div className="text-center space-y-6 px-6">
        <h1 className="text-6xl font-bold text-slate-900">404</h1>
        <h2 className="text-2xl font-semibold text-slate-700">Page Not Found</h2>
        <p className="text-slate-600 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white rounded-full font-semibold hover:bg-opacity-90 transition-all"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </div>
  )
}
