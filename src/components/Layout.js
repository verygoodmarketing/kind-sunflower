import React from 'react';
import {Helmet} from 'react-helmet-async';
import _ from 'lodash';

import {safePrefix} from '../utils';
import Header from './Header';
import Footer from './Footer';
import MessengerCustomerChat from 'react-messenger-customer-chat';

export default class Body extends React.Component {
    render() {
        return (
          <React.Fragment>
            <Helmet>
              <title>
                {_.get(this.props, 'pageContext.frontmatter.title') &&
                  _.get(this.props, 'pageContext.frontmatter.title') + ' - '}
                {_.get(this.props, 'pageContext.site.siteMetadata.title')}
              </title>
              <meta charSet="utf-8" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
              <meta name="google" content="notranslate" />
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
