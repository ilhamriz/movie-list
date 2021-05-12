import "./Header.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Search from "../molecules/Search";
import searchMovies from "../store/actions/searchMovies";
import { useHistory } from 'react-router';
import { IconBar, IconClose } from "../atoms/Icons";

function Header() {
  const { navLinks } = useSelector(state => state);

  const [search, setSearch] = useState("");
  const [isMenu, setIsMenu] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [])
  
  const handleScroll = () => {
    const scrollLength = document.documentElement.scrollTop;
    scrollLength > 0 ? setIsScroll(true) : setIsScroll(false);
  }

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: 'LOADING_TRUE'});
    dispatch(searchMovies(search));
    history.push('/search', {key: search})
    setSearch("");
    setIsMenu(false);
  };

  return (
    <header>
      <nav className={isScroll ? 'active' : ''}>
        <div className="navbar container">
          <Link to="/" className="nav-logo" onClick={() => setIsMenu(false)}>
            FinProH8
          </Link>
          <div className="nav-icon" onClick={() => setIsMenu(!isMenu)}>
            {isMenu ? IconClose : IconBar}
          </div>
          <div className={isMenu ? "nav-menu active" : 'nav-menu'}>
            <ul className="nav-item">
              {navLinks.map((navLink, idx) => (
                <p key={idx} className="nav-link" disabled>
                  {navLink}
                </p>
              ))}
            </ul>
            <Search
              search={search}
              setSearch={setSearch}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
