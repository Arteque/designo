import { Link } from "react-router-dom"
const CallCard = () => {
  return (
    <div className="call-card">
        <div className="call-card__container bg-call-100 rounded">
            <div className="call-card__header">
                <h2 className="text-light-100 heading__lg">
                    Let's talk about your project
                </h2>
            </div>
            <div className="call-card__body">
                <p className="text-light-100 margin-block-end">
                    Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.
                </p>
            </div>
            <div className="call-card__footer">
                <Link to="/contact" className="btn -full padding rounded">
                    Get in touch
                </Link>
            </div>
        </div>
    </div>
  )
}

export default CallCard