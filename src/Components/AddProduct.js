import React from "react";


const AddProduct = () => {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [company, setCompany] = React.useState('');
    const [error,setError]= React.useState(false);
    

    const addproduct = async () => {

      if(!name || !price || !company || !category)
      {
        setError(true);
        return false
      }


        console.warn(name, price, category, company);
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        console.log(userId)
        let result = await fetch("http://localhost:5000/add-product", {
            method: "post",
            body: JSON.stringify({ name, price, category, company, userId }),
            headers: {
                "content-type": "application/json",
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        console.warn(result);
        alert("Done");

    }

    return (

        <div className='product'>
            <h1>Add Product</h1>

            <input type="text" placeholder='Enter product name' value={name} onChange={(e) => { setName(e.target.value) }} />

           {error && !name && <span className="invaliderror">Enter valid name</span>}

            <input type='text' placeholder='Enter product price' value={price} onChange={(e) => { setPrice(e.target.value) }} />
            {error && !price && <span className="invaliderror">Enter valid price</span>}

            <input type='text' placeholder='Enter product category' value={category} onChange={(e) => { setCategory(e.target.value) }} />
            {error && !category && <span className="invaliderror">Enter valid category</span>}

            <input type='text' placeholder='Enter product company' value={company} onChange={(e) => { setCompany(e.target.value) }} />
            {error && !company && <span className="invaliderror">Enter valid company</span>}

            <button onClick={addproduct} type='button'>Add Product</button>

        </div>
    )
}
export default AddProduct;