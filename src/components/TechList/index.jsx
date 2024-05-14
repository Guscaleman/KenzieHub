import { useContext } from "react";
import { TechCard } from "./TechCard";
import { TechContext } from "../../providers/TechContext";
import styles from "./styles.module.scss";

export const TechList = () => {
	const { techInfo } = useContext(TechContext);

	return (
		<>
			{techInfo.length > 0 ? (
				<ul className={styles.container}>
					{techInfo.map((tech) => (
						<li className={styles.content} key={tech.id}>
							<TechCard tech={tech} />
						</li>
					))}
				</ul>
			) : (
				<p className="paragraph">Nenhuma tecnologia aprendida...</p>
			)}
		</>
	);
};
