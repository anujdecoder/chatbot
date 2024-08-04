import React from 'react';
import Input from '../../components/Input';
import { useCreateMutation } from './data';

const Textbox: React.FC = () => {
  const { execute, loading } = useCreateMutation();
  return <Input onSave={execute} loading={loading} />;
};

export default Textbox;
