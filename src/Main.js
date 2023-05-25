import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './App';

const TeamOne = lazy(() => import('TEAM_ONE/app'));
const TeamTwo = lazy(() => import('TEAM_TWO/app'));

const ROUTES = [
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/team-one',
		element: <TeamOne />,
	},
	{
		path: '/team-two',
		element: <TeamTwo />,
	},
];

export default function Main() {
	return (
		<Routes>
			{ROUTES?.map((item) => {
				return <Route index path={item?.path} element={<Suspense fallback={<span>Loading...</span>}>{item?.element}</Suspense>} />;
			})}
		</Routes>
	);
}
