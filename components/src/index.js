import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';


const App = () => {

    return (
        <div className="ui container comments" style={{paddingTop:30}}>
            <ApprovalCard>
                <div>
                    <h4>Warning</h4>
                    <p>Are you sure you want to do this?</p>   
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author={faker.name.firstName() + " " + faker.name.lastName()} 
                    timeAgo={"Today at 3:12pm"}  
                    content={faker.lorem.sentence()}
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author={faker.name.firstName() + " " + faker.name.lastName()} 
                    timeAgo={"Today at 1:35pm"}  
                    content={faker.lorem.sentence()}
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author={faker.name.firstName() + " " + faker.name.lastName()} 
                    timeAgo={"Today at 1:35pm"}  
                    content={faker.lorem.sentence()}
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>  
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));