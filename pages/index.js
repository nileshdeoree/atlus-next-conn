import { useState } from 'react'

export default function Home() {

  const [note, setNote] = useState({ title: "" })

  const addNote = async (title) => {
    const response = await fetch(`http://localhost:3000/api/addcontact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title })
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

        <input type="text" id="exampleInput7" placeholder="Name" value={note.title} name="title" onChange={onChange} />
        <button onClick={handleClick}>Submit</button>

      </div>
    </>
  )
}
