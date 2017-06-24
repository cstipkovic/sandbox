import React from 'react'
import { HashRouter, Route } from 'react-router-dom'

import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
	<HashRouter>
		<div>
			<Route path="/todos" component={Todo} />
			<Route path="/about" component={About} />
		</div>
	</HashRouter>
)
