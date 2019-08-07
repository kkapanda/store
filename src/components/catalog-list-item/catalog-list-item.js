import React from 'react';
import './catalog-list-item.css';

const CatalogListItem = ({ item, deleteItem }) => {
    const { title, description, price, coverImage } = item;


    return (
        <div className='catalog-list-item'>
            <div className='item-cover'>
                <img src={coverImage} alt='cover' />
            </div>
            <div className='item-details'>
                <span className='item-title'>{title}</span>
                <div className='item-description'>{description}</div>
                <div className='item-price'>${price}</div>
                <button className='btn btn-info delete-item'
                onClick={deleteItem}>
                    
                    <i className="fa fa-trash"></i>
                </button>
            </div>

        </div>
    )
}



export default CatalogListItem;