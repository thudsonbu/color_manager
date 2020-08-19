import { DRAWER_WIDTH } from '../constants';
import sizes from './sizes';

export default theme => ({
    button: {
        [sizes.down("sm")]: {
            width: "100%",
            height: "57px",
        }
    },
    textInput: {
        width: "100%",
    }
})
