import React, { Component } from 'react';
import './App.css';
import TodoFilters from './todofilters';
import TodoForm from './todoform';
import TodoList from './todolist';
import TodoStats from './todostats';

class TodoApp extends Component{
    constructor(props){
        super(props);
        this.state = {
            valeur: "valeurdetest",
            compteur: 3,
            taches: [ {id: 1, titre: "tache1", description: "premiere tache", status: "en cours",date: new Date()},  {id: 2, titre: "tache2", description: "deuxieme tache", status: "en cours",date: new Date()}],
            tableauAafficher: [],
            checkBoxEtat1: false,
            checkBoxEtat2: false,
            listeFiltres: []
        }
    }

    componentDidMount(){
      this.setState({tableauAafficher: this.state.taches})
    }

  

    maFonction = (text1, text2, text3, text4) => {
        const NouvelleTodo =
        {
            id: this.state.compteur,
            titre: text1,
            description: text2,
            status: text3,
            date: text4
        }
        console.log(NouvelleTodo)
        this.setState({compteur: this.state.compteur + 1})
        this.setState({taches: [...this.state.taches, NouvelleTodo]})

        if(!this.state.checkBoxEtat1){ 
          console.log("oui")
          this.setState({tableauAafficher: [...this.state.taches, NouvelleTodo]})
        }else if(this.state.checkBoxEtat1 ){
          this.setState({tableauAafficher: [...this.state.tableauAafficher, NouvelleTodo]})
        }
       

    }

    supprimerTache = (id_tache) => {
      //console.log(id_tache)
       const items = this.state.taches.filter(item => item.id !== id_tache)
       const items2 = this.state.tableauAafficher.filter(item => item.id !== id_tache)
       this.setState({ taches: items }, console.log(items));
       this.setState({ tableauAafficher: items2 }, console.log(items2));

     }


     
      
      updateListeFiltres = (FiltreEnCours, FiltreAFaire, dateD, dateF) => {
        //console.log("filtre en cours:", FiltreEnCours)
        //console.log("filtre a faire:", FiltreAFaire)
       // console.log("dateD:", dateD)
        //console.log("dateF:", dateF)
        this.setState({listeFiltres: [FiltreEnCours, FiltreAFaire, dateD, dateF]}, () => console.log(this.state.listeFiltres))
      }


  render(){
    return (
      <div className="App">
            <TodoFilters updatefilters={this.updateListeFiltres} />
            <TodoForm ajouterTableau={this.maFonction} compteur={this.state.compteur}/>
            <TodoList filtres={this.state.listeFiltres} tableau={this.state.taches} supprimerTache={this.supprimerTache}/>
            <TodoStats tachesAFaire={this.state.taches.filter(item => item.status === "a faire").length} tachesEnCours={this.state.taches.filter(item => item.status === "en cours").length}/>
      </div>
    );
  }
}

export default TodoApp;
