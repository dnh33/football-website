import React from 'react';
import Card from 'react-bootstrap/Card';
import "./Twitter_Card.scss";

/* var response = [
    {
        "id": "1",
        "image": "./avatar_1.svg",
        "name": "Noah Jackson",
        "tweet": "I use this app every day and it's a great way to keep up to date with what's going on in football. It's a shame it won't rotate into landscape mode like its main competitor"
    },
    {
        "id": "2",
        "image": "./avatar_2.svg",
        "name": "Darren Wilson",
        "tweet": "Good for scores and commentary but the team lineups have stopped working. "
    },
    {
        "id": "3",
        "image": "./avatar_3.svg",
        "name": "Michael Akinuli",
        "tweet": "Good for watching the goals and great for highlights instead of waiting till 10:30 before you can watch highlights on March of the day also no need of sky go"
    }
  ]; */

const TwitterCard = ({ name, image, tweet }) => (
    <Card style={{ width: '19.3125rem', height: '10.0625rem', margin: `0 35px` }}>
        <Card.Body>
            <div className="twitter__card--header">
                <div className="twitter__avatar--container">
                    <div className="twitter__avatar">
                        <img src={image} alt="Avatar" />
                    </div>
                    <Card.Title>{name}</Card.Title>
                    <div className="twitter__icon">
                        <img src="./twitter.svg" alt="twitter icon" />
                    </div>
                </div>
            </div>
            <Card.Text>{tweet}</Card.Text>
        </Card.Body>
    </Card>
);

export default TwitterCard;
