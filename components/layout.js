import Link from 'next/link'

const name = 'JavaScript Beers'
export const siteTitle = 'JavaScript Beers'

export default function Layout({ children, home }) {
  return (
    <>
      <header className="header">
        {home ? (
          <>
            <h1>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>{name}</a>
            </Link>
          </>
        )}
      </header>
      <main>{children}</main>
    </>
  )
}
