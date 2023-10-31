import { createApp } from 'vue'
import App from './App'
import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/css'

createApp(App).use(createVuestic()).mount('#app')
