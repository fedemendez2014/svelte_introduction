import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Federico',
		lastname: 'Mendez'
	}
});

export default app;