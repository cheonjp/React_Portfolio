import React,{useState} from 'react'
import People from './People'
import {BsFillChatLeftQuoteFill} from 'react-icons/bs'
import {FaCaretSquareLeft, FaCaretSquareRight} from 'react-icons/fa'

const Employee = ()=>{
    const [index,setIndex]=useState(0)
    const minusIndex = ()=>{
            setIndex(()=>{
                let newIndex = index - 1
                if(newIndex < 0){
                    newIndex = People.length - 1
                }
                return newIndex
            })
    }
    const plusIndex =() =>{
        setIndex(()=>{
            let newIndex = index + 1
            if(newIndex === People.length){
                newIndex = 0
            }
            return newIndex
        })
    }
    const randomIndex = () =>{
        setIndex(()=>{
            let newIndex = Math.random()*People.length
            console.log(newIndex)
            let finalIndex = Math.floor(newIndex)
            if(finalIndex === index){
                randomIndex()
            }
            return finalIndex
        })
    }
    return <div className="employee">
        <div className="imgIcon"><BsFillChatLeftQuoteFill /></div>
        <img src={People[index].image} alt="" />
        <p className="name">Name: <span>{People[index].name}</span></p>
        <p className="position">{People[index].position}</p>
        <p>{People[index].text}</p>  
        <div className="btnBox">
            <span className="leftBtn" onClick={minusIndex}><FaCaretSquareLeft /></span>
            <span className="randomBtn" onClick={randomIndex}>Random</span>
            <span className="rightBtn" onClick={plusIndex}><FaCaretSquareRight /></span>
        </div>
    </div>
}

export default Employee