import { useEffect, useState } from 'react';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({ username: 'luisrangelc', email: 'luisrangelc@google.com' });
  const { username, email } = formState;
  const onInputChange = (event) => {
    const { name, value } = event.target;

    setFormState({ ...formState, [name]: value });
  };

  useEffect(() => {
    console.log('first time useEffect called!');
  }, []);

  useEffect(() => {
    console.log('formState - useEffect called!');
  }, [formState]);

  useEffect(() => {
    console.log('formState.email - useEffect called!');
  }, [formState.email]);

  useEffect(() => {
    console.log('email - useEffect called!');
  }, [email]);

  useEffect(() => {
    console.log('useEffect called!');
  });

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />

      <input type="text" className="form-control" placeholder="Username" name="username" value={username} onChange={onInputChange} />
      <input type="email" className="form-control mt-2" placeholder="user@google.com" name="email" value={email} onChange={onInputChange} />
    </>
  );
};
