import React from 'react'
import Article from '../../components/article/Article'
import {Blog1, Blog2, Blog3, Blog4, Blog5} from './imports'
import './blog.css'

const Blog = () => {
    return (
    <div className='gpt3__blog section__padding' id='blog'>
        <div className='gpt3__blog-heading'>
            <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
        </div>
        <div className='gpt3__blog-container'>
            <div className='gpt3__blog-container_groupA'>
                <Article imgUrl={Blog1} date='Sep 26, 2021' title='GPT-3 and Open AI is the future. Let us exlore how it is?' />
            </div>
            <div className='gpt3__blog-container_groupB'>
                <Article imgUrl={Blog2} date='Sep 26, 2021' title='GPT-3 and Open AI is the future. Let us exlore how it is?' />
                <Article imgUrl={Blog3} date='Sep 26, 2021' title='GPT-3 and Open AI is the future. Let us exlore how it is?' />
                <Article imgUrl={Blog4} date='Sep 26, 2021' title='GPT-3 and Open AI is the future. Let us exlore how it is?' />
                <Article imgUrl={Blog5} date='Sep 26, 2021' title='GPT-3 and Open AI is the future. Let us exlore how it is?' />
            </div>
        </div>
    </div>
    )
}

export default Blog;