import React, { Component } from 'react';
import {TextField, Button} from '@material-ui/core'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class TodoForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            compteur: this.props.compteur,
            titre: "",
            description: "",
            status: "a faire",
            date_jour: new Date()
        }
    }
    
    ajoutertache(e){
        e.preventDefault()
        console.log("tache dans todoform.js",  this.state) // affiche l'état
        this.props.ajouterTableau(this.state.titre, this.state.description, this.state.status, this.state.date_jour)
        
        this.setState({titre: "", description: "",status: "a faire",date_jour: new Date()})

    }




    render(){
        return(
            <div>
                <h3> Nouvelle tâche </h3>
                <form onSubmit={this.ajoutertache.bind(this)}>

                        
                        <TextField label="Titre de la tâche" value={this.state.titre} onChange={(e) => this.setState({titre: e.target.value}) } />
                        <TextField label="Description de la tâche" value={this.state.description} onChange={(e) => this.setState({description: e.target.value}) } />


                        <TextField
                            label="Status"
                            type="date"
                            value={this.state.status}
                            onChange={(e) => this.setState({status: e.target.value})}
                        />

                      

                        <DatePicker selected={this.state.date_jour} onChange={date => this.setState({date_jour: date }) }  
                            dateFormat="dd MMMM yyyy"
                            />



                        <Button type="submit" variant="contained" color="primary">Ajouter</Button>

                </form>

            </div>
        )
    }


}

export default TodoForm;