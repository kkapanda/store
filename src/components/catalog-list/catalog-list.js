import React, {Component} from 'react';
import CatalogListItem from '../catalog-list-item';
import { connect } from 'react-redux';
import './catalog-list.css';
import { withStoreService } from '../higher-order-components';
import { itemsLoaded, deleteItem } from '../../actions';
import { compose } from '../../utils';

const ItemList = ( {items, deleteItem} ) => {
    items.map((item, i) => item.id = i)
    return(
        <ul className = 'catalog-list'>
            {
                items.map((item) => {
                    return (
                        <li key={item.id}> <CatalogListItem item={item} deleteItem={() => deleteItem(item.id)}/> </li>
                    )
                })
            }
        </ul>

    )

}

class CatalogListContainer extends Component {

    componentDidMount() {
        const {storeService} = this.props;
        const data = storeService.getItems();
        this.props.itemsLoaded(data);
    }

    render() {
        const { items, deleteItem} = this.props;
        return <ItemList items={items} deleteItem={deleteItem} />
      
    }
}




const mapStateToProps = ({items}) => {
    return { items };
}

const mapDispatchToProps = {
    itemsLoaded,
    deleteItem: deleteItem

}

export default compose(withStoreService(), connect(mapStateToProps, mapDispatchToProps))(CatalogListContainer);