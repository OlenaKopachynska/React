import React, {Component} from 'react';
import CommentService from '../../services/CommentService';
import Comment from '../Comment/Comment';

import {Route, Switch, withRouter} from 'react-router-dom';
import FullComment from '../FullComment/FullComment';

class AllComments extends Component {
    CommentService = new CommentService();

    state = {comments: []};

    async componentDidMount() {
        let comments = await this.CommentService.comments();
        this.setState({comments});


    }

    render() {
        let {comments} = this.state;
        let {match: {url}} = this.props;

        //console.log(url);

        return (
            <div>
                {
                    comments.map(value => <Comment item={value} key={value.id}/>)
                }


                <hr/>
                <div className={'all-comments-router'}>
                    <Switch>
                        <Route path={`${url}/:id`} exact={true} render={(props) => {

                            return <FullComment {...props}/>;
                        }}/>

                    </Switch>

                </div>
                <hr/>
            </div>
        );
    }
}

export default withRouter(AllComments);