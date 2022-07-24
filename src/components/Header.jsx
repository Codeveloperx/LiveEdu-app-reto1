import React from 'react'
import styled from 'styled-components'


const HeaderC = styled.header`
  background: linear-gradient(92.67deg, #BFC3FC 0.11%, #A2C3FC 100%);
  box-shadow: 0px 4px 38px rgba(0, 0, 0, 0.05);
  border-radius: 0px 0px 40px 40px;
  display: flex;
  justify-content: space-between;
  padding: 2rem 1.5rem 1.5rem;
`

const DivFlex = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  `
const Header = () => {
  return (
    <HeaderC>
      <div className='leading-none'>
        <h1 className='font-bold text-lg'>Hi, Robert</h1>
        <span className='text-sm'>Let's start learning</span>
      </div>
      <DivFlex>
        <div className='flex items-center gap-1 text-sm'>
          <img src="https://res.cloudinary.com/academiageek/image/upload/v1658169974/Liveedu/Coins_gl9plh.png" alt="Money" />
          <span>400</span>
        </div>
        <span><img src="https://res.cloudinary.com/academiageek/image/upload/v1658169975/Liveedu/Notification_1_w9naop.png" alt="" /></span>
      </DivFlex>
    </HeaderC>
  )
}

export default Header