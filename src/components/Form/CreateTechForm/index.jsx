import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";
import { useForm } from "react-hook-form";

export const CreateTechForm = () => {
	const { techCreate } = useContext(TechContext);
	const { register, handleSubmit, reset } = useForm();

	const submit = (payload) => {
		techCreate(payload);
		reset();
	};

	return (
		<form onSubmit={handleSubmit(submit)}>
			<label className="headline">Nome</label>
			<input
				className="input-default"
				type="text"
				placeholder="Nome da tecnologia"
				{...register("title")}
			/>
			<label className="headline">Selecionar status</label>
			<select className="input-default" {...register("status")}>
				<option value="">Selecione a tecnologia</option>
				<option value="Iniciante">Iniciante</option>
				<option value="Intermediário">Intermediário</option>
				<option value="Avançado">Avançado</option>
			</select>

			<button className="btn-primary" type="submit">
				Cadastrar Tecnologia
			</button>
		</form>
	);
};
