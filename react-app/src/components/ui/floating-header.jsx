import React from 'react';
import { MenuIcon, ShoppingBag } from 'lucide-react';
import { Sheet, SheetContent, SheetFooter } from '@/components/ui/sheet';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import logoFull from '../../assets/logo_full.svg';

export function FloatingHeader() {
  const [open, setOpen] = React.useState(false);

  const links = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] pointer-events-none">
      {/* ── Mobile header (< lg) ── */}
      <div className="lg:hidden flex justify-center" style={{ padding: '20px 20px 0' }}>
        <nav
          className="pointer-events-auto inline-flex items-center"
          style={{
            gap: '16px',
            padding: '10px 10px 10px 16px',
            borderRadius: '9999px',
            background: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(0,0,0,0.06)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
          }}
        >
          {/* Left group: Logo + Hamburger */}
          <div className="flex items-center" style={{ gap: '8px' }}>
            <a href="/" className="flex items-center no-underline shrink-0">
              <img
                src={logoFull}
                alt="SAVR"
                style={{ height: '28px', width: 'auto', display: 'block' }}
              />
            </a>
            <button
              onClick={() => setOpen(!open)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '38px',
                height: '38px',
                borderRadius: '9999px',
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
              }}
              aria-label="Menu"
            >
              <MenuIcon style={{ width: '24px', height: '24px', color: '#141414' }} strokeWidth={2.2} />
            </button>
          </div>

          {/* Right: Black pill CTA */}
          <a
            href="#sign-up"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              height: '44px',
              padding: '0 22px',
              borderRadius: '9999px',
              background: '#141414',
              color: '#ffffff',
              fontSize: '14px',
              fontWeight: 500,
              lineHeight: 1,
              letterSpacing: '0.01em',
              whiteSpace: 'nowrap',
              textDecoration: 'none',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            <ShoppingBag style={{ width: '16px', height: '16px' }} strokeWidth={2} />
            Request Access
          </a>
        </nav>
      </div>

      {/* ── Desktop header (>= lg) ── */}
      <nav className="hidden lg:flex pointer-events-auto mx-auto items-center justify-between px-8 py-5 max-w-[1400px]">
        <a href="/" className="flex items-center gap-2 no-underline shrink-0">
          <img
            src={logoFull}
            alt="SAVR Logo"
            style={{ height: '40px', width: 'auto' }}
            className="block transition-all duration-300"
          />
        </a>

        <div
          className={cn(
            'flex items-center gap-1',
            'px-2 py-1.5 rounded-full',
            'bg-white/70 backdrop-blur-[16px] border border-black/[0.06]',
            'shadow-[0_2px_12px_rgba(0,0,0,0.06)]',
          )}
        >
          {links.map((link) => (
            <a
              key={link.label}
              className={cn(
                'px-5 py-2 rounded-full',
                'text-[14px] font-medium leading-none tracking-[0.01em]',
                'no-underline whitespace-nowrap',
                'transition-all duration-200',
                'text-neutral-700 hover:text-neutral-900 hover:bg-black/[0.06]',
              )}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#sign-up"
          className={cn(
            'inline-flex items-center justify-center',
            'h-11 px-7 rounded-full',
            'text-[14px] font-medium leading-none tracking-[0.01em]',
            'whitespace-nowrap no-underline',
            'transition-all duration-300',
            'bg-[#155c4b] text-white hover:bg-[#0e3f34]',
            'shadow-[0_2px_12px_rgba(21,92,75,0.25)]',
          )}
        >
          Request Access
        </a>
      </nav>

      {/* ── Mobile slide-out sheet ── */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          className="bg-white/95 backdrop-blur-xl gap-0 pointer-events-auto"
          showClose={true}
          side="left"
        >
          <div className="grid gap-y-1 overflow-y-auto px-4 pt-14 pb-5">
            <a href="/" className="flex items-center gap-2 no-underline mb-6 px-4">
              <img
                src={logoFull}
                alt="SAVR Logo"
                style={{ height: '32px', width: 'auto' }}
                className="block"
              />
            </a>
            {links.map((link) => (
              <a
                key={link.label}
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                    className: 'justify-start text-base',
                  }),
                )}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
          <SheetFooter>
            <a
              href="#sign-up"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center h-11 px-6 rounded-full bg-[#155c4b] text-white font-medium text-sm no-underline hover:bg-[#0e3f34] transition-colors"
            >
              Request Access
            </a>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </header>
  );
}
