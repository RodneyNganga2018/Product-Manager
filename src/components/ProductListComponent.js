import React, {useState,useEffect} from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

import styles from './ProductList.module.css';

export default props => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>setProducts(res.data))
            .catch(err=>console.log(err));
    });

    return (
        <div className={styles.text}>
            <h1>All Products</h1>
            {
                products.map( (item,i) =>
                    <p key={i} onClick={()=>navigate(`/product/${item._id}`)} className={styles.item}>{item.title}</p>
                )
            }
        </div>
    )
}