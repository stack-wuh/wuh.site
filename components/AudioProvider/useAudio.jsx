import { useContext } from "react";
import { AudioContext } from "./index";

const useAudio = () => {
	const context = useContext(AudioContext);

	return context || {};
};

export default useAudio;
