import React, {useState} from 'react';
import axios from 'axios';

import styles from './Form.module.css';

export default props => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', {
            title, price, description
        })
            .catch(err=>console.log(err));
        setTitle("");
        setPrice("");
        setDescription("");
    }

    return(
        <form onSubmit={onSubmitHandler} className={styles.form}>
            <div className={styles.formGroup}>
            <label className={styles.formLabel}>Title</label>
            <input type="text" onChange={e=>setTitle(e.target.value)} value={title} className={styles.formInput}/>
            </div>
            <div className={styles.formGroup}>
            <label className={styles.formLabel}>Price</label>
            <input type="text" onChange={e=>setPrice(e.target.value)} value={price} className={styles.formInput}/>
            </div>
            <div className={styles.formGroup}>
            <label className={styles.formLabel}>Description</label>
            <input type="text" onChange={e=>setDescription(e.target.value)} value={description} className={styles.formInput}/>
            </div>
            <input type="submit"/>
        </form>
    )
}