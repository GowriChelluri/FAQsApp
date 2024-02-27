import './index.css'
import {Component} from 'react'

class FaqItem extends Component {
  state = {isActive: false}

  onClickButton = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  renderAnswer = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    const {isActive} = this.state
    if (isActive) {
      return (
        <div className="each-ans-container">
          <hr />
          <p className="ans">{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {faqDetails} = this.props
    const {questionText, id} = faqDetails
    const {isActive} = this.state
    const imgUrl = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const altText = isActive ? 'minus' : 'plus'

    return (
      <li>
        <div className="each-faq-container">
          <div className="question-container">
            <h1 className="question">{questionText}</h1>
            <button type="button" className="btn" onClick={this.onClickButton}>
              <img src={imgUrl} alt={altText} />
            </button>
          </div>
          {this.renderAnswer()}
        </div>
      </li>
    )
  }
}
export default FaqItem
