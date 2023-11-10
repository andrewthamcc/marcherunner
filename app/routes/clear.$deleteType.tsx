import { redirect } from '@remix-run/node'
import type { ActionFunctionArgs } from '@remix-run/node'
import { auth } from '~/auth/auth.server'
import { deleteAllItems, deletePurchasedItems } from '~/models/items'

export const action = async ({ request, params }: ActionFunctionArgs) => {
  const user = await auth.isAuthenticated(request)

  if (!params) throw new Error('Invalid data')

  if (user) {
    if (params.deleteType === 'all')
      return deleteAllItems(user.profile.id ?? '')

    if (params.deleteType === 'purchased')
      return deletePurchasedItems(user.profile.id ?? '')
  } else {
    throw new Error('Please authenticate')
  }

  return redirect('/dashboard')
}
