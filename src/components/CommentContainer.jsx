import React from 'react';

// This is your data structure for comments and their replies
const commentData = [
    {
        id: 1,
        author: "User1",
        text: "Great video!",
        likes: 10,
        replies: [
            {
                id: 101,
                author: "User2",
                text: "I agree!",
                likes: 5,
                replies: [
                    {
                        id: 102,
                        author: "User3",
                        text: "Me too!",
                        likes: 2,
                        replies: []
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        author: "User3",
        text: "Very informative.",
        likes: 8,
        replies: []
    },
    {
        id: 3,
        author: "User4",
        text: "Thanks for sharing!",
        likes: 15,
        replies: [
            {
                id: 301,
                author: "User5",
                text: "You're welcome!",
                likes: 2,
                replies: []
            }
        ]
    },
    {
        id: 4,
        author: "User6",
        text: "This helped me a lot.",
        likes: 20,
        replies: []
    },
    {
        id: 5,
        author: "User7",
        text: "Can you make a video on React hooks?",
        likes: 12,
        replies: [
            {
                id: 501,
                author: "User1",
                text: "Yes, that would be great!",
                likes: 3,
                replies: []
            }
        ]
    },
    {
        id: 6,
        author: "User8",
        text: "Awesome content!",
        likes: 7,
        replies: []
    },
    {
        id: 7,
        author: "User9",
        text: "I have a question.",
        likes: 4,
        replies: []
    },
    {
        id: 8,
        author: "User10",
        text: "Subscribed!",
        likes: 25,
        replies: [
            {
                id: 801,
                author: "User1",
                text: "Welcome to the channel!",
                likes: 6,
                replies: []
            }
        ]
    },
    {
        id: 9,
        author: "User11",
        text: "Keep up the good work.",
        likes: 18,
        replies: []
    },
    {
        id: 10,
        author: "User12",
        text: "First!",
        likes: 1,
        replies: []
    },
    {
        id: 11,
        author: "User13",
        text: "I learned something new today.",
        likes: 9,
        replies: []
    },
    {
        id: 12,
        author: "User14",
        text: "Amazing explanation.",
        likes: 11,
        replies: [
            {
                id: 1201,
                author: "User15",
                text: "Totally agree!",
                likes: 4,
                replies: []
            }
        ]
    },
    {
        id: 13,
        author: "User16",
        text: "Could you share the source code?",
        likes: 6,
        replies: []
    },
    {
        id: 14,
        author: "User17",
        text: "This is the best tutorial I've seen.",
        likes: 22,
        replies: []
    }
];

// Component to display a single comment and its nested replies
const Comment = ({ data }) => {
    return (
        <div className="flex flex-col space-y-2 p-4 rounded-xl bg-zinc-100">
            <div className="flex items-center space-x-2">
                <span className="font-semibold text-gray-800">{data.author}</span>
                <span className="text-sm text-gray-500">({data.likes} likes)</span>
            </div>
            <p className="text-gray-700">{data.text}</p>
            {/* Recursively render replies if they exist */}
            {data.replies && data.replies.length > 0 && (
                <div className="ml-8 mt-4 border-l-2 border-gray-300 pl-4">
                    <CommentList data={data.replies} />
                </div>
            )}
        </div>
    );
};

// Recursive component to handle the list of comments
const CommentList = ({ data }) => {
    return (
        <div className="space-y-4">
            {data.map((comment) => (
                <Comment key={comment.id} data={comment} />
            ))}
        </div>
    );
};

// Main container component
const CommentContainer = () => {
    return (
        <div className='p-8 w-full h-full'>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Comments</h2>
            <CommentList data={commentData} />
        </div>
    );
};

export default CommentContainer;
