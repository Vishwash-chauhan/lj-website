'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventDateTime: '',
    guestCount: '',
    ageRange: '',
    foodPreference: '',
    theme: '',
    location: '',
  })

  const [errors, setErrors] = useState<Record<string, boolean>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: false,
      }))
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    if (name === 'name' && value.trim()) {
      setErrors((prev) => ({
        ...prev,
        name: false,
      }))
    }
    if (name === 'phone') {
      const phoneRegex = /^[0-9]{10}$/
      if (phoneRegex.test(value)) {
        setErrors((prev) => ({
          ...prev,
          phone: false,
        }))
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newErrors: Record<string, boolean> = {}

    // Validate required fields
    if (!formData.name.trim()) {
      newErrors.name = true
    }

    const phoneRegex = /^[0-9]{10}$/
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = true
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsLoading(true)

    const submissionData = {
      ...formData,
      submittedAt: new Date().toLocaleString('en-IN', {
        dateStyle: 'short',
        timeStyle: 'short',
        timeZone: 'Asia/Kolkata',
      }),
    }

    try {
      const response = await fetch(
        'https://n8n.vyaapaarniti.com/webhook/ae8a50e0-74e1-48cd-b161-02cb71bc1f72',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(submissionData),
        }
      )

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      setIsSubmitted(true)
      setFormData({
        name: '',
        phone: '',
        eventDateTime: '',
        guestCount: '',
        ageRange: '',
        foodPreference: '',
        theme: '',
        location: '',
      })

      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    } catch (error) {
      console.error('Error:', error)
      // Still show success message even if there's an error
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    } finally {
      setIsLoading(false)
    }
  }

  const styles = {
    container: {
      maxWidth: '600px',
      margin: '0 auto',
      fontFamily: "'Comic Neue', cursive, sans-serif",
    },
    header: {
      textAlign: 'center' as const,
      marginBottom: '40px',
    },
    logo: {
      maxWidth: '130px',
      height: 'auto',
      display: 'block',
      margin: '0 auto 20px',
    },
    title: {
      color: '#F26522',
      fontSize: '2.5rem',
      marginBottom: '10px',
      textTransform: 'uppercase' as const,
      textShadow: '2px 2px #FFCB05',
      fontWeight: '900' as const,
    },
    subtitle: {
      color: '#333333',
      fontSize: '1.1rem',
      fontWeight: '700' as const,
      marginBottom: '10px',
      margin: '10px 0',
    },
    description: {
      color: '#666',
      fontSize: '0.95rem',
      lineHeight: '1.5',
    },
    wrapper: {
      background: 'white',
      border: '3px solid #FFCB05',
      borderRadius: '25px',
      padding: '40px',
      boxShadow: '10px 10px 0px #F26522',
      position: 'relative' as const,
      overflow: 'hidden' as const,
    },
    wrapperBefore: {
      content: '""',
      position: 'absolute' as const,
      top: '-20px',
      right: '-20px',
      width: '80px',
      height: '80px',
      background: '#F26522',
      opacity: 0.1,
      borderRadius: '50%',
    },
    formGroup: {
      marginBottom: '25px',
      position: 'relative' as const,
      zIndex: 1,
    },
    label: {
      display: 'block' as const,
      color: '#F26522',
      fontSize: '1.1rem',
      fontWeight: '900' as const,
      marginBottom: '8px',
      textTransform: 'uppercase' as const,
    },
    required: {
      color: '#e74c3c',
      marginLeft: '4px',
    },
    input: {
      width: '100%',
      padding: '12px 15px',
      border: '2px solid #FFCB05',
      borderRadius: '15px',
      fontFamily: "'Comic Neue', cursive, sans-serif",
      fontSize: '1rem',
      color: '#333333',
      backgroundColor: '#FFFBF7',
      transition: 'all 0.3s ease',
      boxSizing: 'border-box' as const,
    },
    inputFocus: {
      outline: 'none',
      borderColor: '#F26522',
      boxShadow: '0 0 10px rgba(242, 101, 34, 0.2)',
      backgroundColor: '#FFF',
    },
    inputError: {
      borderColor: '#e74c3c',
      backgroundColor: '#ffe6e6',
    },
    textarea: {
      width: '100%',
      padding: '12px 15px',
      border: '2px solid #FFCB05',
      borderRadius: '15px',
      fontFamily: "'Comic Neue', cursive, sans-serif",
      fontSize: '1rem',
      color: '#333333',
      backgroundColor: '#FFFBF7',
      transition: 'all 0.3s ease',
      resize: 'vertical' as const,
      minHeight: '100px',
      boxSizing: 'border-box' as const,
    },
    select: {
      width: '100%',
      padding: '12px 15px',
      border: '2px solid #FFCB05',
      borderRadius: '15px',
      fontFamily: "'Comic Neue', cursive, sans-serif",
      fontSize: '1rem',
      color: '#333333',
      backgroundColor: '#FFFBF7',
      transition: 'all 0.3s ease',
      cursor: 'pointer' as const,
      appearance: 'none' as const,
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23F26522' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 12px center',
      paddingRight: '40px',
      boxSizing: 'border-box' as const,
    },
    errorMessage: {
      color: '#e74c3c',
      fontSize: '0.85rem',
      marginTop: '5px',
      fontWeight: '700' as const,
      display: 'none' as const,
    },
    errorMessageShow: {
      display: 'block' as const,
    },
    submitBtn: {
      width: '100%',
      padding: '15px',
      background: '#F26522',
      border: '3px solid #F26522',
      borderRadius: '15px',
      color: 'white',
      fontSize: '1.2rem',
      fontWeight: '900' as const,
      textTransform: 'uppercase' as const,
      fontFamily: "'Comic Neue', cursive, sans-serif",
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '6px 6px 0px #FFCB05',
      marginTop: '10px',
    },
    submitBtnDisabled: {
      opacity: 0.7,
      cursor: 'not-allowed' as const,
    },
    successMessage: {
      background: '#d4edda',
      border: '2px solid #28a745',
      borderRadius: '15px',
      padding: '20px',
      marginBottom: '20px',
      color: '#155724',
      fontWeight: '700' as const,
      textAlign: 'center' as const,
    },
  }

  return (
    <div
      style={{
        background: '#FFF9F2',
        color: '#333333',
        padding: '20px',
        minHeight: '100vh',
      }}
    >
      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.title}>✨ Enquiry Form ✨</h1>
          <p style={styles.subtitle}>Let's Make Your Event Magical!</p>
          <p style={styles.description}>
            Fill out the form below to book our catering services for your special event.
          </p>
        </div>

        {isSubmitted && (
          <div style={styles.successMessage}>
            ✨ Thank you! We've received your booking request. Our team will contact you soon!
            ✨
          </div>
        )}

        {!isSubmitted && (
          <div style={styles.wrapper}>
            <form onSubmit={handleSubmit} noValidate>
              {/* Name */}
              <div style={styles.formGroup}>
                <label htmlFor="name" style={styles.label}>
                  Name <span style={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  style={{
                    ...styles.input,
                    ...(errors.name ? styles.inputError : {}),
                  }}
                  required
                />
                {errors.name && (
                  <div style={{ ...styles.errorMessage, ...styles.errorMessageShow }}>
                    Please enter your name
                  </div>
                )}
              </div>

              {/* Phone */}
              <div style={styles.formGroup}>
                <label htmlFor="phone" style={styles.label}>
                  Phone <span style={styles.required}>*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your 10-digit phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  style={{
                    ...styles.input,
                    ...(errors.phone ? styles.inputError : {}),
                  }}
                  required
                />
                {errors.phone && (
                  <div style={{ ...styles.errorMessage, ...styles.errorMessageShow }}>
                    Please enter a valid 10-digit phone number
                  </div>
                )}
              </div>

              {/* Event Date & Time */}
              <div style={styles.formGroup}>
                <label htmlFor="eventDateTime" style={styles.label}>
                  Event Date & Time
                </label>
                <input
                  type="datetime-local"
                  id="eventDateTime"
                  name="eventDateTime"
                  value={formData.eventDateTime}
                  onChange={handleInputChange}
                  style={styles.input}
                />
              </div>

              {/* Guest Count */}
              <div style={styles.formGroup}>
                <label htmlFor="guestCount" style={styles.label}>
                  Number of Kids & Adults
                </label>
                <input
                  type="text"
                  id="guestCount"
                  name="guestCount"
                  placeholder="e.g., 5 kids, 20 adults"
                  value={formData.guestCount}
                  onChange={handleInputChange}
                  style={styles.input}
                />
              </div>

              {/* Age Range */}
              <div style={styles.formGroup}>
                <label htmlFor="ageRange" style={styles.label}>
                  Age Range of Kids
                </label>
                <input
                  type="text"
                  id="ageRange"
                  name="ageRange"
                  placeholder="e.g., 3-8 years"
                  value={formData.ageRange}
                  onChange={handleInputChange}
                  style={styles.input}
                />
              </div>

              {/* Food Preference */}
              <div style={styles.formGroup}>
                <label htmlFor="foodPreference" style={styles.label}>
                  Food Preference
                </label>
                <select
                  id="foodPreference"
                  name="foodPreference"
                  value={formData.foodPreference}
                  onChange={handleInputChange}
                  style={styles.select}
                >
                  <option value="">-- Select preference --</option>
                  <option value="Veg">🥬 Veg Only</option>
                  <option value="Non Veg">🍗 Non Veg Only</option>
                  <option value="Both">🍲 Both (Veg & Non Veg)</option>
                </select>
              </div>

              {/* Theme */}
              <div style={styles.formGroup}>
                <label htmlFor="theme" style={styles.label}>
                  Theme
                </label>
                <input
                  type="text"
                  id="theme"
                  name="theme"
                  placeholder="e.g., Superhero, Princess, Dinosaur"
                  value={formData.theme}
                  onChange={handleInputChange}
                  style={styles.input}
                />
              </div>

              {/* Location */}
              <div style={styles.formGroup}>
                <label htmlFor="location" style={styles.label}>
                  Location
                </label>
                <textarea
                  id="location"
                  name="location"
                  placeholder="Enter your event location/address"
                  value={formData.location}
                  onChange={handleInputChange}
                  style={styles.textarea}
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                style={{
                  ...styles.submitBtn,
                  ...(isLoading ? styles.submitBtnDisabled : {}),
                }}
              >
                {isLoading ? 'Sending...' : 'Send Enquiry! 🎉'}
              </button>
            </form>
          </div>
        )}
      </div>

      {/* WhatsApp Chat Widget */}
      <div
        style={{
          position: 'fixed',
          bottom: '15px',
          right: '15px',
          zIndex: 99999999,
        }}
      >
        <button
          onClick={() => window.open('https://wa.me/918130964374', '_blank')}
          style={{
            background: '#25D366',
            border: 'none',
            borderRadius: '50%',
            width: '56px',
            height: '56px',
            padding: '14px',
            cursor: 'pointer',
            boxShadow: '0px 0px 11px rgba(0,0,0,.5)',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0px 0px 15px rgba(0,0,0,.6)'
            e.currentTarget.style.transform = 'scale(1.1)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0px 0px 11px rgba(0,0,0,.5)'
            e.currentTarget.style.transform = 'scale(1)'
          }}
        >
          <svg
            style={{ width: '40px', height: '40px' }}
            width="40px"
            height="40px"
            viewBox="0 0 1219.547 1225.016"
          >
            <path
              fill="#E0E0E0"
              d="M1041.858 178.02C927.206 63.289 774.753.07 612.325 0 277.617 0 5.232 272.298 5.098 606.991c-.039 106.986 27.915 211.42 81.048 303.476L0 1225.016l321.898-84.406c88.689 48.368 188.547 73.855 290.166 73.896h.258.003c334.654 0 607.08-272.346 607.222-607.023.056-162.208-63.052-314.724-177.689-429.463zm-429.533 933.963h-.197c-90.578-.048-179.402-24.366-256.878-70.339l-18.438-10.93-191.021 50.083 51-186.176-12.013-19.087c-50.525-80.336-77.198-173.175-77.16-268.504.111-278.186 226.507-504.503 504.898-504.503 134.812.056 261.519 52.604 356.814 147.965 95.289 95.36 147.728 222.128 147.688 356.948-.118 278.195-226.522 504.543-504.693 504.543z"
            />
            <path
              fill="#25D366"
              d="M27.875 1190.114l82.211-300.18c-50.719-87.852-77.391-187.523-77.359-289.602.133-319.398 260.078-579.25 579.469-579.25 155.016.07 300.508 60.398 409.898 169.891 109.414 109.492 169.633 255.031 169.57 409.812-.133 319.406-260.094 579.281-579.445 579.281-.023 0 .016 0 0 0h-.258c-96.977-.031-192.266-24.375-276.898-70.5l-307.188 80.548z"
            />
            <path
              fill="#FFF"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M462.273 349.294c-11.234-24.977-23.062-25.477-33.75-25.914-8.742-.375-18.75-.352-28.742-.352-10 0-26.25 3.758-39.992 18.766-13.75 15.008-52.5 51.289-52.5 125.078 0 73.797 53.75 145.102 61.242 155.117 7.5 10 103.758 166.266 256.203 226.383 126.695 49.961 152.477 40.023 179.977 37.523s88.734-36.273 101.234-71.297c12.5-35.016 12.5-65.031 8.75-71.305-3.75-6.25-13.75-10-28.75-17.5s-88.734-43.789-102.484-48.789-23.75-7.5-33.75 7.516c-10 15-38.727 48.773-47.477 58.773-8.75 10.023-17.5 11.273-32.5 3.773-15-7.523-63.305-23.344-120.609-74.438-44.586-39.75-74.688-88.844-83.438-103.859-8.75-15-.938-23.125 6.586-30.602 6.734-6.719 15-17.508 22.5-26.266 7.484-8.758 9.984-15.008 14.984-25.008 5-10.016 2.5-18.773-1.25-26.273s-32.898-81.67-46.234-111.326z"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
