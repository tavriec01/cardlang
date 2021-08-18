import React, {Component} from 'react';

export default class Cards extends Component {
    constructor(props){
        super(props)

        this.state = {
            input: '',
            items: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }


    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            input: this.state.input,
            items: [...this.state.items, this.state.input]
        });
    }

    render() {

        return (
            <div className="cardpage">
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <div className="input">
                            URL:
                            <input/>
                        </div>
                        <div className="input">
                            Word:
                            <input value={this.state.input} onChange={this.handleChange}/>
                        </div>
                        <div className="input">
                            <button type="submit">Add</button>
                        </div>
                    </form>
                </div>
                <div className="card_table">
                    <div className="card">
                        <p>Type your image URL and Word, then click on button Add</p> 
                    </div>                    
                    {this.state.items.map((item, index) => (
                        <div className="card" key={index}> <p>{item}</p> </div>
                    ))}
                </div>
            </div>
        );
    }
}