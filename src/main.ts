import { createSSRApp } from "vue";
import { Button } from 'vant'
import 'vant/lib/index.css';
import './common.scss'
import App from "./App.vue";
import 'amfe-flexible'
export function createApp() {
	const app = createSSRApp(App);
	app.use(Button)
	return {
		app,
	};
}