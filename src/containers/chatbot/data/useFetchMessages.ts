import { useInfiniteQuery } from '@tanstack/react-query';
import { ListMessagesResponse, Message } from '../../../types/messages';
import { useApp } from '../../../providers/AppProvider';

const PAGE_SIZE = 10;

// eslint-disable-next-line complexity
const useFetchMessages = () => {
  const { headers } = useApp();

  const fetchProjects = async ({ pageParam }: { pageParam: string }) => {
    const res = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/messages?first=${PAGE_SIZE}&after=${pageParam}`,
      {
        headers,
      }
    );
    return res.json() as Promise<ListMessagesResponse>;
  };
  const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['messages'],
      queryFn: fetchProjects,
      initialPageParam: '',
      getNextPageParam: lastPage =>
        lastPage.pageParams.hasMore ? lastPage.pageParams.cursor : null,
    });

  return {
    messages:
      data?.pages.reduce((p, n) => [...p, ...n.pages], [] as Message[]).reverse() ||
      ([] as Message[]),
    loading: isFetching,
    error: error,
    loadMore: () => !isFetchingNextPage && fetchNextPage(),
    hasMore: hasNextPage,
    loadingMore: isFetchingNextPage,
  };
};

export default useFetchMessages;
