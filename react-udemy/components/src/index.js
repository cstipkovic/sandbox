import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import Faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail 
                avatar={ Faker.image.avatar() }
                author={ Faker.name.firstName() }
                timeAgo="Today at 4:00PM"
                content={ Faker.lorem.text() }
                
            />
            <CommentDetail 
                avatar={ Faker.image.avatar() }
                author={ Faker.name.firstName() }
                timeAgo="Today at 5:00PM" 
                content={ Faker.lorem.text() }
            />
            <CommentDetail 
                avatar={ Faker.image.avatar() }
                author={ Faker.name.firstName() }
                timeAgo="Yesterday at 6:00PM" 
                content={ Faker.lorem.text() }
            />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));