import {useState} from 'react'
import styles from './boredbutton.module.css'
import Blue from '../assets/Blue.jpeg'
import Blue2 from '../assets/Blue.jpeg'
import Flower from './Flower'
const flowers=[
    {src:Blue, count:0},
    {src:Blue2, count: 0}
]

//create a linear grid of flowers, each with its own src and count respective to its height

export default function BoredButton(){
    const [flowers, growFlower] = useState([]) //use state to grow the flower by incrementing count on flower 

    const handleClick = () => {
        growFlower()
    }

    return(
        <>
            <h1 className={styles.title}> Garden Party </h1>
            <p className={styles.descrip}> click to watch your garden come to life! </p>

            <button onClick={handleClick}> <Flower flowers={flowers}/> </button>
            <div className={styles.gardenGrid}>  
            {flowers.map((flower) => (
                <Flower key={flower.id} flower={flower} growFlower={growFlower}/>
            ))}
            </div>

        </>
    )
}