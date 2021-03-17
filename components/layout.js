import Link from 'next/link'

const name = 'JavaScript and Beers'
export const siteTitle = 'JavaScript and Beers'

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
        <ul id="social">
          <li><a href="twitter.com/javascriptBeer"><img src="/images/ico-twitter.png" alt="ir a nuestra cuenta de Twitter" /></a></li>
          <li><a href="https://www.youtube.com/channel/UCo4rtqAgSMCEzw7ibyHF6YA"><img src="/images/ico-youtube.png" alt="ir a nuestro canal de Youtube" /></a></li>
          <li><a href="https://www.linkedin.com/company/javascript-beer/"><img src="/images/ico-linkedin.png" alt="ir a nuestro Linkedin" /></a></li>
        </ul>
      </header>
      <main>
        <p className="intro">Charlamos con gente durante las cervezas de un evento online javascripter… pero sin evento.</p>  
        {children}
      </main>
    </>
  )
}
