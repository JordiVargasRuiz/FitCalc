import { spawn } from 'child_process';
import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import css from 'rollup-plugin-css-only';

const production = !process.env.ROLLUP_WATCH;

function serve() {
	let server;

	function toExit() {
		if (server) server.kill(0);
	}

	return {
		writeBundle() {
			if (server) return;
			server = spawn('npm', ['run', 'start', '--', '--dev'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			});

			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		}
	};
}

export default {
	input: 'src/main.js',
	output: {
	  sourcemap: true,
	  format: 'iife',
	  name: 'app',
	  file: 'public/build/bundle.js',
	},
	plugins: [
	  svelte({
		compilerOptions: {
		  // Habilitar verificaciones en tiempo de ejecución si no es producción
		  dev: !production
		}
	  }),
	  css({ output: 'bundle.css' }),
  
	  // Resolución de módulos
	  resolve({
		browser: true,
		dedupe: ['svelte'],
		exportConditions: ['svelte']
	  }),
	  commonjs(),
	  
	  // Si es desarrollo, ejecutar servidor local
	  !production && serve(),
	  !production && livereload('public'),
	  
	  // Minimizar código si es producción
	  production && terser()
	],
	watch: {
	  clearScreen: false
	},
	// Aquí agregamos la ruta base para GitHub Pages
	paths: {
	  base: '/FitCalc', // Asegúrate de que el nombre sea el correcto, coincide con tu repositorio
	}
  };
  