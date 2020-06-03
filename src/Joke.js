import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircle} from '@fortawesome/free-regular-svg-icons';
import './Joke.css';

class Joke extends Component {
    getColor() {
        if (this.props.votes >= 15) {
          return "#4CAF50";
        } else if (this.props.votes >= 12) {
          return "#8BC34A";
        } else if (this.props.votes >= 9) {
          return "#CDDC39";
        } else if (this.props.votes >= 6) {
          return "#FFEB3B";
        } else if (this.props.votes >= 3) {
          return "#FFC107";
        } else if (this.props.votes >= 0) {
          return "#FF9800";
        } else {
          return "#f44336";
        }
      }
      getEmoji() {
        if (this.props.votes >= 15) {
          return "em em-rolling_on_the_floor_laughing";
        } else if (this.props.votes >= 12) {
          return "em em-laughing";
        } else if (this.props.votes >= 9) {
          return "em em-smiley";
        } else if (this.props.votes >= 6) {
          return "em em-slightly_smiling_face";
        } else if (this.props.votes >= 3) {
          return "em em-neutral_face";
        } else if (this.props.votes >= 0) {
          return "em em-confused";
        } else {
          return "em em-angry";
        }
      }
    render(){
        return(
            <div className='Joke'>
                <div className='Joke-buttons'>
                    <i className='fas fa-arrow-up' onClick={this.props.upvote}></i>                    
                    <span className="fa-layers fa-fw">
                      <FontAwesomeIcon icon={faCircle} transform='left-4 shrink-1' style={{color: this.getColor()}}></FontAwesomeIcon>                     
                      <span className="fa-layers-text">{this.props.votes}</span>            
                    </span>
                    <i className='fas fa-arrow-down' onClick={this.props.downvote}></i>
                </div>
                <div className='Joke-text'>
                    {this.props.text}
                </div>
                <div className='Joke-smiley'>
                    <i className={this.getEmoji()}></i>
                </div>
            </div>
        )
    }
}

export default Joke;