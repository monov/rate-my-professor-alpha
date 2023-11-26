import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import './ProfPage.css'
import { Comment } from '../components/Comment'

export const ProfPage = () => {
    const [activeStars , setActiveStars] = useState(0)
    const [howeredStars , setHoweredSrars] = useState(0)
    const data ={
        id:1,
    fullName:"john Smith",
    university:"Koc University",
    photoreference: 'bob.png',
    rating :4.5,
    ratingA:[4,5,1,2,3],
    about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    }

    const stars = Array(5).fill('')

    return (
        <div className='proffesor-bg'>
          <div className='professor-bg-color'>
            <div className='proffesor-container'>
                <Navbar/>
                <div className='prof-main-stats'>
                    <div className='prof-card-image-wraper'>
                        <img src={data.photoreference} className='prof-card-image' alt="" />
                    </div>
                <div className='prof-main-about'>
                <div className='prof-main-name'>
                    Prof. Elon Musk
                    <span className='prof-main-from'>Koc University | class: PHYS 102</span>
                </div>
                <div className='prof-main-rate'>
                    <span > Rate this professor:</span>
                    <div className='prof-main-stars'>
                        {stars.map((item, i)=>{
                                return (
                                    <div className={i<howeredStars?'main-stars active': 'main-stars'} 
                                        onMouseEnter={()=> setHoweredSrars(i+1)}
                                        onMouseLeave={()=> setHoweredSrars(activeStars)}
                                        onClick={()=>{
                                            setActiveStars(i+1)
                                            setHoweredSrars(i+1)
                                        }}
                                    >  
                                        <svg xmlns="http://www.w3.org/2000/svg" width="49" height="47" viewBox="0 0 49 47">
                                            <path d="M24.4062 0.34375L30.1103 17.899H48.569L33.6356 28.7488L39.3397 46.3041L24.4062 35.4543L9.47283 46.3041L15.1769 28.7488L0.243471 17.899H18.7022L24.4062 0.34375Z" fill="#D9D9D9"/>
                                        </svg>                                        
                                    </div>
                                )


                        })}
                    </div>
                </div>
                </div>

                <div className='prof-main-rating'>
                    <div className='prof-main-overall'>
                        {data.rating}
                        <span className='prof-main-from'>{data.ratingA.length} ratings</span>
                    </div>
                    <div className='prof-card-rating-wrapper'>
                    {data.ratingA.map((item,i) =>(
                        <div className='prof-card-rating-line'>
                        {i}
                        <div className='prof-card-rating'>
                             <div className='prof-card-rate-len' style={{width : item/5*100 }}></div>
                        </div>
                        </div>
                     ))}
                    </div>
                </div>
                </div>
                <div className='prof-main-info'>
                    <div className='prof-main-descripiton'>
                        <h2 className='prof-main-name'>ABOUT</h2>

                        <p className='prof-main-text'>
                            {data.about}
                        </p>
                    </div>
                    <div className='prof-main-comments-container'>

                        <h2 className='prof-main-comment-title'>Comments</h2>
                        <Comment activeStars={5} name={'bob'} comment={'fasdfhaikusdfasdkfjasdlfhaslkjdfh'}/>

                        <input type="text" className='prof-main-input' placeholder='leave a comment' />

                    </div>
                </div>
            </div>
         </div>
        </div>
    
      )
}
