import React from 'react'
import { useDispatch } from 'react-redux'
import { signup } from 'redux/auth/auth-operations';

export default function RergisterForm() {
    const dispatch = useDispatch();

    const handleSubmit = evt => {
        evt.preventDefault();
        const form = evt.currentTarget;
        dispatch(
            signup({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,

            })
        );
        // form.reset();
    };
    
    return (
      <form autoComplete='on ' onSubmit={handleSubmit}>
            <label htmlFor="">
                Username
                <input type="text" name='name' />
            </label>
            <label htmlFor="">
                Email
                <input type="email" name='email' />
            </label>
            <label htmlFor="">
                Password
                <input type="password" name='password' />
            </label>
            <button type='submit'>Rergister</button>
      </form>
  )
}
