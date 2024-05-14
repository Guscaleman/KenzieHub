import { forwardRef } from "react";

export const Select = forwardRef(({ label, error, ...rest }, ref) => {
	return (
		<>
			<label className="headline">{label}</label>
			<div>
				<select className="select-default" ref={ref} {...rest}>
					<option value="">Selecione um módulo</option>
					<option value="Primeiro módulo (Introdução ao Frontend)">
						Primeiro módulo &#40;Introdução ao Frontend&#41;
					</option>
					<option value="Segundo módulo (Frontend intermediário)">
						Segundo módulo &#40;Frontend intermediário&#41;
					</option>
					<option value="Terceiro módulo (Frontend avançado)">
						Terceiro módulo &#40;Frontend avançado&#41;
					</option>
				</select>
				{error ? <p className="error-msg">{error?.message}</p> : null}
			</div>
		</>
	);
});
