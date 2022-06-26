import React, { useState } from 'react';
import { BiHomeAlt, BiInfoCircle, BiMenu, BiMoviePlay } from 'react-icons/bi';
import Navitem from './Navitem';

const defaultSize = '1.875rem';
const items = [
    { label: 'Home', icon: <BiHomeAlt size={defaultSize} />, active: true },
    { label: 'Movies', icon: <BiMoviePlay size={defaultSize} /> },
    { label: 'About', icon: <BiInfoCircle size={defaultSize} /> },
];

const NavItemsContainer = () => (
    <>
        {items.map((item, index) => (
            <Navitem item={item} key={index} />
        ))}
    </>
);

const Index = () => {
    const [isNavMenuMobileOpen, setisNavMenuMobileOpen] = useState(false);

    const open = () => {
        setisNavMenuMobileOpen(!isNavMenuMobileOpen);
    };

    return (
        <nav className='col-span-1 bg-cyan-200'>
            <div className='flex mx-4 justify-between items-center md:block'>
                <h4 className='uppercase font-bold text-primary py-4 border-b border-primary text-right text-2xl'>Phimmoi.net</h4>
                <BiMenu className='md:hidden cursor-pointer' size={defaultSize} onClick={open} />
            </div>

            <ul className={`mx-4 my-2 ${isNavMenuMobileOpen ? '' : 'hidden'} md:block`}>
                <NavItemsContainer />
            </ul>
        </nav>
    );
};

export default Index;
