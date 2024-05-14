import { createContext, useContext, useState } from "react";
import { api } from "../services";
import { UserContext } from "./UserContext";
import { toast } from "react-toastify";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
	const { user } = useContext(UserContext);
	const [techInfo, setTechInfo] = useState(user.techs);
	const [createModal, setCreateModal] = useState(false);
	const [editingTech, setEditingTech] = useState(null);

	const techCreate = async (formData) => {
		const token = localStorage.getItem("@kenziehub:token");

		try {
			const { data } = await api.post("/users/techs/", formData, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			setTechInfo([...techInfo, data]);
		} catch (error) {
			toast.error(error.response.data.message);
		}
	};

	const techDelete = async (removingId) => {
		try {
			const token = localStorage.getItem("@kenziehub:token");

			await api.delete(`/users/techs/${removingId}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			const newTechInfo = techInfo.filter((tech) => tech.id !== removingId);
			setTechInfo(newTechInfo);
		} catch (error) {
			console.log(error);
		}
	};

	const techUpdate = async (formData) => {
		try {
			const token = localStorage.getItem("@kenziehub:token");
			const { data } = await api.put(
				`/users/techs/${editingTech.id}`,
				formData,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);

			const newTechInfo = techInfo.map((tech) => {
				if (tech.id === editingTech.id) {
					return data;
				} else {
					return tech;
				}
			});

			setTechInfo(newTechInfo);
			setEditingTech(null);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<TechContext.Provider
			value={{
				techInfo,
				user,
				techCreate,
				techDelete,
				createModal,
				setCreateModal,
				editingTech,
				setEditingTech,
				techUpdate,
			}}
		>
			{children}
		</TechContext.Provider>
	);
};
