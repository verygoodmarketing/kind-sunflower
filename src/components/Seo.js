import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';
import { StaticQuery } from 'gatsby';
import Twitter from './Twitter';
import Facebook from './Facebook';
import { graphql } from 'gatsby';

const SEO = ({
  title = null,
  description = null,
  image = null,
  imageType = null,
  pathname = null,
  article = false
}) => (
  <StaticQuery
    query={graphql`
      query SEOQuery {
        site {
          siteMetadata {
            defaultTitle: title
            titleTemplate
            defaultDescription: description
            siteUrl: url
            defaultImage: image
            defaultImageType: imageType
            twitterUsername
            facebookAppID
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          titleTemplate,
          defaultDescription,
          siteUrl,
          defaultImage,
          defaultImageType,
          twitterUsername,
          facebookAppID
        }
      }
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        imageType: imageType || defaultImageType,
        url: `${siteUrl}${pathname || '/'}`
      };

      return (
        <>
          <Helmet title={seo.title} titleTemplate={titleTemplate}>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
          </Helmet>
          <Facebook
            pageUrl={seo.url}
            type={article ? 'article' : 'website'}
            title={seo.title}
            description={seo.description}
            image={seo.image}
            imageType={seo.imageType}
            appID={facebookAppID}
          />
          <Twitter
            username={twitterUsername}
            title={seo.title}
            description={seo.description}
            image={seo.image}
          />
        </>
      );
    }}
  />
);

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  imageType: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool
};

export default SEO;
