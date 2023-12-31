import type { ActionFunctionArgs } from '@remix-run/node'
import { auth } from '~/auth/auth.server'
import { createItem } from '~/models/items'

export const action = async ({ request }: ActionFunctionArgs) => {
  const user = await auth.isAuthenticated(request)
  const formData = await request.formData()
  const name = formData.get('name')
  const categoryId = formData.get('categoryId')

  if (typeof name !== 'string' || typeof categoryId !== 'string')
    throw new Error('Invalid form data')

  if (user)
    return await createItem({
      name,
      categoryId,
      userId: user.profile.id as string,
    })

  throw new Error('Please authenticate')
}
