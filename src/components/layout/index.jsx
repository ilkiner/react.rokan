import React from 'react'
import Uifooter from './UiLayout/UiFooter/Uifooter'
import Uiheader from './UiLayout/UiHeader/Uiheader'

const UiLayout = ({ children }) => {
  return (
    <>
      <Uiheader />
      <main>{children}</main>
      <Uifooter />
    </>
  )
}

export default UiLayout