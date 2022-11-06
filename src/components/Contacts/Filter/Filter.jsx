import React from 'react';
import { nanoid } from 'nanoid';
import { Input } from './Filter.styled';
import { selectFilter } from 'redux/filter/filterSelectors';
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from 'redux/filter/filterSlice';

export default function Filter() {
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();    
    const filterId = nanoid();
    
  const handleChange = (evt) => {
      const { value } = evt.target;
      dispatch(setFilter(value));
    }

  return (
      <div>
          <label htmlFor={filterId}>Find contacts by name</label>
            <Input
                id={filterId}
                type="text"
                name="filter"
                onChange={handleChange}
                value={filter} />
     </div>
    )
}
