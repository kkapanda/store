import React from 'react';
import './info-table.css';
import { connect } from 'react-redux'

const InfoTable = ( {items} ) => {

let totalPrice = 0;
items.forEach((item) => {
   totalPrice += Number(item.price)
})

let avgPrice = (totalPrice / items.length).toFixed(2);
  if(!avgPrice) avgPrice = 0;


    return (
        <div className='info-table'>
            <h2>
                Catalog Information
            </h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>Average Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{items.length}</td>
                        <td>${totalPrice}</td>
                        <td>${avgPrice}</td>
                        <td>
                            <button className='btn btn-warning btn-sm float-left'>
                                <i className="fa fa-trash"></i> Delete All
                        </button>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}


const mapStateToProps = ({ items }) => {
    return {
      items,
    };
  };

const mapDispatchToProps = (dispatch) => {

    return {
    }
      
};
  
export default connect(mapStateToProps, mapDispatchToProps)(InfoTable)