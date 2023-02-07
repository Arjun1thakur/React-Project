import React from 'react'
import { Link } from 'react-router-dom'
import { LatestStoriesData } from '../data'
const LatestStories = () => {
    let arr=LatestStoriesData
  return (
    <div className='LatestStories'>
        <h1 className="h1">Latest Stories</h1>
        <div className="Storiescards flex">
            {arr.map((data,index)=>{
                return (
                    <Link to={'/'+data.Category+'/'+data.name} state={{data:data}} key={index}>
                        <div className="cardsStories" >
                        <h2>{data.title}</h2>
                            <p>{data.content}</p>
                            <p><span style={{fontWeight:'700'}}>{data.Category}</span> / {data.Date}</p>
                        </div>
                    </Link>
                )
            })}
        </div>
        <div className="more">VIEW MORE</div>
    </div>
  )
}

export default LatestStories