import type { LoaderFunctionArgs } from '@remix-run/node'
import { auth } from '~/auth/auth.server'

export const loader = ({ request }: LoaderFunctionArgs) =>
  auth.authenticate('auth0', request, {
    successRedirect: '/dashboard',
    failureRedirect: '/',
  })
