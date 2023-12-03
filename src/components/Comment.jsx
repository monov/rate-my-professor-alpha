import React from 'react'
import "./Comment.css"

export const Comment = ({comment ='bobs bes' , name = 'bobs', star = 0}) => {

    const stars = Array(5).fill('')
  return (
    <div className='prof-main-comments'>
    <div className='comment-about'>
        <h5 className='comment-title'>{name}</h5>
        <div className='prof-main-stars'>
        {stars.map((item, i)=>{
        return (
            <div className={i < star ? 'main-stars active' : 'main-stars'}>  
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="23" viewBox="0 0 25 23" fill="none">
                <path d="M12.8333 0L15.6397 8.63729H24.7215L17.3741 13.9754L20.1806 22.6127L12.8333 17.2746L5.48594 22.6127L8.29236 13.9754L0.945045 8.63729H10.0268L12.8333 0Z" fill="#D9D9D9"/>
                </svg>                                     
            </div>
        )
         })}
        </div>
    </div>
    <p className='comment-text'>
        {comment}
    </p>

</div>
  )
}
