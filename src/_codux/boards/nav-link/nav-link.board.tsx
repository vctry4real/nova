import { createBoard } from '@wixc3/react-board';
import { NavLink } from '../../../components/nav-link/nav-link';

export default createBoard({
    name: 'NavLink',
    Board: () => <NavLink></NavLink>
});
