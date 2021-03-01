import { useContext } from 'react';
import Context from '../AppContext.js';

const NameForm = () => {
  const [form, setForm] = useContext(Context.Form);
  return (
    <div>
      I am the form.
    </div>
  );
};

export default NameForm;