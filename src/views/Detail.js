import React, {useEffect, useState} from 'react';
import axios from 'axios';

import styles from './Detail.module.css';

export default props => {
    const [product, setProduct] = useState({
        title: '',
        price: '',
        description: ''
    });

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/${props.id}`)
            .then(res => {
                setProduct(res.data)
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <div className={styles.item}>
            <h1>{product.title}</h1>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    )
}