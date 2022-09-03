import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

//preparations to always have "fresh" array of categories
const allCategories = items.map(item => item.category)
const uniqueCategories = ['all',...new Set(allCategories)]


console.log(uniqueCategories)
function App() {
  //state for menu, initital is just all data
  const [menuItems,setMenuItems] = useState(items)

  //state for categories, initial is uniqueCategories array, actually state is not neccessary for this
  const [categories,setCategories] = useState(uniqueCategories)

  //filter function
  const filterItems = category => {
    //if passed string says 'all' then chaange state value to initial array
    if (category==='all') {
      setMenuItems(items)
      return;
    }
    //else filter out only those items in array that mathces passed string
    const newItems = items.filter(item => item.category === category)
    //set state value w/ new array
    setMenuItems(newItems)
  }

  //pass filter function and uniqueCategories to Categories components
  //pass state value w/ items to Menu component
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>
            our menu
          </h2>
          <div className='underline'></div>
        </div>
        <Categories filterItems={filterItems} categories={categories}/>
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App;
