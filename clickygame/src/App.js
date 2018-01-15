import React from 'react';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import FriendCard from "./components/FriendCard";
import characters from "./characters.json";
import shuffle from "shuffle-array";
import './App.css';

class App extends React.Component {
state = {
    characters,
    score: 0,
    topScore: 0
};


scoreIncrement = () => {

    this.setState ({ 
        score: this.state.score + 1,
        topScore: ((this.state.score + 1) > (this.state.topScore)) ? (this.state.score + 1):(this.state.topScore)
    });
    
}



shuffleCards = id => {
    //copy the characters array in state
    const sortedArray = [...this.state.characters];
    //shuffle the copied array
    shuffle(sortedArray);
    //set the characters in state to the new sorted array
    this.setState ({ characters: sortedArray });
}


render() {
    return (
        <Wrapper>
            <div className="container">
                <Header>
                    <h1>Clicky Game</h1>
                    <p>Click on an image to earn points, but don't click on any more than once!</p>
                    <br />
                    <div className="scoreBox">
                    <p>Score: {this.state.score}</p>
                    <p>Top Score: {this.state.topScore}</p>
                    </div>
                </Header>
                
                <div className="row">
                        {this.state.characters.map(character => (
                            <FriendCard
                                id={character.id}
                                key={character.id}
                                name={character.name}
                                image={character.image}
                                shuffle={this.shuffleCards}
                                score={this.scoreIncrement}
                                clicked={this.clickedCard}
                            />
                        ))}
                </div>
            </div>
        </Wrapper>
        );
    }
}

export default App;
