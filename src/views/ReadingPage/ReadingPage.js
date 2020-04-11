import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import config from "../../config";
import integrate from "../../integrate";
import renderHTML from "react-render-html";
import Comments from "./DisqusComments";
import "./ReadingPage.scss";
import SocialMediaButtons from "views/Newsletter/SocialMediaButtons";
import SubscribeInput from "views/Newsletter/SubscribeInput";

const number_month_mapping = {
  "01": "Jan",
  "02": "Feb",
  "03": "Mar",
  "04": "Apr",
  "05": "May",
  "06": "Jun",
  "07": "Jul",
  "08": "Aug",
  "09": "Sep",
  "10": "Oct",
  "11": "Nov",
  "12": "Dec"
};

function get_date(date_from_api) {
  let article_timestamp_arr = date_from_api.split("-");
  let year = article_timestamp_arr[0]
  let article_date = article_timestamp_arr[2].split("T")[0];
  let article_month_number = article_timestamp_arr[1];
  return (
    article_date +
    " " +
    number_month_mapping[article_month_number] +
    ", " +
    year
  );
}

function get_tags(included) {
  let tags_included = included.filter(
    item => item.type == "taxonomy_term--tags"
  );
  let tags = tags_included.map(item => item.attributes.name);
  return tags;
}

// replace the relative path in img src with absolute path
function modify_img_src(html_content) {
  let ind = html_content.indexOf(`src="`)
  let current_path = html_content.slice(ind + 5, ind + 11)
  if (current_path.startsWith("/sites")) {
    let modified_html = html_content.replace(/src="/g, `src="https://cms.iit-techambit.in`)
    return modified_html
  } else 
  return html_content
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
      Accept: "application/vnd.api+json"
    }
  };

  useEffect(() => {
    // fetch again from Drupal so as to enable sharing
    let id = window.location.pathname.split("/")[2];
    let URL = `https://cms.iit-techambit.in/api/node/article/${id}?fields[node--article]=title,body,created,field_image&include=field_image,field_tags,uid`
    axios
      .get(URL, headers)
      .then(res => {
        let data = res.data.data;
        let included = res.data.included;
        setArticle({
          ...article,
          date: get_date(data.attributes.created),
          author: included[1].attributes.name,
          content: modify_img_src(data.attributes.body.value),
          title: data.attributes.title,
          img: "https://cms.iit-techambit.in" + included[0].attributes.uri.url,
          tags: get_tags(included)
        });
        })
      .catch(err => console.log("er in rp ", err));
  }, []);
  return (
    <div>
      <div className="reading-page">
        <img src={article.img} alt="" className="image" />
        <h1 className="article-title">{article.title}</h1>
        <h3 className="article-author">{article.author}</h3>
        <h3 className="article-date">{article.date}</h3>
        <SocialMediaButtons />
        <div className="text">{renderHTML(article.content)}</div>
        <div className="article-tags">
          {article.tags &&
            article.tags.map(tag => {
              return <span className="tags">{tag}</span>;
            })}
        </div>
        <Comments />
      </div>
      <SubscribeInput />
    </div>
  );
}
