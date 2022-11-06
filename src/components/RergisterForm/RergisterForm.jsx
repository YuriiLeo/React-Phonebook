import React from 'react'
import { useDispatch } from 'react-redux'
import { signup } from 'redux/auth/authOperations';

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
                <input type="text"
                    name="name"
                    placeholder="Enter user name"
                />
            </label>
            <label htmlFor="">
                Email
                <input type="email"
                    name='email'
                    placeholder="Enter user email"
                />
            </label>
            <label htmlFor="">
                Password
                <input type="password"
                    name='password'
                    placeholder="Enter user password (min 7 symbols)"
                />
            </label>
            <button type='submit'>Rergister</button>
      </form>
  )
}
