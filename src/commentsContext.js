import React, {createContext, useMemo} from 'react';
import {useGetComments} from './useGetComments';

export const CommentsContext = createContext(null);

export const CommentsProvider = ({children}) => {
  const {data, isFetching, refetch} = useGetComments();

  const commentsContext = useMemo(
    () => ({data, isFetching, refetch}),
    [data, isFetching, refetch],
  );

  return (
    <CommentsContext.Provider value={commentsContext}>
      {children}
    </CommentsContext.Provider>
  );
};
