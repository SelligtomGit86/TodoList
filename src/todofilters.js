import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class TodoFilters extends Component {

    constructor(props){
        super(props)
        this.state = {
            etatCheckboxEnCours: false,
            etatCheckboxAFaire: false,
            dateDebut: new Date(),
            dateFin: new Date()
        }
    }
    
    componentDidMount(){
        console.log(this.state.dateDebut.getHours())
    }
    

    UpdateCheckBoxOndoing = () => {
       this.setState(
           {etatCheckboxEnCours: !this.state.etatCheckboxEnCours},
           () =>  this.props.updatefilters(this.state.etatCheckboxEnCours, this.state.etatCheckboxAFaire, this.state.dateDebut, this.state.dateFin)
          )
    }

    UpdateCheckBoxTodo = () => {
        this.setState(
            {etatCheckboxAFaire: !this.state.etatCheckboxAFaire},
            () =>  this.props.updatefilters(this.state.etatCheckboxEnCours, this.state.etatCheckboxAFaire, this.state.dateDebut, this.state.dateFin)
           )
    }



    render(){
        return(
            <div>
                
             




<label htmlFor="todo2">En cours</label>
                   <Checkbox
                   id="todo2"
                   checked={this.state.etatCheckboxEnCours}
                   onChange={ this.UpdateCheckBoxOndoing }
        color="default"
      />

<label htmlFor="ondoing2">A faire</label>
                   <Checkbox
                   id="ondoing2"
                   checked={this.state.etatCheckboxAFaire}

        color="default"
        onChange={ this.UpdateCheckBoxTodo }
        />




<label htmlFor="dateDebut">Date début</label>
<DatePicker id="dateDebut" selected={this.state.dateDebut} onChange={dateD => this.setState({dateDebut: dateD }, this.props.updatefilters(this.state.etatCheckboxEnCours, this.state.etatCheckboxAFaire, dateD, this.state.dateFin ) ) }  
      dateFormat="dd MMMM yyyy"
      />

<label htmlFor="dateFin">Date Fin</label>
<DatePicker id="dateFin" selected={this.state.dateFin} onChange={dateF => this.setState({dateFin: dateF }, this.props.updatefilters(this.state.etatCheckboxEnCours, this.state.etatCheckboxAFaire, this.state.dateDebut, dateF) ) }  
      dateFormat="dd MMMM yyyy"
      />


      


            </div>
        )
    }

}

export default TodoFilters;