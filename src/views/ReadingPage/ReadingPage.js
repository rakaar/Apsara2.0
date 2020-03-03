import React, { useState, useEffect, Fragment } from "react";
import config from "../../config";
import integrate from "../../integrate";
import oculusrift from "./oculus-rift.jpg";
import renderHTML from 'react-render-html';


import "./ReadingPage.scss";
import SocialMediaButtons from "views/Newsletter/SocialMediaButtons";
import SubscribeInput from "views/Newsletter/SubscribeInput";

const number_month_mapping = {
 '01': 'Jan',
 '02': 'Feb',
 '03': 'Mar',
 '04': 'Apr',
 '05': 'May',
 '06': 'Jun',
  '07': 'Jul',
  '08':'Aug',
  '09': 'Sep',
  '10': 'Oct',
  '11': 'Nov',
  '12': 'Dec'

}
export default function ReadingPage(props) {
  const [article, setArticle] = useState({
    date: "",
    author: "",
    title: ``,
    content: ``
  });
  const headers = {
   headers: {
    'Accept': 'application/vnd.api+json'
   }
  }

  const URL = 'https://cms.iit-techambit.in/api/node/article/64f9a0db-7a6d-4755-aadf-781815f259b0'
  // const URL = 'https://cms.iit-techambit.in/api/node/article?fields[node--article]=uid,title,created&include=uid'
  useEffect(() => {
    const data = props.location.state.data
    setArticle({
      ...article,
      date: data.date,
      author: data.author,
      content: data.content,
      title: data.title,
    });
    
    console.log('article is ', article)
  }, []);

  return (
    <div>
      <div className="reading-page">
        <h3 className="article-date">{article.date}</h3>
        <h1 className="article-title">{article.title}</h1>
        <h3 className="article-author">{article.author}</h3>
        <img src={oculusrift} alt="vr" className="image" />
        <div className='text'>
          {renderHTML(article.content)}
        </div>
        {/* {article.content && article.content.map(item => {
          return (
            <div>
              <div className="sub">{item.sub}</div>
              <div className="text">{item.text}</div>
            </div>
          )
        })} */} 

      </div>
      <SocialMediaButtons />
      <SubscribeInput />
    </div>
  );
}
