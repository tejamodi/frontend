import React from 'react'

const PaymentModal = () => {
    return (
        <div className='modal ' id='paymentModal'>
            <div className='modal-dialog modal-dialog-centered '>
                <div className='modal-content '>
                    <div className='navbar px-4 pt-4'>
                        <h3 className='d-inline-block' style={{ color: "#192F60" }}>Choose Payment Method</h3>
                        <button className='btn-close ' data-bs-dismiss="modal"></button>
                    </div>
                    <div className='px-4 pb-4'>

                    </div>
                    <div style={{ background: "#F5F8FF" }} className='navbar px-4'>
                        <div className=''>Subtotal <span className=' fw-semibold ms-2'>$12</span></div>
                        <span className=' py-2 px-4 d-inline text-white ms-auto' style={{ background: "#CE0505" }} data-bs-toggle="modal" data-bs-target="#addressModal" role='button'>Pay Now</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentModal