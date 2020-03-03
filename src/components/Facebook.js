import React from 'react';
import { Helmet } from 'react-helmet-async';

export default ({
  pageUrl = null,
  type = null,
  title = null,
  description = null,
  image = null,
  imageType = null,
  appID = null
}) => (
  <Helmet>
    {pageUrl && <meta property="og:url" content={pageUrl} />}
    {type && <meta property="og:type" content={type} />}
    {title && <meta property="og:title" content={title} />}
    {description && <meta property="og:description" content={description} />}
    {image && <meta property="og:image" content={image} />}
    {imageType && <meta property="og:image:type" content={imageType} />}
    {appID && <meta property="fb:app_id" content={appID} />}
  </Helmet>
);
