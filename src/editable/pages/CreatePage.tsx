'use client'

import { FormEvent, useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, FileText, ImageIcon, Lock, PlusCircle, Send, Sparkles } from 'lucide-react'
import { SITE_CONFIG, type TaskKey } from '@/lib/site-config'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

type DraftPost = {
  id: string
  task: TaskKey
  title: string
  category: string
  summary: string
  url: string
  image: string
  body: string
  createdAt: string
}

const STORE_KEY = 'slot4:created-posts'

const taskIcon: Record<string, typeof FileText> = {
  article: FileText,
  listing: Sparkles,
  classified: PlusCircle,
  image: ImageIcon,
  profile: Sparkles,
  pdf: FileText,
  sbm: ArrowRight,
}

const fieldClass = 'rounded-[10px] border border-[#d6e4f2] bg-[#f7fbff] px-4 py-3 text-sm font-bold text-[#081426] outline-none transition placeholder:text-[#6c7d95] focus:border-[#2f6ee5] focus:bg-white'

const saveDraft = (draft: DraftPost) => {
  try {
    const existing = JSON.parse(window.localStorage.getItem(STORE_KEY) || '[]')
    const list = Array.isArray(existing) ? existing : []
    window.localStorage.setItem(STORE_KEY, JSON.stringify([draft, ...list].slice(0, 50)))
  } catch {
    window.localStorage.setItem(STORE_KEY, JSON.stringify([draft]))
  }
}

