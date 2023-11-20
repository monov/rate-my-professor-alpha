import React from 'react'
import './ProfCard.css'
import Navbar from '../components/Navbar'
import { NavLink } from 'react-router-dom'

export const ProfCard = ({fullName , university , photoreference, ratingA ,rating, id}) => {
  return (
    <NavLink to = {`./${id}`} className='prof-card'>
        <img src={photoreference} className='prof-card-image' alt="" />
        <div className='prof-card-info'>
            <h3 className='prof-card-name'>{fullName}</h3>
            <h4 className='prof-card-university'>{university}</h4>
            <div className='prof-card-stats'>
              <div className='prof-card-overall'>{rating}</div>
              <div className='prof-card-rating-wrapper'>
              {ratingA.map(item =>(
                <div className='prof-card-rating'>
                  <div className='prof-card-rate-len' style={{width : item/5 *100}}></div>
                </div>
              ))}
              </div>

            </div>
        </div>
    </NavLink>
  )
}
