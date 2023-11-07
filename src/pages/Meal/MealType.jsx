import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { store } from '../../App'
import Filters from '../../components/Filters/Filters'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const MealType = () => {
    const { mealName, formData, setFormData, setNavid } = useContext(store)
    const [filteredData, setFilteredData] = useState([])
    const [filteredFullData, setFilteredFullData] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        axios.post("http://localhost:8080/api/filter", { lcost: formData.lcost, location: formData.location, hcost: formData.hcost, cuisine: formData.cuisine, mealtype: mealName, sort: formData.sort, page: formData.page }).then((res) => setFilteredData(res.data.result))
        axios.post("http://localhost:8080/api/filter", { lcost: formData.lcost, location: formData.location, hcost: formData.hcost, cuisine: formData.cuisine, mealtype: mealName, sort: formData.sort, page: formData.page }).then((res) => setFilteredFullData(res.data.full))
    }, [formData, mealName])

    if (filteredFullData.length) {
        let num = filteredFullData.length
        var half = Math.ceil(num / 2)
    }
    const pageHandler = (e) => {
        const num = e.target.innerHTML
        const pageNumber = parseInt(num)
        setFormData({ ...formData, page: pageNumber })
    }

    return (
        <div>
            <Navbar />
            <div className='px-5 py-4'>
                <h3 className='fs-1 fw-bold' style={{ color: "#192F60" }}><span>{mealName.charAt(0).toUpperCase()}{mealName.slice(1)}</span> Places in India</h3>
                <div className='d-flex gap-4 mt-4' style={{ height: "40rem" }}>
                    <div className='h-full col-3 rounded shadowx p-2'>
                        <Filters />
                    </div>
                    <div className='col-9 d-flex flex-column justify-content-between gap-4'>
                        {
                            filteredData ?
                                filteredData.map((item, i) => {
                                    return <div key={i} className='rounded shadowx p-4' role='button' onClick={() => { setNavid(item._id); navigate(`/restaurant/${item._id}`) }}>
                                        <div className='mb-4 d-flex gap-4 items-center'>
                                            <img src={item.thumb} alt="imge" className='h-[6.5rem] w-[6.5rem] rounded' style={{ height: "6.5rem", width: "6.5rem" }} />
                                            <div style={{ color: "#192F60" }}>
                                                <h3 className=' fw-semibold '>{item.name}</h3>
                                                <span className=' py-1 d-inline-block'>Fort</span>
                                                <span className='text-sm d-block' style={{ color: "#636F88" }}>{item.address}</span>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className='mt-4 d-flex gap-4'>
                                            <div className='d-flex flex-column gap-1'>
                                                <div>CUISINES:</div>
                                                <div>COST FOR TWO:</div>
                                            </div>
                                            <div className='d-flex flex-column  gap-1'>
                                                <div>
                                                    <span>{item.Cuisine[0].name}, </span>
                                                    <span>{item.Cuisine[1].name}</span>
                                                </div>
                                                <p>{item.cost}</p>
                                            </div>
                                        </div>
                                    </div>
                                }) : "8"
                        }
                        <div className='justify-self-bottom text-center p-2' >
                            <span className='border px-3 py-2 mx-2 ' role='button' > &#60;</span>
                            {
                                Array.from({ length: half }, (k, index) => {
                                    return <span key={index} className='border px-3 py-2 mx-2' role='button' value={index + 1} onClick={pageHandler}>{index + 1}</span>
                                })
                            }
                            <span className='border px-3 py-2 mx-2' role='button'> &#62;</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MealType