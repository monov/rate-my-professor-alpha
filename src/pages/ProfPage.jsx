import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import './ProfPage.css'
import { Comment } from '../components/Comment'
import Logpopup from '../components/Logpopup'

export const ProfPage = (props) => {
    const [activeStars , setActiveStars] = useState(1)
    const [howeredStars , setHoweredSrars] = useState(1)
    const data = props.searchResponse

    const [comment , setComments] = useState([])


    // console.log(data);

    const stars = Array(5).fill('')

    const [isPopup, setIsPopup] = useState(true);
    const [isPopCalled, setIsPopCalled] = useState(true);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [userShow, setUserShow] = useState("");
    const [emailShow, setEmailShow] = useState("");
    const api = import.meta.env.VITE_API_BASE_URL;

    useEffect(() => {
      auth();
      getComments()
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
    const getComments = async ()=>{
        try{
        const response = await fetch(`${api}reviews/${data.id}`,{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            withCredentials: true,
        })
        if(response.status == 200){
            const comments = response.json()
            setComments(comment)
            console.log(comment);
        }
        }
        catch {
            console.error("Error:", error);
        }
    }

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
                 setIsPopup={setIsPopup}/>
                <div className='prof-main-stats'>
                    <div className='prof-card-image-wraper'>
                        <img src={data.photoreference} className='prof-card-image' alt="" />
                    </div>
                <div className='prof-main-about'>
                <div className='prof-main-name'>
                    {data.fullName}
                    <span className='prof-main-from'>{data.university}</span>
                </div>
                <div className='prof-main-rate'>
                    <span > Rate this professor:</span>
                    <div className='prof-main-stars'>
                        {stars.map((item, i)=>{
                                return (
                                    <div className={i < howeredStars?'main-stars active': 'main-stars'} 
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
                        {i+1}
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
                        <h2 className='prof-main-name'>Reviews</h2>

                        <p className='prof-main-text'>
                            {data.about}
                        </p>
                    </div>
                    <div className='prof-main-comments-container'>

                        <h2 className='prof-main-comment-title'>Leave comments</h2>
                        {comment.map(comment =>(
                            <Comment {...comment}/>
                        ))}
                        

                        <input type="text" className='prof-main-input' placeholder='leave a comment' />

                    </div>
                </div>
            </div>
         </div>
         </div>
    
      )
}
