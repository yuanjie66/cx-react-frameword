import React from 'react'
import { Routes, Route } from 'react-router-dom'

export const RouteWithSubRoutes = ({ routes }) => {
    const renderRoutes = _routes => {
        return _routes.map((route, i) => {
            return (
                <Route key={i} exact={route.exact} path={route.path} element={<route.element />}>
                    {route.children ? renderRoutes(route.children) : <></>}
                </Route>
            )
        })
    }

    return <Routes>{renderRoutes(routes)}</Routes>
}
