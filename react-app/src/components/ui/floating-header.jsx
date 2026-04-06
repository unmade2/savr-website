import React from 'react';
import { MenuIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetFooter } from '@/components/ui/sheet';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import logoFull from '../../assets/logo_full.svg';

export function FloatingHeader() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    {
      label: 'Features',
      href: '#features',
    },
    {
      label: 'Pricing',
      href: '#pricing',
    },
    {
      label: 'About',
      href: '#about',
    },
  ];

  return (
    <header
      className={cn(
        'fixed top-4 left-1/2 -translate-x-1/2 z-[1000]',
        'w-[calc(100%-2rem)] max-w-3xl rounded-2xl',
        'transition-all duration-500 ease-[cubic-bezier(0.24,0.42,0.42,0.92)]',
        scrolled
          ? 'bg-white/80 border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.12)]'
          : 'bg-white/10 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.10)]',
        'backdrop-blur-[20px] backdrop-saturate-[180%]',
      )}
    >
      <nav className="mx-auto flex items-center justify-between px-4 py-2.5">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 no-underline shrink-0"
        >
          <img
            src={logoFull}
            alt="SAVR Logo"
            style={{ height: '36px', width: 'auto' }}
            className={cn(
              'block transition-all duration-300',
              scrolled ? '' : 'brightness-0 invert',
            )}
          />
        </a>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              className={cn(
                buttonVariants({ variant: 'ghost', size: 'sm' }),
                'rounded-full font-normal',
                scrolled
                  ? 'text-neutral-700 hover:text-neutral-900 hover:bg-black/5'
                  : 'text-white/80 hover:text-white hover:bg-white/10',
              )}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side — CTA + mobile menu */}
        <div className="flex items-center gap-2">
          <a
            href="#sign-up"
            className={cn(
              'inline-flex items-center justify-center',
              'h-9 px-5 rounded-full',
              'text-[13px] font-medium leading-none',
              'whitespace-nowrap no-underline',
              'transition-all duration-300',
              scrolled
                ? 'bg-[#155c4b] text-white hover:bg-[#0e3f34] shadow-[0_2px_12px_rgba(21,92,75,0.25)]'
                : 'bg-white text-[#155c4b] hover:bg-white/90 shadow-[0_2px_12px_rgba(255,255,255,0.15)]',
            )}
          >
            Request Access
          </a>

          <Sheet open={open} onOpenChange={setOpen}>
            <Button
              size="icon"
              variant="outline"
              onClick={() => setOpen(!open)}
              className={cn(
                'lg:hidden rounded-full border',
                scrolled
                  ? 'border-black/10 text-neutral-700 bg-white/50 hover:bg-black/5'
                  : 'border-white/20 text-white bg-white/10 hover:bg-white/20',
              )}
            >
              <MenuIcon className="size-4" />
            </Button>
            <SheetContent
              className="bg-white/95 backdrop-blur-xl gap-0"
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
        </div>
      </nav>
    </header>
  );
}
