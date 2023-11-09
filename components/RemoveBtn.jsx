"use client"
import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi'
const RemoveBtn = ({id}) => {

  const removetodo = async () =>
  {
    const confirmed = confirm('Are you sure to delete')

    if (confirmed){
      await fetch(`http://localhost:3000/api/todos?id=${id}`  , {
        method : "DELETE"
      })
    }

  }
  return (<button className='text-red-400' onClick={removetodo}>
    <HiOutlineTrash size={24} className='text-red-400' />
    </button>
  )
}

export default RemoveBtn