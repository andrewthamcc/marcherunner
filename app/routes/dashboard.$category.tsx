import { Suspense } from 'react'
import { defer, redirect } from '@remix-run/node'
import type { LoaderFunctionArgs } from '@remix-run/node'
import { Await, useLoaderData } from '@remix-run/react'
import { auth } from '~/auth/auth.server'
import { LoadingSpinner } from '~/ui'
import { getCategory, getCategoryItems } from '~/models'
import { CategoryList } from '~/components'
import { Category } from '~/types'
import { Item } from '@prisma/client'

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const user = await auth.isAuthenticated(request)
  if (typeof params.category !== 'string') throw new Error('Invalid request')

  if (user) {
    const category = getCategory(params.category)
    const items = getCategoryItems(params.category, user.profile.id ?? '')

    const data = Promise.all([category, items])
    return defer({ data })
  }

  return redirect('/')
}

export default function Component() {
  const { data } = useLoaderData<{
    data: [category: Category, item: Item[]]
  }>()

  return (
    <Suspense
      fallback={
        <div className="flex grow items-center justify-center">
          <LoadingSpinner />
        </div>
      }
    >
      <Await resolve={data}>
        {([category, items]) => (
          <div className="container">
            <CategoryList
              category={category}
              isEmpty={!items.length}
              items={items}
            />
          </div>
        )}
      </Await>
    </Suspense>
  )
}
