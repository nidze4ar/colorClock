import React from 'react'

const Card = ({color, chouse, id, inGame, chousedID, choused2ID}) => (
  <div className='card'
   style={(color === 'rgb(0, 0, 0)' || inGame && chousedID === id || choused2ID === id) ? {backgroundColor: color} : {
     backgroundColor: 'rgb(115, 121, 32)'
    } }
  onClick={()=>chouse(color, id)}
  > 
      <p>{id}/36</p>

  </div>
)
export default Card