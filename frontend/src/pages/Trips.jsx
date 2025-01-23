import { useState } from 'react'
import TripCard from '../components/TripCard'
import './Trips.css'

// Mock data - replace with API calls
const tripsData = [
  {
    id: 1,
    name: 'Leh-Ladakh Classic',
    duration: 7,
    price: 25000,
    image: '/images/trip1.jpg',
    shortDescription: 'Explore the classic Leh-Ladakh route'
  },
  {
    id: 2,
    name: 'Pangong Lake Adventure',
    duration: 5,
    price: 18000,
    image: '/images/trip2.jpg',
    shortDescription: 'Experience the beauty of Pangong Lake'
  },
  // Add more trips...
]

export default function Trips() {
  const [filters, setFilters] = useState({
    duration: '',
    maxPrice: ''
  })
  const [searchTerm, setSearchTerm] = useState('')

  const filteredTrips = tripsData.filter(trip => {
    return (
      (!filters.duration || trip.duration <= filters.duration) &&
      (!filters.maxPrice || trip.price <= filters.maxPrice) &&
      (!searchTerm || trip.name.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  })

  return (
    <div className="trips-page">
      <div className="filters-section">
        <input
          type="text"
          placeholder="Search trips..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <div className="filter-group">
          <label>Max Duration (days):</label>
          <input
            type="number"
            value={filters.duration}
            onChange={(e) => setFilters({...filters, duration: e.target.value})}
          />
        </div>

        <div className="filter-group">
          <label>Max Price:</label>
          <input
            type="number"
            value={filters.maxPrice}
            onChange={(e) => setFilters({...filters, maxPrice: e.target.value})}
          />
        </div>
      </div>

      <div className="trips-grid">
        {filteredTrips.length > 0 ? (
          filteredTrips.map(trip => (
            <TripCard key={trip.id} trip={trip} />
          ))
        ) : (
          <p className="no-results">No trips match your criteria</p>
        )}
      </div>
    </div>
  )
}
