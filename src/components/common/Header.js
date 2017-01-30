import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading, courseCount, authorCount}) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/courses" activeClassName="active">Courses</Link>
      {" "}<span id="course-count">({courseCount})</span>
      {" | "}
      <Link to="/authors" activeClassName="active">Authors</Link>
      {" "}<span id="author-count">({authorCount})</span>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
      {loading && <LoadingDots interval={100} dots={20}/>}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired,
  courseCount: PropTypes.number.isRequired,
  authorCount: PropTypes.number.isRequired
};

export default Header;
