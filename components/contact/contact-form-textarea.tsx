"use client"

interface ContactFormTextareaProps {
  label: string
  placeholder: string
  value: string
  onChange: (value: string) => void
  required?: boolean
}

export default function ContactFormTextarea({
  label,
  placeholder,
  value,
  onChange,
  required,
}: ContactFormTextareaProps) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-200 mb-2">
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        rows={6}
        className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition resize-none"
      />
    </div>
  )
}
