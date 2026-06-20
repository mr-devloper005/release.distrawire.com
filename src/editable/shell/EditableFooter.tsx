'use client'

import Link from 'next/link'
import { Facebook, Linkedin, Mail, Send, Twitter } from 'lucide-react'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Search', href: '/search' },
  { label: 'Login', href: '/login' },
  { label: 'Register', href: '/signup' },
]

function FooterLogo() {
  return <span className="newswire-brand text-4xl font-light tracking-[.12em] text-white"><span className="font-black">Release</span>distrawire</span>
}

export function EditableFooter() {
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()
  const visibleFooterLinks = session ? footerLinks.filter((item) => item.label !== 'Login' && item.label !== 'Register') : footerLinks

  return (
    <footer className="relative overflow-hidden bg-[#202b39] text-white">
      <div className="pointer-events-none absolute inset-0 opacity-[.045]">
        <div className="absolute -bottom-28 left-8 h-72 w-72 rounded-full border-[22px] border-white" />
        <div className="absolute bottom-20 left-40 h-48 w-80 rounded-[24px] border-[10px] border-white" />
        <div className="absolute bottom-14 right-20 h-56 w-64 rounded-[24px] border-[10px] border-white" />
        <div className="absolute right-80 top-44 h-32 w-52 rounded-[18px] border-[8px] border-white" />
      </div>
      <div className="relative mx-auto max-w-[1280px] px-4 py-16 sm:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <FooterLogo />
          {session ? (
            <button type="button" onClick={logout} className="inline-flex min-w-[180px] justify-center rounded-[5px] bg-[#235aaa] px-8 py-3.5 text-sm font-black text-white transition hover:bg-[#17427f]">Logout</button>
          ) : (
            <Link href="/signup" className="inline-flex min-w-[180px] justify-center rounded-[5px] bg-[#10c6ad] px-8 py-3.5 text-sm font-black text-white transition hover:bg-[#0aa58f]">Register</Link>
          )}
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_2fr]">
          <div>
            <h3 className="text-sm font-black">Quick Links</h3>
            <div className="mt-4 grid gap-3">
              {visibleFooterLinks.map((item) => (
                <Link key={item.label} href={item.href} className="text-sm text-white/82 transition hover:text-[#10c6ad]">{item.label}</Link>
              ))}
              {session ? <button type="button" onClick={logout} className="w-fit text-left text-sm font-black text-white transition hover:text-[#10c6ad]">Logout</button> : null}
            </div>
          </div>
          <div className="max-w-2xl text-sm leading-7 text-white/70">
            <h3 className="text-sm font-black text-white">Newswire</h3>
            <p className="mt-4">Distribute announcements, organize public updates, and help visitors find the right press release, contact page, or account link quickly.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
