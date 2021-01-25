import React from 'react';
import {Link} from 'gatsby';
import styled from '@emotion/styled';


const Nav =  styled.nav`
    display: flex;
    justify-content: center;
    padding-bottom: 3rem;

    @media (min-width: 768px){
        padding-bottom: 0;

    }
`;

const NavLink = styled(Link)`
    color: #FFFFFF;
    font-family: 'PT Sans', sans-serif;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1rem;
    margin-right: 1rem;
    padding: 1rem;
    text-decoration: none;

    &:last-of-type{
        margin-right: 0;
    }
    &.pagina-actual{
        border-bottom: 2px solid #FFFFFF;
    }



`;

const Navegacion = () => {
    return (  
        <Nav>
            <NavLink 
                to={'/'}
                activeClassName="pagina-actual"
            >Inicio</NavLink>
            <NavLink 
                to={'/nosotros'}
                activeClassName="pagina-actual"
            >Nosotros</NavLink>
        </Nav>
    );
}
 
export default Navegacion;