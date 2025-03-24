import { useId, useState, useRef } from 'react'

type Item = {
  name: string
  quantity: number
}

type Props = {
  onSubmit(values: Item): void
}

export function GroceryForm({ onSubmit }: Props) {
  // Teach refs with typescript
  // Teach React 19 actions
  const nameId = useId() // :r0:
  const quantityId = useId() // :r0:

  const nameRef = useRef<HTMLInputElement>(null!) // <- required in React 19
  // ref valeus may not be accessed during rendering
  // the non-null assertion operator (!) is used to tell TypeScript to type narrow th ref at runtime

  const quantityRef = useRef<HTMLInputElement>(null!)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // Three basic ways to get our form's fields
    // 1. Scrape for it: ids (bad) refs (good)
    // 2. Controlled with state
    // 3. new FormData

    //console.log(nameRef)
    //onSubmit({ name: nameRef.current.value, quantity: parseInt(quantityRef.current.value) })


    const data = new FormData(event.currentTarget)
    const name = data.get('name')
    const quantity = data.get('quantity')
    console.log(name, quantity)
    onSubmit({ name: name as string, quantity: parseInt(quantity as string) })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <label htmlFor={nameId}>Item</label>
        <input ref={nameRef} id={nameId} type="text" className="form-field" autoComplete="off" name="name" />
      </div>
      <div>
        <label htmlFor={quantityId}>Quantity</label>
        <input ref={quantityRef} id={quantityId} type="text" className="form-field" name="quantity" />
      </div>
      <footer>
        <button type="submit" className="button">
          Add Item
        </button>
      </footer>
    </form>
  )
}
