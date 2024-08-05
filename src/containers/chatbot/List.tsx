import React from 'react';
import { useFetchMessages } from './data';

import ListLoader from '../../components/ListLoader';
import Received from '../../components/Messages/Received';
import Sent from '../../components/Messages/Sent';
import { ListContainer, StyledLoginButton } from './styles';
import { Typography } from '@mui/material';
import { Message } from '../../types/messages';
import DeleteMessage from './DeleteMessage';
import UpdateMessage from './UpdateMessage';
import ErrorSnackbar from '../../components/Snackbar';

enum ActionType {
  Edit = 'EDIT',
  Delete = 'DELETE',
}
interface Action {
  message: Message;
  type: ActionType;
}

// eslint-disable-next-line complexity
const List: React.FC = () => {
  const { loading, messages, hasMore, loadMore, loadingMore, error } = useFetchMessages();
  const [action, setAction] = React.useState<Action | null>(null),
    clearSelection = () => setAction(null),
    onDelete = (m: Message) => setAction({ message: m, type: ActionType.Delete }),
    onEdit = (m: Message) => setAction({ message: m, type: ActionType.Edit });

  if (loading && !loadingMore) {
    return <ListLoader />;
  }

  return (
    <>
      <ListContainer className="messages">
        {messages.map((m, index) =>
          m.userSent ? (
            <Sent key={m.id} message={m} onEdit={onEdit} onDelete={onDelete} index={index} />
          ) : (
            <Received key={m.id} message={m} />
          )
        )}
        {hasMore && loadingMore && <ListLoader />}
        {hasMore && !loadingMore && (
          <StyledLoginButton onClick={loadMore}>
            <Typography>Load more</Typography>
          </StyledLoginButton>
        )}
      </ListContainer>
      {action?.type === ActionType.Delete && (
        <DeleteMessage message={action.message} clearSelection={clearSelection} />
      )}
      {action?.type === ActionType.Edit && (
        <UpdateMessage message={action.message} clearSelection={clearSelection} />
      )}
      <ErrorSnackbar error={error} />
    </>
  );
};

export default List;
