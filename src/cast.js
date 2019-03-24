import React, {Component} from 'react';

class Cast extends Component {
    render() {
        return(
            <li>
                {this.props.name} - {this.props.role}
            </li>
        );
    }

}

export default Cast