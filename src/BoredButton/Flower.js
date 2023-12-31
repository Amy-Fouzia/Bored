import React from 'react'
import seedOne from '../assets/seedOne.png'
import seedTwo from '../assets/seedTwo.png'
import seedThree from '../assets/seedThree.png'
import sproutOne from '../assets/sproutOne.png'
import sproutTwo from '../assets/sproutTwo.png'
import sproutThree from '../assets/sproutThree.png'
import seedlingOne from '../assets/seedlingOne.png'
import seedlingTwo from '../assets/seedlingTwo.png'
import seedlingThree from '../assets/seedlingThree.png'
import plantOne from '../assets/plantOne.png'
import plantTwo from '../assets/plantTwo.png'
import plantThree from '../assets/plantThree.png'
import flowerOne from '../assets/flowerOne.png'
import flowerTwo from '../assets/flowerTwo.png'
import flowerThree from '../assets/flowerThree.png'
import witherOne from '../assets/witherOne.png'
import witherTwo from '../assets/witherTwo.png'
import witherThree from '../assets/witherThree.png'

export default function Flower (props) {
    const{ water, type, setWater, setType } = props

    const [img, setImg] = React.useState();

    React.useEffect(() => {
        if (type === 1) {
            if (water === 0) {
                setImg(seedOne);
            }  
            else if (water === 5) {
                setImg(sproutOne);
            } 
            else if (water === 6) {
                setImg(seedlingOne);
            } 
            else if (water === 8) {
                setImg(plantOne);
            } 
            else if (water === 9) {
                setImg(flowerOne);
                //add bees
            } 
            else if (water === 14) {
                setImg(witherOne);
            } 
        }
    
        else if (type === 2) {
            if (water === 0) {
                setImg(seedTwo);
            }  
            else if (water === 1) {
                setImg(sproutTwo);
            } 
            else if (water === 3) {
                setImg(seedlingTwo);
            } 
            else if (water === 5) {
                setImg(plantTwo);
            } 
            else if (water === 7) {
                setImg(flowerTwo);
            } 
            else if (water === 10) {
                setImg(witherTwo);
            } 
        }
    
        else if (type === 3) {
            if (water === 0) {
                setImg(seedThree);
            } 
            else if (water === 1) {
                setImg(sproutThree);
            }
            else if (water === 3) {
                setImg(seedlingThree);
            } 
            else if (water === 6) {
                setImg(plantThree);
            } 
            else if (water === 7) {
                setImg(flowerThree);
            } 
            else if (water === 11) {
                setImg(witherThree);
            } 
        }
    }, [type, water]);

    return(
        <div>
            <img src={ img }/>
        </div>
    );
}