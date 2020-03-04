import React from 'react';
import { Helmet } from 'react-helmet-async';
import _ from 'lodash';

import { safePrefix } from '../utils';
import Header from './Header';
import Footer from './Footer';
import MessengerCustomerChat from 'react-messenger-customer-chat';

export default class Body extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="google" content="notranslate" />

          <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#273b8b" />
          <link rel="shortcut icon" href="/favicons/favicon.ico" />          
          
          <link
            href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,700,700i"
            rel="stylesheet"
          />
          <link rel="stylesheet" href={safePrefix('assets/css/main.css')} />
        </Helmet>

        <MessengerCustomerChat
          pageId="1042711662596982"
          appId=""
          theme_color="#0084ff"
        />

        <div
          id="page"
          className={
            'site palette-' +
            _.get(this.props, 'pageContext.site.siteMetadata.palette')
          }
        >
          <Header {...this.props} />
          <main id="content" className="site-content">
            {this.props.children}
          </main>
          <Footer {...this.props} />
        </div>
      </React.Fragment>
    );
  }
}
