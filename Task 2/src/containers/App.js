import React, {Component}  from 'react';
import CardList from '../components/CardList';
import Navbar from '../components/Navigation/Navigation';
import Loader from './loader';

class App extends Component{

    constructor(){
        super()
        this.state={
            robots: [],
            isButtonClicked: false
        }
    }

    //function to fetch the data from API
    onButtonSubmit = () => {
        this.setState({isButtonClicked: !this.isButtonClicked})
        const timer = setTimeout(() => {
            fetch('https://reqres.in/api/users?page=1').then(response=> {
            return response.json();
            })
            .then(users=>{
                this.setState({robots: users.data})
            });
        }, 3000);
        return () =>clearTimeout(timer);
    }

    render(){

        const Robots = this.state.robots

        // when the button is not clicked
        if(this.state.robots.length === 0 && this.state.isButtonClicked === false){
            return (
              <>
                <Navbar onButtonSubmit={this.onButtonSubmit}/>
                <h1 className='tc'>Please click on <strong>Get Users</strong> to get all the details</h1>
              </>
            );

        }

        //when the button is clicked and the api is being called
        else if(this.state.robots.length === 0){
            return (
                <>
                  <Navbar onButtonSubmit={this.onButtonSubmit}/>
                  <h1 className='tc'>Loading</h1>
                  <Loader className='loader'></Loader>
                </>
              );
        }

        // data fetched
        else{
            return(
                <>
                  <Navbar onButtonSubmit={this.onButtonSubmit}/>
                  <div className='tc'>
                      <h1>Users Info</h1>
                    <CardList robots={Robots}/>

                  </div>
                 </>
              );
        }

    }

}

export default App;
