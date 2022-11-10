import MenuAppBar from 'components/AppBar'
import Navbar from 'components/Navbar/Navbar'
import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

export default function SharedLayout() {
  return (
      <>
      {/* <Navbar />  */}
      <MenuAppBar/>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      </>
  )
}
