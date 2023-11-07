import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import Modal from '../../components/UserModal/Modal'
import { useNavigate } from 'react-router-dom'
import { store } from '../../App'


const Home = () => {
    const [mealData, setMealData] = useState([])
    const { setMealName, setFormData } = useContext(store)
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:8080/api/meal").then((res) => setMealData(res.data))
        setFormData({
            location: "",
            cuisine: "",
            lcost: "",
            hcost: "",
            sort: 1,
            page: ""
        })
    }, [setFormData])

    return (
        <>
            <header className="d-flex flex-column gap-3 py-4 px-5 text-center">
                <div className='ms-auto fw-semibold mt-3'>
                    <span className='text-white' role='button' data-bs-toggle="modal" data-bs-target="#loginModal">Login</span>
                    <span className='ms-3 p-2 px-4 border text-white rounded' role="button" data-bs-toggle="modal" data-bs-target="#registerModal">Create an account</span>
                </div>
                <div>
                    <span className='bg-white title px-4 pb-3 rounded-circle'>e!</span>
                    <p className='text-white mt-4 fw-semibold fs-1'>Find the best restaurants, cafés, and bars</p>
                </div>
                <div>
                    <input type="search" placeholder='Please type a location' className='border-0 me-3 p-2' style={{ outline: "none", width: "15rem" }} />
                    <input type="search" placeholder='Search for restaurants' className='border-0 p-2' style={{ outline: "none", width: "32rem" }} />
                </div>
            </header>
            <Modal />
            <section className='p-5 '>
                <div style={{ color: "#192F60", fontSize: "2.5rem" }} className='fw-bold '>Quick Searches</div>
                <div style={{ color: "#8C96AB" }} className='fs-4 '>Discover restaurants by type of meal</div>
                <div className='container-fluid mt-4 '>
                    <div className='row row-cols-lg-3 row-cols-md-2' style={{ height: "23rem" }}>
                        {
                            mealData &&
                            mealData.map((meal, index) => {
                                return <div className='p-2' key={index} onClick={() => { navigate(`/${meal.name.toLowerCase()}`); setMealName(meal.name.toLowerCase()) }}>
                                    <div className='shadowx rounded h-100 d-flex'>
                                        <img src={`/assets/images/${meal.image}`} alt="new imge" className='h-100 rounded-start w-50' />
                                        <div className='p-4'>
                                            <h3 style={{ color: "#192F60" }}>{meal.name}</h3>
                                            <span style={{ color: "#8C96AB" }}>{meal.content}</span>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home