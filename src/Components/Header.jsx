import '../style/Header.css'
import { NavLink } from 'react-router-dom'
import { Data } from '../data'
import { useState } from 'react'

const ResHeader=()=>{
    let arr=Data.map((data)=>{
        return data;
    })
    let check=new Set()
    arr.filter((data)=>check.add(data.Category))
    let val=[...check]
    return (
        <div className="reshead">
            <NavLink className={({isActive})=>(isActive ? 'btn' : 'btn-active')}  to='/'>Home</NavLink>
            {val.map((data,index)=>{
                return <NavLink className={({isActive})=>(isActive ? 'btn' : 'btn-active')} key={index} to={`/${data}`}>{data}</NavLink>
            })}
        </div>
    )
}

function Header(){
    let [val0,setVal]=useState(false)
    let arr=Data.map((data)=>{
        return data;
    })
    let check=new Set()
    arr.filter((data)=>check.add(data.Category))
    let val=[...check]

    const onClick = () => setVal(val0=>!val0);
    return (
        <>
            <div className="nav flex">
                <div className="top flex">
                    <span className='span'>The </span>
                    <span className='siren'>Siren</span>
                </div>
                <div className="bottom flex">
                    <NavLink className={({isActive})=>(isActive ? 'btn' : 'btn-active')} to='/'>Home</NavLink>
                    {val.map((data,index)=>{
                        return <NavLink className={({isActive})=>(isActive ? 'btn' : 'btn-active')} key={index} to={`/${data}`}>{data}</NavLink>
                    })}
                </div>
                <div className="bottom2">
                    <button onClick={onClick}>menu</button>
                    {  val0 && <ResHeader/> }
                </div>
            </div>
        </>
    )
}

export default Header