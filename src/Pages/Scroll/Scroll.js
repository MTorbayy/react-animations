import React, {useState} from 'react'
import './Scroll.css'
import {Waypoint} from 'react-waypoint'
import {useSpring, animated} from 'react-spring'

export default function Scroll() {

    const [toggleTXT, setToggleTXT] = useState()

    const animation = useSpring({
        opacity: toggleTXT ? 1 : 0,
        transform: toggleTXT ? "translateX(0)" : "translateX(-50%)"
    })

  return (
  <div>
      <p className="scroll-txt">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis in sed quia eveniet? Impedit, nobis? At pariatur eum modi aliquam adipisci harum repellat ea quo nihil asperiores voluptatibus nemo recusandae illo dignissimos, porro, cupiditate aut ipsa, incidunt esse eaque quos! Vitae officia iusto mollitia ipsum debitis sed est architecto saepe, suscipit a minima quaerat dolores nisi ipsa accusantium error quam ipsam odio sint dolorum officiis laudantium? Recusandae ea ut reprehenderit illum at nostrum est qui libero doloremque. Quaerat ipsam dignissimos fugiat non vitae ut facilis laboriosam aut doloremque pariatur. Autem, enim. Autem provident quia quasi accusantium similique. Dolore quaerat deserunt totam ea mollitia, ipsum quia incidunt obcaecati. Dolor aliquam ratione blanditiis quo rerum ab numquam ullam quod, impedit odio itaque est libero rem officia debitis nesciunt nemo sint animi nostrum nihil deleniti quas nobis perspiciatis ipsa. Explicabo facere suscipit maiores aperiam minus. Eveniet voluptatibus modi tempore nostrum provident error alias molestias iure corrupti explicabo facilis recusandae quae veritatis enim magni, reprehenderit, earum tempora repellat. Mollitia fugit sint repellat, sed illum cupiditate corrupti id, labore iusto eligendi temporibus asperiores, quae odit delectus! Error, cum magni voluptate doloremque dolorem inventore consectetur provident aliquid adipisci deleniti, eveniet ex quos neque earum, culpa quisquam.
      </p>

      <p className="scroll-txt">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis in sed quia eveniet? Impedit, nobis? At pariatur eum modi aliquam adipisci harum repellat ea quo nihil asperiores voluptatibus nemo recusandae illo dignissimos, porro, cupiditate aut ipsa, incidunt esse eaque quos! Vitae officia iusto mollitia ipsum debitis sed est architecto saepe, suscipit a minima quaerat dolores nisi ipsa accusantium error quam ipsam odio sint dolorum officiis laudantium? Recusandae ea ut reprehenderit illum at nostrum est qui libero doloremque. Quaerat ipsam dignissimos fugiat non vitae ut facilis laboriosam aut doloremque pariatur. Autem, enim. Autem provident quia quasi accusantium similique. Dolore quaerat deserunt totam ea mollitia, ipsum quia incidunt obcaecati. Dolor aliquam ratione blanditiis quo rerum ab numquam ullam quod, impedit odio itaque est libero rem officia debitis nesciunt nemo sint animi nostrum nihil deleniti quas nobis perspiciatis ipsa. Explicabo facere suscipit maiores aperiam minus. Eveniet voluptatibus modi tempore nostrum provident error alias molestias iure corrupti explicabo facilis recusandae quae veritatis enim magni, reprehenderit, earum tempora repellat. Mollitia fugit sint repellat, sed illum cupiditate corrupti id, labore iusto eligendi temporibus asperiores, quae odit delectus! Error, cum magni voluptate doloremque dolorem inventore consectetur provident aliquid adipisci deleniti, eveniet ex quos neque earum, culpa quisquam.
      </p>

      <Waypoint
      bottomOffset="30%"
      onEnter={() => {
          if(!toggleTXT) {
              setToggleTXT(true)
          }
      }}
      />

    {/* onEnter : on trigger l'animation au passage du Waypoint
    bottomOffset : on trigger un peu avant */}

       <animated.div style={animation} className="cta-section">
          <h2>N'en ratez pas une miette !</h2>
          <form>
              <label htmlFor="email">Inscrivez-vous à la Newsletter !</label>
              <input type="email" id="email"></input>
          </form>
       </animated.div> 


      <p className="scroll-txt">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis in sed quia eveniet? Impedit, nobis? At pariatur eum modi aliquam adipisci harum repellat ea quo nihil asperiores voluptatibus nemo recusandae illo dignissimos, porro, cupiditate aut ipsa, incidunt esse eaque quos! Vitae officia iusto mollitia ipsum debitis sed est architecto saepe, suscipit a minima quaerat dolores nisi ipsa accusantium error quam ipsam odio sint dolorum officiis laudantium? Recusandae ea ut reprehenderit illum at nostrum est qui libero doloremque. Quaerat ipsam dignissimos fugiat non vitae ut facilis laboriosam aut doloremque pariatur. Autem, enim. Autem provident quia quasi accusantium similique. Dolore quaerat deserunt totam ea mollitia, ipsum quia incidunt obcaecati. Dolor aliquam ratione blanditiis quo rerum ab numquam ullam quod, impedit odio itaque est libero rem officia debitis nesciunt nemo sint animi nostrum nihil deleniti quas nobis perspiciatis ipsa. Explicabo facere suscipit maiores aperiam minus. Eveniet voluptatibus modi tempore nostrum provident error alias molestias iure corrupti explicabo facilis recusandae quae veritatis enim magni, reprehenderit, earum tempora repellat. Mollitia fugit sint repellat, sed illum cupiditate corrupti id, labore iusto eligendi temporibus asperiores, quae odit delectus! Error, cum magni voluptate doloremque dolorem inventore consectetur provident aliquid adipisci deleniti, eveniet ex quos neque earum, culpa quisquam.
      </p>

      <p className="scroll-txt">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis in sed quia eveniet? Impedit, nobis? At pariatur eum modi aliquam adipisci harum repellat ea quo nihil asperiores voluptatibus nemo recusandae illo dignissimos, porro, cupiditate aut ipsa, incidunt esse eaque quos! Vitae officia iusto mollitia ipsum debitis sed est architecto saepe, suscipit a minima quaerat dolores nisi ipsa accusantium error quam ipsam odio sint dolorum officiis laudantium? Recusandae ea ut reprehenderit illum at nostrum est qui libero doloremque. Quaerat ipsam dignissimos fugiat non vitae ut facilis laboriosam aut doloremque pariatur. Autem, enim. Autem provident quia quasi accusantium similique. Dolore quaerat deserunt totam ea mollitia, ipsum quia incidunt obcaecati. Dolor aliquam ratione blanditiis quo rerum ab numquam ullam quod, impedit odio itaque est libero rem officia debitis nesciunt nemo sint animi nostrum nihil deleniti quas nobis perspiciatis ipsa. Explicabo facere suscipit maiores aperiam minus. Eveniet voluptatibus modi tempore nostrum provident error alias molestias iure corrupti explicabo facilis recusandae quae veritatis enim magni, reprehenderit, earum tempora repellat. Mollitia fugit sint repellat, sed illum cupiditate corrupti id, labore iusto eligendi temporibus asperiores, quae odit delectus! Error, cum magni voluptate doloremque dolorem inventore consectetur provident aliquid adipisci deleniti, eveniet ex quos neque earum, culpa quisquam.
      </p>

      <p className="scroll-txt">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis in sed quia eveniet? Impedit, nobis? At pariatur eum modi aliquam adipisci harum repellat ea quo nihil asperiores voluptatibus nemo recusandae illo dignissimos, porro, cupiditate aut ipsa, incidunt esse eaque quos! Vitae officia iusto mollitia ipsum debitis sed est architecto saepe, suscipit a minima quaerat dolores nisi ipsa accusantium error quam ipsam odio sint dolorum officiis laudantium? Recusandae ea ut reprehenderit illum at nostrum est qui libero doloremque. Quaerat ipsam dignissimos fugiat non vitae ut facilis laboriosam aut doloremque pariatur. Autem, enim. Autem provident quia quasi accusantium similique. Dolore quaerat deserunt totam ea mollitia, ipsum quia incidunt obcaecati. Dolor aliquam ratione blanditiis quo rerum ab numquam ullam quod, impedit odio itaque est libero rem officia debitis nesciunt nemo sint animi nostrum nihil deleniti quas nobis perspiciatis ipsa. Explicabo facere suscipit maiores aperiam minus. Eveniet voluptatibus modi tempore nostrum provident error alias molestias iure corrupti explicabo facilis recusandae quae veritatis enim magni, reprehenderit, earum tempora repellat. Mollitia fugit sint repellat, sed illum cupiditate corrupti id, labore iusto eligendi temporibus asperiores, quae odit delectus! Error, cum magni voluptate doloremque dolorem inventore consectetur provident aliquid adipisci deleniti, eveniet ex quos neque earum, culpa quisquam.
      </p>
  </div>
  )
}
