import React,{useRef,useEffect,useState} from 'react'
import Clouds from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three'

const useVanta = () =>{
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
    },[vanta])//me aseguro que siga funcionando bien si tuviera mas variable useState

    return myRefDiv
}

export default useVanta