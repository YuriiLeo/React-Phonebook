import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';

export default function LoginForm() {
    const dispatch = useDispatch();

    const handleSubmit = evt => {
        evt.preventDefault();
        const form = evt.currentTarget;
        dispatch(
            logIn({
                email: form.elements.email.value,
                password: form.elements.password.value,

            })
        );
        // form.reset();
    };
    return (
      <form autoComplete='off' onSubmit={handleSubmit}>
            <label htmlFor="">
                Email
                <input type="email" name='email' />
            </label>
            <label htmlFor="">
                Password
                <input type="password" name='password' />
            </label>
            <button type='submit'>Login</button>
      </form>
  )
}
