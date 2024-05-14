import { Input } from "../Input";
import { useForm } from "react-hook-form";
import { loginFormSchema } from "./loginForm.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Logo from "../../../assets/Logo.svg";
import styles from "./styles.module.scss";
import { InputPassword } from "../InputPassword";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";
import { Link } from "react-router-dom";

export const LoginForm = () => {
	const { userLogin } = useContext(UserContext);

	const submit = (formData) => {
		userLogin(formData);
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(loginFormSchema),
	});

	return (
		<main className={styles.container}>
			<img src={Logo} alt="Logo kenzie hub" />
			<div className={styles.content}>
				<h1>Login</h1>
				<form onSubmit={handleSubmit(submit)}>
					<Input
						label="Email"
						placeholder="Informe seu email"
						type="email"
						error={errors.email}
						{...register("email")}
					/>
					<InputPassword
						label="Senha"
						placeholder="Informe sua senha"
						type="password"
						error={errors.password}
						{...register("password")}
					/>
					<button className="btn-primary" type="submit">
						Entrar
					</button>
					<p className="headline-bold">Ainda não possui uma conta?</p>
					<Link className="btn-disabled" to="/register">
						Cadastre-se
					</Link>
				</form>
			</div>
		</main>
	);
};
