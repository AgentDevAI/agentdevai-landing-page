"use client"

interface ContactFormFieldProps {
  id: string
  label: string
  type: string
  placeholder: string
  required?: boolean
  value: string
  onChange: (value: string) => void
}

export default function ContactFormField({
  id,
  label,
  type,
  placeholder,
  required,
  value,
  onChange,
}: ContactFormFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-slate-200 mb-2">
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
      />
    </div>
  )
}
