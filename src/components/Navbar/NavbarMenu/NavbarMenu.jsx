import React from 'react';
import items from './items';
import { List } from './NavbarMenu.styled';
import NavbarMenuItem from './NavbarMenuItem/NavbarMenuItem';

export default function NavbarMenu() {
    return (
        <List>
            {
            items.map(({ id, to, text, icon }) => (
                <NavbarMenuItem
                    key={id}
                    id={id}
                    to={to}
                    text={text}
                    Icon={icon}
                />
            ))}
        </List>
    );
};
