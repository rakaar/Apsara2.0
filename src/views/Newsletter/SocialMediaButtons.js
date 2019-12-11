import React from "react";
import "./SocialMediaButtons.scss";

export default function SocialMediaButtons() {
  return (
    <div id="mySidenav" className="sidenav">
      <a
        href="https://www.facebook.com/sharer/sharer.php?u=&t="
        target="_blank"
        onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(document.URL) + '&t=' + encodeURIComponent(document.URL)); return false;"
        id="fb-share"
      >
        <i class="fa fa-facebook" aria-hidden="true"></i>
      </a>
      <a
        href="https://twitter.com/intent/tweet?"
        target="_blank"
        title="Tweet"
        onclick="window.open('https://twitter.com/share?url=' + encodeURIComponent(document.URL) + ':%20 ' + encodeURIComponent(document.URL)); return false;"
        id="twitter-share"
      >
        <i class="fa fa-twitter" aria-hidden="true"></i>
      </a>
      <a
        href="http://www.linkedin.com/shareArticle?mini=true&url=&title=&summary=&source="
        target="_blank"
        title="Share on LinkedIn"
        onclick="window.open('http://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(document.URL) + '&title=' + encodeURIComponent(document.title)); return false;"
        id="linkedin-share"
      >
        <i class="fa fa-linkedin" aria-hidden="true"></i>
      </a>
    </div>
  );
}
