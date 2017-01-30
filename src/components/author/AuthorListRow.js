import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const AuthorListRow = ({author}) => {
  return (
    <tr className="authorRow">
      <td><Link to={'/author/' + author.id}>{author.firstName} {author.lastName}</Link></td>
      <td>{author.courseCount}</td>
    </tr>
  );
};

AuthorListRow.propTypes = {
  author: PropTypes.object.isRequired
};

export default AuthorListRow;
