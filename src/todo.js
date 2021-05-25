import React, { Component } from 'react';
import {Button} from '@material-ui/core'

class Todo extends Component {

    constructor(props){
        super(props)
    } 
    
    componentDidMount(){
        console.log(this.props.element)
    }

    DefinirCouleurStatus(status){
       
        if(status === "en cours"){
            return <p  style={{color: "yellow"}}> {status} </p>
        }else if(status === "a faire"){
            return  <p  style={{color: "red"}}> {status} </p>
        }
    }


  



    render(){
        return(
            <div>
                <h3>compteur  : {this.props.element.id}</h3>
                <h3>{this.props.element.titre}</h3>
                <p>{this.props.element.description}</p>
                <p>{this.props.element.status}</p>

                <p> date1 {this.props.element.date.toString()} </p> 

                <p> jour : {this.props.element.date.getDate()}</p>

                <p> mois : {this.props.element.date.getMonth() + 1}</p>

                <p> année : {this.props.element.date.getFullYear()}</p>

                {this.DefinirCouleurStatus(this.props.element)}

                <Button variant="contained" color="secondary" onClick={this.props.supprimer.bind(this, this.props.element.id)}>  Supprimer  </Button>



            </div>
        )
    }

}

export default Todo;