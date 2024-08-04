import { InfiniteData, useMutation, useQueryClient } from '@tanstack/react-query';
import { ListMessagesResponse } from '../../../types/messages';
import { useApp } from '../../../providers/AppProvider';

const useDeleteMutation = (onSuccess: () => void) => {
  const { headers } = useApp();
  const queryClient = useQueryClient();

  const deleteMessage = async (messageId: string) => {
    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/messages/${messageId}`, {
      headers,
      method: 'DELETE',
    });
    return res.json();
  };
  const { mutate, error, isPending } = useMutation({
    mutationFn: deleteMessage,
  });
  const execute = (messageId: string) =>
    mutate(messageId, {
      onSuccess: () => {
        queryClient.setQueryData(['messages'], (old: InfiniteData<ListMessagesResponse>) => {
          const updated = {
            ...old,
          };
          updated.pages.forEach(p =>
            p.pages.forEach(m => {
              if (m.id === messageId) {
                m.body = 'This message has been deleted';
              }
            })
          );
          return updated;
        });
        onSuccess();
      },
    });

  return {
    execute,
    loading: isPending,
    error: error,
  };
};

export default useDeleteMutation;
