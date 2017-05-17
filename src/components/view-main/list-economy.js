import React from 'react';
import PropTypes from 'prop-types';

const ListEconomy = ({items, subtotal, deleteItem}) => {

  return (
    <article>
      <ul>
        { items.map((item) =>
          <li key={item.id}> 
            {item.description}: {item.quantity}
            { deleteItem && 
              <span onClick={()=> deleteItem(item.id)}> x</span>  
            }        
          </li>
        ) }
      </ul>
      <p>
        Subtotal ingresos: { subtotal }
      </p>
    </article>
  );
};

ListEconomy.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    description: PropTypes.string, 
    quantity: PropTypes.number,
    delete: PropTypes.function
  })),
  subtotal: PropTypes.number.isRequired
};

export default ListEconomy;