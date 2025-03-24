import React, { useState, Fragment } from 'react'
import { Icon } from '~/Icon'

// type Props = {
//   count: number
//   setCount(count: number): void
// }

export function Counter({ count, setCount }) {
  //const [error, setError] = useState('')
  const error = count < 0 ? 'Count cannot be negative' : ''

  console.log('render:'+count)

  function sub(){
    setCount(count - 1)
    console.log('sub:'+count)
    
  }

  function add(){
    setCount(count + 1)
    console.log('add:'+count)
  }

  return (
    <Fragment>
    <Other />
    <div className="flex">
      <button onClick={sub} className="button flex-1">
        <Icon name="minus" />
      </button>
      <span className="align-middle text-3xl px-6 w-24 text-center">{count}</span>
      <button onClick={add} className="button flex-1">
        <Icon name="plus" />
      </button>
    </div>
    <p>{error}</p>
    </Fragment>
  )
}

function Other(){
  console.log('other rendered')
  return <div>Other</div>
}
