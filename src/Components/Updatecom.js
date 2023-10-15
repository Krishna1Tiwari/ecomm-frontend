import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


const Updatecomp = () => {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [company, setCompany] = React.useState('');
    const [error, setError] = React.useState(false);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getProductDetails();
        
        // eslint-disable-next-line
    }, [])

    const getProductDetails = async () => {
        let result = await fetch(`http://localhost:5000/product/${params.id}`, {
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        console.log(result)
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company)
    }

    const updateproduct = async () => {

        if (!name || !price || !company || !category) {
            setError(true);
            return false
        }


        console.log(name, price, category, company)
        let result = await fetch(`http://localhost:5000/product/${params.id}`, {
            method: "Put",
            body: JSON.stringify({ name, price, category, company }),
            headers: {
                'Content-Type': 'Application/json',
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        console.log(result);
        if (result) {
            navigate('/')
        }

    }


    return (

        <div className='product'>
            <h1>Update Product</h1>

            <input type="text" placeholder='Enter product name' value={name} onChange={(e) => { setName(e.target.value) }} />

            {error && !name && <span className="invaliderror">Enter valid name</span>}

            <input type='text' placeholder='Enter product price' value={price} onChange={(e) => { setPrice(e.target.value) }} />

            {error && !price && <span className="invaliderror">Enter valid price</span>}

            <input type='text' placeholder='Enter product category' value={category} onChange={(e) => { setCategory(e.target.value) }} />

            {error && !category && <span className="invaliderror">Enter valid category</span>}

            <input type='text' placeholder='Enter product company' value={company} onChange={(e) => { setCompany(e.target.value) }} />

            {error && !company && <span className="invaliderror">Enter valid company</span>}

            <button onClick={updateproduct} type='button'>Update</button>

        </div>
    )

}
export default Updatecomp