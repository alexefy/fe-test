import React from 'react'
import Footer from '../footer'
import Header from '../header'

export interface LayoutProps {
  children: React.ReactNode
}

export default function Layout ({ children }: LayoutProps) {
  return (
      <>
        <Header />
          {children}
        <Footer />
      </>
  )
}
