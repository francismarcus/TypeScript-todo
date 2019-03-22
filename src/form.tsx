import React, { Fragment } from 'react'

export default function Form() {

  return (
    <Fragment>
      <form>
        <input type='text' required />
        <button type="submit">Add something todo</button>
      </form>
    </Fragment>
  )
}
