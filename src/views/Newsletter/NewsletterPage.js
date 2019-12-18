import React from 'react';
import SocialMediaButtons from './SocialMediaButtons';
import SubscribeInput from './SubscribeInput';
import renderHTML from 'react-render-html';
import html from './news-letter'
import './NewsletterPage.scss'

export default function Newsletter() {
    return(
        <div>
            <div className='newsletter'>
              {renderHTML(html)}
            </div>
            <SocialMediaButtons />
            <SubscribeInput />
        </div>
    )
}
