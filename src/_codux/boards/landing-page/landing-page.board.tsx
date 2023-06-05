import { createBoard } from '@wixc3/react-board';
import { LandingPage } from '../../../components/landing-page/landing-page';

export default createBoard({
    name: 'LandingPage',
    Board: () => <LandingPage />,
    environmentProps: {
        canvasWidth: 1271,
        windowWidth: 1292,
    },
});
