"use client";

import { usePlausible } from 'next-plausible'

const Form = () => {
  const plausible = usePlausible()

  function handleOnSubmit(e: any) {
    e.preventDefault();
    plausible('SubmitForm');
  }
  return (
    <form onSubmit={handleOnSubmit}>
      <button>Submit</button>
    </form>
  )
}

export default Form;