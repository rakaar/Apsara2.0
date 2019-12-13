import React from 'react';
import SocialMediaButtons from './SocialMediaButtons';
import SubscribeInput from './SubscribeInput';

import './NewsletterPage.scss'

export default function Newsletter() {
    return(
        <div>
            <div className='newsletter'>
                <h1>Newsletter</h1>
            </div>
            <SocialMediaButtons />
            <SubscribeInput />
        </div>
    )
}
