import React from 'react'

const Breadcrumb = ({ children }) => {
  return (
    <section className='breadcrumb'>
      <div className='container'>
        <div className='row'>
          <div className='col'>{children}</div>
        </div>
      </div>
    </section>
  )
}

export default Breadcrumb
