import React from 'react';

class SearchBar extends React.Component {
    state = { term: 'Search for images...'}


    onFormSubmit = e => { 
        e.preventDefault();
        
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="SearchBar ui segment">
                <form action="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label> <br/>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={e => this.setState({term: e.target.value })} 
                        />  
                    </div>            
                </form>    
            </div>
        )
    }
}

export default SearchBar;