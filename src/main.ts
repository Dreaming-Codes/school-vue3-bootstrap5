import {createApp} from 'vue'
import "./scss/custom.scss"
import "bootstrap"

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
