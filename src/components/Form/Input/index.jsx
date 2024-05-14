import { forwardRef } from "react";

export const Input = forwardRef(({ label, error, ...rest }, ref) => {
	return (
		<>
			<label className="headline">{label}</label>
			<div>
				<input className="input-default" ref={ref} {...rest} />
				{error ? <p className="error-msg">{error.message}</p> : null}
			</div>
		</>
	);
});
