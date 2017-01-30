import React, {PropTypes} from 'react';
import AuthorListRow from './AuthorListRow';

const AuthorList = ({authors}) => {
  return (
    <table id="authorTable" className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Course Count</th>
        </tr>
      </thead>
      <tbody>
        {authors.map(author => <AuthorListRow author={author} key={author.id}/>)}
      </tbody>
    </table>
  );
};

AuthorList.propTypes = {
  authors: PropTypes.array.isRequired
};

export default AuthorList;
