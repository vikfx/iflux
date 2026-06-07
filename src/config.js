/**
 * Config.js
 * recupération des données de config
 */
import {loadJson} from './utils.js' 

// SETTINGS
export const settings =
	await loadJson('datas/config/settings.json')
	?? await loadJson('datas/config/settings.example.json');

// // PROMPT
// export const prompt =
// 	loadText('./config/prompts/query.txt') ||
// 	loadText('./config/prompts/query.example.txt')