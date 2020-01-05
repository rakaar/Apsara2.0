import React from "react";
import "./SocialMediaButtons.scss";

export default function SocialMediaButtons() {
  return (
    <div id="mySidenav" className="sidenav">
      <a
        href="https://www.facebook.com/sharer/sharer.php?u=http%3A//iit-techambit.in/newsletter"
        target="_blank"
        title="Share on Facebook"
        id="fb-share"
      >
        <i class="fa fa-facebook" aria-hidden="true"></i>
      </a>
      <a
        href="https://twitter.com/intent/tweet?text=Become%20tech-savvy%20in%20just%0A5%20minutes%0A%0Ahttp%3A//iit-techambit.in/newsletter"
        target="_blank"
        title="Tweet"
        id="twitter-share"
      >
        <i class="fa fa-twitter" aria-hidden="true"></i>
      </a>
      <a
        href="https://www.linkedin.com/shareArticle?mini=true&url=http%3A//iit-techambit.in/newsletter&title=Become%20tech%20savvy%20in%20just%205%20minutes&summary=Get%20updated%20with%20latest%20research%20and%20tech%20stories%20from%20the%20PAN%20IIT%20Ecosystem,%20for%20free!&source="
        target="_blank"
        title="Share on LinkedIn"
        id="linkedin-share"
      >
        <i class="fa fa-linkedin" aria-hidden="true"></i>
      </a>
    </div>
  );
}
