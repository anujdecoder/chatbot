import React from 'react';
import Input from '../../components/Input';
import { useCreateMutation } from './data';
import ErrorSnackbar from '../../components/Snackbar';

const Textbox: React.FC = () => {
  const { execute, loading, error } = useCreateMutation();

  return (
    <>
      <Input onSave={execute} loading={loading} />
      <ErrorSnackbar error={error} />
    </>
  );
};

export default Textbox;
