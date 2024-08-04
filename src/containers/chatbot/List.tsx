import React from 'react';
import { useFetchMessages } from './data';

import ListLoader from '../../components/ListLoader';
import Received from '../../components/Messages/Received';
import Sent from '../../components/Messages/Sent';

const List: React.FC = () => {
  const { loading, messages } = useFetchMessages();
  if (loading) {
    return <ListLoader />;
  }

  return (
    <div className="messages">
      {messages.map(m =>
        m.userSent ? <Sent key={m.id} message={m} /> : <Received key={m.id} message={m} />
      )}
    </div>
  );
};

export default List;
