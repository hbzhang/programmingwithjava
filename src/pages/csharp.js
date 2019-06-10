import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Spirit } from '../styles/spirit-styles'
import { Layout } from '../components/common/layout'
import { SetupBox } from '../components/setup'
import { MetaData, getMetaImageUrls } from '../components/common/meta'

const CSharpPage = ({ data, location }) => {
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
                <section className="bg-tutorials">
                    <div className={`${Spirit.page.xl} tc-ns pt-vw6 pt-vw5-ns pb-vw5 white`}>
                        <h1 className={`${Spirit.sectionHeading} gh-integration-header-shadow`}>Tutorial on C# </h1>
                        <p className={Spirit.sectionSubHeading}>
                           In this tutorial, you will become familar with <strong>C#</strong> so that you can use it for Hololens development.
                            Hololens has strong applications in Computer Vision as well
                        </p>
                    </div>
                </section>

                <div className={`${Spirit.page.xl} mt-vw3`}>
                    <section className="grid-12 gutter-row-20 gutter-20-ns gutter-36-l">

                       {/* <SetupBox href="https://ghost.org/pricing/" title="Ghost(Pro)" icon="ghost-pro-logo" iconClass="w9 h9" headingClass="mt2">
                            <strong>Fully managed PaaS</strong> with 1-click deployment, worldwide CDN, backups, upgrades & security
                        </SetupBox> */}

                        <SetupBox to="/csharp/syntax/" title="C#  Syntax" icon="Python-logo-notext" iconClass="fill-midlightgrey w8 h8" headingClass="mt2">
                            <p className={`${Spirit.small} mw70`}>
                             CSharp Syntax
                            </p>
                        </SetupBox>

                       <SetupBox to="/csharp/examples/" title="C# Syntax" icon="Python-logo-notext" iconClass="fill-midlightgrey w8 h8" headingClass="mt2">
                            <p className={`${Spirit.small} mw70`}>
                            CSharp Examples
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

CSharpPage.propTypes = {
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

export default CSharpPage

export const pageQuery = graphql`
    query {
        site {
            ...SiteMetaFields
        }
    }
`
