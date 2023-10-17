import React from 'react'
import styles from './boredbutton.module.css'
import Flower from './Flower'

export default function BoredButton(){
    const [waterOne, setWaterOne] = React.useState(0);
    const [typeOne, setTypeOne] = React.useState(1);

    return(
        <>
            <h1 className={styles.title}> Garden Party </h1>
            <p className={styles.descrip}> click to watch your garden come to life! </p>
            
            <div>  
                    <Flower 
                        water={waterOne} 
                        type={typeOne}
                        setWater={setWaterOne}
                        setType={setTypeOne}
                    />
            </div>
        </>
    )
}