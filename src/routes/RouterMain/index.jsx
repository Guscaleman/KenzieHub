import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../../pages/LoginPage";
import { RegisterPage } from "../../pages/RegisterPage";
import { DashboardPage } from "../../pages/DashboardPage";
import { PrivateRoutes } from "../PrivateRoutes";
import { PublicRoutes } from "../PublicRoutes";
import { TechProvider } from "../../providers/TechContext";

export const RouterMain = () => {
	return (
		<Routes>
			<Route element={<PublicRoutes />}>
				<Route path="/" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
			</Route>

			<Route element={<PrivateRoutes />}>
				<Route
					path="/dashboard"
					element={
						<TechProvider>
							<DashboardPage />
						</TechProvider>
					}
				/>
			</Route>
		</Routes>
	);
};
