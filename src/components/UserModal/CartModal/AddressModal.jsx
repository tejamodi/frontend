import React from 'react'

const AddressModal = ({ data }) => {
    return (
        <div className='modal ' id='addressModal'>
            <div className='modal-dialog modal-dialog-centered '>
                <div className='modal-content '>
                    <div className='navbar px-4 pt-4'>
                        <h3 className='d-inline-block' style={{ color: "#192F60" }}>{data.name}</h3>
                        <button className='btn-close ' data-bs-dismiss="modal"></button>
                    </div>
                    <div className='px-4 pb-4'>
                        <div className='mt-2'>
                            <label htmlFor="name" className='d-block '>Name</label>
                            <input type="text" id='name' placeholder='Enter your name' className='mt-1 w-100' />
                        </div>
                        <div className='mt-3'>
                            <label htmlFor="mobile" className='d-block '>Mobile Number</label>
                            <input type="text" id='mobile' placeholder='Enter your mobile' className='mt-1 w-100' />
                        </div>
                        <div className='mt-3 mb-5'>
                            <label htmlFor="address" className='d-block '>Address</label>
                            <textarea id='address' placeholder='Enter your address' className='w-100 mt-1 ' />
                        </div>
                    </div>
                    <div style={{ background: "#F5F8FF" }} className='navbar px-4 rounded-bottom '>
                        <span className=' py-2 px-4 d-inline text-white ms-auto' style={{ background: "#CE0505" }} data-bs-toggle="modal" data-bs-target="#paymentModal" role='button'>Proceed</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddressModal