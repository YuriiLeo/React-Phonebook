import Navbar from 'components/Navbar/Navbar'
import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

export default function SharedLayout() {
  return (
      <>
      <Navbar /> 
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      </>
  )
}
