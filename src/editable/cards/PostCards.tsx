import Link from 'next/link'
import { ArrowRight, Clock3 } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { TaskKey } from '@/lib/site-config'
import { editableDesignContract as dc, editablePalette as pal } from '@/editable/layouts/design-contract'

export function getEditablePostImage(post?: SitePost | null) {
  const media = Array.isArray(post?.media) ? post.media : []
  const mediaUrl = media.find((item) => typeof item?.url === 'string' && item.url)?.url
  const content = post?.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
  const images = Array.isArray(content.images) ? content.images : []
  const contentImage = images.find((value): value is string => typeof value === 'string' && Boolean(value))
  const directImage = ['featuredImage', 'image', 'thumbnail', 'coverImage', 'logo']
    .map((key) => content[key])
    .find((value): value is string => typeof value === 'string' && Boolean(value))
  return mediaUrl || directImage || contentImage || '/placeholder.svg?height=900&width=1400'
}

function safeTitle(post?: SitePost | null) {
  return post?.title || 'Newswire update'
}

export function getEditableExcerpt(post?: SitePost | null, limit = 150) {
  const content = post?.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
  const raw =
    (typeof content.description === 'string' && content.description) ||
    (typeof content.summary === 'string' && content.summary) ||
    (typeof content.body === 'string' && content.body) ||
    post?.summary ||
    ''
  const clean = raw.replace(/<[^>]*>/g, ' ').replace(/&[a-z]+;/gi, ' ').replace(/\s+/g, ' ').trim()
  return clean.length > limit ? `${clean.slice(0, limit).trim()}...` : clean
}

export function getEditableCategory(post?: SitePost | null) {
  const content = post?.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
  return (typeof content.category === 'string' && content.category) || post?.tags?.[0] || 'Latest'
}

export function postHref(task: TaskKey, post: SitePost, route = `/${task}`) {
  return `${route}/${post.slug}`
}

export function EditorialFeatureCard({ post, href, label = 'Cover story' }: { post: SitePost; href: string; label?: string }) {
  return (
    <Link href={href} className="group block min-w-0 bg-black text-white">
      <div className="relative aspect-[16/10] min-h-[430px] overflow-hidden">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.05),rgba(0,0,0,.88))]" />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-9">
          <span className="bg-[var(--slot4-accent-fill)] px-3 py-2 text-[10px] font-black uppercase tracking-[.18em]">{label}</span>
          <h3 className="mt-5 max-w-4xl text-4xl font-black leading-[.97] tracking-[-.055em] sm:text-6xl">{post.title}</h3>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">{getEditableExcerpt(post, 190)}</p>
        </div>
      </div>
    </Link>
  )
}

export function RailPostCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className={`group ${dc.layout.minRailCard} block border-t-4 border-black bg-[var(--slot4-surface-bg)] ${dc.motion.lift}`}>
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--slot4-media-bg)]">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between gap-3 text-[10px] font-black uppercase tracking-[.18em] text-[var(--slot4-accent)]">
          <span>{getEditableCategory(post)}</span><span>{String(index + 1).padStart(2, '0')}</span>
        </div>
        <h3 className="mt-3 line-clamp-3 text-xl font-black leading-[1.02] tracking-[-.04em]">{post.title}</h3>
      </div>
    </Link>
  )
}

export function ImageFirstReleaseCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group block w-[280px] shrink-0 overflow-hidden rounded-[14px] bg-white text-[#081426] shadow-[0_18px_42px_rgba(8,20,38,.14)] transition duration-300 hover:-translate-y-1 sm:w-[330px]">
      <div className="relative aspect-[16/10] overflow-hidden bg-[#dceaf6]">
        <img src={getEditablePostImage(post)} alt={safeTitle(post)} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <span className="absolute left-4 top-4 rounded-full bg-[#10c6ad] px-3 py-1 text-[10px] font-black uppercase tracking-[.18em] text-white">{getEditableCategory(post)}</span>
      </div>
      <div className="p-5">
        <p className="text-[10px] font-black uppercase tracking-[.2em] text-[#2f6ee5]">Release {String(index + 1).padStart(2, '0')}</p>
        <h3 className="mt-2 line-clamp-3 text-lg font-black leading-tight">{safeTitle(post)}</h3>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-[#0b55b6]">Read PR <ArrowRight className="h-4 w-4" /></span>
      </div>
    </Link>
  )
}

export function ReleaseColumnCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  const variant = index % 5
  const hasLargeImage = variant === 0 || variant === 2 || variant === 4
  return (
    <Link href={href} className="group mb-12 block break-inside-avoid border-b border-[#d6e4f2] pb-7 text-[#202632]">
      {hasLargeImage ? (
        <div className={`overflow-hidden bg-white ${variant === 0 ? 'rounded-[15px] p-5' : 'rounded-[12px]'}`}>
          <img src={getEditablePostImage(post)} alt={safeTitle(post)} className={`${variant === 4 ? 'aspect-[16/9]' : 'aspect-[4/3]'} w-full rounded-[10px] object-cover transition duration-500 group-hover:scale-[1.03]`} />
        </div>
      ) : null}
      <div className={hasLargeImage ? 'mt-7' : ''}>
        <p className="mb-3 text-[10px] font-black uppercase tracking-[.22em] text-[#2f6ee5]">{getEditableCategory(post)}</p>
        <h3 className={`${variant === 1 ? 'text-xl' : 'text-lg'} line-clamp-5 font-black leading-[1.35] tracking-[-.015em] group-hover:text-[#0b55b6]`}>{safeTitle(post)}</h3>
        <p className={`${variant === 3 ? 'block' : 'hidden'} mt-3 line-clamp-3 text-sm leading-6 text-[#3c526e]`}>{getEditableExcerpt(post, 130)}</p>
        <span className="mt-5 inline-flex items-center gap-3 text-lg font-medium text-[#0b55b6]">Read PR <ArrowRight className="h-4 w-4" /></span>
      </div>
    </Link>
  )
}

export function CompactIndexCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group grid min-w-0 grid-cols-[46px_1fr] gap-4 border-t border-black/20 py-5 first:border-t-0">
      <span className="text-3xl font-black leading-none text-[var(--slot4-accent)]">{String(index + 1).padStart(2, '0')}</span>
      <div className="min-w-0">
        <p className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[.18em] text-black/50"><Clock3 className="h-3 w-3" /> {getEditableCategory(post)}</p>
        <h3 className="mt-2 line-clamp-3 text-lg font-black leading-tight tracking-[-.03em] group-hover:text-[var(--slot4-accent)]">{post.title}</h3>
      </div>
    </Link>
  )
}

export function ArticleListCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group grid min-w-0 border-t border-black/25 py-6 sm:grid-cols-[240px_minmax(0,1fr)] sm:gap-7">
      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--slot4-media-bg)]">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="min-w-0 pt-4 sm:pt-1">
        <p className={`${dc.type.eyebrow} ${pal.accentText}`}>{String(index + 1).padStart(2, '0')} / {getEditableCategory(post)}</p>
        <h2 className="mt-3 line-clamp-3 text-3xl font-black leading-[1.02] tracking-[-.05em] group-hover:text-[var(--slot4-accent)]">{post.title}</h2>
        <p className={`mt-4 line-clamp-3 text-sm leading-7 ${pal.mutedText}`}>{getEditableExcerpt(post, 190)}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[.14em]">Read story <ArrowRight className="h-4 w-4" /></span>
      </div>
    </Link>
  )
}
