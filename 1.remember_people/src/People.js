import React from 'react'

const People = ({meeting, slideClass})=>{
    return(
        <>
        {
            meeting.map((person)=>{
                const {id,name,age,image,relationship}=person
                return(
                    <div className={`eachPerson ${slideClass}`} key={id}>
                        <img src={image} alt={name} className="face" />
                        <div className="rightPart">
                            <h4>{name}</h4>
                            <div className="bottomPart">
                            <div className="age">Age: <span>{age}</span></div>
                            <div>Position:  <span>{relationship}</span> </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        </>
    )
}

export default People