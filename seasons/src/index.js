import React from 'react'
import ReactDom from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from "./Spinner"

class App extends React.Component{
  // constructor(props){
  //   super(props);
  //   this.state = {lat: null,
  //     errorMessage:''}; // only time we do a direct assignment to state
  // }

  state = {lat:null, errorMessage: ''};

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position =>  this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  renderContent(){
    if(this.state.errorMessage && !this.state.lat){
      return <div> Error: {this.state.errorMessage}</div>
    }

    if(!this.state.errorMessage && this.state.lat){
      return <SeasonDisplay lat={this.state.lat}/>
    }
    return <Spinner message="Accept Location Request"/>
  }

  render() {
    return(
      <div className="border red">
        {this.renderContent()}
      </div>
    );
  }
}

ReactDom.render(<App/>, document.querySelector('#root'));
