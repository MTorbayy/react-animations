import React, {useState, useRef, useEffect} from 'react'
import './StateAnim.css'
import {useTransition, animated} from 'react-spring'

// useTransition : hook d'animation d'un élément rajouté ou supprimé

import {v4 as uuidv4} from 'uuid'

export default function StateAnim() {

    const [firstDisplay, setFisrtDisplay] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setFisrtDisplay(false)
        }, 1000)
    }, [])

    //Pour annuler l'animation sur les éléments déjà présents

    const [inputData, setInputData] = useState([
        {
            id: uuidv4(),
            txt: "Chopin"
        },
        {
            id: uuidv4(),
            txt: "Mozart"
        },
        {
            id: uuidv4(),
            txt: "Bach"
        },
        {
            id: uuidv4(),
            txt: "Beethoven"
        }
    ])


    const inputRef = useRef()


    const handleData = e => {
        e.preventDefault()

        const newObj = {
            id: uuidv4(),
            txt: inputRef.current.value
        }

        setInputData([
            ...inputData,
            newObj
        ])

        inputRef.current.value = ""

    }

    const listTransitions = useTransition(inputData, {
        from: {
            opacity: 0,
            transform: 'translateY(10px)'
        },
        enter: {
            opacity: 1,
            transform: 'translateY(0px)'
        },
        keys: inputData.map(item => item.id)
    })

    //utiliser useTransition :
    //Param 1 : le tableau state à animer
    //Param 2 : le style à appliquer aux nouveaux éléments, avec un style de départ (from) et un style d'arrivée(enter), et les identifiants de chaque élément sous forme de tableau


  return (
  <form onSubmit={handleData}>
      <label htmlFor="piano">Renseignez vos pianistes préférés :</label>
      <input ref={inputRef} type="text" id="piano"/>

      {firstDisplay ? 
      // Si firstDisplay true alors on envoit la liste sans les effets :
        (
        <ul>
            {inputData.map(obj => {
                return (
                    <li
                    key={obj.id}>
                        {obj.txt}
                    </li>
                )
            })}
        </ul>
        )
        
        : 

      // Si firstDisplay false alors on peut commencer à faire des effets sur les prochains élements : 
        (
        <ul>
            {listTransitions((styles, item) => {
                return (
                    <animated.li style={styles}>
                        {item.txt}
                    </animated.li>
                )
            })}

            {/* listTransitions Récupère le style et les éléments qu'on veut */}
        </ul> 
        )
      }

    
  </form>
  )
}
