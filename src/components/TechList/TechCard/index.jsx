import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import styles from "./styles.module.scss";
import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";

export const TechCard = ({ tech }) => {
	const { techDelete, setEditingTech } = useContext(TechContext);

	return (
		<section className={styles.container}>
			<h2>{tech.title}</h2>
			<div className={styles.content}>
				<p className="headline-bold">{tech.status}</p>
				<div className={styles.content__buttons}>
					<button onClick={() => setEditingTech(tech)}>
						<MdEdit size={18} color="grey" />
					</button>
					<button onClick={() => techDelete(tech.id)}>
						<MdDeleteForever size={21} color="grey" />
					</button>
				</div>
			</div>
		</section>
	);
};
