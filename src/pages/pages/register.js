import React, { useEffect, useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AppSettings } from './../../config/app-settings.js';
import DatePicker from "react-datepicker";
import { getMonth, getYear } from 'date-fns';
import range from "lodash/range";
import classNames from 'classnames';

function PagesRegister() {
	const context = useContext(AppSettings);
	const [redirect, setRedirect] = useState(false);
	const [startDate, setStartDate] = useState(new Date());
	const years =  range(1990, (new Date().getFullYear()) + 1, 1);
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	  ];
	
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


 var inputs = document.getElementsByTagName('input');

for(var i = 0; i < inputs.length; i++) {
     inputs[i].className +="form-control form-control-lg bg-white bg-opacity-5";
}

  
	if (redirect) {
		return <Navigate to='/' />;
	}
	return (
		<div className="register">
			<div className="register-content">
				<form onSubmit={handleSubmit}>
					<h1 className="text-center">Registro</h1>
					<p className="text-inverse text-opacity-50 text-center">One Admin ID is all you need to access all the Admin services.</p>
					<div className="mb-3">
						<label className="form-label">Nombre <span className="text-danger">*</span></label>
						<input type="text" className="form-control form-control-lg bg-white bg-opacity-5" placeholder="e.g John Smith" />
					</div>
					<div className="mb-3">
						<label className="form-label">Email <span className="text-danger">*</span></label>
						<input type="text" className="form-control form-control-lg bg-white bg-opacity-5" placeholder="username@address.com" />
					</div>
					<div className="mb-3">
						<label className="form-label">Password <span className="text-danger">*</span></label>
						<input type="password" className="form-control form-control-lg bg-white bg-opacity-5" />
					</div>
					<div className="mb-3">
						<label className="form-label">Confirmar Password <span className="text-danger">*</span></label>
						<input type="password" className="form-control form-control-lg bg-white bg-opacity-5" />
					</div>
					<div className="mb-3">
						<label className="form-label">Pais <span className="text-danger">*</span></label>
						<select className="form-select form-select-lg bg-white bg-opacity-5">
							<option>Republica Dominicana</option>
						</select>
					</div>
					<div className="mb-3">
						<label className="form-label">Genero <span className="text-danger">*</span></label>
						<select className="form-select form-select-lg bg-white bg-opacity-5">
							<option>Hombre</option>
							<option>Mujer</option>
						</select>
					</div>
					<div className="mb-3">
						<label className="form-label">Fecha de Nacimiento <span className="text-danger">*</span></label>
						
						<div className="row gx-2">
							<div className="col-6" >    
							<DatePicker className="form-control form-control-lg bg-white bg-opacity-5"
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div id="date_picker_r"
          style={{
            margin: 10,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <select className='form-select'
            value={getYear(date)}
            onChange={({ target: { value } }) => changeYear(value)}
          >
            {years.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <select className='form-select'
            value={months[getMonth(date)]}
            onChange={({ target: { value } }) =>
              changeMonth(months.indexOf(value))
            }
          >
            {months.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          
        </div>
      )}
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
					</div>
				</div>
					</div>
					<div className="mb-3">
						<div className="form-check">
							<input className="form-check-input" type="checkbox" id="customCheck1" />
							<label className="form-check-label" htmlFor="customCheck1">He leido y acepto los <a href="#/">Terminos</a> y <a href="#/">Condiciones</a>.</label>
						</div>
					</div>
					<div className="mb-3">
						<button type="submit" className="btn btn-outline-theme btn-lg d-block w-100">Registro</button>
					</div>
					<div className="text-inverse text-opacity-50 text-center">
						Posees una cuenta de administrador? <Link to="/pages/login">Login</Link>
					</div>
				</form>
			</div>
		</div>
	)
}

export default PagesRegister;