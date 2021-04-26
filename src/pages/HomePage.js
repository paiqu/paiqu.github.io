import { Link } from 'react-router-dom';

export default function HomePage(props) {
  return (
    <div>
      <h1>HOME PAGE!</h1>
      <Link to="/about">
        About Page
      </Link>
    </div>
  )
}