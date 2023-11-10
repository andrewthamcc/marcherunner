import { Suspense } from 'react'
import { defer, redirect } from '@remix-run/node'
import type { LoaderFunctionArgs } from '@remix-run/node'
import { Await, useLoaderData } from '@remix-run/react'
import { auth } from '~/auth/auth.server'
import { LoadingSpinner } from '~/ui'
import { getCategories, getItems } from '~/models'
import { CategoryList } from '~/components'
import type { Category, Item } from '~/types'

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const user = await auth.isAuthenticated(request)

  if (user) {
    const categories = getCategories()
    const items = getItems(user.profile.id ?? '')

    const data = Promise.all([categories, items])
    return defer({ data })
  }

  return redirect('/')
}

export default function Component() {
  const { data } = useLoaderData<{
    data: [category: Category[], item: Item[]]
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
        {([categories, items]) => (
          <div className="container">
            <div className="grid lg:grid-cols-3 lg:gap-x-8 gap-y-20 mb-8">
              {categories
                .filter(
                  (c) => c.categoryName !== 'all' && c.categoryName !== 'list'
                )
                .sort((a, b) => a.categoryName.localeCompare(b.categoryName))
                .map((c) => {
                  const categoryItems = items.filter(
                    (i) => i.categoryId === c.id
                  )

                  return (
                    <CategoryList
                      category={c}
                      isEmpty={!categoryItems.length}
                      items={categoryItems}
                      key={c.id}
                    />
                  )
                })}
            </div>
          </div>
        )}
      </Await>
    </Suspense>
  )
}
