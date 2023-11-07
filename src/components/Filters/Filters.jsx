import React, { useContext } from 'react'
import { store } from '../../App'

const Filters = () => {

    const { setFormData } = useContext(store)

    const locationHnadler = (e) => {
        setFormData((prev) => ({
            ...prev,
            location: e.target.value
        }))
    }

    const costHandler = (e) => {
        const values = e.target.value.split(",")
        setFormData((prev) => ({
            ...prev,
            lcost: values[0],
            hcost: values[1]
        }))
    }

    const sortHandler = (e) => {
        setFormData((prev) => ({
            ...prev,
            sort: e.target.value
        }))
    }

    const cusineHandler = (e) => {
        const { value } = e.target;
        setFormData((prev) => ({
            ...prev,
            cuisine: value
        }))

    }

    return (
        <>
            <form className='p-2'>
                <h4 style={{ color: "#192F60" }} className='mb-3'>Filters/Sort</h4>
                <div style={{ color: "#192F60" }} className='mb-2'>Select Location</div>
                <select name="location" id="location" className='w-100 mb-3' onChange={locationHnadler}>
                    <option value="">select</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Pune">Pune</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Mumbai">Mumbai</option>
                </select>
                <div style={{ color: "#192F60" }} className='mb-1'>Cuisine</div>
                <div style={{ color: "#8C96AB" }} className='mb-3'>
                    <div className='mb-1'>
                        <input type="checkbox" name="checkboxValue1" id="north-indian" value={"North Indian"} onChange={cusineHandler} />
                        <label htmlFor="north-indian" className='ms-2'>North Indian</label>
                    </div>
                    <div className='mb-1'>
                        <input type="checkbox" name="checkboxValue2" id="south-indian" value={"South Indian"} onChange={cusineHandler} />
                        <label htmlFor="south-indian" className='ms-2'>South Indian</label>
                    </div>
                    <div className='mb-1'>
                        <input type="checkbox" name="checkboxValue3" id="chinese" value={"Chinese"} onChange={cusineHandler} />
                        <label htmlFor="chinese" className='ms-2'>Chinese</label>
                    </div>
                    <div className='mb-1'>
                        <input type="checkbox" name="checkboxValue4" id="fast-food" value={"Fast Food"} onChange={cusineHandler} />
                        <label htmlFor="fast-food" className='ms-2'>Fast Food</label>
                    </div>
                    <div className='mb-1'>
                        <input type="checkbox" name="checkboxValue5" id="street-food" value={"Street food"} onChange={cusineHandler} />
                        <label htmlFor="street-food" className='ms-2'>Street Food</label>
                    </div>
                </div>
                <div style={{ color: "#192F60" }} className='mb-1 '>Cost for two</div>
                <div style={{ color: "#8C96AB" }}>
                    <div className='mb-1'>
                        <input type="radio" name="costfortwo" id="lt500" value={"0,500"} onChange={costHandler} />
                        <label htmlFor="lt500" className='ms-2'>Less than 500</label>
                    </div>
                    <div className='mb-1'>
                        <input type="radio" name="costfortwo" id="5to10" value={"500,1000"} onChange={costHandler} />
                        <label htmlFor="5to10" className='ms-2'>500 to 1000</label>
                    </div>
                    <div className='mb-1'>
                        <input type="radio" name="costfortwo" id="10to15" value={"1000,1500"} onChange={costHandler} />
                        <label htmlFor="10to15" className='ms-2'>1000 to 1500</label>
                    </div>
                    <div className='mb-1'>
                        <input type="radio" name="costfortwo" id="15to20" value={"1500,2000"} onChange={costHandler} />
                        <label htmlFor="15to20" className='ms-2'>1500 to 2000</label>
                    </div>
                    <div className='mb-1'>
                        <input type="radio" name="costfortwo" id="20plus" value={"2000, 0"} onChange={costHandler} />
                        <label htmlFor="20plus" className='ms-2'>2000+</label>
                    </div>
                </div>
                <h4 style={{ color: "#192F60" }} className='mb-3 mt-3'>Sort</h4>
                <div style={{ color: "#8C96AB" }}>
                    <div className='mb-1'>
                        <input type="radio" name="sort" id="ltoh" value={false} onChange={sortHandler} />
                        <label htmlFor="ltoh" className='ms-2'>Price low to high</label>
                    </div>
                    <div className='mb-1'>
                        <input type="radio" name="sort" id="htol" value={true} onChange={sortHandler} />
                        <label htmlFor="htol" className='ms-2'>Price high to low</label>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Filters