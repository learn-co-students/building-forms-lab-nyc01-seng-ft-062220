import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import Bands from '../components/Bands'
import {connect} from 'react-redux'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands} />
      </div>
    )
  }
}

const msp = state => {
  return{
    bands: state.bands
  }
}

const msd = dispatch => {
  return{
    addBand: (data) => dispatch({type: "ADD_BAND", band: data})
  }
}

export default connect(msp, msd)(BandsContainer)
