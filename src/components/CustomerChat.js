import React, { useEffect } from 'react';
const facebookAppId = '1042711662596982';

export function CustomerChat() {
  useEffect(() => {
    window.fbAsyncInit = function() {
      window.FB.init({
        xfbml: true,
        version: 'v6.0'
      });
    };

    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  });
  return (
    <>
      <div id="fb-root"></div>
      <div
        className="fb-customerchat"
        attribution="setup_tool"
        theme_color="#0084ff"
        page_id={facebookAppId}
      />
    </>
  );
}
