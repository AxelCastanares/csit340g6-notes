import { useState, useContext, memo } from 'react'
import { SettingsContext } from '../SettingsContext.js'

function NoteCard({ id, title, body, onDelete }) {
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
      <button
        type="button"
        onClick={() => onDelete(id)}
        className="absolute top-4 right-5 cursor-pointer text-[26px] leading-none text-[#949494] hover:text-[#c18585]"
      >
        ×
      </button>
    </div>
  )
}

export default memo(NoteCard)