import React, { useEffect, useState }  from 'react';
import { Link } from 'react-router-dom';
import { slideToggle } from './../../composables/slideToggle.js';
import Paciente from './../../config/app-paciente.jsx';
import Numero_Cedula from './../../config/app-cedula.jsx';
import Nfactura from './../../config/app-nfactura.jsx';
import Modalidad from './../../config/app-modalidad.jsx';
import Sucursal from './../../config/app-sucursal.jsx';
import TextField from '@mui/material/TextField';
import Select from 'react-select';
import { Card, CardBody, CardExpandToggler } from './../../components/card/card.jsx';
import { convertLength } from '@mui/material/styles/cssUtils';
import props from 'prop-types';
import Highlight from 'react-highlight';
const $ = require('jquery');



function Header(props) {

	
	
	const notificationData = [{
		"icon": "bi bi-bag text-theme",
		"title": "NEW ORDER RECEIVED ($1,299)",
		"time": "JUST NOW"
	},{
		"icon": "bi bi-person-circle text-theme",
		"title": "3 NEW ACCOUNT CREATED",
		"time": "2 MINUTES AGO"
	},{
		"icon": "bi bi-gear text-theme",
		"title": "SETUP COMPLETED",
		"time": "3 MINUTES AGO"
	},{
		"icon": "bi bi-grid text-theme",
		"title": "WIDGET INSTALLATION DONE",
		"time": "5 MINUTES AGO"
	},{
		"icon": "bi bi-credit-card text-theme",
		"title": "PAYMENT METHOD ENABLED",
		"time": "10 MINUTES AGO"
	}];
	const [code2, setCode2] = useState();
	
	$(function() {
		adjustStyle($(this).width());
		
		$(window).resize(function() {
			adjustStyle($(this).width());
		});

	});
    
	        

	function adjustStyle(width) {


		if((width >= 1024) && (width < 1280)){
		
			var change_class3 = document.getElementsByClassName("react-select__control");
			var change_class4 = document.getElementsByClassName("dropdown-mobile-full");
			var change_class5 = document.getElementsByClassName("bi-grid-3x3-gap");
			var change_class6 = document.getElementsByClassName("bi-search");
			change_class4[2].classList.add("perfil_p");
			change_class5[0].classList.add("grid_icon");
			change_class6[0].classList.add("search_icon");
			for (var i = 0; i<change_class3.length; i++) {
			change_class3[0].classList.add("width1280l");
			change_class3[1].classList.add("width1280l");
			change_class3[2].classList.add("width1280l");
			change_class3[3].classList.add("width1280g");
			change_class3[4].classList.add("width1280l");
			}
		}
		if((width >= 1280) && (width < 1450)){
			var change_class3 = document.getElementsByClassName("react-select__control");
			var change_class4 = document.getElementsByClassName("dropdown-mobile-full");
			var change_class5 = document.getElementsByClassName("bi-grid-3x3-gap");
			var change_class6 = document.getElementsByClassName("bi-search");
			var change_class7 = document.getElementsByClassName("menu-link");
			
			change_class4[2].classList.add("perfil_p");
			change_class5[0].classList.add("grid_icong");
			change_class6[0].classList.add("search_icong");
			change_class7[2].classList.add("doing_icong");
			for (var i = 0; i<change_class3.length; i++) {
			change_class3[0].classList.add("width1280f");
			change_class3[1].classList.add("width1280f");
			change_class3[2].classList.add("width1280f");
			change_class3[3].classList.add("width1280m");
			change_class3[4].classList.add("width1280f");
			}
			

			
		}
		
	}
	
     
	

	
	

	function handleSubmit(e) {
		// e.preventDefault();
		console.log(e);
	  }
	  
	
	const toggleAppSidebarDesktop = () => {
		var elm = document.querySelector('.app');
		if (elm) {
			if (!(elm.classList.contains('app-with-top-nav') && elm.classList.contains('app-without-sidebar'))) {
				elm.classList.toggle('app-sidebar-collapsed');
			}
		}
	}
	
	const toggleAppSidebarMobile = () => {
		var elm = document.querySelector('.app');
		if (elm) {
			if (!(elm.classList.contains('app-with-top-nav') && elm.classList.contains('app-without-sidebar'))) {
				elm.classList.toggle('app-sidebar-mobile-toggled');
			} else {
				slideToggle(document.querySelector('.app-top-nav'));
			}
		}
	}
	
	const toggleAppHeaderSearch = () => {
		var elm = document.querySelector('.app');
		elm.classList.toggle('app-header-menu-search-toggled');
	}

	return (
		<div id="header" className="app-header">
			<div className="desktop-toggler">
				<button type="button" className="menu-toggler" onClick={toggleAppSidebarDesktop}>
					<span className="bar"></span>
					<span className="bar"></span>
					<span className="bar"></span>
				</button>
			</div>
			
			<div className="mobile-toggler">
				<button type="button" className="menu-toggler" onClick={toggleAppSidebarMobile}>
					<span className="bar"></span>
					<span className="bar"></span>
					<span className="bar"></span>
				</button>
			</div>
			
			<div className="brand">
				<Link to="/" className="brand-logo">
					<span className="brand-img">
						<span className="brand-img-text text-theme">H</span>
					</span>
					<span className="brand-text ">Radiologox</span>
				</Link>
				   <div className="menu-search-input modalidad">
				   <Select defaultValue={[Paciente[1]]}  name="colors" options={Paciente} classNamePrefix="react-select"  />	
				   </div>				 
					<div className="menu-search-input modalidad">
					<Select defaultValue={[Numero_Cedula[1]]}  name="colors" options={Numero_Cedula} classNamePrefix="react-select"  />
					</div>
					<div className="menu-search-input">
					<Select defaultValue={[Nfactura[1]]}  name="colors" options={Nfactura} classNamePrefix="react-select"  />
					</div>
					<div  className="menu-search-input modalidad" >
					<Select  defaultValue={[Modalidad[1]]} labelledBy="Modalidad" isMulti name="modalidad" options={Modalidad} classNamePrefix="react-select"/>
					</div>
					<div className="menu-search-input ">
					<Select defaultValue={[Sucursal[1]]}  name="colors" options={Sucursal} classNamePrefix="react-select"  />
					</div>
			</div>
			
			<div className="menu">
				<div className="menu-item dropdown">
					<a href="#/" className="menu-link">
						<div className="menu-icon"><i className="bi bi-search nav-icon"></i></div>
					</a>
				</div>
				<div className="menu-item dropdown dropdown-mobile-full ">
					<a href="#/" data-bs-toggle="dropdown" data-bs-display="static" className="menu-link">
						<div className="menu-icon"><i className="bi bi-grid-3x3-gap nav-icon"></i></div>
					</a>
					<div className="dropdown-menu fade dropdown-menu-end w-300px text-center p-0 mt-1">
						<div className="row row-grid gx-0">
							<div className="col-4">
								<Link to="/email/inbox" className="dropdown-item text-decoration-none p-3 bg-none">
									<div className="position-relative">
										<i className="bi bi-circle-fill position-absolute text-theme top-0 mt-n2 me-n2 fs-6px d-block text-center w-100"></i>
										<i className="bi bi-envelope h2 opacity-5 d-block my-1"></i>
									</div>
									<div className="fw-500 fs-10px text-inverse">CORREO</div>
								</Link>
							</div>
							<div className="col-4">
								<Link to="/pos/customer-order" className="dropdown-item text-decoration-none p-3 bg-none">
									<div><i className="bi bi-hdd-network h2 opacity-5 d-block my-1"></i></div>
									<div className="fw-500 fs-10px text-inverse">TIENDA</div>
								</Link>
							</div>
							<div className="col-4">
								<Link to="/calendar" className="dropdown-item text-decoration-none p-3 bg-none">
									<div><i className="bi bi-calendar4 h2 opacity-5 d-block my-1"></i></div>
									<div className="fw-500 fs-10px text-inverse">CALENDARIO</div>
								</Link>
							</div>
						</div>
						<div className="row row-grid gx-0">
							<div className="col-4">
								<Link to="/helper" className="dropdown-item text-decoration-none p-3 bg-none">
									<div><i className="bi bi-terminal h2 opacity-5 d-block my-1"></i></div>
									<div className="fw-500 fs-10px text-inverse">AYUDA</div>
								</Link>
							</div>
							<div className="col-4">
								<Link to="/settings" className="dropdown-item text-decoration-none p-3 bg-none">
									<div className="position-relative">
										<i className="bi bi-circle-fill position-absolute text-theme top-0 mt-n2 me-n2 fs-6px d-block text-center w-100"></i>
										<i className="bi bi-sliders h2 opacity-5 d-block my-1"></i>
									</div>
									<div className="fw-500 fs-10px text-inverse">CONFIGURACIÓN</div>
								</Link>
							</div>
							<div className="col-4">
								<Link to="/widgets" className="dropdown-item text-decoration-none p-3 bg-none">
									<div><i className="bi bi-collection-play h2 opacity-5 d-block my-1"></i></div>
									<div className="fw-500 fs-10px text-inverse">WIDGETS</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="menu-item dropdown dropdown-mobile-full">
					<a href="#/" data-bs-toggle="dropdown" data-bs-display="static" className="menu-link">
						<div className="menu-icon"><i className="bi bi-bell nav-icon"></i></div>
						<div className="menu-badge bg-theme"></div>
					</a>
					<div className="dropdown-menu dropdown-menu-end mt-1 w-300px fs-11px pt-1">
						<h6 className="dropdown-header fs-10px mb-1">NOTIFICACIONES</h6>
						<div className="dropdown-divider mt-1"></div>
						{notificationData.length > 0 ? (notificationData.map((notification, index) => ((
							<a href="#/" key={index} className="d-flex align-items-center py-10px dropdown-item text-wrap fw-semibold">
								<div className="fs-20px">
									<i className={notification.icon}></i>
								</div>
								<div className="flex-1 flex-wrap ps-3">
									<div className="mb-1 text-inverse">{notification.title}</div>
									<div className="small text-inverse text-opacity-50">{notification.time}</div>
								</div>
								<div className="ps-2 fs-16px">
									<i className="bi bi-chevron-right"></i>
								</div>
							</a>
						)))) : (
							<div className="dropdown-notification-item p-3 text-center">
								No record found
							</div>
						)}
						<hr className="mb-0 mt-2" />
						<div className="py-10px mb-n2 text-center">
							<a href="#/" className="text-decoration-none fw-bold">VER TODO</a>
						</div>
					</div>
				</div>
				<div className="menu-item dropdown dropdown-mobile-full">
					<a href="#/" data-bs-toggle="dropdown" data-bs-display="static" className="menu-link">
						<div className="menu-img online">
							<img src="/assets/img/user/profile.jpg" alt="Profile" height="60" />
						</div>
						<div className="menu-text d-sm-block d-none w-170px">linkdicom@linkdicom.com</div>
					</a>
					<div className="dropdown-menu dropdown-menu-end me-lg-3 fs-11px mt-1">
						<Link to="/profile" className="dropdown-item d-flex align-items-center">PERFIL <i className="bi bi-person-circle ms-auto text-theme fs-16px my-n1"></i></Link>
						<Link to="/email/inbox" className="dropdown-item d-flex align-items-center">CORREO <i className="bi bi-envelope ms-auto text-theme fs-16px my-n1"></i></Link>
						<Link to="/calendar" className="dropdown-item d-flex align-items-center">CALENDARIO <i className="bi bi-calendar ms-auto text-theme fs-16px my-n1"></i></Link>
						<Link to="/settings" className="dropdown-item d-flex align-items-center">CONFIGURACIONES<i className="bi bi-gear ms-auto text-theme fs-16px my-n1"></i></Link>
						<div className="dropdown-divider"></div>
						<Link to="/pages/login" className="dropdown-item d-flex align-items-center">SALIR <i className="bi bi-toggle-off ms-auto text-theme fs-16px my-n1"></i></Link>
					</div>
				</div>
			</div>
			
			<form className="menu-search" method="POST" name="header_search_form">
				<div className="menu-search-container">
					
					
					<div className="menu-search-icon"><a href="#/" onClick={toggleAppHeaderSearch}><i className="bi bi-search"></i></a></div>
					<div className="menu-search-icon2">
						<a href="#/" onClick={toggleAppHeaderSearch}><i className="bi bi-x-lg"></i></a>
					</div>
					
				</div>
				
			</form>
		</div>
	)
}

export default Header;
