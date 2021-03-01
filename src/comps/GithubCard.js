import { useState, useContext } from 'react';
import Context from '../AppContext.js';

const GithubCard = () => {
  const [visible, setVisibility] = useState(false);
  const [form, setForm] = useContext(Context.Form);
  return (
    <div>
      I am the card. {JSON.stringify(form)}
    </div>
  );
};

export default GithubCard;