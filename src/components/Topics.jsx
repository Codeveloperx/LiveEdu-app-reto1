import React from 'react'
import styled from 'styled-components'

const DviTopics = styled.div`
    width:90%;
    margin:0 auto;
    margin-top: 1rem;
    `

const Article = styled.article`
    background: linear-gradient(92.67deg, #bfc3fc37 0.11%, #a2c3fc43 100%);
    border-radius: 15px;
    margin-top: 0.8rem;
    padding:0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    `
    

const Topics = () => {
  return (
    <DviTopics>
        <h1 className='font-semibold text-lg text-[#4B4B4B]'>Topics to study</h1>
        <Article>
            <div className='flex gap-3'>
                <div>
                    <img src="https://res.cloudinary.com/academiageek/image/upload/v1658169974/Liveedu/Svg_4_ne5ntf.png" alt="" />
                </div>
                <div className='leading-[0]'>
                    <h4 className='text-lg'>In the kitchen</h4>
                    <span className='text-[10px]'>Talking about food in the kitchen</span>
                </div>
            </div>
            <div><span className='text-xs text-slate-400'>30 min</span></div>
        </Article>
        
    </DviTopics>
  )
}

export default Topics