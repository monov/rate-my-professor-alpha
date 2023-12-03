import React from 'react'
import './ProfCard.css'
import Navbar from '../components/Navbar'
import { NavLink } from 'react-router-dom'

export const ProfCard = ({setSearchResponse , fullName , university , photoreRerence = '/src/assets/bob.png', ratingA=[4,1,2,3,2] ,rating = 3, id}) => {
  return (
    <NavLink to = {`./${id}`} className='prof-card' onClick={()=> setSearchResponse({fullName,university,photoreRerence ,id , ratingA , rating})} >  
      <div className='prof-card-stats' key={id}>
        <div className='prof-card-image-wraper'>
          <img src={photoreRerence} className='prof-card-image' alt="" />
          <div className='prof-card-overall'>{rating}</div>
        </div>
          <div className='prof-card-rating-wrapper'>
            {ratingA.map(item =>(
              <div className='prof-card-rating'>
                <div className='prof-card-rate-len' style={{width : item/5*100 }}></div>
               </div>
            ))}
          </div>
          
      </div>
      <div className='prof-card-info'>
          <h3 className='prof-card-name'>{fullName}</h3>
          <h4 className='prof-card-university'>{university}</h4>

      </div>
    </NavLink>
  )
}
