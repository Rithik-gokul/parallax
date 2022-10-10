import React, { useEffect } from 'react'
import aos from "aos"
import forest from "./bulb.jpg"

export default function App() {

    useEffect(() => {
        aos.init()
    },[])

   
  return (
    <div>
        <div className="wrapper">
            <section >
                <h1 data-aos ="fade-in">Welcome this is Parallax Scrolling</h1>
            </section>
            <header>
                <img src={forest} alt="forest" className='background' />
            </header>
            <section >
                <h1>Image above moves slower than the other elements in the page because it is far from the screen then it actually is</h1>
            </section>
        </div>
            
    </div>
  )
}
