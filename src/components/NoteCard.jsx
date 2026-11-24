import { useState, useContext } from 'react'
import { SettingsContext } from '../SettingsContext.js'

function NoteCard({ title, body }) {
  const [open, setOpen] = useState(false)
  const { largeText } = useContext(SettingsContext)

  return (
    <div>
      <h3
        className={
          largeText
            ? 'mb-2 pr-8 text-[28px] break-words'
            : 'mb-2 pr-8 text-[22px] break-words'
        }
      >
        {title}
      </h3>
      {open && (
        <p
          className={
            largeText
              ? 'text-[21px] break-words text-[#4d4d4d]'
              : 'text-[17px] break-words text-[#4d4d4d]'
          }
        >
          {body}
        </p>
      )}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="mt-2 cursor-pointer text-sm text-[#b83f45] hover:underline"
      >
        {open ? 'Show less' : 'Show more'}
      </button>
    </div>
  )
}

export default NoteCard