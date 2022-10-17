import React, {useContext} from 'react'
import {Context} from "../index"
import {Button, Container, Nav, Navbar} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import {SHOP_ROUTE} from "../utils/consts"
import {observer} from "mobx-react-lite"

const NavBar = observer(() => {

	const {user} = useContext(Context)

	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<NavLink style={{color: 'white', textDecoration: 'none'}} to={SHOP_ROUTE}>Buy device</NavLink>
				{user.isAuth ?
					<Nav style={{color: 'white'}} className="ml-auto">
						<Button variant={"outline-light"}>Admin panel</Button>
						<Button
							variant={"outline-light"}
							className={'ms-2'}
							onClick={() => user.setIsAuth(false)}
						>
							Log out
						</Button>
					</Nav>
					:
					<Nav style={{color: 'white'}} className="ml-auto">
						<Button
							variant={"outline-light"}
							onClick={() => user.setIsAuth(true)}
						>
							Authorization
						</Button>
					</Nav>
				}
			</Container>
		</Navbar>
	)
})

export default NavBar