import { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import { getGithubUser, searchGithubUser } from '../apis/github';
import { AutoForm } from '../store';

const NameForm = () => {
  const { suggestions } = useContext(AutoForm.StateContext);
  const dispatch = useContext(AutoForm.DispatchContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    fireSubmit(event.currentTarget.formName.value);
  };

  const fireSubmit = (value) => {
    getGithubUser(value)
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
        onSubmit={handleSubmit}
      >
        <Form.Group controlId="formName">
          <Form.Label>What profile do you want to view?</Form.Label>
          <div className="row ml-1">
            <Form.Control
              required
              className="col-8"
              pattern="^[a-zA-Z\d](?:[a-zA-Z\d]|-(?=[a-zA-Z\d])){0,38}$"
              type="text"
              autoComplete="off"
              size="lg"
              placeholder="Github Username"
              onChange={handleChange}
              onFocus={handleChange}
              onBlur={() => dispatch({ type: AutoForm.CLEAR })}
            />
            <Button className="col-3 ml-2" size="md" variant="primary" type="submit">
              Search
            </Button>
          </div>
          <Form.Control.Feedback type="invalid">
            Invalid username
          </Form.Control.Feedback>
          {
            suggestions.length
              ? (
                <ListGroup className="position-absolute" style={{ zIndex: 1 }}>
                  {suggestions.map((sug) => (
                    <ListGroup.Item
                      action 
                      key={sug}
                      onMouseDown={() => fireSubmit(sug)}
                    >
                      {sug}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              ) : ''
          }
        </Form.Group>
      </Form>
    </Card>
  );
};

export default NameForm;