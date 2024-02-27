import './index.css'
import {Component} from 'react'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">FAQs</h1>
          <ul className="faqs-container">
            {faqsList.map(eachQuestion => (
              <FaqItem faqDetails={eachQuestion} key={eachQuestion.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