export default function CreatePage() {
  const { session } = useEditableLocalAuthSession()
  const enabledTasks = useMemo(() => SITE_CONFIG.tasks.filter((task) => task.enabled), [])
  const [task, setTask] = useState<TaskKey>((enabledTasks[0]?.key || 'article') as TaskKey)
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [summary, setSummary] = useState('')
  const [url, setUrl] = useState('')
  const [image, setImage] = useState('')
  const [body, setBody] = useState('')
  const [created, setCreated] = useState<DraftPost | null>(null)

  const activeTask = enabledTasks.find((item) => item.key === task) || enabledTasks[0]

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const draft: DraftPost = {
      id: `draft-${Date.now()}`,
      task,
      title: title.trim(),
      category: category.trim() || 'uncategorized',
      summary: summary.trim(),
      url: url.trim(),
      image: image.trim(),
      body: body.trim(),
      createdAt: new Date().toISOString(),
    }
    saveDraft(draft)
    setCreated(draft)
    setTitle('')
    setCategory('')
    setSummary('')
    setUrl('')
    setImage('')
    setBody('')
  }

  if (!session) {
    return (
      <EditableSiteShell>
        <main className="min-h-screen bg-[#eef6ff] px-4 py-16 text-[#081426] sm:px-6 lg:px-8">
          <section className="mx-auto grid max-w-5xl gap-8 rounded-[18px] bg-white p-7 shadow-[0_18px_48px_rgba(28,76,130,.10)] md:grid-cols-[0.9fr_1.1fr] md:p-10">
            <div className="flex h-full min-h-72 items-center justify-center rounded-[16px] bg-[linear-gradient(115deg,#3486db_0%,#14a7c4_48%,#10c6ad_100%)] text-white">
              <Lock className="h-20 w-20 opacity-80" />
            </div>
            <div className="self-center">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#2f6ee5]">{pagesContent.create.locked.badge}</p>
              <h1 className="mt-5 text-5xl font-black leading-[1.02] tracking-[-0.04em] sm:text-6xl">{pagesContent.create.locked.title}</h1>
              <p className="mt-6 max-w-xl text-base font-semibold leading-8 text-[#3c526e]">{pagesContent.create.locked.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/login" className="inline-flex items-center gap-2 rounded-[5px] bg-[#235aaa] px-6 py-3 text-sm font-black text-white">Login <ArrowRight className="h-4 w-4" /></Link>
                <Link href="/signup" className="inline-flex items-center gap-2 rounded-[5px] bg-[#10c6ad] px-6 py-3 text-sm font-black text-white">Sign up</Link>
              </div>
            </div>
          </section>
        </main>
      </EditableSiteShell>
    )
  }

  return (
    <EditableSiteShell>
      <main className="min-h-screen bg-[#eef6ff] text-[#081426]">
        <section className="relative overflow-hidden bg-[linear-gradient(115deg,#3486db_0%,#14a7c4_46%,#10c6ad_100%)] text-white">
          <div className="absolute right-20 top-12 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-8 lg:py-20">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-white/75">{pagesContent.create.hero.badge}</p>
            <h1 className="mt-5 max-w-5xl text-5xl font-light leading-[1.05] tracking-[-0.035em] sm:text-7xl">{pagesContent.create.hero.title}</h1>
            <p className="mt-6 max-w-3xl text-xl font-black leading-8 text-white/88">{pagesContent.create.hero.description}</p>
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-4 py-14 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <aside>
              <div className="rounded-[18px] bg-white p-6 shadow-[0_18px_48px_rgba(28,76,130,.10)] sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#2f6ee5]">Choose a format</p>
              <h2 className="mt-3 text-3xl font-black">What are you publishing?</h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {enabledTasks.map((item) => {
                  const Icon = taskIcon[item.key] || FileText
                  const active = item.key === task
                  return (
                    <button key={item.key} type="button" onClick={() => setTask(item.key)} className={`rounded-[12px] border p-4 text-left transition ${active ? 'border-[#10c6ad] bg-[#d9fff7] text-[#081426]' : 'border-[#d6e4f2] bg-[#f7fbff] hover:-translate-y-0.5'}`}>
                      <Icon className="h-5 w-5" />
                      <span className="mt-3 block text-sm font-black">{item.label}</span>
                      <span className="mt-1 block text-xs font-semibold text-[#3c526e]">{item.description}</span>
                    </button>
                  )
                })}
              </div>
              </div>
            </aside>

            <form onSubmit={submit} className="rounded-[18px] bg-white p-5 shadow-[0_18px_48px_rgba(28,76,130,.10)] sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#2f6ee5]">Create {activeTask?.label || 'post'}</p>
                  <h2 className="mt-1 text-3xl font-black tracking-[-0.04em]">{pagesContent.create.formTitle}</h2>
                </div>
                <span className="rounded-full bg-[#eef6ff] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#235aaa]">{session.name}</span>
              </div>

              <div className="mt-6 grid gap-4">
                <input className={fieldClass} value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Post title" required />
                <div className="grid gap-4 sm:grid-cols-2">
                  <input className={fieldClass} value={category} onChange={(event) => setCategory(event.target.value)} placeholder="Category" />
                  <input className={fieldClass} value={url} onChange={(event) => setUrl(event.target.value)} placeholder="Website or source URL" />
                </div>
                <input className={fieldClass} value={image} onChange={(event) => setImage(event.target.value)} placeholder="Featured image URL" />
                <textarea className={`${fieldClass} min-h-24`} value={summary} onChange={(event) => setSummary(event.target.value)} placeholder="Short summary" required />
                <textarea className={`${fieldClass} min-h-48`} value={body} onChange={(event) => setBody(event.target.value)} placeholder="Main content, details, notes, or description" required />
              </div>

              {created ? (
                <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">
                  <p className="flex items-center gap-2 text-sm font-black"><CheckCircle2 className="h-5 w-5" /> {pagesContent.create.successTitle}</p>
                  <p className="mt-1 text-sm font-semibold opacity-80">{created.title}</p>
                </div>
              ) : null}

              <button type="submit" className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-[5px] bg-[#10c6ad] px-6 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#0aa58f]">
                <Send className="h-4 w-4" /> {pagesContent.create.submitLabel}
              </button>
            </form>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
