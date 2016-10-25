import React from 'react';
import GetWeather from '../utilities/weatherApi';
var PropTypes = React.PropTypes
var styles = {
  buttons: {
    backgroundColor:"#1bacbd",
    width:"100%"
  }
};

function Button(props){
  return(
    <button
      className = "waves-effect waves-light btn"
      type="submit"
      name="action"
      onClick={props.onCityInput}
      style={styles.buttons}>
      {props.children}
      </button>
  )
};

const Input = React.createClass({
  add: function(event){
    //listens for enter key(keyCode 13)
    if (event.keyCode === 13){
      return this.props.onCityInput()
    }
  },
  render: function(){
    return (
      <input
      className="input-field"
      type="text"
      onChange = {this.props.onUpdateCity}
      placeholder = "Enter a city"
      value = {this.props.city}
      onKeyDown = {this.add} />
    )
  }
});

//Search will check for search's boolean value. If there is an
//improper entry, it will ask for another input
function Search(props){
  if(props.search === false){
    return<h6> Please enter a city below</h6>
  } else{
    return <div></div>
  }
};
//onCityInput(invalid input check) run twice for button click/return key trigger
function CityInput(props){
  return (
    <div>
      <Search search={props.search} />
      <Input
        onUpdateCity = {props.onUpdateCity}
        onCityInput = {props.onCityInput}
        city = {props.city}/>
      <Button
        onCityInput = {props.onCityInput}>
        Retrieve Current Weather
      </Button>
    </div>
  )
};

CityInput.PropTypes = {
  search: PropTypes.bool.isRequired,
  onCityInput: PropTypes.func.isRequired,
  onUpdateCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
};

module.exports = CityInput;