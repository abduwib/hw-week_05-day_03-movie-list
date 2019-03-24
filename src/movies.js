import React, {Component} from 'react';
import Review from './reviews';
import Cast from './cast';

class Movie extends Component {
    render() {
        let CastList = this.props.movie.cast.map(cast => (
            <Cast name={cast.name} role={cast.role}/>
        ))

        let myCast;
        if(this.state.hideCast === true){
            myCast = null;
        } else {
            myActors = actorsList;
        }

        return(
            <div>
                <h2>{ this.props.movie.title }</h2>
                <img src={ this.props.movie.poster }></img>
                <Review rating={this.props.movie.rating}/>
                <ul>
                    {

                    }
                </ul>

                { myCast }
                
                <button onClick={this.toggleCast}>
                    Cast
                </button>
            </div>
        );
    }
    toggleCast = () => {
        if(this.state.hideCast === true){
            this.setState( {hideActors: false} );
        } else {
            this.setState( { hideActors: true});
        }
    }
}

export default Movie;