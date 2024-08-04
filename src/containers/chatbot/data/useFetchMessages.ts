import { useInfiniteQuery } from '@tanstack/react-query';
import { ListMessagesResponse } from '../../../types/messages';
import { useApp } from '../../../providers/AppProvider';

const PAGE_SIZE = 10;

const useFetchMessages = () => {
  const { headers } = useApp();

  const fetchProjects = async ({ pageParam }: { pageParam: string }) => {
    const res = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/messages?first=${PAGE_SIZE}&after=${pageParam}`,
      {
        headers,
      }
    );
    const json = await res.json();
    return JSON.parse(json) as ListMessagesResponse;
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
    messages: data,
    loading: isFetching,
    error: error,
    loadMore: () => !isFetchingNextPage && fetchNextPage(),
    hasMore: hasNextPage,
    loadingMore: isFetchingNextPage,
  };
};

export default useFetchMessages;
