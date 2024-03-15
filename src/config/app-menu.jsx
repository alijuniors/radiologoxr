const Menu = [
	{ is_header: true, title: 'Navegación' },
	{ path: '/dashboard', icon: 'bi bi-cpu', title: 'Inicio' },
	{ path: '/email', icon: 'bi bi-people-fill', title: 'LISTADO DE PACIENTES',
		children: [
			{ path: '/email/inbox', title: '- Mis Casos Pendientes' }, 
			{ path: '/email/compose', title: '- Casos de Hoy' }, 
			{ path: '/email/detail', title: '- Casos de Ayer' },
			{ path: '/email/inbox', title: '- Casos de Esta Semana' }, 
			{ path: '/email/compose', title: '- Casos de Este Mes' }, 
			{ path: '/email/detail', title: '- Ultimos 2 dias Asignados' },
			{ path: '/email/inbox', title: '- Ultimos 2 dias Vistos' }, 
			{ path: '/email/compose', title: '- Ultimos 2 dias Informados' }
		]
	}, 
	{ path: '/map', icon: 'bi bi-envelope', title: 'Chat / Mensajeria' },
	{ path: '/map', icon: 'bi bi-calendar3', title: 'Calendario / Agenda' }, 
	{ path: '/map', icon: 'bi bi-file-bar-graph-fill', title: 'Mis Finanzas' }, 
	
	{ is_divider: true }, 
	{ is_header: true, title: 'Usuarios' }, 
	{ path: '/profile', icon: 'bi bi-people', title: 'Mi Perfil' }, 
	{ path: '/settings', icon: 'bi bi-gear', title: 'Configuración' }, 
	{ path: '/calendar', icon: 'bi bi-arrow-up-circle-fill', title: 'Cargar Estudio Manual' }, 	
	{ path: '/helper', icon: 'bi bi-patch-question-fill',	title: 'Ayuda y Soporte Tecnico' }
];

export default Menu;