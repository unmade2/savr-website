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
        'fixed top-0 left-0 right-0 z-[1000]',
        'w-full',
        'transition-all duration-500 ease-[cubic-bezier(0.24,0.42,0.42,0.92)]',
      )}
    >
      <nav className="mx-auto flex items-center justify-between px-8 py-5 max-w-[1400px]">
        {/* Logo — standalone, no background */}
        <a
          href="/"
          className="flex items-center gap-2 no-underline shrink-0"
        >
          <img
            src={logoFull}
            alt="SAVR Logo"
            style={{ height: '40px', width: 'auto' }}
            className="block transition-all duration-300"
          />
        </a>

        {/* Center nav links — own pill container */}
        <div
          className={cn(
            'hidden items-center gap-1 lg:flex',
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

        {/* CTA — standalone pill, no shared background */}
        <div className="flex items-center gap-3">
          <a
            href="#sign-up"
            className={cn(
              'hidden lg:inline-flex items-center justify-center',
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

          <Sheet open={open} onOpenChange={setOpen}>
            <Button
              size="icon"
              variant="outline"
              onClick={() => setOpen(!open)}
              className={cn(
                'lg:hidden rounded-full border border-black/10 text-neutral-700 bg-white/60 backdrop-blur-md hover:bg-black/5',
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
