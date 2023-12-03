import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    text: false,
    headingColor: 'heading-white',
    containerColor: 'container-black',
    buttonColor: 'button-white',
  }

  change = () => {
    this.setState(prev => ({text: !prev.text}))
  }

  classname = () => {
    let {text, headingColor, containerColor, buttonColor} = this.state

    if (text) {
      text = 'Dark Mode'
      headingColor = 'heading-black'
      containerColor = 'container-white'
      buttonColor = 'button-black'
      return {text, headingColor, containerColor, buttonColor}
    }
    return {text: 'Light Mode', headingColor, containerColor, buttonColor}
  }

  render() {
    const {text, headingColor, containerColor, buttonColor} = this.classname()

    return (
      <div className="bg-container">
        <div className={containerColor}>
          <h1 className={headingColor}>Click To Change Mode</h1>
          <button className={buttonColor} type="button" onClick={this.change}>
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
