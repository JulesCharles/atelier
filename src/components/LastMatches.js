import { useEffect } from 'react';

const LastMatches = (props) => {
	if (props.match === 1) {
		return <div className="resultWin">Win</div>;
	} else {
		return <div className="resultLoss">Loss</div>;
	}
};

export default LastMatches;
