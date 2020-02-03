import React from 'react';

class Form extends React.Component{
    
clearForm = () => {
    document.getElementById("weather-form").reset();
}
    render() {
        return(
            <form id="weather-form" onSubmit={this.props.getWeatherdata}>
                <input type="text" name="city"  placeholder="City..."/>
                <input type="text" name="country" placeholder="Country..."/>
                <button>Get Weather</button>
                <button onClick={ this.clearForm}>Refresh</button>
            </form>
        )
            
     }  
 }
    
export default Form