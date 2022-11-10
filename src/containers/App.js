import React, { Component } from "react";
import CardList from "../components/CardList";
// import { robots } from './robots';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';

class App extends Component {

    // we create STATE here
    constructor(){
        // to can write this statment
        super()
        // to make parent access this
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json();
        })
        .then(users => {
            this.setState({robots: users});
        })

    }
    // to make searchbox updated
    onsearchchange = (event) => {
        // searchfield take the searchbox value here
        this.setState({searchfield: event.target.value})
            }

    render() {
        const {robots,searchfield } = this.state;
        // here we used the STATE values
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        });
        return !robots.length ? 
            <div>
                <h1 className="tc ">Loading</h1>
            </div> :

            (
                <div className="tc">
                    <h1 className="f1">Robo Friends</h1>
                    <SearchBox searchChange={this.onsearchchange}/>
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            )
        

    }
}

export default App;