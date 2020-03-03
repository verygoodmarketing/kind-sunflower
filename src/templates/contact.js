import React from 'react';
import SEO from '../components/Seo';
import _ from 'lodash';

import { Layout } from '../components/index';
import { htmlToReact, safePrefix } from '../utils';

export default class Contact extends React.Component {
  render() {
    return (
      <div>
        <SEO
          title={_.get(this.props, 'pageContext.frontmatter.title')}
          description={_.get(this.props, 'pageContext.frontmatter.description')}
          image={_.get(this.props, 'pageContext.frontmatter.image')}
        />
        <Layout {...this.props}>
          <div className="outer">
            <div className="inner-medium">
              <article className="post page post-full">
                <header className="post-header">
                  <h1 className="post-title">
                    {_.get(this.props, 'pageContext.frontmatter.title')}
                  </h1>
                </header>
                {_.get(this.props, 'pageContext.frontmatter.subtitle') && (
                  <div className="post-subtitle">
                    {htmlToReact(
                      _.get(this.props, 'pageContext.frontmatter.subtitle')
                    )}
                  </div>
                )}
                {_.get(this.props, 'pageContext.frontmatter.img_path') && (
                  <div className="post-thumbnail">
                    <img
                      src={safePrefix(
                        _.get(this.props, 'pageContext.frontmatter.img_path')
                      )}
                      alt={_.get(this.props, 'pageContext.frontmatter.title')}
                    />
                  </div>
                )}
                <div className="post-content">
                  {htmlToReact(_.get(this.props, 'pageContext.html'))}
                  <form
                    name="contactForm"
                    method="POST"
                    netlify-honeypot="bot-field"
                    data-netlify="true"
                    id="contact-form"
                    className="contact-form"
                  >
                    <p className="screen-reader-text">
                      <label>
                        Don't fill this out if you're human:{' '}
                        <input name="bot-field" />
                      </label>
                    </p>
                    <p className="form-row">
                      <label htmlFor="contact_name" className="form-label">
                        Name
                        <input
                          id="contact_name"
                          type="text"
                          name="name"
                          className="form-input"
                        />
                      </label>
                    </p>
                    <p className="form-row">
                      <label htmlFor="contact_email" className="form-label">
                        Email address
                        <input
                          id="contact_email"
                          type="email"
                          name="email"
                          className="form-input"
                        />
                      </label>
                    </p>
                    <p className="form-row">
                      <label htmlFor="contact_message" className="form-label">
                        Message
                        <textarea
                          id="contact_message"
                          name="message"
                          className="form-textarea"
                          rows="7"
                        />
                      </label>
                    </p>
                    <input type="hidden" name="form-name" value="contactForm" />
                    <p className="form-row form-submit">
                      <button type="submit" className="button">
                        Send Message
                      </button>
                    </p>
                  </form>
                </div>
              </article>
            </div>
          </div>
        </Layout>
      </div>
    );
  }
}
