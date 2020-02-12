import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    avatar={ Faker.image.avatar() }
                    author={ Faker.name.firstName() }
                    timeAgo="Today at 4:00PM"
                    content={ Faker.lorem.text() }
                    
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    avatar={ Faker.image.avatar() }
                    author={ Faker.name.firstName() }
                    timeAgo="Today at 5:00PM" 
                    content={ Faker.lorem.text() }
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    avatar={ Faker.image.avatar() }
                    author={ Faker.name.firstName() }
                    timeAgo="Yesterday at 6:00PM" 
                    content={ Faker.lorem.text() }
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));