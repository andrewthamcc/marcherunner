import { useFetcher } from '@remix-run/react'
import { Checkbox, IconButton } from '~/ui'
import type { Item } from '~/types'

interface CategoryItemProps {
  item: Item
}

export const CategoryItem = ({ item }: CategoryItemProps) => {
  const { Form, submit, state } = useFetcher()
  const isUpdating = state === 'submitting'

  return (
    <li className="flex items-center justify-between ml-1">
      <Checkbox
        checked={item.purchased}
        id={item.id}
        label={item.name}
        loading={isUpdating}
        name={item.id}
        onChange={() =>
          submit(null, { action: `/item/${item.id}`, method: 'PUT' })
        }
      />
      <Form action={`/item/${item.id}`} method="DELETE">
        <IconButton
          a11ylabel="Delete Item"
          className="category-item-delete"
          icon="trash"
          size="small"
          submit
        />
      </Form>
    </li>
  )
}
