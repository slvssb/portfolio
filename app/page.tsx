import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react'
import Link from 'next/link'

import ActiveLink from '~/components/shared/active-link'

export default function Home() {
  return (
    <div className="flex-1 space-y-6 flex flex-col mx-auto justify-center">
      <h1 className="text-7xl tracking-tight">selva ..</h1>

      <div className="text-gray-600 space-y-3 tracking-tight sm:tracking-normal">
        <p>
          building apps, refactoring codebases <span className="text-blue-500">@tcs</span>
        </p>

        <p>lives in India 🇮🇳</p>
      </div>

      <div className="flex items-center gap-x-5">
        <Link href="https://github.com/slvssb" target="_blank" rel="author">
          <GithubIcon size={20} />
        </Link>

        <Link href="https://twitter.com/slvssb" target="_blank" rel="author">
          <TwitterIcon size={20} />
        </Link>

        <Link href="https://linkedin.com/in/slvssb" target="_blank" rel="author">
          <LinkedinIcon size={20} />
        </Link>
      </div>
    </div>
  )
}
