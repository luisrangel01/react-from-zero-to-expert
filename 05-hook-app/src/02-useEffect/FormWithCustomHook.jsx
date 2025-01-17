import { useEffect, useState } from 'react';

import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {

  const defaultForm = { username: '', email: '', password: '' }
  const { formState, onInputChange, onResetForm } = useForm(defaultForm)

  const { username, email, password } = formState;

  return (
    <>
      <h1>Formulario con Custom Hook</h1>
      <hr />

      <input type="text" className="form-control" placeholder="Username" name="username" value={username} onChange={onInputChange} />
      <input type="email" className="form-control mt-2" placeholder="user@google.com" name="email" value={email} onChange={onInputChange} />
      <input type="password" className="form-control mt-2" placeholder="password" name="password" value={password} onChange={onInputChange} />

      <button className='btn btn-primary mt-2' onClick={onResetForm}>Limpiar</button>
    </>
  );
};
