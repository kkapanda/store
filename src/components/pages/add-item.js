import React from 'react';
import { connect } from 'react-redux';
import { addItemToCatalog } from '../../actions';
import './add-item.css'

const AddItem = ( addItemToCatalog ) => {
    const payload = {
        title: '',
        price: ''
    };

    const handleName = (e) => {
        payload.title = e.target.value;
    }

    const handlePrice = (e) => {
        payload.price = e.target.value;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="new-item-page">
          <h2>Add new Item</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Title</label>
              <input type="text" className="form-control" onChange={handleName} />  
            </div>
            <div className="form-group">
              <label>Price</label>
              <input type="text" className="form-control" onChange={handlePrice} />
            </div>
            
            <button type="submit" 
                    className="btn btn-primary sbmt-btn"
                    onClick={()=>addItemToCatalog(payload)}>Submit</button>
          </form>
        </div>
      );
};


const mapStateToProps = (  { items } ) => {
    return {
      items
    };
  };
  
  const mapDispatchToProps = (dispatch) => {

    return {
      addItemToCatalog: (payload) => dispatch(addItemToCatalog(payload))
    };
  };



export default connect(mapStateToProps, mapDispatchToProps)(AddItem);