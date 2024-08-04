import { InfiniteData, useMutation, useQueryClient } from '@tanstack/react-query';
import { ListMessagesResponse, Message } from '../../../types/messages';
import { useApp } from '../../../providers/AppProvider';

const useCreateMutation = () => {
  const { headers } = useApp();
  const queryClient = useQueryClient();

  const createMessage = async (body: string) => {
    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/messages`, {
      headers,
      method: 'POST',
      body: JSON.stringify({ body }),
    });
    return res.json();
  };
  const { mutate, error, isPending } = useMutation({
    mutationFn: createMessage,
  });
  const execute = (body: string) =>
    mutate(body, {
      onSuccess: (data: Message[]) => {
        queryClient.setQueryData(['messages'], (old: InfiniteData<ListMessagesResponse>) => ({
          ...old,
          pages: [
            {
              ...old.pages[0],
              pages: [...data.reverse(), ...old.pages[0].pages],
            },
            ...old.pages.slice(1),
          ],
        }));
      },
    });

  return {
    execute,
    loading: isPending,
    error: error,
  };
};

export default useCreateMutation;
