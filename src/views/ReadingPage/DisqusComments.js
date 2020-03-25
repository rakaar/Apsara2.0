import React from "react";
import { DiscussionEmbed } from 'disqus-react';

class Comments extends React.Component {
  render() {
    const disqusShortname = "iit-techambit-in";
    const id = window.location.pathname.split('/')[2];
    const disqusConfig = {
      identifier: id
    };
    return (
      <div className="comment">
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </div>
    );
  }
}

export default Comments;
