import React, { useState, useEffect } from "react";
import SocialMediaButtons from "./SocialMediaButtons";
import SubscribeInput from "./SubscribeInput";
import renderHTML from "react-render-html";
import Button from "../../components/CustomButtons/Button";
import config from "../../config";
import integrate from "../../integrate";

import LoaderSVG from "assets/img/loader.svg";

import "./NewsletterPage.scss";
import content from "./NewslettersContent";

const newsletterEndpoint = config.endpoints.newsletter.getLatest;

export default function Newsletter() {
  const [html, SetHtml] = useState(
    "<div style='margin-top: 30vh;margin-left: 15vh;'><img style='height:16vh;' src='" +
      LoaderSVG +
      "' /></div>"
  );

  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      // let res = await integrate.getData(newsletterEndpoint, {});
      // if (res.data == undefined) window.location.reload();
      // if (res.data.resource.newsletter_content == undefined)
      //   window.location.reload();
      // SetHtml(res.data.resource.newsletter_content);

      // exporting from a file remotely rather than backend
      content.forEach((item) => {
        if (item.href === window.location.pathname.split("/")[2]) {
          SetHtml(item.content);
          setNext(item.next_href);
          setPrev(item.prev_href);
        }
      });
    };
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <div className="newsletter">
          {renderHTML(html)}

          <SocialMediaButtons />
        </div>

        <SubscribeInput />
      </div>
      {/* <div className="next-prev">
      
      { next != -1 ?   <Button type="button" color="success">Next</Button>: ''
      }
       { prev != -1 ?   <Button type="button" color="success">Next</Button>: ''
      }
     </div> */}
    </div>
  );
}
