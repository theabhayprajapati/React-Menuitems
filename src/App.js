import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

function App() {
  const allCate = ['all', ...new Set(items.map((item) => item.category))]
  console.log(allCate)
  const [menuItems, setmenuItems] = useState(items)
  const [categories, setcategories] = useState(allCate)
  const filtercat = (category) => {
    if (category === 'all') {
      setmenuItems(items)
      return
    }
    let newItem = items.filter((item) => item.category === category)
    setmenuItems(newItem)
  }
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our menu </h2>
          <div className="underline"></div>
          <Categories sercat={filtercat} allCate={allCate} />
          <Menu items={menuItems} />
        </div>
      </section>
    </main>
  )
}

export default App
