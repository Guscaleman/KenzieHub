import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const pathname = window.location.pathname;

	useEffect(() => {
		const token = localStorage.getItem("@kenziehub:token");
		const userId = localStorage.getItem("@kenziehub:userId");

		const getUser = async () => {
			try {
				setLoading(true);

				const { data } = await api.get("/profile", {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
				setUser(data);
				navigate(pathname);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		};
		if (token && userId) {
			getUser();
		}
	}, []);

	const userRegister = async (payload) => {
		const { confirmPassword, ...rest } = payload;

		try {
			const { data } = await api.post("/users", rest);

			setUser(data.user);
			localStorage.setItem("@kenziehub:userId", data.id);
			toast.success("Conta criada com sucesso!");
			navigate("/");
		} catch (error) {
			toast.error(error.response.data.message);
		}
	};

	const userLogin = async (payload) => {
		try {
			const { data } = await api.post("/sessions", payload);

			setUser(data.user);
			localStorage.setItem("@kenziehub:token", data.token);
			localStorage.setItem("@kenziehub:userId", data.user.id);
			toast.success("Login realizado com sucesso!");
			navigate("/dashboard");
		} catch (error) {
			toast.error("Email ou senha inválido.");
		}
	};

	const userLogout = () => {
		setUser(null);
		localStorage.removeItem("@kenziehub:token");
		localStorage.removeItem("@kenziehub:userId");
		navigate("/");
	};

	return (
		<UserContext.Provider
			value={{ user, loading, userLogin, userRegister, userLogout }}
		>
			{children}
		</UserContext.Provider>
	);
};
