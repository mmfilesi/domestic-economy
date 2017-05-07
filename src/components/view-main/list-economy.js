import React from 'react';
import PropTypes from 'prop-types';

const ListEconomy = ({subtitle, items, subtotal}) => {

  return (
    <article>
      <h5>{ subtitle }</h5>
      <ul>
        { items.map((item) =>
          <li key={item.id}> {item.description}: {item.quantity}</li>
        ) }
      </ul>
      <p>
        Subtotal ingresos: { subtotal }
      </p>
    </article>
  );
};

ListEconomy.propTypes = {
  subtitle: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(React.PropTypes.shape({
    id: PropTypes.string,
    description: PropTypes.string, 
    quantity: PropTypes.number
  })),
  subtotal: PropTypes.number.isRequired
};

export default ListEconomy;