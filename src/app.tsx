import React from 'react';
import {HashRouter} from 'react-router-dom';
import {routes} from '@/router/router';
import {RouteWithSubRoutes} from './router/render-routes';

const App: React.FC = (props) => {
	return (
		<main className='w-full h-full'>
			<HashRouter>
				<RouteWithSubRoutes routes={routes} />
			</HashRouter>
		</main>
	);
};

export default App;
