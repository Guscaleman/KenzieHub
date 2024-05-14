import { RouterMain } from "./routes/RouterMain";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/index.scss";
import { useContext } from "react";
import { UserContext } from "./providers/UserContext";
import { Spinner } from "react-loading-io";

function App() {
	const { loading } = useContext(UserContext);
	const spinnerCfg = { left: "46%", transform: "translateY(146%)" };

	return (
		<>
			<ToastContainer position="bottom-center" theme="dark" />
			{loading ? <Spinner style={spinnerCfg} /> : <RouterMain />}
		</>
	);
}

export default App;
