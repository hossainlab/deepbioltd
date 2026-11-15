import { redirect } from 'next/navigation'

/**
 * Training lives on DeepBio Academy. This route forwards old links there.
 * Previous page: backups/homepage-2026-11-15/training/page.tsx (components/TrainingPage.tsx).
 */
export default function Training() {
  redirect('https://deepbioacademy.com/')
}
