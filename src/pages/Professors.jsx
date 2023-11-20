import React from 'react'
import { ProfCard } from '../profComponents/ProfCard'
import './Professor.css'

const data = [{
    id:1,
    fullName:"john Smith",
    university:"Koc University",
    photoreference: 'bob.png',
    rating :4.5,
    ratingA:[4,5,1,2,3]
},
{    
    id:1,
    fullName:"john Smith",
    university:"Koc University",
    photoreference: 'bob.png',
    rating:3.3,
    ratingA:[4,5,1,2,3]
},
{    
    id:1,
    fullName:"john Smith",
    university:"Koc University",
    photoreference: 'bob.png',
    rating:3.3,
    ratingA:[4,5,1,2,3]
},
{    
    id:1,
    fullName:"john Smith",
    university:"Koc University",
    photoreference: 'bob.jpg',
    rating:3.3,
    ratingA:[4,5,1,2,3]
}]

export const Professors = () => {
  return (
    <div className='proffesor-bg'>
    <div className='proffesor-home-wrapper'>
        
        <h1 className='professor-title'>PHY 102</h1>
        <div className='professor-cards'>
        {data.map(item =>(
          <ProfCard {...item}/>
        ))}

        </div>

    </div>
    </div>
  )
}
