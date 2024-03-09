import * as React from 'react';
import {CommentsContext} from './commentsContext';

export const useComments = () => {
  const context = React.useContext(CommentsContext);
  if (!context) {
    throw new Error('CommentsContext must be within CommentsContextProvider');
  }

  return context;
};
