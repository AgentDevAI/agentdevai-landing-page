"use client"

interface ContactFormCheckboxProps {
  id: string
  label: string
  checked: boolean
  onChange: () => void
}

export default function ContactFormCheckbox({ id, label, checked, onChange }: ContactFormCheckboxProps) {
  return (
    <label htmlFor={id} className="flex items-center gap-3 cursor-pointer group">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-5 h-5 bg-slate-900 border border-slate-700 rounded accent-blue-500 cursor-pointer"
      />
      <span className="text-slate-300 group-hover:text-blue-400 transition">{label}</span>
    </label>
  )
}
