import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo='Today at 2:30PM'
        avatar={faker.image.avatar()}
        content="Cool beans"/>
      <CommentDetail
        author="Jane"
        timeAgo='Today at 6:09AM'
        avatar={faker.image.avatar()}
        content="Vue is the best framework"/>
      <CommentDetail
        author="Alex"
        timeAgo='Today at 12:40PM'
        avatar={faker.image.avatar()}
        content="Vue > React > Angular"/>
    </div>
  );
};

ReactDom.render(<App />, document.querySelector('#root'));
