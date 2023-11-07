import React from 'react'
import Modal from '../UserModal/Modal'

const Navbar = () => {
    return (
        <div className='navbar px-5 ' style={{ background: "#EB2929" }}>
            <span className='bg-white rounded-circle fs-2 fw-semibold px-3 pt-0 pb-1' style={{ color: "#EB2929" }}>e!</span>
            <div className='ms-auto text-white'>
                <span className='me-3' role='button' data-bs-toggle="modal" data-bs-target="#loginModal">Login</span>
                <span className='border border-white rounded py-2 px-3' role='button' data-bs-toggle="modal" data-bs-target="#registerModal">Create an account</span>
            </div>
            <Modal />
        </div>
    )
}

export default Navbar