import React from 'react'

const MoreButton = (props) => {

  let handleGetFourSushi = () => {
    props.onGetFourSushi()
  }
  
    return <button onClick={ handleGetFourSushi } >
            More sushi!
          </button>
}

export default MoreButton