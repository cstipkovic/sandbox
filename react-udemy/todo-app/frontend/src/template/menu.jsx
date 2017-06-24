import React from 'react'

export default props => (
	<nav className="navbar navbar-inverse bg-inverse">
		<div className="container">
			<div className="navbar-header">
				<a className="navbar-brand" href="#">
					<i className="fa fa-calendar-check-o"></i> TodoApp
				</a>
			</div>
		</div>

		<div id="navbar" className="navbar-collapse collpase">
			<ul className="nav navbar">
				<li><a href="#/todos">Tarefas</a></li>
				<li><a href="#/about">Sobre</a></li>
			</ul>
		</div>
	</nav>
)
