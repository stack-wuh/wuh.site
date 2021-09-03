/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from "react";

import { AudioContext } from "./index";

const withAudio = (Component) => {
	const audio = useContext(AudioContext);

	return function AudioWrapper(props) {
		return (
			<AudioContext.Consumer>
				{(context) => <Component {...props} {...context} audio={audio} />}
			</AudioContext.Consumer>
		);
	};
};

export default withAudio;
