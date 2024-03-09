import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Comments} from './src/comments';
import {CommentsProvider} from './src/commentsContext';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CommentsProvider>
        <Comments />
      </CommentsProvider>
    </QueryClientProvider>
  );
}

export default App;
