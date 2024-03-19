import React from 'react'
import useGlobalContext from './context'

export default function Search() {
    const {quary, searchNotes} = useGlobalContext();
  return (
    <>
      
        <h1>Hii avinash</h1>
        <form onSubmit={(e) => e.preventDefault()}>
            <div>
                <input type="text" placeholder='Search here..'
                value={query}
                onChange={(e) => e.preventDefault()}/>
            </div>
        </form>
      
    </>
  )
}
