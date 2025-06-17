import { Link } from "react-router-dom";
const Nav = () => {
  return (
 <nav className="header">
  <div className="container">
    <div className="nav">
      <div className="logo"><img
            width="200"
            src="/images/litlemon-logo.jpg"
            alt="Yellow lemon with green leaves next to the words LITTLE LEMON in bold uppercase letters, logo for a cheerful and welcoming restaurant"
            className="h-8 w-8 inline-block mr-2"
        /></div>
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/booking" className="nav-link">
            Booking
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}
export default Nav;