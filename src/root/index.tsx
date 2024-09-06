import React from 'react';
import {Outlet, useNavigate} from 'react-router-dom';
import {Menu, MenuProps} from 'antd';
import {PieChartOutlined, DesktopOutlined} from '@ant-design/icons';
import {MenuInfo} from 'rc-menu/lib/interface';
import {RouteUris} from '@/router/config';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
	{key: RouteUris.Page1, icon: <PieChartOutlined />, label: 'Page 1'},
	{key: RouteUris.Page2, icon: <DesktopOutlined />, label: 'Page 2'},
];

const Root: React.FC = (props) => {
	const navigate = useNavigate();

	const onClick = ({key}: MenuInfo) => {
		navigate(key);
	};

	return (
		<>
			<div className='flex h-full'>
				<div className='w-[240px] bg-[#011529]'>
					<Menu
						defaultSelectedKeys={['1']}
						defaultOpenKeys={['sub1']}
						mode='inline'
						theme='dark'
						items={items}
						onClick={onClick}
					/>
				</div>

				<div className='flex-1 bg-gray-100'>
					<Outlet />
				</div>
			</div>
		</>
	);
};

export default Root;
