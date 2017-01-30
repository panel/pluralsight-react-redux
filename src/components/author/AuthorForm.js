import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const AuthorForm = ({author, onSave, onChange, onDelete, loading, deleting, errors}) => {
    return (
        <form>
            <h1>Manage Author <small><a
                href="#"
                id="delete-button"
                disable={loading || deleting}
                onClick={onDelete}
            >{deleting ? 'Deleting...' : 'Delete'}</a></small></h1>
            <TextInput
                name="firstName"
                label="First Name"
                value={author.firstName}
                onChange={onChange}
                error={errors.title} />

            <TextInput
                name="lastName"
                label="Last Name"
                value={author.lastName}
                onChange={onChange}
                error={errors.category} />

            <input
                type="submit"
                disable={loading || deleting}
                value={loading ? 'Saving...' : 'Save'}
                className="btn btn-primary"
                onClick={onSave} />
        </form>
    );
};

AuthorForm.propTypes = {
    author: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onDelete: React.PropTypes.func.isRequired,
    loading: React.PropTypes.bool,
    deleting: React.PropTypes.bool,
    errors: React.PropTypes.object
};

export default AuthorForm;
