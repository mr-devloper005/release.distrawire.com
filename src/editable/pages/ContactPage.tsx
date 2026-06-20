'use client'

import { FileText, Mail, Megaphone } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const desks = [
  { icon: FileText, title: 'Editorial desk', body: 'Send story ideas, corrections, source material, and publication questions.' },
  { icon: Megaphone, title: 'Media partnerships', body: 'Discuss distribution, syndication, newsroom collaborations, and campaigns.' },
  { icon: Mail, title: 'General support', body: 'Reach the team for account, publishing, or site-related help.' },
]

export default function ContactPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#f7fbff] text-[#081426]">
        <section className="relative overflow-hidden bg-[linear-gradient(115deg,#3486db_0%,#14a7c4_46%,#10c6ad_100%)] text-white">
          <div className="absolute right-20 top-10 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-8 lg:py-24">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-white/75">{pagesContent.contact.eyebrow}</p>
            <h1 className="mt-5 max-w-5xl text-5xl font-light leading-[1.05] tracking-[-0.035em] sm:text-7xl">Let us route your media request to the right place.</h1>
            <p className="mt-7 max-w-3xl text-xl font-black leading-8 text-white/88">{pagesContent.contact.description}</p>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[.82fr_1.18fr]">
            <aside className="grid gap-5">
              {desks.map((desk, index) => (
                <div key={desk.title} className="rounded-[16px] bg-white p-7 shadow-[0_18px_48px_rgba(28,76,130,.10)]">
                  <div className="flex items-center justify-between">
                    <desk.icon className="h-6 w-6 text-[#10c6ad]" />
                    <span className="text-xs font-black text-[#2f6ee5]">0{index + 1}</span>
                  </div>
                  <h2 className="mt-6 text-2xl font-black">{desk.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-[#3c526e]">{desk.body}</p>
                </div>
              ))}
            </aside>
            <div className="rounded-[16px] bg-white p-6 shadow-[0_18px_48px_rgba(28,76,130,.10)] sm:p-10">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#2f6ee5]">Send a message</p>
              <h2 className="mt-3 text-4xl font-black">{pagesContent.contact.formTitle}</h2>
              <EditableContactLeadForm />
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
