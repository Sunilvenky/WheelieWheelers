import React from 'react'
import './About.css'

export default function About() {
  const teamMembers = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      image: '/images/team1.jpg',
      bio: 'Passionate biker with 15+ years of Ladakh experience'
    },
    {
      name: 'Priya Sharma',
      role: 'Operations Manager',
      image: '/images/team2.jpg',
      bio: 'Ensuring smooth trip operations and customer satisfaction'
    },
    {
      name: 'Amit Singh',
      role: 'Lead Guide',
      image: '/images/team3.jpg',
      bio: 'Certified mountaineer with extensive Ladakh knowledge'
    }
  ]

  const features = [
    {
      icon: '🏍️',
      title: 'Premium Bikes',
      description: 'Well-maintained Royal Enfield bikes for every trip'
    },
    {
      icon: '🏨',
      title: 'Comfortable Stays',
      description: 'Carefully selected accommodations for rest and relaxation'
    },
    {
      icon: '🍽️',
      title: 'Local Cuisine',
      description: 'Experience authentic Ladakhi food during your journey'
    },
    {
      icon: '🛡️',
      title: 'Safety First',
      description: 'Fully equipped support vehicles and medical kits'
    }
  ]

  return (
    <div className="about-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>About Ladakh Bike Trips</h1>
          <p>Your gateway to unforgettable Himalayan adventures</p>
        </div>
      </section>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <div className="mission-content">
          <p>
            At Ladakh Bike Trips, we're passionate about creating unforgettable
            motorcycle adventures in the majestic Himalayas. Our mission is to
            provide safe, authentic, and life-changing experiences while
            promoting sustainable tourism in the region.
          </p>
          <div className="values-grid">
            <div className="value-card">
              <h3>Adventure</h3>
              <p>Pushing boundaries and exploring the unknown</p>
            </div>
            <div className="value-card">
              <h3>Safety</h3>
              <p>Your well-being is our top priority</p>
            </div>
            <div className="value-card">
              <h3>Sustainability</h3>
              <p>Responsible tourism that benefits local communities</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <div className="image-container">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p className="bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
