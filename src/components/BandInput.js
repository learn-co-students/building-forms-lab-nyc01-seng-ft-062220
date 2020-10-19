// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  
  state = {
    name: ""
  }

  clickHandler = (e) => {
    this.setState({name: e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault()
    
    this.props.addBand(this.state)
    this.setState({name: ""})
  }
  
  
  render() {
    return(
      <div>
        <form onSubmit={this.submitHandler}>
          <p>
            <label>Add Band</label>
            <input type="text" onChange={this.clickHandler} value={this.state.name}/>
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
