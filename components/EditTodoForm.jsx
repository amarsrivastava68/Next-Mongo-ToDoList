import React from 'react'

const EditTodoForm = () => {
  return (

    <form className="flex flex-col gap-3">
        <h1 className='font-bold'>Edit your To do</h1>
    <input
      type="text"
      placeholder="ToDo Title"
      className="border border-slate-500 px-8 py-2"
    />

    <input
      type="text"
      placeholder="ToDo Description"
      className="border border-slate-500 px-8 py-2"
    />
    <input
      type="text"
      placeholder="ToDo Status (Pending / Done / Other Remarks ) "
      className="border border-slate-500 px-8 py-2"
    />

    <button className="bg-green-500 font-bold  text-white py-3 px-6 w-fit">
      Update Topic 
    </button>
  </form>
  )
}

export default EditTodoForm