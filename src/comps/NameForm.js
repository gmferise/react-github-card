import { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { getGithubUser, searchGithubUser } from '../apis/github';
import { AutoForm } from '../store';

const NameForm = () => {
  const { search, suggestions } = useContext(AutoForm.StateContext);
  const dispatch = useContext(AutoForm.DispatchContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    getGithubUser(event.currentTarget.formName.value)
      .then((response) => dispatch({ type: AutoForm.SUBMIT, payload: response}));
  };

  const handleChange = (event) => {
    searchGithubUser(event.target.value)
      .then((response) => dispatch({ type: AutoForm.SUGGEST, payload: { suggestions: response, search: event.target.value } }))
  };

  return (
    <Card body>
      <Form
        noValidate
        onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>What profile do you want to view?</Form.Label>
          <Form.Control
            required
            pattern="^[a-zA-Z\d](?:[a-zA-Z\d]|-(?=[a-zA-Z\d])){0,38}$"
            type="text"
            autoComplete="off"
            size="lg"
            placeholder="Github Username"
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Invalid username
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
    </Card>
  );
};

export default NameForm;