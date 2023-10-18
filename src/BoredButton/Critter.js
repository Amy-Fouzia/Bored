import React from 'react'
import bee from '../assets/bee.png'
import butterfly from '../assets/butterfly.png'

export default function Critter (props) {
    const{water, type, setWater, setType} = props

    const [img, setImg] = React.useState();

    React.useEffect(() => {
        if (type === 1) {
            if (water === 0){
                setImg(null);
            }
            else if (water === 8) {
                setImg(bee);
            } 
            else if (water === 14) {
                setImg(null);
            } 
        }
    
        else if (type === 2) {
            if (water === 0){
                setImg(null);
            }
            else if (water === 5) {
                setImg(butterfly);
            } 
            else if (water === 14){
                setImg(null);
            }
        }
    }, [type, water]);

    return(
        <div>
            <img src={ img }/>
        </div>
    );
}