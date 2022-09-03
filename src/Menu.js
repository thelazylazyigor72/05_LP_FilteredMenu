import React from 'react';


//so here we take items array from props
//and w/ .map() populate all the items
const Menu = ({items}) => {
  return <div className='section-center'>
    {items.map(menuItem => {
      const {id,title,img,desc, price} = menuItem
      return <article key={id} className='menu-item'>
        <img src={img} className='photo' />
        <div className='item-info'>
          <header>
            <h4>{title}</h4>
            <h4 className='price'>${price}</h4>
          </header>
          <p className='item-text'>{desc}</p>
        </div>
      </article>
    })}
  </div>;
};

export default Menu;
