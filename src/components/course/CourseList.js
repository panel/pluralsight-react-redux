import React, {PropTypes} from 'react';
import CourseListRow from './CourseListRow';

const CourseList = ({courses}) => {
    const sortedCourses = [...courses].sort((a, b) => a.title > b.title);
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Length</th>
                </tr>
            </thead>
            <tbody>
                {sortedCourses.map(course =>
                    <CourseListRow key={course.id} course={course} />
                )}
            </tbody>
        </table>
    );
};

CourseList.propTypes = {
    courses : PropTypes.array.isRequired
};

export default CourseList;
