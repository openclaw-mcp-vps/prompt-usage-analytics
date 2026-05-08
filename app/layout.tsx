import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prompt Usage Analytics — Track Which AI Prompts Drive Conversions',
  description: 'Connect AI prompts to business outcomes. A/B test prompt variations with revenue attribution for product managers at AI-powered startups.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="be58901e-c9c5-4656-b8c8-accc298399bf"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
