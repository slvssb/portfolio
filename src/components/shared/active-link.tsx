'use client'

import Link, { type LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { memo } from 'react'

import { cn } from '~/lib/utils'

const ActiveLink = memo(function ActiveLink(
  props: LinkProps & { children: React.ReactNode; className?: string; activeClassName: string }
) {
  const { children, className, activeClassName, ...rest } = props
  const pathName = usePathname()

  return (
    <Link {...rest} className={cn(className, { [activeClassName]: pathName === rest.href })}>
      {children}
    </Link>
  )
})

export default ActiveLink
