import type { ActionFunctionArgs } from '@remix-run/node'
import { auth } from '~/auth/auth.server'
import { deleteItem, getItem, updateItem } from '~/models/items'

export const action = async ({ request, params }: ActionFunctionArgs) => {
  const user = await auth.isAuthenticated(request)

  if (!params.id) throw new Error('Invalid request')
  if (!user) throw new Error('Please authenticate')

  switch (request.method) {
    case 'GET':
      return await getItem(params.id)
    case 'PUT':
      return await updateItem(params.id)
    case 'DELETE':
      return await deleteItem(params.id)
    default:
      throw new Error('Unexpected error')
  }
}
