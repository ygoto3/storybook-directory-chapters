import React from 'react'; 
import { Button } from '../../atoms/Button';
import { TextBox } from '../../atoms/TextBox';

export const SearchForm = ({ label = 'Search', onSubmit }) => (
  <form>
    <TextBox placeholder='keywords...'></TextBox>
    <Button>{label}</Button>
  </form>
);
