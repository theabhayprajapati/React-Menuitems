import React from 'react'

const Categories = ({ sercat, allCate }) => {
  return (
    <div className="btn-container">
      {allCate.map((Cate, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => sercat(Cate)}
          >
            {Cate}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
