// Import React and React DOM Libraries
import React from 'react';
import ReactDOM from 'react-dom';


// Create a react component
class App extends React.Component {
    render() {

        const buttonText = { text: 'Click Me' };
        const style = { backgroundColor:'blue', color:'white', padding: '10px 20px' }
        const labelText = "Who are you?";

        return ( 
            <div>
                <label className="label" htmlFor="name">
                    { labelText }
                </label>
                <input type="text" id="name" />
                <button style={ style }>
                    { buttonText.text }
                </button>
            </div>
            
        )
    }
}


// Take the react component and show it on the screen
ReactDOM.render(<App />, document.getElementById('root')); 