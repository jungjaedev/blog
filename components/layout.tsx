import { ReactNode } from 'react'
import Header from './header'
import Footer from './footer'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({children}: LayoutProps) {
  return (
    <>
      <Header />
      <h1>레이아웃</h1>
      <div>{children}</div>
      <Footer />
    </>
  )
}