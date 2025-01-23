import { useState } from 'react'
import { useParams } from 'react-router-dom'
import './TripDetails.css'

// Mock data - replace with API call
const tripData = {
  id: 1,
  name: 'Leh-Ladakh Classic',
  images: [
    '/images/trip1-1.jpg',
    '/images/trip1-2.jpg',
    '/images/trip1-3.jpg'
  ],
  description: 'Experience the ultimate adventure through the majestic landscapes of Ladakh...',
  itinerary: [
    'Day 1: Arrival in Leh',
    'Day 2: Acclimatization & Local Sightseeing',
    'Day 3: Leh to Nubra Valley',
    // ... more days
  ],
  inclusions: [
    'Accommodation',
    'Meals',
    'Bike Rental',
    // ... more
  ],
  exclusions: [
    'Personal Expenses',
    'Travel Insurance',
    // ... more
  ],
  pickup: 'Leh Airport',
  drop: 'Leh Airport',
  startDate: '2023-10-15',
  thingsToCarry: [
    'Warm Clothes',
    'Sunscreen',
    'Medications',
    // ... more
  ]
}

export default function TripDetails() {
  const { id } = useParams()
  const [currentImage, setCurrentImage] = useState(0)
  const [activeTab, setActiveTab] = useState('overview')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    participants: 1,
    requests: ''
  })
  const [errors, setErrors] = useState({})

  const handleImageChange = (index) => {
    setCurrentImage(index)
  }

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name) newErrors.name = 'Name is required'
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Valid email is required'
    }
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Valid phone number is required'
    }
    if (formData.participants < 1) {
      newErrors.participants = 'At least 1 participant is required'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      // Handle form submission
      console.log('Form submitted:', formData)
    }
  }

  return (
    <div className="trip-details-page">
      <div className="image-section">
        <div className="main-image">
          <img src={tripData.images[currentImage]} alt={tripData.name} />
        </div>
        <div className="thumbnail-grid">
          {tripData.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className={index === currentImage ? 'active' : ''}
              onClick={() => handleImageChange(index)}
            />
          ))}
        </div>
      </div>

      <div className="content-section">
        <div className="tabs">
          <button
            className={activeTab === 'overview' ? 'active' : ''}
            onClick={() => handleTabChange('overview')}
          >
            Overview
          </button>
          <button
            className={activeTab === 'itinerary' ? 'active' : ''}
            onClick={() => handleTabChange('itinerary')}
          >
            Itinerary
          </button>
          <button
            className={activeTab === 'details' ? 'active' : ''}
            onClick={() => handleTabChange('details')}
          >
            Details
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'overview' && (
            <div className="overview">
              <h2>{tripData.name}</h2>
              <p>{tripData.description}</p>
            </div>
          )}

          {activeTab === 'itinerary' && (
            <div className="itinerary">
              <h3>Itinerary</h3>
              <ul>
                {tripData.itinerary.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'details' && (
            <div className="details">
              <div className="details-grid">
                <div>
                  <h4>Inclusions</h4>
                  <ul>
                    {tripData.inclusions.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Exclusions</h4>
                  <ul>
                    {tripData.exclusions.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Things to Carry</h4>
                  <ul>
                    {tripData.thingsToCarry.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="additional-info">
                <p><strong>Pickup Point:</strong> {tripData.pickup}</p>
                <p><strong>Drop Point:</strong> {tripData.drop}</p>
                <p><strong>Start Date:</strong> {tripData.startDate}</p>
              </div>
            </div>
          )}
        </div>

        <div className="booking-form">
          <h3>Book This Trip</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? 'error' : ''}
              />
              {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>

            <div className="form-group">
              <label>Number of Participants</label>
              <input
                type="number"
                name="participants"
                value={formData.participants}
                onChange={handleChange}
                min="1"
                className={errors.participants ? 'error' : ''}
              />
              {errors.participants && <span className="error-message">{errors.participants}</span>}
            </div>

            <div className="form-group">
              <label>Special Requests</label>
              <textarea
                name="requests"
                value={formData.requests}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="submit-btn">
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
