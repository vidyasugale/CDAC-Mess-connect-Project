import React from 'react'
import Navbar2 from '../header/Navbar2'
import Footer from '../footer/Footer'
import MenuCard from './MenuCard'

const CreateOrder = () => {
  return (
        <>
            <Navbar2 homePath="/customer/home"/>
            <div id="menuCards" style={{ textAlign: "center", marginTop: "10px", height: "100px" }}>
                <div className="mt-5" style={{ position: "relative" }}>
                    <div className="largeFont zIndBack headingLarge">
                        Select Menu
                    </div>
                    <div className="smallFont zIndFront headingSmall">
                        Select Menu
                    </div>
                </div>
            </div>
            <div className='container'>
                <MenuCard/>
            </div>
            <Footer homePath="/customer/home"/>
        </>
  )
}

export default CreateOrder;
