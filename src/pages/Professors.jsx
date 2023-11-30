import React, { useEffect } from "react";
import { ProfCard } from '../profComponents/ProfCard'
import { useState } from "react";
import './Professors.css'
import Navbar from "../components/Navbar";
import Searchbar from '../components/Searchbar';
import Logpopup from "../components/Logpopup";

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
  const [isPopup, setIsPopup] = useState(true);
const [isPopCalled, setIsPopCalled] = useState(true);
const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
const [userShow, setUserShow] = useState("");
const [emailShow, setEmailShow] = useState("");
const api = import.meta.env.VITE_API_BASE_URL;
useEffect(() => {
  auth();
}, []);

const auth = async () => {
  try {
    const response = await fetch(`${api}auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      withCredentials: true,
    });

    if (response.status == 200) {
      const data = await response.json();
      console.log(data.email, data.username);
      setIsUserLoggedIn(true);
      setUserShow(data.username);
      setEmailShow(data.email);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};


  return (
    <div className='proffesor-bg'>
        <Logpopup
        userShow={userShow}
        setUserShow={setUserShow}
        emailShow={emailShow}
        setEmailShow={setEmailShow}
        isPopCalled={isPopCalled}
        setIsPopCalled={setIsPopCalled}
        isPopup={isPopup}
        setIsPopup={setIsPopup}
        isUserLoggedIn={isUserLoggedIn}
        setIsUserLoggedIn={setIsUserLoggedIn}
      />

      <div className='professor-bg-color'>
      <div className='proffesor-container'>


    <Navbar 
            setIsPopCalled={setIsPopCalled}
            isPopup={isPopup}
            setIsPopup={setIsPopup}
    
    />
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
