import { useState } from 'react'

function NoteCard({ title, body }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <h3 className="mb-2 text-xl">{title}</h3>
      {open && <p className="text-[#4d4d4d]">{body}</p>}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="mt-2 cursor-pointer text-sm text-[#b83f45] hover:underline"
      >
        {open ? 'Show less' : 'Show more'}
      </button>
    </>
  )
}

export default NoteCard