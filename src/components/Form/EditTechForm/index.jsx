import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";
import { useForm } from "react-hook-form";

export const EditTechForm = () => {
	const { editingTech, techUpdate } = useContext(TechContext);
	const { register, handleSubmit } = useForm({
		values: {
			title: editingTech.title,
			status: editingTech.status,
		},
	});

	const submit = (payload) => {
		techUpdate(payload);
	};

	return (
		<form onSubmit={handleSubmit(submit)}>
			<label className="headline">Nome</label>
			<input
				disabled
				className="input-default"
				type="text"
				placeholder="Nome da tecnologia"
				{...register("title")}
			/>
			<label className="headline">Status</label>
			<select className="input-default" {...register("status")}>
				<option value="">Selecione a tecnologia</option>
				<option value="Iniciante">Iniciante</option>
				<option value="Intermediário">Intermediário</option>
				<option value="Avançado">Avançado</option>
			</select>

			<button className="btn-primary" type="submit">
				Salvar Alterações
			</button>
		</form>
	);
};
