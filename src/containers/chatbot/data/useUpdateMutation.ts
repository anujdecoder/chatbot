import { InfiniteData, useMutation, useQueryClient } from '@tanstack/react-query';
import { ListMessagesResponse, Message } from '../../../types/messages';
import { useApp } from '../../../providers/AppProvider';

const useUpdateMutation = (onSuccess: () => void) => {
  const { headers } = useApp();
  const queryClient = useQueryClient();

  const updateMessage = async (message: Message) => {
    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/messages/${message.id}`, {
      headers,
      method: 'PUT',
      body: JSON.stringify(message),
    });
    return res.json();
  };
  const { mutate, error, isPending } = useMutation({
    mutationFn: updateMessage,
  });
  const execute = (messageId: string, newBody: string) =>
    mutate(
      { id: messageId, body: newBody },
      {
        onSuccess: () => {
          queryClient.setQueryData(['messages'], (old: InfiniteData<ListMessagesResponse>) => {
            const updated = {
              ...old,
            };
            updated.pages.forEach(p =>
              p.pages.forEach(m => {
                if (m.id === messageId) {
                  m.body = newBody;
                }
              })
            );
            return updated;
          });
          onSuccess();
        },
      }
    );

  return {
    execute,
    loading: isPending,
    error: error,
  };
};

export default useUpdateMutation;
