import React from 'react'
import ReactDOM from 'react-dom'
import Carousel from './components/Carousel'
import Features from './components/Features'
import Fixed from './components/Fixed'
import Header from './components/Header'
import Items from './components/Items'
import Search from './components/Search'
import TopMenu from './components/TopMenu'

import './index.css'

function Spaces() {
    return (
        <div>
            <section className="header">
                <Header />
            </section>

            <section className="top-menu">
                <TopMenu />
            </section>

            <section className="search">
                <Search />
            </section>

            <section className="car">
                <Carousel />
            </section>

            <section className="features">
                <Features />
            </section>

            <section className="grid">
               <Items />
            </section>

            <section>
               <Fixed />
            </section>

        </div>
    )
}



ReactDOM.render(<Spaces />, document.getElementById('root'))

