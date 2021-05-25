import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';


class TodoStats extends Component {

    constructor(props){
        super(props);
    }

      

    render(){
        return(
            <div className='header'>
      <h1 className='title'> Statistiques : </h1>

      <p> Nombre de tâches à faire : {this.props.tachesAFaire} </p>
      <p> Nombre de tâches en cours : {this.props.tachesEnCours} </p>

      

      <Doughnut data={ {

labels: ['Tâches en cours', 'Tâches à faire'],
datasets: [
  {
    label: '# of Votes',
    data: [this.props.tachesAFaire, this.props.tachesEnCours],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
    ],
    borderWidth: 1,
  },
],
} }  onChange={this.changeHandler}/>


    </div>


        )
    }


}

export default TodoStats;