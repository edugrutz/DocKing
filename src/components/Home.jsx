import React from 'react'
import Print from '../assets/images/Print.png'
import './Home.css'

const Home = () => {
  return (
    <div className='container-fluid'>
        <div className='text d-flex' style={{margin:'60px'}}>
            <div className='text-light fs-3 me-4'>
                DocKing is an intuitive and efficient <b>molecular docking tool</b> designed for researchers and professionals in the fields of biotechnology and pharmacology. It allows for the visualization, analysis, and interaction with molecular models, streamlining the process of discovering new molecular interactions. With a simple interface and advanced features, DocKing provides a platform to optimize the study of ligands and their interactions with target proteins, aiding in the acceleration of scientific research and the development of new drugs.
            </div>
            <img src={Print} alt="Print do aplicativo" className='img-fluid ms-auto' id='print'/>   
        </div>  
    </div>
  )
}

export default Home