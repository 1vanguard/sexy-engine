import * as serviceWorker from './serviceWorker'
import {rerender} from './render'
import state from './redux/state'

rerender(state)

serviceWorker.unregister();