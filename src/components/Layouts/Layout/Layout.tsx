import React, { FC } from 'react'
import { BottomBar } from '../../ui/BottomBar/BottomBar'
import { Navbar } from '../../ui/Navbar/Navbar'
import './Layout.scss'
interface LayoutProps {
  children: React.ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="app">
      <Navbar />
      <div className="container">
        {children}
      </div>
      <BottomBar/>
    </div>
  )
}
