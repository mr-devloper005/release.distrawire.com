import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalLoginForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/login', title: 'Login', description: pagesContent.auth.login.metadataDescription })
}

export default function LoginPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#eef6ff] text-[#081426]">
        <section className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-[1280px] gap-8 px-4 py-12 sm:px-8 lg:grid-cols-[1fr_.9fr] lg:items-center lg:py-20">
          <div className="relative overflow-hidden rounded-[18px] bg-[linear-gradient(115deg,#3486db_0%,#14a7c4_48%,#10c6ad_100%)] p-8 text-white shadow-[0_26px_80px_rgba(7,32,62,.20)] sm:p-12 lg:p-16">
            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <p className="text-xs font-black uppercase tracking-[0.28em] text-white/75">{pagesContent.auth.login.badge}</p>
            <h1 className="mt-5 max-w-xl text-5xl font-light leading-[1.05] tracking-[-0.035em] sm:text-7xl">{pagesContent.auth.login.title}</h1>
            <p className="mt-6 max-w-lg text-lg font-black leading-8 text-white/82">{pagesContent.auth.login.description}</p>
            <div className="mt-10 grid gap-3">
              {['Create and manage submissions', 'Keep details ready for publishing', 'Return to the newsroom faster'].map((item) => (
                <span key={item} className="inline-flex items-center gap-3 text-sm font-black"><CheckCircle2 className="h-5 w-5 text-[#d9fff7]" />{item}</span>
              ))}
            </div>
          </div>
          <div className="rounded-[18px] bg-white p-7 shadow-[0_18px_48px_rgba(28,76,130,.10)] sm:p-10">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#2f6ee5]">Member access</p>
            <h2 className="mt-3 text-4xl font-black">{pagesContent.auth.login.formTitle}</h2>
            <EditableLocalLoginForm />
            <p className="mt-5 border-t border-[#d6e4f2] pt-5 text-sm text-[#3c526e]">New here? <Link href="/signup" className="font-black text-[#0b55b6] underline-offset-4 hover:underline">{pagesContent.auth.login.createCta}</Link></p>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
