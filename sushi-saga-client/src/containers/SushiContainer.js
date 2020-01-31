import React, { Fragment, Component } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


class SushiContainer extends Component  {

  renderSushi = () => {
    return this.props.fourSushi.map(sushi => {
      return < Sushi sushi={sushi} onSushiClick={this.props.onSushiClick}/>
    })
  }


  render() {

    return (
      <Fragment>
        <div className="belt">
          {this.renderSushi()}
        <MoreButton onGetFourSushi={this.props.onGetFourSushi}/>
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer