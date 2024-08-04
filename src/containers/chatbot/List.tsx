import React from 'react';
import { useFetchMessages } from './data';

import ListLoader from '../../components/ListLoader';
import Received from '../../components/Messages/Received';
import Sent from '../../components/Messages/Sent';
import { ListContainer, StyledLoginButton } from './styles';
import { Typography } from '@mui/material';

// eslint-disable-next-line complexity
const List: React.FC = () => {
  const { loading, messages, hasMore, loadMore, loadingMore } = useFetchMessages();
  if (loading && !loadingMore) {
    return <ListLoader />;
  }

  return (
    <ListContainer className="messages">
      {messages.map(m =>
        m.userSent ? <Sent key={m.id} message={m} /> : <Received key={m.id} message={m} />
      )}
      {hasMore && loadingMore && <ListLoader />}
      {hasMore && !loadingMore && (
        <StyledLoginButton onClick={loadMore}>
          <Typography>Load more</Typography>
        </StyledLoginButton>
      )}
    </ListContainer>
  );
};

export default List;
