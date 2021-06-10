import React,{useRef,useEffect,useState} from 'react'
import PropTypes from 'prop-types'
import Clouds from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three'

const WelcomeScreen = ({children}) => {

    const myRefDiv = useRef(null)

    const [vanta,setVanta]=useState(0)//valor incial del flag

    useEffect(()=>{
        if(!vanta){
            setVanta(
                //activo efecto clouds
                Clouds({
                    THREE,
                    el: myRefDiv.current
                }))// vanta !=0 es diferente de falso            
        }
        //al salir de la pantalla debemos detener el efecto
        //y des-asociar todos los recursos(div + vanta effect)
        return () =>{
            //aqui se va a realizar la tarea de destruir los recursos tomados por vanta
            if(vanta){
                vanta.destroy()
            }
        }
    },[vanta])//me aseguro que siga funcionando bien si tuviera mas variable use
    return (
        <div className="full" ref={myRefDiv}>
            
        </div>
    )
}

WelcomeScreen.propTypes = {
    children: PropTypes.node,
}

export default WelcomeScreen
