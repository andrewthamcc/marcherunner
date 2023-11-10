import { redirect } from '@remix-run/node'
import type { ActionFunctionArgs } from '@remix-run/node'
import { auth } from '~/auth/auth.server'

export const loader = () => redirect('/dashboard')
export const action = ({ request }: ActionFunctionArgs) =>
  auth.authenticate('auth0', request)
