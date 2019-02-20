import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          Are You sure you want to do this?
          <h4>Warning</h4>
        </div>
      </ApprovalCard>

      <ApprovalCard >
        <CommentDetail
          author="Sam"
          timeAgo='Today at 2:30PM'
          avatar={faker.image.avatar()}
          content="Cool beans"/>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo='Today at 6:09AM'
          avatar={faker.image.avatar()}
          content="Vue is the best framework"/>
      </ ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo='Today at 12:40PM'
          avatar={faker.image.avatar()}
          content="Vue > React > Angular"/>
      </ApprovalCard>
    </div>
  );
};

ReactDom.render(<App />, document.querySelector('#root'));
