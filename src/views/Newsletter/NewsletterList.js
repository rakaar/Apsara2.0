import React from 'react'
import './NewsletterList.scss'
import newsletters from './NewslettersContent';

export default function NewsletterList(props) {
    
    function handleClick(href) {
        props.history.push(`/newsletter/${href}`)    
    }

    return(
        <div>
            <div className="newsletter-list">
                <h1>Great Depression Again ?</h1>
                {newsletters.map(item => {
                    return(
                        <div className="indiv-card" onClick={() => handleClick(item.href)}>
                       <div className="title-date"> 
                           <h3 className='title'>{item.title}</h3>
                            <h3 className='date'>{item.date}</h3>
                        </div>
                    </div>
                    )
                })}
              

            </div>
        </div>
    )
}