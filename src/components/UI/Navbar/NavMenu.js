import React from 'react'
import { isMobile } from '../../../helpers/device-size'
import { Dropdown } from '../Dropdown/Dropdown'
import { LinkGroup } from '../Dropdown/LinkGroup'
import { Navlink } from '../Dropdown/Navlink'
import { MenuCanvas } from './Offcanva-Mobile/MenuCanvas'
import { MenuCanvasOption } from './Offcanva-Mobile/MenuCanvasOption'
import { MenuCanvasSection } from './Offcanva-Mobile/MenuCanvasSection'

export const NavMenu = ({route, icon}) => {

    const { name, routes, path } = route;

    return (
        <li className="nav-item">
            {
                ( !isMobile() )
                ?
                    <Dropdown name={name} icon={icon}>
                        {
                            routes.map(({id, name, sub_path, paths})=> (
                                <LinkGroup title={(name) && name} key={id}>
                                    {
                                        paths.map(({id, name, path: to}) => (
                                            <Navlink to={`${path}${(sub_path) ? sub_path : ""}${to}`} key={id}>
                                                {name}
                                            </Navlink>
                                        ))
                                    }
                                </LinkGroup>
                            ))
                        }
                    </Dropdown>
                :
                <MenuCanvas name={name} icon={icon}>
                    {
                        routes.map(({id, name, sub_path, paths})=> (
                            <MenuCanvasSection name={(name) && name} key={id}>
                                {
                                    paths.map(({id, name, path: to}) => (
                                        <MenuCanvasOption to={`${path}${(sub_path) ? sub_path : ""}${to}`} key={id}>
                                            {name}
                                        </MenuCanvasOption>
                                    ))
                                }
                            </MenuCanvasSection>
                        ))
                    }
                </MenuCanvas>
            }
        </li>
    )
}
