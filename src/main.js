import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/router'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import {
    faXmark,
    faPlus,
    faArrowRight,
    faClipboardQuestion,
    faCloudArrowDown,
    faCloudArrowUp,
} from '@fortawesome/free-solid-svg-icons'
import {
    faInstagram,
    faVk,
    faGithub
} from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faXmark, faPlus, faArrowRight, faClipboardQuestion, faCloudArrowDown,
    faCloudArrowUp, faInstagram, faVk, faGithub)

const app = createApp(App);

app
    .component('FontAwesomeIcon', FontAwesomeIcon)
    .use(router)
    .mount('#app')
