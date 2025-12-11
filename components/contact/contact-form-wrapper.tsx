"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import ContactFormField from "./contact-form-field"
import ContactFormSelect from "./contact-form-select"
import ContactFormTextarea from "./contact-form-textarea"
import ContactFormCheckbox from "./contact-form-checkbox"

const FORM_FIELDS = [
  { id: "firstName", label: "First Name", type: "text", placeholder: "John", required: true },
  { id: "lastName", label: "Last Name", type: "text", placeholder: "Doe", required: true },
  { id: "email", label: "Email Address", type: "email", placeholder: "john@example.com", required: true },
  { id: "company", label: "Company Name", type: "text", placeholder: "Your Company", required: false },
  { id: "phone", label: "Phone Number", type: "tel", placeholder: "+1 (555) 000-0000", required: false },
]

const SERVICE_OPTIONS = [
  { value: "ai-agents", label: "AI Agent Development" },
  { value: "crm-integration", label: "CRM Integration" },
  { value: "multi-channel", label: "Multi-Channel Integration" },
  { value: "consultation", label: "Consultation" },
  { value: "other", label: "Other" },
]

const INTEREST_CHECKBOXES = [
  { id: "ecommerce", label: "E-commerce Solutions" },
  { id: "saas", label: "SaaS Integration" },
  { id: "healthcare", label: "Healthcare" },
  { id: "finance", label: "Finance & Banking" },
  { id: "custom", label: "Custom Solution" },
]

export default function ContactFormWrapper() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    service: "ai-agents",
    message: "",
    interests: [],
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleFieldChange = (fieldId: string, value: string) => {
    setFormData((prev) => ({ ...prev, [fieldId]: value }))
  }

  const handleCheckboxChange = (interestId: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter((id) => id !== interestId)
        : [...prev.interests, interestId],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus("idle")
    setIsSubmitting(true)

    const requiredFields = ["firstName", "lastName", "email", "message"]
    const hasMissing = requiredFields.some((field) => {
      const value = formData[field as keyof typeof formData]
      return typeof value === "string" ? value.trim() === "" : false
    })

    if (hasMissing) {
      setSubmitStatus("error")
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        setSubmitStatus("error")
        setTimeout(() => setSubmitStatus("idle"), 5000)
        return
      }

      setSubmitStatus("success")
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        service: "ai-agents",
        message: "",
        interests: [],
      })

      setTimeout(() => setSubmitStatus("idle"), 5000)
    } catch (error) {
      console.error("[contact] Form submission error:", error)
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Text Fields Row 1 */}
      <div className="grid md:grid-cols-2 gap-6">
        {FORM_FIELDS.slice(0, 2).map((field) => (
          <ContactFormField
            key={field.id}
            {...field}
            value={formData[field.id as keyof typeof formData] as string}
            onChange={(value) => handleFieldChange(field.id, value)}
          />
        ))}
      </div>

      {/* Text Fields Row 2 */}
      <div className="grid md:grid-cols-2 gap-6">
        {FORM_FIELDS.slice(2, 4).map((field) => (
          <ContactFormField
            key={field.id}
            {...field}
            value={formData[field.id as keyof typeof formData] as string}
            onChange={(value) => handleFieldChange(field.id, value)}
          />
        ))}
      </div>

      {/* Phone Field */}
      <ContactFormField
        {...FORM_FIELDS[4]}
        value={formData.phone}
        onChange={(value) => handleFieldChange("phone", value)}
      />

      {/* Service Select */}
      <ContactFormSelect
        label="Service of Interest"
        value={formData.service}
        onChange={(value) => handleFieldChange("service", value)}
        options={SERVICE_OPTIONS}
      />

      {/* Message Textarea */}
      <ContactFormTextarea
        label="Message"
        placeholder="Tell us about your project and what you're looking to achieve..."
        value={formData.message}
        onChange={(value) => handleFieldChange("message", value)}
        required
      />

      {/* Interest Checkboxes */}
      <div>
        <label className="block text-sm font-semibold text-slate-200 mb-4">Industries/Use Cases of Interest</label>
        <div className="space-y-3">
          {INTEREST_CHECKBOXES.map((checkbox) => (
            <ContactFormCheckbox
              key={checkbox.id}
              id={checkbox.id}
              label={checkbox.label}
              checked={formData.interests.includes(checkbox.id)}
              onChange={() => handleCheckboxChange(checkbox.id)}
            />
          ))}
        </div>
      </div>

      {/* Submit Status Messages */}
      {submitStatus === "success" && (
        <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400">
          Thank you! We've received your message and will get back to you soon.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400">
          Something went wrong. Please try again or contact us directly.
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
