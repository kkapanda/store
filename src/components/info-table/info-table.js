import React from 'react';
import './info-table.css';
import { connect } from 'react-redux'

const InfoTable = ( {items} ) => {

let totalPrice = 0;
items.forEach((item) => {
   totalPrice += Number(item.price)
   console.log(item.price)
})

let avgPrice = (totalPrice / items.length).toFixed(2);
  if(!avgPrice) avgPrice = 0;

  console.log(items)

    return (
        <div className='info-table'>
            <h2>
                Catalog Information
            </h2>
            <table className='table'>
                        <tr>
                        <th>Count</th>
                        <td>{items.length}</td>
                        </tr>
                        <tr>
                        <th>Total Price</th>
                        <td>${totalPrice}</td>
                        </tr>
                        <tr>
                        <th>Average Price</th>
                        <td>${avgPrice}</td>
                        </tr>
                        <tr>
                        <th colspan="2">
                            <button className='btn btn-warning btn-sm'>
                                <i className="fa fa-trash"></i> Delete All
                            </button>
                        </th>
                       </tr>
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