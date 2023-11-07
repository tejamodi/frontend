import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { store } from '../../App'
import Navbar from '../../components/Navbar/Navbar'
import CartProductModal from '../../components/UserModal/CartModal/CartProductModal'
import AddressModal from '../../components/UserModal/CartModal/AddressModal'
import PaymentModal from '../../components/UserModal/CartModal/PaymentModal'

const ResDetails = () => {
    const [resData, setResData] = useState({})
    const [isOverViewClicked, setIsOverViewClicked] = useState(true)
    const [isContactClicked, setIsContactClicked] = useState(false)
    const { navId } = useContext(store)

    useEffect(() => {
        axios.get(`http://localhost:8080/api/restaurant/${navId}`).then((result) => setResData(result.data))
    }, [navId])

    return (
        <div>
            <Navbar />
            {
                resData &&
                <div className='py-5 ' style={{ height: "50rem", padding: "0 5rem" }}>
                    <img src={resData.thumb} alt="hh" className='h-[25rem] w-100' style={{ height: "25rem", objectFit: "cover" }} />
                    <h4 className=' fs-2  mt-4' style={{ color: "#192F60" }}>{resData.name}</h4>
                    <div className='mt-2 py-2 d-flex justify-content-between'>
                        <div style={{ color: "#192F60" }}>
                            <span className={` fs-5 px-4 border-bottom ${isOverViewClicked ? "border-danger" : ""} py-2 me-3 cursor-pointer`} onClick={() => { setIsContactClicked(false); setIsOverViewClicked(true) }} role='button'>Overview</span>
                            <span className={` fs-5 px-4 border-bottom py-2 me-3 cursor-pointer ${isContactClicked ? "border-danger" : ""}`} onClick={() => { setIsOverViewClicked(false); setIsContactClicked(true) }} role='button'>Contact</span>
                        </div>
                        <p className=' py-2 px-4 d-inline text-white' style={{ marginTop: "-.5rem", background: "#CE0505" }} data-bs-toggle="modal" data-bs-target="#cartProductModal">Place Online Order</p>
                    </div>
                    <div className='mb-3'>
                        {
                            isOverViewClicked &&
                            <>
                                <div className=' fs-5 fw-bold mt-4' style={{ color: "#192F60" }}>About this place</div>
                                <div className=' fs-6 fw-semibold mt-3' style={{ color: "#192F60" }}>Cuisine</div>
                                <div className='fs-6' style={{ color: "#192F60" }}>
                                    {
                                        resData.Cuisine &&
                                        resData.Cuisine.map((i, index) => {
                                            return <span key={index} className='pe-2'>{i.name}</span>
                                        })
                                    }
                                </div>
                                <div className='fs-6 fw-semibold mt-3' style={{ color: "#192F60" }}>Average Cost</div>
                                <div className='mt-1 fs-6 mb-5' style={{ color: "#192F60" }}>
                                    {
                                        <span>₹{resData.cost} for two people (approx.)</span>
                                    }
                                </div>
                            </>
                        }
                        {
                            isContactClicked &&
                            <>
                                <div className='fs-6  mt-3' style={{ color: "#192F60" }}>Phone Number</div>
                                <div className=''>{resData.contact_number}</div>
                                <div className=' fw-semibold  mt-4' style={{ color: "#192F60" }}>{resData.name}</div>
                                <div className='mt-1 mb-6'>{resData.address}</div>
                            </>
                        }
                    </div>
                </div>}
            <CartProductModal resData={resData} />
            <AddressModal data={resData} />
            <PaymentModal />
        </div >
    )
}

export default ResDetails