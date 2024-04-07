import { useBemCN } from "shared"
import { Footer, Header } from "widgets"
import { Outlet } from "react-router-dom"

export const MainLayout = () => {
  const mainLayoutBlock = useBemCN('main-layout')
  return (
    <>
      <Header />
      <main className={mainLayoutBlock()}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}