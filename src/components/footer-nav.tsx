import ActiveLink from '~/components/shared/active-link'

export default function FooterNav() {
  return (
    <nav className="py-10">
      <ul className="flex justify-center items-center gap-x-10">
        <li className="hover:underline underline-offset-4">
          <ActiveLink activeClassName="underline" href="/">
            home
          </ActiveLink>
        </li>

        <li className="hover:underline underline-offset-4">
          <ActiveLink activeClassName="underline" href="/projects">
            projects
          </ActiveLink>
        </li>
      </ul>
    </nav>
  )
}
