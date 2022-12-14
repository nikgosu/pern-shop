import React from 'react'
import {Button, Card, Container, Form} from "react-bootstrap"
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts"
import {NavLink, useLocation} from "react-router-dom"

const Auth = () => {
	const location = useLocation()
	const isLogin = location.pathname === LOGIN_ROUTE

	console.log(location)
	return (
		<Container
			className={'d-flex justify-content-center align-items-center'}
			style={{height: window.innerHeight - 54}}
		>
			<Card style={{width: 600}} className={'p-5'}>
				<h2 className={'m-auto'}>{isLogin ? 'Authorization' : 'Registration'}</h2>
				<Form className={'d-flex flex-column'}>
					<Form.Control
						className={'mt-3'}
						placeholder={'Input your email...'}
					/>
					<Form.Control
						placeholder={'Input password...'}
						className={'mt-3'}
					/>
					<Form className={'d-flex justify-content-between mt-3 pl-3 pr-3'}>
						{isLogin ?
							<div>
								Don't have account? <NavLink to={REGISTRATION_ROUTE}>Register!</NavLink>
							</div>
							:
							<div>Already have account? <NavLink to={LOGIN_ROUTE}>Login!</NavLink></div>
						}
						<Button
							variant={'outline-success'}
						>
							{isLogin ? 'Login' : 'Register'}
						</Button>
					</Form>
				</Form>
			</Card>
		</Container>
	)
}

export default Auth