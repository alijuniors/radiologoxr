import React, { useEffect, useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AppSettings } from './../../config/app-settings.js';


function PagesLogin() {
	const context = useContext(AppSettings);
	const [redirect, setRedirect] = useState(false);
	
	useEffect(() => {
		context.setAppHeaderNone(true);
		context.setAppSidebarNone(true);
		context.setAppContentClass('p-0');
		
		return function cleanUp() {
			context.setAppHeaderNone(false);
			context.setAppSidebarNone(false);
			context.setAppContentClass('');
		};
		
		// eslint-disable-next-line
	}, []);
	
	function handleSubmit(event) {
		event.preventDefault();
		
		setRedirect(true);
  }
  
	if (redirect) {
		return <Navigate to='/' />;
	}
	return (
		<div className="login">
			<div className="login-content">
				<form onSubmit={handleSubmit}>
					<h1 className="text-center">Inicia Sesión</h1>
					<div className="text-inverse text-opacity-50 text-center mb-4">
						Por tu protección, por favor Verifica tu identidad.
					</div>
					<div className="mb-3">
						<label className="form-label">Email <span className="text-danger">*</span></label>
						<input type="text" className="form-control form-control-lg bg-white bg-opacity-5" placeholder="" />
					</div>
					<div className="mb-3">
						<div className="d-flex">
							<label className="form-label">Password <span className="text-danger">*</span></label>
							<a href="#/" className="ms-auto text-inverse text-decoration-none text-opacity-50">Olvido su password?</a>
						</div>
						<input type="password" className="form-control form-control-lg bg-white bg-opacity-5" placeholder="" />
					</div>
					<div className="mb-3">
						<div className="form-check">
							<input className="form-check-input" type="checkbox" id="customCheck1" />
							<label className="form-check-label" htmlFor="customCheck1">Recuerdame</label>
						</div>
					</div>
					<button type="submit" className="btn btn-outline-theme btn-lg d-block w-100 fw-500 mb-3">Inicio</button>
					<div className="text-center text-inverse text-opacity-50">
						No tienes cuenta <Link to="/pages/register">Registrate</Link>.
					</div>
				</form>
			</div>
		</div>
	)
}

export default PagesLogin;