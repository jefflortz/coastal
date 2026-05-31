import Image from 'next/image'
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
    <div className={clsx('h-8 w-8', props.className)}>
      <Image
        src={invert ? '/logo-dark-cropped.png' : '/logo-light-cropped.png'}
        alt="Coastal Growth Advisors"
        width={200}
        height={50}
        className="h-8 w-auto"
        unoptimized
      />
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
    <div className={clsx('flex items-center', className)} {...props}>
      <Image
        src={invert ? '/logo-dark-cropped.png' : '/logo-light-cropped.png'}
        alt="Coastal Growth Advisors"
        width={400}
        height={100}
        className="h-12 w-auto"
        unoptimized
      />
    </div>
  )
}
