import { Link } from 'react-router-dom';

export default function HomePage(props) {
  return (
    <div>
      <h1>Home PAGE!</h1>
      <Link to="/about">
        Go to About Page
      </Link>
    </div>
  )
}