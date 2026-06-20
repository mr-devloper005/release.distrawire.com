import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#f7fbff] text-[#081426]">
        <section className="relative overflow-hidden bg-[linear-gradient(115deg,#3486db_0%,#14a7c4_46%,#10c6ad_100%)] text-white">
          <div className="newswire-hero-glow absolute right-20 top-16 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="mx-auto grid max-w-[1280px] gap-12 px-4 py-16 sm:px-8 lg:grid-cols-[1fr_.85fr] lg:items-center lg:py-24">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-white/75">{pagesContent.about.badge}</p>
              <h1 className="mt-5 max-w-5xl text-5xl font-light leading-[1.05] tracking-[-0.035em] sm:text-7xl">Press release distribution built for clearer reach.</h1>
              <p className="mt-7 max-w-3xl text-xl font-black leading-8 text-white/88">{pagesContent.about.description}</p>
              <Link href="/search" className="mt-9 inline-flex items-center gap-2 rounded-[5px] bg-[#10c6ad] px-7 py-3.5 text-sm font-black text-white transition hover:bg-[#0aa58f]">Explore the archive <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="newswire-card-float rounded-[18px] bg-white p-6 text-[#081426] shadow-[0_26px_80px_rgba(7,32,62,.22)]">
              <p className="text-xs font-black uppercase tracking-[.22em] text-[#2f6ee5]">About {SITE_CONFIG.name}</p>
              <div className="mt-6 grid gap-4">
                {['Media-ready updates', 'Audience discovery', 'Simple publishing flow'].map((item) => (
                  <span key={item} className="inline-flex items-center gap-3 rounded-[10px] bg-[#eef6ff] px-4 py-3 text-sm font-black">
                    <CheckCircle2 className="h-5 w-5 text-[#10c6ad]" /> {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[1.2fr_.8fr]">
            <article className="rounded-[16px] bg-white p-7 shadow-[0_18px_48px_rgba(28,76,130,.10)] sm:p-10 lg:p-12">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#2f6ee5]">What we do</p>
              <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.035em]">A focused place for announcements, visibility, and public updates.</h2>
              <div className="mt-8 grid gap-5 text-lg leading-8 text-[#3c526e]">
                {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </article>
            <aside className="grid gap-5">
              {pagesContent.about.values.map((value, index) => (
                <div key={value.title} className="rounded-[16px] bg-[#eef6ff] p-7 shadow-sm">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#2f6ee5]">0{index + 1}</p>
                  <h3 className="mt-4 text-2xl font-black leading-tight">{value.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#3c526e]">{value.description}</p>
                </div>
              ))}
            </aside>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
