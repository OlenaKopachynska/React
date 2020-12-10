import React, {Component} from 'react';

import {withRouter} from 'react-router-dom';

class FullComment extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                full com
            </div>
        );
    }
}

export default withRouter(FullComment);