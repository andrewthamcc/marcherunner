import { useEffect } from 'react'
import type { MetaFunction } from '@remix-run/node'
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
  useNavigation,
} from '@remix-run/react'
import { LinksFunction } from '@remix-run/react/dist/routeModules'
import nProgress from 'nprogress'
import nProgressStyles from 'nprogress/nprogress.css'
import stylesheet from '~/tailwind.css'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
  { rel: 'stylesheet', href: nProgressStyles },
]

export const meta: MetaFunction = () => [
  {
    charset: 'utf-8',
    title: 'MarchéRunner',
    author: 'Andrew Tham',
  },
]

export function ErrorBoundary() {
  useEffect(() => {
    nProgress.done()
  }, [])

  const error = useRouteError()
  return (
    <html>
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body className="bg-hero bg-cover bg-center bg-no-repeat h-screen text-white">
        <div className="container py-10">
          <h1 className="text-6xl">
            {isRouteErrorResponse(error)
              ? `${error.status} ${error.statusText}`
              : error instanceof Error
              ? error.message
              : 'Unknown Error'}
          </h1>
          <Link className="mt-6 block text-lg hover:underline" to="/">
            Home
          </Link>
        </div>
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  const navigation = useNavigation()

  useEffect(() => {
    if (navigation.state === 'loading' || navigation.state === 'submitting') {
      nProgress.configure({ showSpinner: false })
      nProgress.start()
    } else {
      nProgress.done()
    }
  }, [navigation.state])

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
