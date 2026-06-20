'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, Search, X } from 'lucide-react'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Search', href: '/search' },
]

function NewswireLogo() {
  return (
    <span className="flex min-w-0 items-center gap-3">
      <span className="newswire-logo-mark flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xl font-black leading-none text-white sm:h-12 sm:w-12">
        <img src="/favicon.png" alt="" className="h-full w-full object-contain" />
      </span>
      <span className="min-w-0">
        <span className="newswire-brand block truncate text-[2.2rem] font-light leading-none tracking-[.04em] text-[#2a63b7] sm:text-[2.65rem]">
          <span className="font-black">Release</span>distrawire
        </span>
      </span>
    </span>
  )
}

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const { session, logout } = useEditableLocalAuthSession()
  const displayName = session?.name?.trim() || session?.email?.split('@')[0] || 'Member'

  const closeAndLogout = () => {
    logout()
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-[#edf6ff]/95 text-[#2457ae] shadow-[0_1px_0_rgba(36,87,174,.08)] backdrop-blur">
      <div className="mx-auto grid min-h-[72px] max-w-[1800px] grid-cols-[auto_1fr_auto] items-center gap-4 px-4 sm:px-8 lg:px-20">
        <Link href="/" className="min-w-0" aria-label="Home">
          <NewswireLogo />
        </Link>

        <nav className="hidden items-center justify-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="inline-flex items-center gap-2 border-b-2 border-transparent py-5 text-[15px] font-black tracking-wide transition hover:border-[#2f6ee5]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-3 sm:gap-5">
          <form action="/search" className="hidden h-10 w-10 items-center justify-center rounded-[5px] border border-[#d7e4f3] bg-white xl:flex">
            <button aria-label="Search"><Search className="h-4 w-4" /></button>
          </form>
          {session ? (
            <>
              <span className="hidden max-w-[180px] truncate rounded-[4px] bg-white px-4 py-3 text-sm font-black text-[#235aaa] shadow-[inset_0_0_0_1px_#d7e4f3] md:inline-flex">{displayName}</span>
              <Link href="/create" className="hidden rounded-[4px] bg-[#10c6ad] px-7 py-3 text-sm font-black text-white transition hover:bg-[#0aa58f] sm:inline-flex">Create</Link>
              <button type="button" onClick={logout} className="hidden rounded-[4px] bg-[#235aaa] px-7 py-3 text-sm font-black text-white shadow-[inset_0_0_0_2px_rgba(255,255,255,.12)] sm:inline-flex">Logout</button>
            </>
          ) : (
            <>
              <Link href="/login" className="hidden rounded-[4px] bg-[#235aaa] px-7 py-3 text-sm font-black text-white shadow-[inset_0_0_0_2px_rgba(255,255,255,.12)] sm:inline-flex">Log In</Link>
              <Link href="/signup" className="hidden min-w-[170px] justify-center rounded-[4px] bg-[#10c6ad] px-8 py-3 text-sm font-black text-white transition hover:bg-[#0aa58f] md:inline-flex">Register</Link>
            </>
          )}
          <button type="button" onClick={() => setOpen((value) => !value)} className="inline-flex h-11 w-11 items-center justify-center rounded-[5px] border border-[#bdd2eb] bg-white lg:hidden" aria-label="Toggle navigation">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-[#d7e4f3] bg-white px-4 py-4 lg:hidden">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <Link key={`${item.label}-${item.href}`} href={item.href} onClick={() => setOpen(false)} className="rounded-[6px] bg-[#eef6ff] px-4 py-3 text-sm font-black text-[#2457ae]">{item.label}</Link>
            ))}
            {session ? (
              <>
                <span className="rounded-[6px] bg-white px-4 py-3 text-center text-sm font-black text-[#235aaa]">Signed in as {displayName}</span>
                <Link href="/create" onClick={() => setOpen(false)} className="rounded-[6px] bg-[#10c6ad] px-4 py-3 text-center text-sm font-black text-white">Create</Link>
                <button type="button" onClick={closeAndLogout} className="rounded-[6px] bg-[#235aaa] px-4 py-3 text-center text-sm font-black text-white">Logout</button>
              </>
            ) : (
              <>
                <Link href="/login" onClick={() => setOpen(false)} className="rounded-[6px] bg-[#235aaa] px-4 py-3 text-center text-sm font-black text-white">Login</Link>
                <Link href="/signup" onClick={() => setOpen(false)} className="rounded-[6px] bg-[#10c6ad] px-4 py-3 text-center text-sm font-black text-white">Register</Link>
              </>
            )}
          </div>
        </div>
      ) : null}
    </header>
  )
}
