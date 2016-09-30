/* eslint linebreak-style: ["error", "windows"]*/
import Immutable from 'immutable';

export const TodoState = Immutable.fromJS({
  todos: [
    {
      id: '1',
      text: '2',
      updatedAt: '3',
      completed: false,
    },
  ],
  todo: {
    id: '',
    text: '',
    updatedAt: '',
    completed: false,
  },
});
