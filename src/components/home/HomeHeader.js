import React from 'react'

import { SearchModal } from '../common/search'
import { NavBar } from '../common'
import { Spirit } from '../../styles/spirit-styles'
import HomeHeaderBox from './HomeHeaderBox'

// Custom headings must be React components. You should include the <NavBar /> component
// somewhere in it. You can optionally set the theme of the navbar to `dark` or `light`.
const HomeHeader = () => (
    <div className="gh-bg-home bb b--whitegrey">
        <header className="top-0 left-0 right-0 z-9999">
            <NavBar theme="light" />
        </header>
        <div className={`${Spirit.page.xl} pb5 pt10 pt15-ns pt20-l pb10-ns pb15-l flex flex-column items-center bt bn-ns b--white-10`}>
            <h1 className="ma0 pa0 f2 f1-ns f-headline-l white header-heading-shadow">Computer Vision Documentation</h1>
            <SearchModal isHome />

            <section className="grid-12 gutter-row-20 gutter-36-ns mt10 mt20-ns mt25-l miw-100 miw-auto-ns home-main-box-margin-ns z-999">
                <HomeHeaderBox
                    to="/concepts/introduction/"
                    title="Python Knowledge"
                    icon="blocks"
                    color="purple"
                >
                    Python Knowledge
                </HomeHeaderBox>

                <HomeHeaderBox
                    to="/setup/"
                    title="Image Filtering"
                    icon="rocket"
                    color="blue"
                >
                    Image Filtering
                </HomeHeaderBox>

                <HomeHeaderBox
                    to="/tutorials/"
                    title="Recognition"
                    icon="typing"
                    color="tutorial-green"
                >
                   Recognition
                </HomeHeaderBox>
            </section>
        </div>
    </div>
)

export default HomeHeader
