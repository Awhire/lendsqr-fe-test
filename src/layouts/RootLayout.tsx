import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <main style={{overflowX: 'hidden'}}>
        <Outlet />
    </main>
  )
}

export default RootLayout
