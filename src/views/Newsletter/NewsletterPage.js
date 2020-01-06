import React, {useState, useEffect} from 'react';
import SocialMediaButtons from './SocialMediaButtons';
import SubscribeInput from './SubscribeInput';
import renderHTML from 'react-render-html';


import config from '../../config';
import integrate from '../../integrate';

import LoaderSVG from 'assets/img/loader.svg';

import './NewsletterPage.scss'

const newsletterEndpoint = config.endpoints.newsletter.getLatest;

export default function Newsletter() {

    const [html, SetHtml] = useState("<div style='margin-top: 30vh;margin-left: 15vh;'><img style='height:16vh;' src='" + LoaderSVG + "' /></div>");

    useEffect(() => {
       var x = document.getElementsByTagName('center')
    var y = document.getElementsByClassName('wrapper')
        // THIS PRITNS SUCCESSFULLY 
        console.log('center_html is ', x);
        // this is undefined 
        // as per this 
        console.log('why th efuck ', Array.from(x))
        // these are also undefined
        console.log('why the hell ', x[0], [...x])

        const fetchData = async () => {
          let res = await integrate.getData(newsletterEndpoint, {});
          if (res.data.resource.newsletter_content == undefined) window.location.reload();
          SetHtml(res.data.resource.newsletter_content);
        };
        fetchData();
      }, []);

    return(
        <div>
            <div>
                <div className='newsletter'>
                {renderHTML(html)}
                </div>
                <SocialMediaButtons />
                <SubscribeInput />
            </div>
        </div>
    )
}
