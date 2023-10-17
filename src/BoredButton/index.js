import React from 'react'
import styles from './boredbutton.module.css'
import Flower from './Flower'
import wateringCan from '../assets/wateringCan.png'
import grass from '../assets/grass.png'

export default function BoredButton(){
    const [water, setWater] = React.useState(0);
    const [typeOne, setTypeOne] = React.useState(1);
    const [typeTwo, setTypeTwo] = React.useState(2);
    const [typeThree, setTypeThree] = React.useState(3);

    const Water = () => {
        if (water === 5) {
            setWater(0);
        }
        else { setWater(water + 1); }  
    }

    return(
        <>
            <h1 className={styles.title}> Garden Party </h1>
            <p className={styles.descrip}> click to watch your garden come to life! </p>
            <img className={styles.water} src={wateringCan} onClick={Water} />

            <div className={styles.row}>  
                    <Flower 
                        water={water} 
                        type={typeOne}
                        setWater={setWater}
                        setType={setTypeOne}
                    />
                    <Flower 
                        water={water} 
                        type={typeTwo}
                        setWater={setWater}
                        setType={setTypeTwo}
                    />
                    <Flower 
                        water={water} 
                        type={typeThree}
                        setWater={setWater}
                        setType={setTypeThree}
                    />
            </div>

            <img className={styles.footer} src={grass}></img>
        </>
    )
}