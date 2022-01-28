import React from 'react'
import './Liste.css'
import {useTrail, animated} from 'react-spring'
import {v4 as uuidv4} from 'uuid'

//useTrail : permet d'animer des éléments les uns à la suite des autres
//animated : permet de réaliser l'animation

import Card from '../../Components/Card/Card'

export default function Liste() {

    const trail = useTrail(9, {
        from: {
            opacity: 0,
            x: 20
        },
        to: {
            opacity: 1,
            x: 0
        }
    })

    //Utilisation de useTrail() :
    //param 1 : nbe d'éléments à animer (9)
    //param 2 : objet contenant les conditions de départ (from: {}) et d'arrivée (to: {})
    // Trail retourne un tableau d'animations, sur lequel on peut utiliser map :

    console.log(trail)

  return (
  <div className='list-container'>
      {trail.map((cardStyle, index) => {
          return (
          <animated.div
          key={uuidv4()}
          style={cardStyle}
          >
              <Card/>
          </animated.div>
          )
      })}
  </div>
  )
}

//On utilise <animated.div> pour activer l'animation contenue dans la div
//On passe le style attribué grâce à useTrail dans la propriété style (ici cardStyle)