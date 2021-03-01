import { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Context from '../AppContext.js';

const NameForm = () => {
  const [form, setForm] = useContext(Context.Form);
  const [validated, showValidation] = useState(false);

  const handleChange = (event) => {
    showValidation(true);
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity()) {
      setForm({
        name: form.formName.value,
      });
    }
  };

  return (
    <Card body>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
          Submit
        </Button>
      </Form>
    </Card>
  );
};

export default NameForm;