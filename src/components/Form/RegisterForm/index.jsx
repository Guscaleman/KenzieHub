import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerForm.schema.js";
import { Select } from "../Select";
import Logo from "../../../assets/Logo.svg";
import styles from "./styles.module.scss";
import { InputPassword } from "../InputPassword/index.jsx";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext.jsx";
import { Link } from "react-router-dom";

export const RegisterForm = () => {
	const { userRegister } = useContext(UserContext);

	const submit = (formData) => {
		userRegister(formData);
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(registerFormSchema),
	});

	return (
		<main className={styles.container}>
			<header className={styles.register_header}>
				<img src={Logo} alt="Logo kenzie hub" />
				<Link to="/">Voltar</Link>
			</header>
			<div className={styles.content}>
				<h1>Crie sua conta</h1>
				<p className={styles.message}>Rápido e grátis, vamos nessa</p>
				<form onSubmit={handleSubmit(submit)}>
					<Input
						label="Nome"
						type="text"
						placeholder="Digite aqui seu nome"
						{...register("name")}
						error={errors.name}
					/>
					<Input
						label="Email"
						type="email"
						placeholder="Digite aqui seu email"
						{...register("email")}
						error={errors.email}
					/>
					<InputPassword
						label="Senha"
						type="password"
						placeholder="Digite sua senha"
						{...register("password")}
						error={errors.password}
					/>
					<InputPassword
						label="Confirmar Senha"
						type="password"
						placeholder="Confirme sua senha"
						{...register("confirmPassword")}
						error={errors.confirmPassword}
					/>
					<Input
						label="Bio"
						type="text"
						placeholder="Fale sobre você"
						{...register("bio")}
						error={errors.bio}
					/>
					<Input
						label="Contato"
						type="tel"
						placeholder="Opção de contato"
						{...register("contact")}
						error={errors.contact}
					/>
					<Select
						label="Selecionar módulo"
						{...register("course_module")}
						error={errors.course_module}
					/>
					<button className="btn-primary-negative" type="submit">
						Cadastrar
					</button>
				</form>
			</div>
		</main>
	);
};
