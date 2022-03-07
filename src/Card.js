import React from 'react'

function Card(props) {

    return (

        props.category === "all" ?

            props.localData.map(el =>
                <div key={el.id} className='card'>
                    <img alt='food' src={el.img}></img>
                    <div className='details'>
                        <div className='name-price'>
                            <p id='title'>{el.title}</p>
                            <p id='price'>${el.price}</p>
                        </div>
                        <div className='desc'>{el.desc}</div>
                    </div>
                </div>


            )

            :

            props.localData.map(el => {
                return props.category === el.category ?
                    <div key={el.id} className='card'>
                        <img alt='food' src={el.img}></img>
                        <div className='details'>
                            <div className='name-price'>
                                <p id='title'>{el.title}</p>
                                <p id='price'>${el.price}</p>
                            </div>
                            <div className='desc'>{el.desc}</div>
                        </div>
                    </div>
                    : ""
            }
            )


    )
}

export default Card