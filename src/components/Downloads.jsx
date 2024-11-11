import React from 'react'
import './Downloads.css'
import Linux from '../assets/images/Linux.png'

const Downloads = () => {
  return (
    <div>
      <div style={{marginTop:'8%'}} className='d-flex align-items-center justify-content-center'>
        <img src={Linux} alt='Linux' className='img-fluid' style={{width:'40px', height:'40px', marginRight:'10px'}}/>
        <h1 className='text-light text-center'>Linux</h1>
      </div>
      <div className='container-fluid d-flex justify-content-center' style={{marginTop:'1%'}}>
        <div className="card text-center">
          <div className="card-body">
            <h5 className="card-title">Free</h5>
            <p className="card-text">Demo trial</p>
            <a href="#" className="btn btn-warning">Download</a>
          </div>
        </div>
        <div className="card text-center">
          <div className="card-body">
            <h5 className="card-title">Academic</h5>
            <p className="card-text">$00.00</p>
            <a href="#" className="btn btn-warning">Buy now</a>
          </div>
        </div>
        <div className="card text-center">
          <div className="card-body">
            <h5 className="card-title">Prossifional</h5>
            <p className="card-text">$00.00</p>
            <a href="#" className="btn btn-warning">Buy now</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Downloads