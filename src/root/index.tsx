import React from 'react';
import {Outlet} from 'react-router-dom';
import {Link} from 'react-router-dom';

const Root: React.FC = (props) => {
	return (
		<>
			<header className='p-[20px] text-[20px] bg-[#ddd] [&_*]:pr-[20px]'>
				<Link to={'/page1'}>
					<button>Page1</button>
				</Link>
				<Link to={'/page2'}>
					<button>Page2</button>
				</Link>
			</header>
			<Outlet />
		</>
	);
};

export default Root;
