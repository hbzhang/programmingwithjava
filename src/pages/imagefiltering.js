import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Spirit } from '../styles/spirit-styles'
import { Layout } from '../components/common/layout'
import { SetupBox } from '../components/setup'
import { MetaData, getMetaImageUrls } from '../components/common/meta'

const ImagefilteringPage = ({ data, location }) => {
    // Add meta title and description for this page here to overwrite the site meta data as set in the config
    const title = `How To Install Ghost: Setup & Configuration - Open Source Publishing`
    const description = `All the tools you need to get started with Ghost 👉Self-hosted install & setup, local install guide for development, contribution guidelines & premium hosted services!`
    const imageUrl = getMetaImageUrls()

    return (
        <>
            <MetaData
                data={data}
                location={location}
                type="website"
                title={title || data.site.siteMetadata.title}
                description={description || data.site.siteMetadata.description}
                image={imageUrl}
            />
            <Layout mainClass="bg-whitegrey-l2 pb-vw3" bodyClass="bg-white">
                <section className="bg-api-reference">
                    <div className={`${Spirit.page.xl} tc-ns pt-vw6 pt-vw5-ns pb-vw5 white`}>
                        <h1 className={`${Spirit.sectionHeading} gh-integration-header-shadow`}>Tutorial on Image Filtering</h1>
                        <p className={Spirit.sectionSubHeading}>
                           In this tutorial, you will become familar with <strong>Image Filtering</strong> so that you can use it for computer vision class.
                        </p>
                    </div>
                </section>

                <div className={`${Spirit.page.xl} mt-vw3`}>
                    <section className="grid-12 gutter-row-20 gutter-20-ns gutter-36-l">

                       {/* <SetupBox href="https://ghost.org/pricing/" title="Ghost(Pro)" icon="ghost-pro-logo" iconClass="w9 h9" headingClass="mt2">
                            <strong>Fully managed PaaS</strong> with 1-click deployment, worldwide CDN, backups, upgrades & security
                        </SetupBox> */}

                        <SetupBox to="/python/syntax/" title="Python Syntax" icon="Python-logo-notext" iconClass="fill-midlightgrey w8 h8" headingClass="mt2">
                            <p className={`${Spirit.small} mw70`}>
                            Learn Python Syntax
                            </p>
                        </SetupBox>

                        <SetupBox to="/python/datastructure/" title="Python Data Structure" icon="Python-logo-notext" iconClass="w8 h8" headingClass="mt2">
                            <p className={`${Spirit.small} mw70`}>
                               Learn Python Data Structure
                            </p>
                        </SetupBox>


                         <SetupBox to="/python/tensorflowpart1/" title="Python Tensorflow(I)" icon="Tensorflow_logo" iconClass="w8 h8" headingClass="mt2">
                            <p className={`${Spirit.small} mw70`}>
                               Learn Tensorflow with Python Part I
                             </p>
                         </SetupBox>

                         <SetupBox to="/python/tensorflowpart2/" title="Python Tensorflow(II)" icon="Tensorflow_logo" iconClass="w8 h8" headingClass="mt2">
                            <p className={`${Spirit.small} mw70`}>
                               Learn Tensorflow with Python Part II
                             </p>
                         </SetupBox>

                         <SetupBox to="/python/tensorflowpart3/" title="Python Tensorflow (III)" icon="Tensorflow_logo" iconClass="w8 h8" headingClass="mt2">
                            <p className={`${Spirit.small} mw70`}>
                               Learn Tensorflow with Python Part III
                             </p>
                         </SetupBox>


                       {/* <SetupBox to="/install/source/" title="Install from Source" icon="github-outline" iconClass="fill-darkgrey w8 h8" headingClass="mt2">
                            <p className={`${Spirit.small} mw70`}>
                                <strong>Advanced developer guide</strong> for working directly on Ghost Core and Ghost Admin
                            </p>
                        </SetupBox> */}

                    </section>
                </div>
            </Layout>
        </>
    )
}

ImagefilteringPage.propTypes = {
    data: PropTypes.shape({
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                siteUrl: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
}

export default ImagefilteringPage

export const pageQuery = graphql`
    query {
        site {
            ...SiteMetaFields
        }
    }
`
