export interface Item {
    label: string;
    icon: JSX.Element;
    active?: boolean;
}
const Navitem = ({ item }: { item: Item }) => {
    return (
        <li className={`flex justify-end items-center cursor-pointer p-2 ${item.active ? 'bg-primary text-white' : ''}`}>
            <h3 className='text-3xl mr-2'>{item.label}</h3>
            {item.icon}
        </li>
    );
};

export default Navitem;
