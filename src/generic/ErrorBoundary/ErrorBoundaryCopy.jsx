import React, {Component} from 'react'

class ErrorBoundary extends Component{
 
   constructor(props){
      super(props)
      this.state = {
          activo:false
      }
   }

   estaActivo = () =>{
        return this.state.activo ? "Activo" : "No activo"
   }

   onClickHandler = () => {
       //setState
        this.setState({activo: true})
   }

   componentDidMount() {
       //query servidor
       //primera renderizacion se ejecuta esta funcion por unica vez 
       console.log("El componente se ha montado")
   }

   componentDidUpdate(prevProps, prevState) {
       //luego de la primera renderizacion se ejecuta esta funcion de actualizacion
       console.log("estadoPrevio", prevState.activo)
       console.log("estado nuevo ", this.state.activo)
       console.log("Componente se ha actualizado")
   }

   //metodo de cleanup o limpieza
   componentWillUnmount() {
       //efecto limpieza
       //se ejecuta cuando nos dirigimos a otra parte 
       console.log("el componente se ha desmontado")
   }
    render(){
       return (
               <div> 
                   <button onClick={this.onClickHandler}> Activar</button>
                   <h1>
                     Error Boundary {this.props.saludo}
                     {
                       this.estaActivo()
                     }
                    </h1>
                </div>
                )
   } 
}

export default ErrorBoundary
