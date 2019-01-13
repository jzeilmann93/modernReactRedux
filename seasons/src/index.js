import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

class App extends React.Component {
    state = { lat: null, err: null } 

    componentDidMount = () => {
        window.navigator.geolocation.getCurrentPosition(
            position =>  this.setState({lat : position.coords.latitude}),
            err => this.setState({err: err.message})
        );
    }

    renderContent = () => {
        if (this.state.err && !this.state.lat) {
            return <div>Error: {this.state.err}</div>;
        }
        if (!this.state.err && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        }
        return <Spinner message="Please accept location request" />;
    }


    render() {
        return (
            <div className="wrapper">
                {this.renderContent()}
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));  