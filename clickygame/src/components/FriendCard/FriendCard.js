import React from "react";
import "./FriendCard.css";

class FriendCard extends React.Component {

state = {
    clicked: false
}


//clickedCard
clickedCard = () => {
    if (this.state.clicked) {
        console.log("game over");
        // this.props.setState ({ score: 0 });

    } else {
        this.setState ({ clicked: true }, () => console.log(this.state.clicked));
    }
}

//check on console to see which cards are true and false: starts with 12 false, false for each card
componentDidMount() {
    console.log(this.state.clicked);
}


    render() {
        return (
                <div className="col-md-3">
                    <div className="panel panel-default">
                        <div className="panel-body" id="img">
                            <div onClick={() => this.props.shuffle(this.props.id)} >
                                <span onClick={() => this.props.score()}>
                                    <span onClick={() => this.clickedCard()}>
                                        <img alt={this.props.name} src={this.props.image}  />
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default FriendCard;
