import React, { Fragment, Component } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


class SushiContainer extends Component  {

  renderSushi = () => {
    return this.props.fourSushi.map(sushi => {
      return < Sushi sushi={sushi} handleClick={this.props.handleClick}/>
    })
  }


  render() {

    return (
      <Fragment>
        <div className="belt">
          {this.renderSushi()}
        <MoreButton handleClick={this.handleClick}/>
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer