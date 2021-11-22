import React from 'react';
import { render, screen } from '@testing-library/react';
import TwitterCard from '../components/Twitter/Twitter_Card.js';

var response = [
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
];

describe('TwitterCard', () => {
    it('should have the correct title on card', () => {
        render(<TwitterCard name={response[0].name} />);
    
    
        expect(screen.getByText('Noah Jackson')).toBeInTheDocument();
    });
    it('should have the correct image', () => {
      render(<TwitterCard image={response[0].image} />);
  
      const avatar = screen.getByAltText('Avatar');
      expect(avatar).toHaveAttribute('src', './avatar_1.svg');
      expect(avatar).toHaveAttribute('alt', 'Avatar');
    });
    it('should have the correct tweet associated with it', () => {
      render(<TwitterCard tweet={response[0].tweet} />);
  
      expect(screen.getByText("I use this app every day and it's a great way to keep up to date with what's going on in football. It's a shame it won't rotate into landscape mode like its main competitor")).toBeInTheDocument();
    });
  });
