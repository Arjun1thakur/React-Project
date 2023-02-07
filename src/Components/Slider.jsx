import React from 'react'

const Slider = (data) => {
  // console.log(data.val)
  return (
    <div className="Slider">
        <img src={data.val.src2} alt="" />
        <h1>Title of vertical gallery</h1>
    </div>
  )
}

export default Slider