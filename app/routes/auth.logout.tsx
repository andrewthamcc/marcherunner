import { redirect } from '@remix-run/node'
import type { ActionFunctionArgs } from '@remix-run/node'
import { destroySession, getSession } from '~/auth/auth.server'

export const action = async ({ request }: ActionFunctionArgs) => {
  const session = await getSession(request.headers.get('Cookie'))
  const logoutURL = new URL(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/v2/logout`)
  const env = process.env.NODE_ENV || 'development'

  logoutURL.searchParams.set(
    'client_id',
    process.env.REACT_APP_AUTH0_CLIENT_ID as string
  )
  logoutURL.searchParams.set('returnTo', 
    env === 'development'
      ? (process.env.REACT_APP_LOGOUT_DEV as string)
      : (process.env.REACT_APP_LOGOUT as string)
  )

  return redirect(logoutURL.toString(), {
    headers: {
      'Set-Cookie': await destroySession(session),
    },
  })
}
