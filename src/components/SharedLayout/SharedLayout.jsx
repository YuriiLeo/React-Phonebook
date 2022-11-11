import MenuAppBar from 'components/AppBar'
import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

export default function SharedLayout() {
  return (
      <>
      <MenuAppBar/>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      </>
  )
}
