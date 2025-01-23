import { Link } from 'react-router-dom'
import './TripCard.css'

export default function TripCard({ trip }) {
  return (
    <div className="trip-card">
      <div className="trip-image">
        <img src={trip.image} alt={trip.name} />
      </div>
      <div className="trip-info">
        <h3>{trip.name}</h3>
        <div className="trip-meta">
          <span>⏳ {trip.duration} days</span>
          <span>💰 ₹{trip.price}</span>
        </div>
        <p className="trip-description">{trip.shortDescription}</p>
        <Link to={`/trips/${trip.id}`} className="view-details-btn">
          View Details
        </Link>
      </div>
    </div>
  )
}
