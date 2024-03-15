import Table_Pacientes from '../../assets/data/table_pacientes/table_pacientes.json';
import React, { memo } from 'react';

const Table_a = ({  eventClick }) => {
    console.log("child render");
    return (
<>
<table id="datatableDefault"  className="table text-nowrap w-100 ">
											<thead>
												<tr>													
													<th>Fecha</th>
													<th>Paciente</th>
													<th>Estado</th>
													<th>Estudio</th>
													<th>Tipo</th>
													<th>Institución</th>
												</tr>
											</thead>
											<tbody>
                                                {
                                                    Table_Pacientes.map(item=>(
                                                <tr key={item.id} >
													<td >{item.Fecha}</td>
                                                    <td className='td_ef'><a href="#" onClick={()=>eventClick(item.id)} >{item.Nombre}</a></td>
                                                    <td className='td_ef'>{item.Estado}</td>
                                                    <td className='td_ef'>{item.Estudio}</td>
                                                    <td className='td_ef'>{item.Tipo}</td>
                                                    <td >{item.Institucion}</td>
                                                </tr>	
                                                ))
                                                }									
											</tbody>
</table>

</>
);
};
export default memo(Table_a);