import React, { useEffect, useState, useRef,useCallback } from 'react';
import { Card, CardBody } from './../../components/card/card.jsx';
import { NavScrollTo } from './../../components/nav-scroll-to/nav-scroll-to.jsx';
import 'lity';
import 'lity/dist/lity.min.css';
import Highlight from 'react-highlight';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';
import 'datatables.net-responsive-bs5/css/responsive.bootstrap5.min.css';
import 'datatables.net-fixedcolumns-bs5/css/fixedColumns.bootstrap5.min.css';
import 'datatables.net-buttons-bs5/css/buttons.bootstrap5.min.css';

import Detail_Pacientes from '../../assets/data/detail_pacientes/detail_pacientes.json';
import DataTables from 'datatables.net';
import DataTable from 'datatables.net-fixedcolumns-bs5';
import Table_a from "../../components/table_a/table_x_d.jsx";

const $ = require('jquery');
$.DataTable = require('datatables.net');
require('datatables.net-bs5');
require('datatables.net-buttons');
require('datatables.net-buttons/js/buttons.colVis.min.js');
require('datatables.net-buttons/js/buttons.flash.min.js');
require('datatables.net-buttons/js/buttons.html5.min.js');
require('datatables.net-buttons/js/buttons.print.min.js');
require('datatables.net-buttons-bs5');
require('datatables.net-responsive');
require('datatables.net-responsive-bs5');
require('datatables.net-fixedcolumns');
require('datatables.net-fixedcolumns-bs5');



