import React from 'react'
import { ProfCard } from '../profComponents/ProfCard'
import './Professor.css'
import Navbar from "../components/Navbar";
import Searchbar from '../components/Searchbar';

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
      <div className='professor-bg-color'>
      <div className='proffesor-container'>


    <Navbar/>
    <Searchbar/>
    <div className='proffesor-home-wrapper'>
        <h1 className='professor-title'>class:PHY 102</h1>
        <div className='professor-cards'>
        {data.map(item =>(
          <ProfCard {...item}/>
        ))}
        <div style={{height:'calc(100vh - 300px -147px)'}}></div>
        </div>
      </div>
    </div>
    </div>
    </div>

  )
}
