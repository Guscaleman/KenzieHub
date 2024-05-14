import { forwardRef, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

import styles from "./styles.module.scss";

export const InputPassword = forwardRef(({ label, error, ...rest }, ref) => {
	const [isHidden, setIsHidden] = useState(true);
	const type = isHidden ? "password" : "text";

	return (
		<>
			<label className="headline">{label}</label>
			<div className={styles.input__box}>
				<div className={styles.input__grid}>
					<input className="input-default" ref={ref} {...rest} type={type} />
					{error ? <p className="error-msg">{error.message}</p> : null}

					<span
						className={styles.button__eye}
						onClick={() => setIsHidden(!isHidden)}
					>
						{isHidden ? <FaRegEye size={21} /> : <FaRegEyeSlash size={21} />}
					</span>
				</div>
			</div>
		</>
	);
});
