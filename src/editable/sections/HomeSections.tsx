import Link from 'next/link'
import { ArrowRight, CheckCircle2, Plus, Star } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

const trustLogos = ['U.S. POLO ASSN.', 'ILLINOIS', 'ASHLEY', 'TALBOTS', 'Hogan Lovells', 'ESSILOR', 'GENERAL ATOMICS', 'SEIDOR']
const proofPoints = ['#1 in customer satisfaction since 2018', 'Best in class science, process and technology', 'Simple, targeted and cost-effective']
const services = [
  { title: 'CONTENT PRO', copy: 'Made for brands that need help consistently fueling their content machines with optimized releases, blogs, and more.', features: ['Press Release Calendar', 'Press Release Writing', 'SEO Optimization', 'Online Media Room'] },
  { title: 'MEDIA PRO', copy: 'Made for brands that need help bridging the gap between their content and the media.', features: ['Custom Media Targeting', 'Media Pitching', 'Media Monitoring', 'Media Databases'] },
  { title: 'TOTAL PRO', copy: 'Made for brands that want to outsource release distribution and maximize their return on investment.', features: ['Content PRO + Media PRO', 'Campaign Planning', 'Performance Reporting', 'Audience Targeting'] },
]

function Stars() {
  return <span className="inline-flex gap-1 text-[#ffc145]">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-5 w-5 fill-current" />)}</span>
}

function HeroPreview() {
  return (
    <div className="newswire-card-float relative mx-auto w-full max-w-[350px] overflow-hidden rounded-[16px] bg-white shadow-[0_26px_80px_rgba(7,32,62,.26)]">
      <div className="bg-[#2d005d] p-5 text-3xl font-light leading-tight text-white">Get your story seen <br /><span className="font-black">in the right places!</span></div>
      <div className="relative h-60 overflow-hidden bg-[linear-gradient(135deg,#5d4b13_0%,#8a741c_45%,#332205_100%)]">
        <div className="absolute inset-0 opacity-35 [background-image:radial-gradient(circle_at_22%_30%,#fff_0_8%,transparent_9%),radial-gradient(circle_at_55%_45%,#fff_0_10%,transparent_11%),radial-gradient(circle_at_76%_28%,#fff_0_7%,transparent_8%)]" />
        <div className="absolute bottom-0 left-0 h-32 w-32 rounded-tr-[70px] bg-black/25" />
        <div className="absolute right-4 top-4 text-right text-2xl font-black leading-none text-[#ffd75a]">yahoo!<br /><span className="text-sm">finance</span></div>
        <p className="absolute bottom-20 right-5 max-w-[190px] text-right text-sm font-black leading-tight text-[#ffd75a]">Get a prime spot for earnings reports, executive changes and market updates.</p>
      </div>
      <div className="flex items-center justify-between gap-3 px-5 py-3 text-[#35165e]">
        <span className="text-2xl font-black">Monthly views</span>
        <span className="text-4xl font-light">190M+</span>
      </div>
      <div className="pointer-events-none absolute -bottom-32 inset-x-0 h-32 scale-y-[-1] opacity-20 blur-[1px]">
        <div className="h-full bg-white" />
      </div>
    </div>
  )
}

