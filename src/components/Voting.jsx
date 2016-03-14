import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import Winner from './Winner';
import Vote from './Vote';

export const Voting = React.createClass({
	mixins: [PureRenderMixin],
	render: function() {
		return <div>
			{this.props.winner ?
				<Winner ref="winner" winner={this.props.winner} /> :
				<Vote {...this.props} />
			}
		</div>;
	}
});

// map state from redux store into an object of props
// those props will be merged into props of now connected Voting component
function mapStateToProps(state) {
	return {
		pair: state.getIn(['vote', 'pair']),
		winner: state.get('winner')
	};
}

// connect returns a connected version of voting -
// original Voting component remains pure
// so grab the return value and call it VotingContainer
export const VotingContainer = connect(mapStateToProps)(Voting);