function Pages_Estudies_List(){
    
    const [code1, setCode1] = useState();
	const [selectitem, setSelectitem] = useState(0);
	const tableRef = useRef(null);

    const handleChange = () => { 
        
		console.log('The checkbox was toggled'); 
		
	  }; 

	$(function() {
		adjustStyle($(this).width());
		
		$(window).resize(function() {
			adjustStyle($(this).width());
		});

	});


	const selectClick = ( item) => {
		console.log(item);

		setSelectitem(item);
	  };

	

	// document.querySelectorAll(".click").forEach(el => {
	// 	el.addEventListener("click", e => {
	// 	  const idfs = e.target.getAttribute("value");

		  

		  
	// 	selectItem.value =idfs;
	// 	// alert(selectItem.value)
		
	// 	});
	//   });

	  
	function adjustStyle(width) {
		width = parseInt(width);
		if((width >= 1024) && (width < 1280)){
			var change_class = document.getElementsByClassName("change_class");
			var div = document.getElementById('etiqueta');
			if(div !== null){
				while (div.hasChildNodes()){
					div.removeChild(div.lastChild);
				}
			}
	
			for (var i = 0; i<change_class.length; i++) {			
                change_class[0].classList.remove("mb-4");
				change_class[1].classList.remove("img_p_e");
                change_class[2].classList.remove("mb-10");
                change_class[0].classList.add("col-md-5");
				change_class[1].classList.add("imagenpe1280");
                change_class[2].classList.add("col-md-6");
            }
		}
		if((width >= 1280) && (width < 1450)){	
					
			var change_class = document.getElementsByClassName("change_classse");
			var change_class1 = document.getElementsByClassName("change_classs");
			var div = document.getElementById('etiqueta');
			if(div !== null){
				while (div.hasChildNodes()){
					div.removeChild(div.lastChild);
				}
			}
            for (var i = 0; i<change_class.length; i++) {                
				change_class[0].classList.add("width1280");
				change_class[1].classList.add("width1280");     
				change_class1[0].classList.remove("col-xl-3"); 
				change_class1[1].classList.remove("col-xl-6");
				change_class1[1].classList.add("col-xl-9");                
			}
		}
		
	}
	
	useEffect(() => {
		fetch('/assets/data/table/plugin-code-1.json').then(function(response) { return response.text(); }).then((html) => { setCode1(html); });
		
		tableRef.current = $('#datatableDefault').DataTable({
			dom: "<'row mb-3'<'col-md-4 mb-3 mb-md-0'l><'col-md-8 text-end'<'d-lg-flex justify-content-end'f<'d-lg-block d-none'B>>>>t<'row align-items-center mt-3'<'mr-auto col-md-6 mb-3 mb-md-0 'i><'mb-0 col-md-6'p>>",
			lengthMenu: [ 20, 30, 40, 50 ],
			responsive: true,
			buttons: [
				{ extend: 'print', className: 'btn btn-outline-default btn-sm ms-2' },
				{ extend: 'csv', className: 'btn btn-outline-default btn-sm' }
			],
			select:true,
			
		});
		
		return function cleanUp() {
			if (tableRef.current) {
				tableRef.current.destroy();
			}
		};
		
		// eslint-disable-next-line
	}, []);
	
	return (
		
		<div className="container container_xl">
			<div className="row">
				<div className="col-xl-12">
					<div className="row">
					<div className="col-xl-3 change_classs" id="etiqueta">
						<Card className="Justify-content-center">
							<CardBody className="Justify-content-center body_card_p">
								<div className="scan">
								
									<div className="qrcode"></div>									
									<div className="border">
									<button className="craneo"></button> 
									</div>
									
								</div>
								
				        	</CardBody>
						</Card>
					</div>
						<div className="col-xl-6 change_classs">														
							<div id="datatable" className="mb-5 datatable">
								<Card>
								    
									<CardBody>
									<h6 >Listado de pacientes</h6>
										<Table_a  eventClick={(e)=>selectClick(e)
							}>

										</Table_a>
									</CardBody>
					
								</Card>
							</div>
						</div>
					
						{

						
						 
						 (selectitem != 0) ?

						 <>
						 {
							 
							 Detail_Pacientes.map(
							
								detail =>
								detail.id == selectitem && (
									
								<div className="col-xl-3" id="root">
								<div class="card-body ">
									<div class="row no-gutters">
										<div className="mb-4 change_class">					
										<Card className="change_classse">
											<CardBody className="Justify-content-center">																		
												<img className="img_p_e change_class col-auto  text-center" src={detail.img} alt="" />  										
											</CardBody>									
										</Card>  
									   </div>                           
									<div className="mb-12 change_class">
									   <Card className="change_classse">
											   <CardBody className="Justify-content-center">
												<div class="small text-inverse text-opacity-50 col-auto p-1 text-center">{detail.nombre}</div>
												<div class="h-28px fs-13px overflow-hidden mb-n1 col-auto p-1 text-center">Edad: {detail.edad}</div>
												<div class="h-28px fs-13px overflow-hidden mb-n1 col-auto p-1 text-center">GRUPO DE EDAD: {detail.grupo_edad}</div>
												<div class="h-28px fs-13px overflow-hidden mb-n1 col-auto p-1 text-center">CEDULA: {detail.cedula}</div>
												<div class="h-28px fs-13px overflow-hidden mb-n1 col-auto p-1 text-center">FACTURA #: {detail.nfactura}</div>
												<div class="h-28px fs-13px overflow-hidden mb-n1 col-auto p-1 text-center">{detail.examen}</div>
												<div class="h-28px fs-13px overflow-hidden mb-n1 col-auto p-1 text-center">MODALIDAD: {detail.modalidad}</div>
												<div class="h-28px fs-13px overflow-hidden mb-n1 col-auto p-1 text-center">SERIES / IMAGENES: {detail.series}</div>
												<div class="h-40px fs-13px overflow-hidden mb-n1 button_bar_e  col-auto p-1 text-center"><a href="#/" class="btn btn-sm btn-outline-theme fs-10px button_me">Ver estudio</a><a href="#/" class="btn btn-sm btn-outline-theme fs-10px button_me">Ver en weasis</a><a href="#/" class="btn btn-sm btn-outline-theme fs-10px button_me">Ver en horos</a></div>
												<div class="h-35px fs-13px overflow-hidden mb-n1  col-auto p-1 text-center">HISTORIA CLINICA</div>
												<div class="h-40px fs-13px overflow-hidden mb-n1  col-auto p-1 text-center"> <a href="#/" class="btn btn-sm btn-outline-theme fs-11px button_met">Cargar</a></div>
												<div class="h-35px fs-13px overflow-hidden mb-n1   col-auto p-2 text-center">GESTIÓN DE REPORTES</div>
												<div class="h-28px fs-13px overflow-hidden mb-n1  text_e col-auto p-1 text-center">ESTADO: {detail.estado}</div>
												<div class="h-28px fs-13px overflow-hidden mb-n1  text_e col-auto p-1 text-center">REPORTADO POR: {detail.doctor}</div>
												<div class="h-40px fs-13px overflow-hidden mb-n1 textbuttonp  col-auto p-1 text-center"><a href="#/" class="btn btn-sm btn-outline-theme fs-11px button_met">Ver Reportes</a></div>
												<div class="h-28px fs-13px overflow-hidden mb-n1  text_e col-auto p-1 text-center">PACIENTE USO REPORTE DIGITAL: {detail.reporte_digital}</div>
												<div class="h-28px fs-13px overflow-hidden mb-n1  text_e col-auto p-1 text-center">FECHA PACIENTE CONSULTO: {detail.fecha_paciente}</div>
												<div class="h-40px fs-13px overflow-hidden mb-n1 col-auto p-1 text-center">ENTREGA DE IMAGENES Y REPORTES</div>
												<div class="h-40px fs-13px overflow-hidden mb-n1  buttontwoe col-auto p-1 text-center"><a href="#/" class="btn btn-sm btn-outline-theme fs-11px button_me">CODIGO QR</a><a href="#/" class="btn btn-sm btn-outline-theme fs-11px ">ENVIAR EMAIL</a></div>
												<div class="h-40px fs-13px overflow-hidden mb-n1 text_adapt col-auto  text-center"> <a href="#/" class="btn btn-sm btn-outline-theme fs-11px button_met buttoncentral5">DESTINO DICOM</a></div>
											</CardBody>
										</Card>
									</div>										
										</div>
									</div>
								</div>
								)
								)
						 }
						
						 </>

						
						 
						
						 :
						 
						 <>
						   <div className="change_classse"></div>
						   <div className="change_classse"></div>
						   
						 </>
						

						 
						}	
					</div>
				</div>
			</div>
		</div>
	)
}
export default Pages_Estudies_List;