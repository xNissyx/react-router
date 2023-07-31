import { Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './routes/home';
import About from './routes/about';
import Contact from './routes/contact';
import NoMatch from './routes/nomatch';
import Posts from './routes/posts';
import './App.css';

function App() {
  return (
    <div>
      <h1>Hello React Router v6</h1>
      <ul>
        <li>
          <NavLink style={({ isActive }) => (isActive ? {color: "blue"} : undefined)} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : undefined)}
            to="/posts"
          >
            Posts
          </NavLink>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact message="Hello Contact" />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;