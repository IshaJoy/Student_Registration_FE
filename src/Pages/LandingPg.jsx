import React from 'react'
import { Link } from 'react-router-dom'
// import Header from '../Components/Header'
// import StudImg from '../assets/Images/students.png'
// import LastImg from '../assets/Images/last.png'


function LandingPg() {
  return (
    <div style={{background:'black'}}>
    <div className='row' >
        <div className="col-6  mt-5" >
            <h1 className='ms-5 text-light' style={{marginTop:'150px',fontFamily:'cursive',fontSize:'60px'}}>Education</h1>
            <p className='ms-5 text-light' >Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Sint totam earum pariatur eos ea nam animi, sequi omnis ducimus at voluptatum necessitatibus enim blanditiis error veniam? <br /> Aperiam ea veniam laudantium.
            Explicabo iusto aliquid id iure, ducimus distinctio magni facere veniam totam, <br /> temporibus quidem suscipit necessitatibus dolore cumque. Sed molestias ullam nostrum et, voluptatum nihil atque vero doloremque alias commodi facere.</p>
            <h6 className='text-light ms-5'>New Student?Click here to <Link to={'/form'}><button className='rounded p-2 fw-bold bg-success ms-3'>Register</button></Link> </h6>
        </div>
        <div className="col-1"></div>
        <div className="col-5 mt-5">
            <img style={{height:'90vh',width:'600px',marginTop:'0px'}} src="https://tnbcollege.sonecyber.co.in/frontend/images/login.png" alt="" />
        </div>
       
    </div>

    </div>
  )
}

export default LandingPg