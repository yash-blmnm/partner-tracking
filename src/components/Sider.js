import React from 'react'
import ListPartners from './ListPartners';

function Sider () {
  return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar w-18" >
      <div className="sidebar-sticky p-0">
        <div className="search-btn">
          <span className="svg-icon svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 translate-middle-y ms-0 ps-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </span>
          <input type="text" className="form-control form-control-flush ps-5 border-0 py-2" name="search" value="" placeholder="Search Partners" data-kt-search-element="input" />
        </div>
        <div className="list-group list-group-flush">
          <ListPartners />
        </div>
      </div>
    </nav>
  )
}

export default Sider;