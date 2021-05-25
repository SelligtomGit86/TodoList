import React, { Component } from 'react';
import Todo from './todo';

class TodoList extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log(this.props.tableau)

    }

    afficheTab = () => {


        if(this.props.filtres[0]){ // si le filtre "en cours" est coché
            return ( 
                this.props.tableau.filter(item => item.status === "en cours").map((item) => {



                  //  console.log("dd",item.date)
                //    console.log("zz",this.props)

                console.log("date de début: ", this.props.filtres[2])
                console.log("date de la todo", item.date)

                    if(item.date >= this.props.filtres[2] ){
                        console.log("date du tableau : ", this.props.filtres[2])

                        console.log("oui dans la date")
                    }

                    

                    if(item.date >= this.props.tableau[2] && item.date <= this.props.tableau[3]){
                            
                        console.log("oui dans la date")
                    }
                        
                    return ( 
                        <Todo element={item} supprimer={this.props.supprimerTache}/> 
                           )
                   })
            )
        }else if(this.props.filtres[1]){
            return ( 

                this.props.tableau.filter(item => item.status === "a faire").map((item) => {
                        
                    return ( 
                        <Todo element={item} supprimer={this.props.supprimerTache}/> 
                           )
                   })

            )
        }else{
            return ( 

                this.props.tableau.map((item) => {
                        
                    return ( 
                        <Todo element={item} supprimer={this.props.supprimerTache}/> 
                           )
                   })

             )
        }
    }

    NombreTaches = () => {

        if(this.props.tableau.length > 0){
            return(
                <h3>Liste des tâches : ({this.props.tableau.length})</h3>

            )
        }else{
            return(
                <h3>Aucune tâche en cours </h3>
            )
        }
        
    }


    render(){
        return(
            <div>
                 <this.NombreTaches />

         
            
            <this.afficheTab />

                
            </div>
        )
    }


}

export default TodoList;