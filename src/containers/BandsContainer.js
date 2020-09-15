import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'
import Band from '../components/Band'

class BandsContainer extends Component {

  renderBand = () => this.props.bands.map((band, id) => <Band key={id} band={band} /> )

  render() {
    return(
      <div>
        <BandInput />
        {this.renderBand()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

export default connect(mapStateToProps)(BandsContainer)
