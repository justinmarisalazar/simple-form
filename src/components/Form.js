import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: '',
            gender: '',
            registeredVoter: false
        };
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]:
            e.target.type === "checkbox" ? e.target.checked : e.target.value
        });
    };

    submitHandler = e => {
        e.preventDefault();
        alert(`
            Name: ${this.state.name}\n
            Gender: ${this.state.gender}\n
            Registered Voter: ${this.state.registeredVoter}
        `);
    }
    
    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div>
                    <label>Name: </label>
                    <input type="text" name="name" value={this.state.name} onChange={this.changeHandler} />
                </div>
                <div>
                    <label>Gender: </label>
                    <select name="gender" value={this.state.gender} onChange={this.changeHandler}>
                        <option>Choose Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div>
                    <label>
                        Registered Voter: 
                        <input 
                            type="checkbox"
                            name="registeredVoter"
                            checked={this.state.registeredVoter}
                            onChange={this.changeHandler}>
                        </input>
                    </label>
                    
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    }
}

export default Form
