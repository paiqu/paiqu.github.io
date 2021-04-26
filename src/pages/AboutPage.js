import { Link } from 'react-router-dom';

export default function AboutPage(props) {
  return (
    <div>
      <h1>About PAGE!</h1>
      <Link to="/">
        Back to Home Page
      </Link>
    </div>
  )
}