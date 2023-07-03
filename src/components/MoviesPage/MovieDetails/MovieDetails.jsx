import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import toast from 'react-hot-toast';

import { Input, Form, Button } from './MovieDetails.styled';

export default function MovieDetails() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSearch = searchParams.get('query');
  const [value, setValue] = useState(currentSearch ?? '');

  const handleInputChange = e => {
    setValue(e.currentTarget.value.toLowerCase());
  };

  const searchQuery = name => {
    setSearchParams({ query: name });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!value) {
      toast.error('Bы ничего не ввели');
      return;
    }
    searchQuery(value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        value={value}
        onChange={handleInputChange}
        autoComplete="off"
      />

      <Button type="submit">Search</Button>
    </Form>
  );
}
