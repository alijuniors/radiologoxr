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
require('../../components/maphilight/jquery.maphilight.js');
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


function over_craneo(e)
{   
	document.getElementById("titulo").innerHTML="CRANEO";
	document.getElementById("contenido").innerHTML="El cráneo está constituido por ocho huesos: Dos parietales, dos temporales, un frontal, un occipital, un esfenoides y un etmoides. Estos huesos al articularse entre si conforman en conjunto una estructura craneal de forma ovoidal, lo que determina un polo anterior (frontal) más estrecho y un polo posterior";
}
function over_hombro(e)
{   
	document.getElementById("titulo").innerHTML="HOMBROS";
	document.getElementById("contenido").innerHTML="Los tres huesos que forman la articulación del hombro son la clavícula, la escápula (omóplato) y el húmero (el hueso largo del brazo).";
}
function over_torax(e)
{   
	document.getElementById("titulo").innerHTML="TORAX";
	document.getElementById("contenido").innerHTML="El Torax esta compuesto por: 24 costillas (2 grupos de 12), que están unidas a un hueso largo y plano ubicado en el centro del pecho llamado esternón, doce vértebras torácicas. El mediastino está ubicado centralmente y está limitado por dos cavidades pleurales lateralmente.";
}
function over_brazo(e)
{   
	document.getElementById("titulo").innerHTML="BRAZOS";
	document.getElementById("contenido").innerHTML="El brazo está compuesto por tres huesos: Un hueso de la parte superior del brazo llamado: (húmero) y Dos huesos del antebrazo llamados (cúbito y radio). El término “brazo roto” puede referirse a la fractura de cualquiera de estos tres huesos.";
}
function over_mano(e)
{   
	document.getElementById("titulo").innerHTML="MANOS";
	document.getElementById("contenido").innerHTML="Cada mano posee 27 huesos, 8 en el carpo, 5 metacarpianos y un total de 14 falanges, los falanges son los 14 huesos que se encuentran en los dedos de cada mano y también en los dedos de cada pie. Cada dedo tiene 3 falanges (distal, media y proximal). El pulgar solo tiene 2 falanges.";
}
function over_cervical(e)
{   
	document.getElementById("titulo").innerHTML="COLUMNA CERVICAL";
	document.getElementById("contenido").innerHTML="La columna cervical comienza en la base del cráneo. Siete son las vértebras que componen la columna cervical, además de ocho pares de nervios cervicales. Cada vértebra cervical se denomina C1, C2, C3, C4, C5, C6 y C7. Los nervios cervicales también se abrevian desde C1 hasta C8.";
}
function over_toracica(e)
{   
	document.getElementById("titulo").innerHTML="COLUMNA DORSAL TORACICA";
	document.getElementById("contenido").innerHTML="Existen 12 vértebras torácicas (denominadas T1-T12) en el cuerpo humano, estas se encuentran entre las vértebras cervicales y lumbares, en general tienden a ser más grandes que las vértebras cervicales pero más pequeñas que las lumbares. Cada una de las 12 vértebras torácicas posee un par de costillas unidas a ellas.";
}
function over_lumbar(e)
{   
	document.getElementById("titulo").innerHTML="COLUMNA LUMBAR";
	document.getElementById("contenido").innerHTML="Existen 5 Vertebras Lumbares (denominadas L1-L5) en el cuerpo humano la parte baja de la espalda, es la tercera región principal de la columna. La mayoría de las personas tienen Cinco huesos o vértebras en la columna lumbar, a pesar de que es común encontrar personas con Seis.";
}
function over_sacro(e)
{   
	document.getElementById("titulo").innerHTML="REGION SACRO";
	document.getElementById("contenido").innerHTML="La región sacra (sacro) se encuentra en la parte inferior de la columna vertebral y se encuentra entre el quinto segmento de la columna lumbar (L5) y el cóccix (coxis). El sacro es un hueso de forma triangular y consta de cinco segmentos (S1-S5) que están fusionados entre sí.";
}
function over_coxis(e)
{   
	document.getElementById("titulo").innerHTML="COXIS";
	document.getElementById("contenido").innerHTML="El cóccix, también conocido como coxis, es un pequeño hueso triangular compuesto de una cantidad variable (usualmente 3-4) de vértebras, conocidas como vértebras coccígeas. Corresponde a la última porción de la columna vertebral y contribuye a formar los límites de la pelvis menor o verdadera.";
}
function over_pelvis(e)
{   
	document.getElementById("titulo").innerHTML="PELVIS";
	document.getElementById("contenido").innerHTML="La función principal de la Pelvis, es sostener los órganos pélvicos (vejiga y uretra, útero y vagina; y recto) en la posición adecuada porque de ello depende su normal funcionamiento. La Pelvis consta de 3 huesos: el Ilion, el Isquion y el Pubis. Estos tres huesos también son llamados huesos de la pelvis, huesos coxales o huesos innominados. Existen 4 Tipos de pelvis: Ginecoide, Androide, Antropoide y Platipeloide.";
}
function over_pierna(e)
{   
	document.getElementById("titulo").innerHTML="FEMUR / PIERNA";
	document.getElementById("contenido").innerHTML="La pierna según su concepto anatómico posee estos 4 huesos: Tibia, Peroné, Rótula y Fémur. En posición proximal, la tibia de la pierna se articula con el fémur del muslo por medio de la articulación de la rodilla. En posición distal, la tibia y el peroné de la pierna se articulan con el hueso astrágalo del pie mediante la articulación del tobillo.";
}
function over_pie(e)
{   
	document.getElementById("titulo").innerHTML="PIE";
	document.getElementById("contenido").innerHTML="El pie es la porción terminal del miembro inferior, cuya función principal es soportar el peso y facilitar la locomoción. El pie consta de 26 huesos, incluidos los huesos del tarso, huesos metatarsianos y falanges. Los huesos del pie forman arcos longitudinales y transversales y están soportados por varios músculos, ligamentos y tendones que permiten flexibilidad, así como soporte dinámico y estático.";
}
function over_cuerpo(e)
{   
	document.getElementById("titulo").innerHTML="DESCRIPCION OSEA DEL CUERPO HUMANO:";
	document.getElementById("contenido").innerHTML="El esqueleto humano consta de 206 huesos. Se agrupan en: Esqueleto axial: formado por 80 huesos. De la cabeza, cuello y tronco. Esqueleto Apendicular: formado por 126 huesos.";
}
function Pages_Estudies_List(){

	$(".partes").on("click", function(e){
		e.preventDefault();
	   var value = $(this).attr('value');
	   alert(value);
	})

	$(function() {
		$('.map').maphilight({
			fill: true,
			fillColor: '044572',
			fillOpacity: 0.2,
			stroke: true,
			strokeColor: '044572',
			strokeOpacity: 4,
			strokeWidth: 1,
			fade: true,
			alwaysOn: false,
			neverOn: false,
			groupBy: false,
			wrapClass: true,
			shadow: false,
			shadowX: 0,
			shadowY: 0,
			shadowRadius: 6,
			shadowColor: '000000',
			shadowOpacity: 0.1,
			shadowPosition: 'outside',
			shadowFrom: true
	});
	});
    
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
		if((width >= 300) && (width < 1279)){
			var div = document.getElementById('etiqueta');
			if(div !== null){
				while (div.hasChildNodes()){
					div.removeChild(div.lastChild);
				}
			}
		}	
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
							    <div class="mapa_imagen">									
								<div className="scan" >								
									<div className="qrcode" >
									</div>									
									<div className="border" >
									<ul class="notas">
    											<li id="nota1"><button class="craneo" href="#" title="Craneo"  onMouseOver={over_craneo}  onMouseOut={over_cuerpo}></button> </li>
    											<li id="nota2"><button class="cervical" href="#" title="Columna cervical" onMouseOver={over_cervical} onMouseOut={over_cuerpo}></button></li>
												<li id="nota3"><button class="torax" href="#" title="Columna dorsal/toracica" onMouseOver={over_torax} onMouseOut={over_cuerpo}></button></li>
												<li id="nota4"><button class="brazoi" href="#" title="Brazo izquierdo"  onMouseOver={over_brazo}onMouseOut={over_cuerpo}></button></li>
												<li id="nota5"><button class="brazod" href="#" title="Brazo derecho" onMouseOver={over_brazo} onMouseOut={over_cuerpo}></button></li>
												<li id="nota6"><button class="manod" href="#" title="Mano izquierda" onMouseOver={over_mano} onMouseOut={over_cuerpo}></button></li>
												<li id="nota7"><button class="manoi" href="#" title="Mano derecha" onMouseOver={over_mano} onMouseOut={over_cuerpo}></button></li>																								
												<li id="nota8"><button class="pelvisi" href="#" title="Pelvis" onMouseOver={over_pelvis} onMouseOut={over_cuerpo}></button></li>
												<li id="nota9"><button class="piernai" href="#" title="Pierna izquierda" onMouseOver={over_pierna} onMouseOut={over_cuerpo}></button></li>
												<li id="nota10"><button class="piernad" href="#" title="Pierna derecha" onMouseOver={over_pierna} onMouseOut={over_cuerpo}></button></li>
												<li id="nota11"><button class="piei" href="#" title="Pie izquierdo" onMouseOver={over_pie} onMouseOut={over_cuerpo}></button></li>
												<li id="nota12"><button class="pied" href="#" title="Pie derecho" onMouseOver={over_pie} onMouseOut={over_cuerpo}></button></li>
												<li id="nota13"><button class="hombroi" href="#" title="Hombro izquierdo" onMouseOver={over_hombro} onMouseOut={over_cuerpo}></button></li>
												<li id="nota14"><button class="hombrod" href="#" title="Hombro derecho" onMouseOver={over_hombro} onMouseOut={over_cuerpo}></button></li>
												<li id="nota15"><button class="lumbar" href="#" title="Columna lumbar" onMouseOver={over_lumbar} onMouseOut={over_cuerpo}></button></li>
												<li id="nota16"><button class="sacro" href="#" title="Región Sacro" onMouseOver={over_sacro} onMouseOut={over_cuerpo}></button></li>
												<li id="nota17"><button class="coxis" href="#" title="Coxis" onMouseOver={over_coxis} onMouseOut={over_cuerpo}></button></li>
  											</ul>	
									</div>									
								</div>
								</div>	
								
				
				        	</CardBody>

						</Card>
						<Card className="Justify-content-center">
							<CardBody className="Justify-content-center body_card_p">
                              <h5><div id="titulo">DESCRIPCION OSEA DEL CUERPO HUMANO:</div></h5>
							  <div id="contenido">El esqueleto humano consta de 206 huesos. Se agrupan en: Esqueleto axial: formado por 80 huesos. De la cabeza, cuello y tronco. Esqueleto Apendicular: formado por 126 huesos.</div>
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
												<div class="h-28px  fs-13px overflow-hidden mb-n1 col-auto p-1 text-center">{detail.examen}</div>
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