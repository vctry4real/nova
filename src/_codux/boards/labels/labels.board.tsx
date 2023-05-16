import { createBoard } from '@wixc3/react-board';
import { Labels } from '../../../components/labels/labels';

export default createBoard({
    name: 'Labels',
    Board: () => <Labels> </Labels>
});
