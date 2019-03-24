import React, {Component} from 'react';

class Review extends Component {
    render() {
        return(
        <div>
            <h2><strong>{this.props.rating}</strong></h2>
            <h3>description: A new comedy from Academy Award (R)-nominated director Jason Reitman 
                ("Up in the Air") and Academy Award (R)-winning screenwriter Diablo Cody ("Juno"). 
                Marlo (Academy Award (R) winner Charlize Theron), a mother of three including a newborn, 
                is gifted a night nanny by her brother (Mark Duplass). Hesitant to the extravagance at first, 
                Marlo comes to form a unique bond with the thoughtful, surprising, 
                and sometimes challenging young nanny named Tully (Mackenzie Davis).</h3>
        </div>
        );
    }

}

export default Review