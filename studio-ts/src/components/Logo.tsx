import clsx from 'clsx'

export function Logomark({
  invert = false,
  filled = false,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  invert?: boolean
  filled?: boolean
}) {
  return (
    <div
      {...props}
      className={clsx(
        'flex h-8 w-8 items-center justify-center rounded font-bold text-sm',
        invert
          ? 'bg-white text-cga-navy'
          : 'bg-cga-navy text-white',
        props.className,
      )}
    >
      CGA
    </div>
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  invert?: boolean
  filled?: boolean
  fillOnHover?: boolean
}) {
  return (
    <div
      className={clsx('flex flex-col leading-none', className)}
      {...props}
    >
      <span
        className={clsx(
          'font-display text-base font-bold tracking-tight',
          invert ? 'text-white' : 'text-cga-navy',
        )}
      >
        Coastal Growth Advisors
      </span>
      <span
        className={clsx(
          'mt-0.5 text-xs font-normal tracking-wide',
          invert ? 'text-white/60' : 'text-cga-light',
        )}
      >
        Plymouth, MA &middot; Southeastern Massachusetts
      </span>
    </div>
  )
}
