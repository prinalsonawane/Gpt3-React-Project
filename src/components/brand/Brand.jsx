import React from 'react'
import { google1, slack, atlassian1, dropbox1, shopify1 } from './imports.js'
import './Brand.css'

const Brand = () => {
    return (
    <div className='gpt3__brand section__padding'>
        <div id='part1'>
            <img src={google1} alt='google' height='40px' width='75px'/>
        </div>
        <div id='part2'>
            <img src={slack} alt='slack'  height='20px' width='75px'/>
        </div>
        <div id='part3'>
            <img src={atlassian1} alt='atlassian'  height='40px' width='75px'/>
        </div>
        <div id='part4'>
            <img src={dropbox1} alt='dropbox'  height='20px' width='75px'/>
        </div>
        <div id='part5'>
            <img src={shopify1} alt='shopify'  height='40px' width='75px'/>
        </div>
    </div>
    )
}

export default Brand;