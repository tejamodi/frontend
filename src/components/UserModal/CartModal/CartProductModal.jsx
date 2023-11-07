import React from 'react'
import { FcPaid } from "react-icons/fc"

const CartProductModal = ({ resData }) => {
    return (
        <div className='modal ' id='cartProductModal'>
            <div className='modal-dialog modal-dialog-centered '>
                <div className='modal-content '>
                    <div className='navbar px-4 pt-4'>
                        <h3 className='d-inline-block' style={{ color: "#192F60" }}>{resData.name}</h3>
                        <button className='btn-close ' data-bs-dismiss="modal"></button>
                    </div>
                    <div className='px-4 pb-4'>
                        <div >
                            <FcPaid />
                            <div className='d-flex'>
                                <div className=''>
                                    <h6 style={{ color: "#292C40" }}>Gobi Manchurian</h6>
                                    <div className='mb-1'>Price: $12</div>
                                    <div style={{ color: "#696B78", fontSize: ".8rem" }}>Deep-fried cauliflower florets tossed in pungent spices to form a flavorsome dry curry</div>
                                </div>
                                <div className='ms-auto position-relative'>
                                    <div style={{ height: "5rem", width: "5rem", background: "#192F60" }} className='rounded'></div>
                                    <span className='bg-danger text-white px-2 position-absolute' style={{ top: "70%", left: "20%" }}>Add</span>
                                </div>
                            </div>
                        </div>
                        <div className='mt-2'>
                            <FcPaid />
                            <div className='d-flex'>
                                <div className=''>
                                    <h6 style={{ color: "#292C40" }}>Gobi Manchurian</h6>
                                    <div className='mb-1'>Price: $12</div>
                                    <div style={{ color: "#696B78", fontSize: ".8rem" }}>Deep-fried cauliflower florets tossed in pungent spices to form a flavorsome dry curry</div>
                                </div>
                                <div className='ms-auto position-relative'>
                                    <div style={{ height: "5rem", width: "5rem", background: "#192F60" }} className='rounded'></div>
                                    <span className='bg-danger text-white px-2 position-absolute' style={{ top: "70%", left: "20%" }}>Add</span>
                                </div>
                            </div>
                        </div>
                        <div className='mt-2'>
                            <FcPaid />
                            <div className='d-flex'>
                                <div className=''>
                                    <h6 style={{ color: "#292C40" }}>Gobi Manchurian</h6>
                                    <div className='mb-1'>Price: $12</div>
                                    <div style={{ color: "#696B78", fontSize: ".8rem" }}>Deep-fried cauliflower florets tossed in pungent spices to form a flavorsome dry curry</div>
                                </div>
                                <div className='ms-auto position-relative'>
                                    <div style={{ height: "5rem", width: "5rem", background: "#192F60" }} className='rounded'></div>
                                    <span className='bg-danger text-white px-2 position-absolute' style={{ top: "70%", left: "20%" }}>Add</span>
                                </div>
                            </div>
                        </div>
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

export default CartProductModal