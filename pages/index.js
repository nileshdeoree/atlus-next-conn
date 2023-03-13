import Head from 'next/head'
import Image from 'next/image'
import connectToMongo from '../middleware/mongoose'
import styles from '../styles/Home.module.css'
import { useState } from 'react'


export default function Home() {

  const [note, setNote] = useState({ title: "" })

  const addNote = async (title) => { 
      const response = await fetch(`http://localhost:3000/api/addcontact`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ title})
      });
      response.json()
  }

  const handleClick = (e) => {
      e.preventDefault();
      addNote(note.title);
      setNote({ title: "" })
      console.log("Added Successfully", "success");
  }

  const onChange = (e) => {
      setNote({ ...note, [e.target.name]: e.target.value })
      console.log(note)
  }

  return (
    <>
      <div>
        <div className="form-group mb-6">
          <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7" placeholder="Name" value={note.title} name="title" onChange={onChange} />
          <button onClick={handleClick}>Submit</button>
        </div>
      </div>
    </>
  )
}
