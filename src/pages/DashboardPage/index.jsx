import { useContext } from "react";
import Logo from "../../assets/Logo.svg";
import styles from "./styles.module.scss";
import { UserContext } from "../../providers/UserContext";
import { TechContext } from "../../providers/TechContext";
import { TechList } from "../../components/TechList";
import { CreateTechForm } from "../../components/Form/CreateTechForm";
import { Modal } from "../../components/Modal";
import { EditTechForm } from "../../components/Form/EditTechForm";

export const DashboardPage = () => {
	const { user, userLogout } = useContext(UserContext);
	const { createModal, setCreateModal, editingTech, setEditingTech } =
		useContext(TechContext);

	return (
		<main>
			<header className={styles.dash_header}>
				<img src={Logo} alt="Logo kenzie hub" />
				<button onClick={userLogout}>Sair</button>
			</header>
			<section className={styles.banner}>
				<h1>Olá, {user?.name}</h1>
				<p className="headline-bold">{user?.course_module}</p>
			</section>
			<section className={styles.content}>
				<h1>Tecnologias</h1>
				<button onClick={() => setCreateModal(true)}>+</button>
			</section>
			{createModal ? (
				<Modal
					modalTitle={"Cadastrar Tecnologia"}
					onClose={() => setCreateModal(false)}
				>
					{" "}
					<CreateTechForm />{" "}
				</Modal>
			) : null}
			{editingTech ? (
				<Modal
					modalTitle={"Tecnologia Detalhes"}
					onClose={() => setEditingTech(null)}
				>
					{" "}
					<EditTechForm />{" "}
				</Modal>
			) : null}
			<TechList />
		</main>
	);
};
