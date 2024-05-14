import styles from "./styles.module.scss";

export function Modal({ children, modalTitle, onClose }) {
	return (
		<div className={styles.container}>
			<div className={styles.content} role="dialog">
				<div className={styles.content__header}>
					<h1>{modalTitle}</h1>
					<button onClick={onClose}>X</button>
				</div>
				{children}
			</div>
		</div>
	);
}