export function EditableHomeHero({ primaryRoute }: HomeSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#f4f6fb]">
      <div className="newswire-wave-top relative min-h-[720px] bg-[linear-gradient(115deg,#3486db_0%,#14a7c4_46%,#10c6ad_100%)] text-white">
        <div className="newswire-hero-glow absolute right-[13%] top-28 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className={`${dc.shell.section} grid gap-10 py-16 lg:grid-cols-[1fr_.95fr] lg:items-start lg:py-20`}>
          <div className="mx-auto max-w-[580px] lg:mx-0 lg:pl-56">
            <h1 className="text-5xl font-light leading-[1.06] tracking-[-.03em] sm:text-6xl">Simplify Press<br />Release Distribution</h1>
            <p className="mt-12 max-w-xl text-2xl font-black leading-[1.5]">Distribute the Right Message<br />to the Right Audience at the Right Time<br />with our press release distribution services</p>
            <Link href="/search" className={`${dc.button.accent} mt-10`}>Submit a Press Release</Link>
            <div className="mt-16 flex flex-wrap items-end gap-9">
              <div className="rounded-[4px] bg-white/85 px-4 py-3 text-center text-[#1f2a38] shadow-lg">
                <div className="mx-auto mb-2 h-7 w-7 rounded bg-[#ff4d38] text-sm font-black text-white">G</div>
                <p className="text-lg font-black">Leader</p>
                <p className="rounded bg-[#ff4d38] px-2 py-0.5 text-[10px] font-black text-white">Small Business</p>
                <p className="text-xs font-black">WINTER<br />2024</p>
              </div>
              <div>
                <p className="text-2xl font-black">TrustRadius</p>
                <Stars />
              </div>
              <div>
                <p className="text-3xl font-black">Capterra</p>
                <Stars />
              </div>
            </div>
          </div>
          <div className="pt-2 lg:pt-12">
            <HeroPreview />
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableStoryRail(_props: HomeSectionProps) {
  return (
    <>
      <section className="bg-[#f4f6fb] py-12 text-center">
        <h2 className="text-4xl font-light tracking-[.02em] text-[#2f6ee5]">Trusted by thousands</h2>
      </section>
      <section className="overflow-hidden bg-white py-7">
        <div className="newswire-marquee-track flex w-max items-center gap-16 opacity-35 grayscale">
          {[...trustLogos, ...trustLogos].map((logo, index) => <span key={`${logo}-${index}`} className="min-w-36 text-center text-2xl font-black tracking-[.08em] text-[#6d7784]">{logo}</span>)}
        </div>
      </section>
      <section className="bg-[#f4f6fb] py-8">
        <div className="mx-auto flex max-w-[1200px] flex-wrap justify-center gap-x-16 gap-y-4 px-4 text-[#2457ae]">
          {proofPoints.map((point) => <span key={point} className="inline-flex items-center gap-3 text-sm sm:text-base"><CheckCircle2 className="h-5 w-5 rounded-full bg-[#d9fff7] text-[#10c6ad]" />{point}</span>)}
        </div>
      </section>
      <section className="bg-[#10c6ad] px-4 py-16 text-center text-white sm:py-24">
        <div className="mx-auto max-w-[1120px] rounded-[10px] bg-[#eef6ff] px-6 py-12 text-[#081426] sm:px-12">
          <h2 className="text-3xl font-black leading-tight sm:text-4xl">Press release distribution and multimedia software<br className="hidden sm:block" /> and services</h2>
          <p className="mx-auto mt-8 max-w-4xl text-3xl font-light leading-tight tracking-[.04em] text-[#c400d9]">Greater brand awareness, increased traffic and improved<br className="hidden lg:block" /> return on media communications spend.</p>
        </div>
        <div className="mx-auto mt-14 max-w-[1240px] overflow-hidden">
          <div className="newswire-slide-track flex w-max gap-5">
            {[...services, ...services].map((service, index) => (
              <div key={`${service.title}-${index}`} className="w-[290px] shrink-0 rounded-[14px] bg-white p-6 text-left text-[#081426] shadow-[0_18px_42px_rgba(8,20,38,.14)] sm:w-[340px]">
                <p className="text-[10px] font-black uppercase tracking-[.2em] text-[#2f6ee5]">Newswire service</p>
                <h3 className="mt-3 text-2xl font-black">{service.title}</h3>
                <p className="mt-4 text-sm font-semibold leading-6 text-[#3c526e]">{service.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export function EditableMagazineSplit({ primaryRoute }: HomeSectionProps) {
  return (
    <section className="newswire-wave-bottom bg-[#10c6ad] px-4 pb-24 pt-10 text-white">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center">
          <h2 className="text-4xl font-black">Press Release Optimizer</h2>
          <p className="mx-auto mt-8 max-w-2xl border-b border-white/45 pb-7 text-2xl font-light text-[#2c5d7f]">All our products and services under one subscription</p>
        </div>
        <div className="mt-20 grid gap-10 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="flex flex-col">
              <h3 className="text-3xl font-black">{service.title}</h3>
              <p className="mt-4 min-h-24 text-[15px] font-black leading-7 text-[#235aaa]">{service.copy}</p>
              <Link href="/about" className="mt-8 flex items-center justify-between rounded-[5px] bg-[#3c79df] px-5 py-3 text-xl font-light text-white transition hover:bg-[#235aaa]">Learn More <Plus /></Link>
              <p className="mt-8 font-black text-[#235aaa] underline">Features</p>
              <div className="mt-2 grid gap-3 text-[#081426]">
                {service.features.map((feature) => <span key={feature} className="inline-flex items-center gap-3"><CheckCircle2 className="h-5 w-5 rounded-full bg-[#d9fff7] text-[#10c6ad]" />{feature}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryRoute }: HomeSectionProps) {
  return (
    <>
      <section className="bg-[#f7fbff] px-4 py-20">
        <div className="mx-auto max-w-[1120px] rounded-[10px] bg-[#eef6ff] px-6 py-14 text-center shadow-sm sm:px-12">
          <h2 className="text-4xl font-black">Learn more about Newswire</h2>
          <p className="mx-auto mt-7 max-w-3xl text-2xl font-light leading-snug text-[#3c526e]">Leverage press release distribution and media technology as a marketing channel to drive sales.</p>
          <div className="mt-12 flex flex-wrap justify-center gap-12 text-[#3c526e]">
            <span className="inline-flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-[#10c6ad]" />Boost SEO rankings</span>
            <span className="inline-flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-[#10c6ad]" />Increase sales opportunities</span>
          </div>
          <Link href="/signup" className={`${dc.button.accent} mt-9`}>Free PR Guide</Link>
        </div>
      </section>

      <section className="bg-[#f7fbff] px-4 py-20">
        <div className="mx-auto max-w-[1280px] text-center">
          <h2 className="text-4xl font-black">Flexible Press Release Services to fit your needs</h2>
          <p className="mt-6 text-2xl font-light text-[#3c526e]">Newswire offers software and services to help meet any goals or budget</p>
          <div className="mt-14 grid items-center gap-12 text-left lg:grid-cols-[1fr_.95fr]">
            <div>
              <h3 className="text-4xl font-black leading-tight">Press Release Services for<br />small businesses</h3>
              <p className="mt-7 max-w-2xl text-2xl font-light leading-snug text-[#3c526e]">Create buzz for your company with an easy-to-use tool that includes a media database of contacts and pitches journalists right from the app.</p>
              <div className="mt-10 grid gap-6 text-[#3c526e]">
                <span className="inline-flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-[#10c6ad]" />Easily find and target the right journalists</span>
                <span className="inline-flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-[#10c6ad]" />Maximize engagement while limiting budget</span>
              </div>
              <Link href="/contact" className={`${dc.button.accent} mt-10`}>Do more with Newswire</Link>
            </div>
            <div className="relative min-h-[360px]">
              <div className="absolute right-8 top-0 h-72 w-72 rounded-full bg-[#d9fff7]" />
              <div className="newswire-card-float-delayed absolute right-14 top-8 flex h-80 w-80 items-center justify-center rounded-[34px] bg-[linear-gradient(135deg,#eef6ff,#d9fff7)] p-8 text-center shadow-xl">
                <div>
                  <p className="text-xs font-black uppercase tracking-[.2em] text-[#2f6ee5]">Media database</p>
                  <p className="mt-4 text-4xl font-black text-[#081426]">1M+ contacts</p>
                  <p className="mt-3 text-sm font-semibold text-[#3c526e]">Target journalists and outlets from a clean campaign workspace.</p>
                </div>
              </div>
              <div className="absolute bottom-6 left-8 rounded-[12px] bg-white/90 p-5 shadow-2xl backdrop-blur">
                <p className="text-sm font-black text-[#2457ae]">Journalists</p>
                <div className="mt-4 flex gap-6 text-center text-xs text-[#3c526e]">
                  <span><span className="mx-auto block h-8 w-8 rounded-full bg-[#e94a69]" />Roselle T.<br />13 articles</span>
                  <span><span className="mx-auto block h-8 w-8 rounded-full bg-[#2f6ee5]" />Tanner S.<br />7 articles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#285aa8] px-4 py-20 text-white">
        <div className="mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-[.95fr_1.05fr]">
          <div className="relative min-h-[400px]">
            <div className="absolute left-4 top-0 h-72 w-72 rounded-full bg-white/10" />
            <div className="absolute left-20 top-12 flex h-[420px] w-[310px] items-center justify-center rounded-[34px] bg-white/10 p-8 text-center shadow-2xl">
              <div>
                <p className="text-xs font-black uppercase tracking-[.2em] text-white/70">Agency workspace</p>
                <p className="mt-4 text-4xl font-black">Client PR in one place</p>
              </div>
            </div>
            <div className="absolute bottom-0 left-40 rounded-full bg-white p-5 shadow-2xl">
              <div className="grid grid-cols-2 gap-3 text-[#2457ae]">
                {['Yahoo!', 'ABC', 'FOX', 'Google', 'Nasdaq', 'MarketWatch'].map((item) => <span key={item} className="rounded bg-[#eef6ff] px-4 py-2 text-xs font-black">{item}</span>)}
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-black leading-tight">Press Release Services<br />for PR agencies</h2>
            <p className="mt-4 max-w-3xl text-2xl leading-snug">Manage all client PR activities with a single tool and create unlimited online newsrooms. Share access for simplified teamwork and collaboration.</p>
            <div className="mt-10 grid gap-6">
              <span className="inline-flex items-center gap-3"><CheckCircle2 className="h-5 w-5 rounded-full bg-[#d9fff7] text-[#10c6ad]" />More accurate contact information</span>
              <span className="inline-flex items-center gap-3"><CheckCircle2 className="h-5 w-5 rounded-full bg-[#d9fff7] text-[#10c6ad]" />No contract required</span>
            </div>
            <Link href="/contact" className={`${dc.button.accent} mt-10`}>Do more with Newswire</Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f7fbff] px-4 py-20">
        <div className="mx-auto max-w-[1280px] text-center">
          <h2 className="text-4xl font-black">Testimonials</h2>
          <p className="mt-6 text-2xl leading-tight">#1 for customer satisfaction.<br />Just ask our clients.</p>
          <blockquote className="mx-auto mt-9 max-w-4xl text-3xl italic leading-tight">"The Newswire team provides a wide range of expertise on copywriting, and best practices; resulting in higher pickups and return on investment."</blockquote>
          <Link href="/contact" className={`${dc.button.accent} mt-8`}>Do more with Newswire</Link>
        </div>
      </section>

      <section className="bg-[#285aa8] px-4 py-20 text-center text-white">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-4xl font-black">Newswire educational resources</h2>
          <p className="mt-7 text-2xl">Explore our expert advice, how-tos and guides</p>
          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {['Planning guide', 'Distribution checklist', 'Media outreach basics'].map((item) => (
              <div key={item} className="relative aspect-[3/2] overflow-hidden rounded-[10px] bg-[#1f73b8]">
                <div className="absolute inset-0 bg-[#2499d0]/55 p-6" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  <span className="text-2xl font-light">RESOURCE</span>
                  <span className="mt-3 max-w-xs text-2xl font-black leading-tight">{item}</span>
                </div>
              </div>
            ))}
          </div>
          <Link href="/search" className={`${dc.button.accent} mt-8`}>View More</Link>
        </div>
      </section>
    </>
  )
}

export function EditableHomeCta() {
  return (
    <section className="bg-[#eef6ff] px-4 py-16">
      <div className="mx-auto grid max-w-[1120px] gap-6 rounded-[10px] bg-white p-8 shadow-[0_18px_48px_rgba(28,76,130,.10)] md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h2 className="text-3xl font-black">Ready to put your announcement in motion?</h2>
          <p className="mt-3 text-[#3c526e]">Publish updates, reach media audiences, and keep every release easy to discover.</p>
        </div>
        <Link href="/signup" className={dc.button.accent}>Get Started <ArrowRight className="h-4 w-4" /></Link>
      </div>
    </section>
  )
}
