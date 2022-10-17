import React, {useContext} from 'react'
import {Route, Routes} from "react-router-dom"
import {authRoutes, publicRoutes} from "../routes"
import Shop from "../pages/Shop"
import {Context} from "../index"

const AppRouter = () => {

	const {user} = useContext(Context)

	return (
			<Routes>
				{user.isAuth && authRoutes.map(({path, element}) =>
					<Route key={path} path={path} element={element}/>
				)}
				{publicRoutes.map(({path, element}) =>
					<Route key={path} path={path} element={element}/>
				)}
				<Route path={'/*'} element={<Shop/>}/>
			</Routes>
	)
}

export default AppRouter