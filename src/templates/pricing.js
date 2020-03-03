import React from 'react';
import SEO from '../components/Seo';
import _ from 'lodash';

import components, {Layout} from '../components/index';

export default class Pricing extends React.Component {
    render() {
        return (
          <div>
            <SEO
              title={_.get(this.props, 'pageContext.frontmatter.title')}
              description={_.get(this.props, 'pageContext.frontmatter.description')}
              image={_.get(this.props, 'pageContext.frontmatter.image')}
            />          
            <Layout {...this.props}>
              {_.map(_.get(this.props, 'pageContext.frontmatter.sections'), (section, section_idx) => {
                  let GetSectionComponent = components[_.get(section, 'component')];
                  return (
                    <GetSectionComponent key={section_idx} {...this.props} section={section} site={this.props.pageContext.site} />
                  )
              })}
            </Layout>
          </div>
        );
    }
}
