// import React, { useState } from 'react';


// const Card = ({ image, title, subtitle, price, star, rating, vendor, heart, cart }) => {
//   const [isLoved, setIsLoved] = useState(false);

//   const handleLoveClick = () => {
//     setIsLoved(!isLoved);
//   };

//   return (
//     <div className="card">
//         <img src={image} alt={title} className="card-image" />
//         <h3 className="card-title">{title}</h3>
//         <p>{subtitle}</p>
//         <p className="card-price">{price}</p>
//         <span>{star}</span>
//         <span>{rating}</span>
//         <p className="card-vendor">Vendor: {vendor}</p>
//         <span>{heart}</span>
//         <span>{cart}</span>
//     </div>
//   );
// };

// export default Card;

import React from 'react'

const Card = ({className, children}) => {
    return (
      <article className={`cards ${className}`}>
        {children}
      </article>
    )
  }
export default Card;
