import React from 'react'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const RoutesLayout = ({children} : {
    children: React.ReactNode
}) => {
  return (
    <div>
        <Navbar />
        {children}
        <Footer />
        </div>
  )
}

RoutesLayout.propTypes = {}
export default RoutesLayout
