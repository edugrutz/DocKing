import React from 'react'
import Linux from '../assets/images/Linux.png'

const Downloads = () => {
  return (
    <div>
      <div style={{marginTop:'8%'}} className='d-flex align-items-center justify-content-center mb-4'>
        <img src={Linux} alt='Linux' className='img-fluid' style={{width:'40px', height:'40px', marginRight:'1%'}}/>
        <h1 className='text-light text-center'>Linux</h1>
      </div>
      <div className='container-fluid d-flex justify-content-center' style={{marginTop:'1%', maxWidth:'60%'}}>
        <div className="row w-100 justify-content-center">
          <div className="col-12 col-md-3 mb-3">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Free</h5>
                <p className="card-text">Demo trial</p>
                <a href="https://github.com/edugrutz/DocKing/releases/download/test/dist.zip" className="btn btn-warning">Download</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3 mb-3">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Academic</h5>
                <p className="card-text">$00.00</p>
                <a href="#" className="btn btn-warning">Buy now</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3 mb-3">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Pro</h5>
                <p className="card-text">$00.00</p>
                <a href="#" className="btn btn-warning">Buy now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Downloads
