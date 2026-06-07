/**
 * Utils.js
 * helpers pour les fonctions de base
 */

import fs from 'fs/promises'

//charger un json
export async function loadJson(path) {
	console.log('load json ' + path)
	try {
		const content = await fs.readFile(path, 'utf8')
		return JSON.parse(content)
	}
	catch(error) {
		console.log('can\'t read file')
		if (error.code === 'ENOENT') {
			return null
		}

		throw error
	}
}

//charger un txt
export async function loadText(path) {
	try {
        const content = await fs.readFile(path, 'utf8')
        return content
    }
    catch(error) {
        console.log('can\'t read file')
        if (error.code === 'ENOENT') {
            return null
        }

        throw error
    }
}

//remplacer le contenu dans un texte par les valeurs de datas
export function replaceTemplate(template, data) {
	return template.replace(
		/\{([a-zA-Z0-9_.]+)\}/g,
		(match, path) => {
			const value = path
				.split('.')
				.reduce((obj, key) => obj?.[key], data);

			if (value === undefined) {
				return match;
			}

			if (Array.isArray(value)) {
				return value.join(', ');
			}

			return value;
		}
	);
}