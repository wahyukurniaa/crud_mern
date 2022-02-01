import {useState,useEffect} from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    getProducts();
  },[])

  const getProducts = async () =>{
    const response = await axios.get('http://localhost:5000/products');
    console.log(response.data);
    
  }

  return (
    <div>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>11</td>
            <td>salmon</td>
            <td>400</td>
            <td>
              <a className="button is-small is-info">Edit</a>
              <a className="button is-small is-danger">Delete</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
