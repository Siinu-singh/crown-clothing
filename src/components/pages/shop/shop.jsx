import React from 'react';
import SHOP_DATA from './shop_Data';
import CollectionPreview from '../../collection-preview/collection-preview';

class Shop extends React.Component{
    constructor(){
        super();
        this.state ={
            collections: SHOP_DATA
        };
    }

    render(){
        const { collections } = this.state;
        return(
            <div className='shop-page'>
                {
                    collections.map(({ id, ...otherCollectionProps }) => (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        );
    }
}
export default Shop;