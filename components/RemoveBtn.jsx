"use client"
import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi'
import {useRouter} from 'next/navigation'
const RemoveBtn = ({id}) => {
const router = useRouter()
 
  const removetodo = async () =>
  {
    const confirmed = confirm('Are you sure to delete')

    if (confirmed){
      const res = await fetch(`http://localhost:3000/api/todos?id=${id}`  , {
        method : "DELETE"
      })

      if (res.ok)
      {router.refresh()}
    }

  }
  return (<button className='text-red-400' onClick={removetodo}>
    <HiOutlineTrash size={24} className='text-red-400' />
    </button>
  )
}

export default RemoveBtn