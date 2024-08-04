import React from 'react';
import { useFetchMessages } from './data';

import ListLoader from '../../components/ListLoader';

const List: React.FC = () => {
  const { loading } = useFetchMessages();
  if (loading) {
    return <ListLoader />;
  }
  return <></>;
};

export default List;
