/**
 * Search.js
 * controller pour le traitement de la partie recherche du pipeline
 */

import {settings} from '../config.js'
import {loadJson, loadText, replaceTemplate, saveJson} from '../utils.js'



//lancer les requetes
export async function searchAll(queries) {
	console.log(queries)

	// const output =  await Promise.all((queries.map((q) => searchQuery(q))))
	
	const output = [
		{
			"query": "le quiz comme outil de médiation scientifique et culturelle",
			"results": [
				{
					"title": "Une médiation culturelle en ligne ludique et percutante",
					"url": "https://www.leptitquiz.fr/fr/quiz/comment-proposer-une-mediation-culturelle-en-ligne-ludique-et-percutante",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Vous souhaitez faire découvrir un sujet/un programme culturel/une oeuvre de façon ludique et percutante. Nous avons le plaisir de vous présenter notre petit dernier : le quiz illustré. Ce nouveau format s’attache à répondre aux nouveaux enjeux de la médiation culturelle et de la fidélisation des publics :",
					"page_age": "2021-01-14T00:00:00",
					"profile": {
						"name": "Leptitquiz",
						"url": "https://www.leptitquiz.fr/fr/quiz/comment-proposer-une-mediation-culturelle-en-ligne-ludique-et-percutante",
						"long_name": "leptitquiz.fr",
						"img": "https://imgs.search.brave.com/4FEKy8RU2WSXGdIqPRQLrVwL6BXdittC0SIl5HcB_2Y/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYjUxYTQ1ZTFi/ZWIwZjYzYTVlYmYx/OWJiYjRiZTU2OTA3/NzVlOTY5NTllOTRl/OGNmOGYxN2VmMjEw/YWI5MzlkOC93d3cu/bGVwdGl0cXVpei5m/ci8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "leptitquiz.fr",
						"hostname": "www.leptitquiz.fr",
						"favicon": "https://imgs.search.brave.com/4FEKy8RU2WSXGdIqPRQLrVwL6BXdittC0SIl5HcB_2Y/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYjUxYTQ1ZTFi/ZWIwZjYzYTVlYmYx/OWJiYjRiZTU2OTA3/NzVlOTY5NTllOTRl/OGNmOGYxN2VmMjEw/YWI5MzlkOC93d3cu/bGVwdGl0cXVpei5m/ci8",
						"path": "› fr  › quiz  › comment-proposer-une-mediation-culturelle-en-ligne-ludique-et-percutante"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/FOwC2N3n1rgrRG61KuHBfwmdazPvgdu5MdbA7YI-_70/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9sZXB0/aXRxdWl6LmZyL2Zp/bGVzL2F0ZWxpZXIt/ZGFydC16b29tLWxk/LTItMV80ODgyYTc5/YjdmMWQ3MzBiZTU1/ZjQ0ZDA3NjM2Nzg4/Mi5wbmc",
						"original": "https://leptitquiz.fr/files/atelier-dart-zoom-ld-2-1_4882a79b7f1d730be55f44d076367882.png",
						"logo": false
					},
					"age": "January 14, 2021",
					"extra_snippets": [
						"Vous souhaitez faire découvrir un sujet/un programme culturel/une oeuvre de façon ludique et percutante. Nous avons le plaisir de vous présenter notre petit dernier : le quiz illustré. Ce nouveau format s’attache à répondre aux nouveaux enjeux de la médiation culturelle et de la fidélisation des publics :"
					]
				},
				{
					"title": "Quiz",
					"url": "https://www.plateforme-mediation-museale.fr/mediations/quiz",
					"is_source_local": false,
					"is_source_both": false,
					"description": "<strong>Des questions simples sur des data concernant la construction du chemin de fer, de train, et des datations associées</strong>. Il faut plus ou moins actionner la manette pour répondre aux questions. Le joueur à l’impression de conduire un train tout en apprenant des choses · Année de lancement : 2024",
					"profile": {
						"name": "Plateforme-mediation-museale",
						"url": "https://www.plateforme-mediation-museale.fr/mediations/quiz",
						"long_name": "plateforme-mediation-museale.fr",
						"img": "https://imgs.search.brave.com/BZGVhzO-vAjSd4FzlNOeCKi_6kbOoVe4DCpciA9LG5I/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYTUyMTU0OTA2/Y2YwZWU0MWVjYTJk/ZDBlOWQ2MTg3MGY3/M2JjMzQxYjExN2U1/Y2NlMmQ4MGYzNGY1/MWJiMTYzMC93d3cu/cGxhdGVmb3JtZS1t/ZWRpYXRpb24tbXVz/ZWFsZS5mci8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "article",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "plateforme-mediation-museale.fr",
						"hostname": "www.plateforme-mediation-museale.fr",
						"favicon": "https://imgs.search.brave.com/BZGVhzO-vAjSd4FzlNOeCKi_6kbOoVe4DCpciA9LG5I/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYTUyMTU0OTA2/Y2YwZWU0MWVjYTJk/ZDBlOWQ2MTg3MGY3/M2JjMzQxYjExN2U1/Y2NlMmQ4MGYzNGY1/MWJiMTYzMC93d3cu/cGxhdGVmb3JtZS1t/ZWRpYXRpb24tbXVz/ZWFsZS5mci8",
						"path": "› mediations  › quiz"
					},
					"article": {
						"author": []
					}
				},
				{
					"title": "Utiliser le jeu dans la médiation en IST https://coop-ist.cirad.fr 1",
					"url": "https://collaboratif.cirad.fr/alfresco/s/d/workspace/SpacesStore/30c7d09e-a6c2-4e42-8bcc-17764bb71a08/Coopist-utiliser-le-jeu-dans-la-mediation-20201506-fin.pdf",
					"is_source_local": false,
					"is_source_both": false,
					"description": "formidable canal de diffusion et de communication, même au stade d’initiation et dans des · contextes de mixité culturelle, par exemple à l’international ; ... le jeu convainc, il facilite la prise en compte par les participant.e.s de pratiques et de points de · vue différents. Par exemple, au cours du jeu Libérez la science : un jeu FAIR-play, les discussions · sur les types de licence et la visibilité de la production scientifique ont pu convaincre certains",
					"profile": {
						"name": "Cirad",
						"url": "https://collaboratif.cirad.fr/alfresco/s/d/workspace/SpacesStore/30c7d09e-a6c2-4e42-8bcc-17764bb71a08/Coopist-utiliser-le-jeu-dans-la-mediation-20201506-fin.pdf",
						"long_name": "collaboratif.cirad.fr",
						"img": "https://imgs.search.brave.com/a6TlpF17jnX6GU3qMCUe11Ki3NHlEk4aSEnmZqc6z_o/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZTRiMmY0ZWY5/OGEwYmRmMDQ2MjMw/NmFmNTRiYWY5ODhk/MzBjNWQ2MzA0N2Yz/ZDZlZWFmOGQ3NjE2/N2Q0MzgwMi9jb2xs/YWJvcmF0aWYuY2ly/YWQuZnIv"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "collaboratif.cirad.fr",
						"hostname": "collaboratif.cirad.fr",
						"favicon": "https://imgs.search.brave.com/a6TlpF17jnX6GU3qMCUe11Ki3NHlEk4aSEnmZqc6z_o/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZTRiMmY0ZWY5/OGEwYmRmMDQ2MjMw/NmFmNTRiYWY5ODhk/MzBjNWQ2MzA0N2Yz/ZDZlZWFmOGQ3NjE2/N2Q0MzgwMi9jb2xs/YWJvcmF0aWYuY2ly/YWQuZnIv",
						"path": "› alfresco  › s  › d  › workspace  › SpacesStore  › 30c7d09e-a6c2-4e42-8bcc-17764bb71a08  › Coopist-utiliser-le-jeu-dans-la-mediation-20201506-fin.pdf"
					},
					"content_type": "pdf",
					"extra_snippets": [
						"Le jeu pédagogique pour adultes est un excellent outil de médiation dans la formation et pour · le renforcement de capacités personnelles et collectives, et ce quelles que soient les cultures, les · âges, les positions sociales et catégories professionnelles. Tout le monde joue ou a joué à un moment · donné de sa vie, le jeu est ainsi un élément de langage commun.",
						"formidable canal de diffusion et de communication, même au stade d’initiation et dans des · contextes de mixité culturelle, par exemple à l’international ; ... le jeu convainc, il facilite la prise en compte par les participant.e.s de pratiques et de points de · vue différents. Par exemple, au cours du jeu Libérez la science : un jeu FAIR-play, les discussions · sur les types de licence et la visibilité de la production scientifique ont pu convaincre certains",
						"Notre lecture : ce jeu porte sur un outil particulier, donc il n’est pas réutilisable dans d’autres · contextes. Le principe d’un jeu pour découvrir un catalogue de bibliothèque est intéressant. L’université de Guyane (https://www.univ-guyane.fr/) a développé plusieurs jeux autour de · l’information scientifique et la gestion des données :",
						"Le.la médiateur.trice commence en présentant les objectifs et les règles du jeu."
					]
				},
				{
					"title": "Le grand quiz des petits savants | Espace Mendès France : culture & médiation scientifiques",
					"url": "https://emf.fr/45154/le-grand-quiz-des-petits-savants/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Nous sommes ravis de vous annoncer une activité estivale passionnante à ne pas manquer à l&#x27;Espace Mendès France : le grand quiz des petits savants !",
					"page_age": "2023-07-04T00:00:00",
					"profile": {
						"name": "Emf",
						"url": "https://emf.fr/45154/le-grand-quiz-des-petits-savants/",
						"long_name": "emf.fr",
						"img": "https://imgs.search.brave.com/Un_OiyJEe4vIoI0y23sb1NQmRsX1p7Iv7OaBg43YaSg/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMmQwMmZhYzJl/MWE5M2QyY2Y2MWI0/OWRmZGRjMzVhOGQ1/YzNmZDFlMmQyNTVk/NGNkMGVkMTlmYjRj/ODdiODM1Yy9lbWYu/ZnIv"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "emf.fr",
						"hostname": "emf.fr",
						"favicon": "https://imgs.search.brave.com/Un_OiyJEe4vIoI0y23sb1NQmRsX1p7Iv7OaBg43YaSg/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMmQwMmZhYzJl/MWE5M2QyY2Y2MWI0/OWRmZGRjMzVhOGQ1/YzNmZDFlMmQyNTVk/NGNkMGVkMTlmYjRj/ODdiODM1Yy9lbWYu/ZnIv",
						"path": "› 45154  › le-grand-quiz-des-petits-savants"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/6JO3x9TeeMoyRPbDJ6oxM6q2yOeEI6qXh1JwwCzmCWA/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9lbWYu/ZnIvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMDcvYWZmaWNo/ZV9CRC1zY2FsZWQu/anBn",
						"original": "https://emf.fr/wp-content/uploads/2023/07/affiche_BD-scaled.jpg",
						"logo": false
					},
					"age": "July 4, 2023",
					"extra_snippets": [
						"1. Commencez par scanner le QR code d’introduction pour obtenir toutes les informations sur le déroulement du jeu."
					]
				},
				{
					"title": "Médiation linguistique et communciation interculturelle - Quiz",
					"url": "https://wordwall.net/resource/65726269/m%C3%A9diation-linguistique-et-communciation-interculturelle",
					"is_source_local": false,
					"is_source_both": false,
					"description": "<strong>Une série de questions à choix multiple</strong>. Appuyez sur la bonne réponse pour continuer.. 1) Quel est l&#x27;élément le plus important dans la communication ?",
					"page_age": "2024-12-10T12:31:05",
					"profile": {
						"name": "WordWall",
						"url": "https://wordwall.net/resource/65726269/m%C3%A9diation-linguistique-et-communciation-interculturelle",
						"long_name": "wordwall.net",
						"img": "https://imgs.search.brave.com/XZqt2eXkmFsedKZ3ZbkPx8aEQpQgXMUwSgbCei3sXps/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOGIyNzAzYzQz/MWUwYmQ0NDFiMTFk/N2U4Nzc3NTE5YzA0/ZDAyOTQ2NzJjNTVh/OWIwZjQ3MWU1NzM4/ZGZkMTZlZC93b3Jk/d2FsbC5uZXQv"
					},
					"language": "en",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "creative_work",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "wordwall.net",
						"hostname": "wordwall.net",
						"favicon": "https://imgs.search.brave.com/XZqt2eXkmFsedKZ3ZbkPx8aEQpQgXMUwSgbCei3sXps/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOGIyNzAzYzQz/MWUwYmQ0NDFiMTFk/N2U4Nzc3NTE5YzA0/ZDAyOTQ2NzJjNTVh/OWIwZjQ3MWU1NzM4/ZGZkMTZlZC93b3Jk/d2FsbC5uZXQv",
						"path": "  › teaching resources  › educación secundaria obligatoria (eso)  › francés"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/vfHWAK6gI3mXnf2dBqwA3fl9hoeiu3ZnALnw8hltkwg/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9zY3Jl/ZW5zLmNkbi53b3Jk/d2FsbC5uZXQvODAw/L2UxM2RkNzViYTRm/NjQ2OTc5MTk3YzM4/NjYwYTQ3NDc5XzA",
						"original": "https://screens.cdn.wordwall.net/800/e13dd75ba4f646979197c38660a47479_0",
						"logo": false
					},
					"age": "December 10, 2024",
					"creative_work": {
						"name": "Médiation linguistique et communciation interculturelle",
						"thumbnail": {
							"src": "https://imgs.search.brave.com/vfHWAK6gI3mXnf2dBqwA3fl9hoeiu3ZnALnw8hltkwg/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9zY3Jl/ZW5zLmNkbi53b3Jk/d2FsbC5uZXQvODAw/L2UxM2RkNzViYTRm/NjQ2OTc5MTk3YzM4/NjYwYTQ3NDc5XzA",
							"original": "https://screens.cdn.wordwall.net/800/e13dd75ba4f646979197c38660a47479_0"
						}
					},
					"extra_snippets": [
						"Une série de questions à choix multiple. Appuyez sur la bonne réponse pour continuer.. 1) Quel est l'élément le plus important dans la communication ?",
						"Quiz is an open-ended template."
					]
				},
				{
					"title": "7 - Un exemple de jeu et ses apports dans la médiation en information scientifique / Utiliser le jeu dans la médiation en IST - Coopérer en information scientifique et technique - Cirad",
					"url": "https://coop-ist.cirad.fr/bibliotheques/utiliser-le-jeu-dans-la-mediation-en-ist/7-un-exemple-de-jeu-et-ses-apports-dans-la-mediation-en-information-scientifique",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Il diminue l’effort d’apprentissage ... et de communication, même au stade d’initiation et dans des contextes de mixité culturelle, par exemple à l’international ; le jeu convainc, il facilite la prise en compte par les participant.e.s de pratiques et de points de vue différents. Par exemple, au cours du jeu Libérez la science : un jeu FAIR-play, les discussions sur les types de licence et la visibilité de la production scientifique ont pu convaincre ...",
					"profile": {
						"name": "Coop-IST",
						"url": "https://coop-ist.cirad.fr/bibliotheques/utiliser-le-jeu-dans-la-mediation-en-ist/7-un-exemple-de-jeu-et-ses-apports-dans-la-mediation-en-information-scientifique",
						"long_name": "coop-ist.cirad.fr",
						"img": "https://imgs.search.brave.com/fEurDZkRVy6xoz9WT2DrY9Gskt7VjTEJ6vQJnhpjLuU/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYTI0ZWVkYTc5/Nzc4NzAwZjIzN2Qz/ZDYyOTczMDk5Y2Nj/NTk5MTFmOWE5MzIx/NGFiMDNhMmMzNmRj/NWRiNmRlMi9jb29w/LWlzdC5jaXJhZC5m/ci8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "coop-ist.cirad.fr",
						"hostname": "coop-ist.cirad.fr",
						"favicon": "https://imgs.search.brave.com/fEurDZkRVy6xoz9WT2DrY9Gskt7VjTEJ6vQJnhpjLuU/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYTI0ZWVkYTc5/Nzc4NzAwZjIzN2Qz/ZDYyOTczMDk5Y2Nj/NTk5MTFmOWE5MzIx/NGFiMDNhMmMzNmRj/NWRiNmRlMi9jb29w/LWlzdC5jaXJhZC5m/ci8",
						"path": "› bibliotheques  › utiliser-le-jeu-dans-la-mediation-en-ist  › 7-un-exemple-de-jeu-et-ses-apports-dans-la-mediation-en-information-scientifique"
					},
					"extra_snippets": [
						"Il diminue l’effort d’apprentissage et se révèle être un formidable canal de diffusion et de communication, même au stade d’initiation et dans des contextes de mixité culturelle, par exemple à l’international ; le jeu convainc, il facilite la prise en compte par les participant.e.s de pratiques et de points de vue différents. Par exemple, au cours du jeu Libérez la science : un jeu FAIR-play, les discussions sur les types de licence et la visibilité de la production scientifique ont pu convaincre certains participant-e-s des avantages du libre accès ;",
						"Boussou, C. ; Tio Babena, G. W. 2020. Utiliser le jeu dans la médiation en IST, en 8 points. Montpellier (FRA) : CIRAD, 6 p.",
						"formation sur le libre accès et la professionnalisation de revues scientifiques africaines organisée par le Grenier des savoirs ;",
						"séquence jouée avec des professionnel.le.s de l’information scientifique et technique pour clôturer une session de formation."
					]
				},
				{
					"title": "Atelier CST #16 : Mettre les sciences en jeux | ECHOSCIENCES - Grenoble",
					"url": "https://www.echosciences-grenoble.fr/articles/atelier-cst-16-sciences-jeux",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Mais comment allier les dimensions ludiques et pédagogiques ? Pour tenter de répondre à cette question, nous avons eu le plaisir d&#x27;accueillir Florian Delcourt, responsable de l&#x27;ingénierie culturelle﻿ chez S[cube], pour un atelier combinant mises en pratiques, jeux et théorie ! Une journée pour se questionner sur le médium que peut être l’expérience ludique pour la médiation scientifique, mais aussi sur la méthodologie de création et d’évaluation d’un outil de ce type.",
					"page_age": "2023-02-09T00:00:00",
					"profile": {
						"name": "ECHOSCIENCES",
						"url": "https://www.echosciences-grenoble.fr/articles/atelier-cst-16-sciences-jeux",
						"long_name": "echosciences-grenoble.fr",
						"img": "https://imgs.search.brave.com/sKmGkNUUNvkSBCjiWWJHKrXw4RpKlvNLY6_oSpyQMD8/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZjY2MzE3Zjhh/YzI1NzBkMDVkNzE2/ZDNiY2RhN2UwOWVl/NTFhMTYzMDk5ZTE4/NGM4NzYwZTczZmJj/NjcwNTRkOC93d3cu/ZWNob3NjaWVuY2Vz/LWdyZW5vYmxlLmZy/Lw"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "echosciences-grenoble.fr",
						"hostname": "www.echosciences-grenoble.fr",
						"favicon": "https://imgs.search.brave.com/sKmGkNUUNvkSBCjiWWJHKrXw4RpKlvNLY6_oSpyQMD8/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZjY2MzE3Zjhh/YzI1NzBkMDVkNzE2/ZDNiY2RhN2UwOWVl/NTFhMTYzMDk5ZTE4/NGM4NzYwZTczZmJj/NjcwNTRkOC93d3cu/ZWNob3NjaWVuY2Vz/LWdyZW5vYmxlLmZy/Lw",
						"path": "› articles  › atelier-cst-16-sciences-jeux"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/5P3ctEuAlLiS3McJMVnyqFXD2xWJ36-8DWxE_Y42KRA/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/ZWNob3NjaWVuY2Vz/LWdyZW5vYmxlLmZy/L3VwbG9hZHMvYXJ0/aWNsZS9pbWFnZS9h/dHRhY2htZW50LzEw/MDU0OTc3MzQvbGdf/QmFubmklQzMlQThy/ZV9FY2hvc2NpZW5j/ZXMuanBlZw",
						"original": "https://www.echosciences-grenoble.fr/uploads/article/image/attachment/1005497734/lg_Banni%C3%A8re_Echosciences.jpeg",
						"logo": false
					},
					"age": "February 9, 2023",
					"extra_snippets": [
						"Mais comment allier les dimensions ludiques et pédagogiques ? Pour tenter de répondre à cette question, nous avons eu le plaisir d'accueillir Florian Delcourt, responsable de l'ingénierie culturelle﻿ chez S[cube], pour un atelier combinant mises en pratiques, jeux et théorie ! Une journée pour se questionner sur le médium que peut être l’expérience ludique pour la médiation scientifique, mais aussi sur la méthodologie de création et d’évaluation d’un outil de ce type.",
						"Pour être tenu au courant des prochains \"ateliers de la CST\", n'hésitez pas à consulter régulièrement le site de la Direction de la culture et de la culture scientifique de l'Université Grenoble Alpes et à nous suivre sur les réseaux sociaux à travers le hashtag #AtelierCSTUGA ! Enfin, vous pouvez retrouver tous les résumés et fiches pratiques des précédents ateliers sur le dossier Echosciences dédié. Cet article a été co-rédigé par Florian Delcourt﻿, responsable de l'ingénierie culturelle au sein de l'association S[cube] et Sandy Aupetit, chargée de médiation scientifique et à la Direction de la culture et de la culture scientifique de l'Université Grenoble Alpes.",
						"Et maintenant, comment se lancer concrètement dans la conception d'un jeu de médiation scientifique ?",
						"Les participants ont ainsi profité d’une succession de temps pratiques et d’apports théoriques, s’appuyant sur les retours d’expériences de l’équipe associative de S[cube] dans la mise en place d’expériences ludiques sur des thématiques scientifiques. Basée en Ile-de-France Sud et soutenue par de nombreux acteurs du Plateau de Saclay en Essonne (91), l’association œuvre à partager les sciences sous de nombreuses formes pour aller à la rencontre des publics les plus divers possibles. De cette démarche ont découlé une réflexion sur l’usage des jeux dans des dispositifs de médiation scientifique et la mise en œuvre de projets originaux parfois en collaboration avec des éditeurs majeurs du secteur ludique (Asmodee﻿, Repos Prod﻿, Lucky Duck Games﻿ ou encore Le Droit de Perdre﻿) et leurs auteurs."
					]
				},
				{
					"title": "FICHE PRATIQUE 11 / … LA MEDIATION SCIENTIFIQUE ...",
					"url": "https://science.rmtmo.eu/wp-content/uploads/2020/06/FICHE-PRATIQUE-11_m%C3%A9diation_scientifique.pdf",
					"is_source_local": false,
					"is_source_both": false,
					"description": "d’autres publics. La médiation scientifique participe du transfert de la connaissance au sens large grâce · à des méthodes et outils mettant l’information et la pédagogie au centre de la démarche.",
					"profile": {
						"name": "Rmtmo",
						"url": "https://science.rmtmo.eu/wp-content/uploads/2020/06/FICHE-PRATIQUE-11_m%C3%A9diation_scientifique.pdf",
						"long_name": "science.rmtmo.eu",
						"img": "https://imgs.search.brave.com/P-WrPHQ360O1H-V0fAFa9TEr0fEiWCu7sZIhmE5on0U/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYTA0YTA2MWQw/YzBkNWNlYzU4YTVl/YzAxZTZkOTIwNzc4/MjQ0ZTkxZTdmYmRh/MDI2YjA3M2ZmMDRh/ODI5ZTYzZS9zY2ll/bmNlLnJtdG1vLmV1/Lw"
					},
					"language": "en",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "science.rmtmo.eu",
						"hostname": "science.rmtmo.eu",
						"favicon": "https://imgs.search.brave.com/P-WrPHQ360O1H-V0fAFa9TEr0fEiWCu7sZIhmE5on0U/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYTA0YTA2MWQw/YzBkNWNlYzU4YTVl/YzAxZTZkOTIwNzc4/MjQ0ZTkxZTdmYmRh/MDI2YjA3M2ZmMDRh/ODI5ZTYzZS9zY2ll/bmNlLnJtdG1vLmV1/Lw",
						"path": "› wp-content  › uploads  › 2020  › 06  › FICHE-PRATIQUE-11_médiation_scientifique.pdf"
					},
					"content_type": "pdf",
					"extra_snippets": [
						"De plus en plus de projets prévoient dans le contenu des actions à mener un volet de médiation · scientifique. Pour ceux-ci, l’ampleur de l’action dépendra du dossier et des livrables prévus. Pour ceux · pour lesquels aucune action n’a été prévue, il est recommandé de développer un volet transfrontalier · d’une action déjà menée à une échelle locale par exemple, ou de se focaliser sur des actions qui · entreront facilement dans les actions de communication de manière large (par exemple en développant",
						"La médiation scientifique est une discipline de vulgarisation et de large accession à la population. Le passage du dialogue entre spécialistes à la communication vers le grand public nécessite donc un",
						"en fonction de l’âge, des goûts, attentes, références culturelles et de ce qui provoque chez eux une ... Ensuite, il est nécessaire de se renseigner sur les enjeux de la médiation scientifique pour ces publics",
						"d’autres publics. La médiation scientifique participe du transfert de la connaissance au sens large grâce · à des méthodes et outils mettant l’information et la pédagogie au centre de la démarche."
					]
				},
				{
					"title": "Le documentaire comme outil de médiation scientifique",
					"url": "https://formations.univ-poitiers.fr/fr/index/master-XB/master-XB/master-anthropologie-KTWR0YLD/parcours-ethnographie-et-ecritures-audiovisuelles-KTWR5ECT/ue-5-valorisation-scientifique-et-professionnalisation-KV9PP1DS/le-documentaire-comme-outil-de-mediation-scientifique-KVAO95OV.html",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Catalogue des formations de l&#x27;université de Poitiers",
					"profile": {
						"name": "Université de Poitiers",
						"url": "https://formations.univ-poitiers.fr/fr/index/master-XB/master-XB/master-anthropologie-KTWR0YLD/parcours-ethnographie-et-ecritures-audiovisuelles-KTWR5ECT/ue-5-valorisation-scientifique-et-professionnalisation-KV9PP1DS/le-documentaire-comme-outil-de-mediation-scientifique-KVAO95OV.html",
						"long_name": "formations.univ-poitiers.fr",
						"img": "https://imgs.search.brave.com/K6IJkZlgEGTOfhKcZgb1RqQ85dhRNYWdEpOzPtYwTiI/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvY2JmZmRkZDU5/NzNjNzk3MzA1NGU2/NGQ5ZjkzMDM1MTM1/NDU0MjliMWUwZTM4/ZmNmNjZjNDI5OTU4/N2QyNGI0MS9mb3Jt/YXRpb25zLnVuaXYt/cG9pdGllcnMuZnIv"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "formations.univ-poitiers.fr",
						"hostname": "formations.univ-poitiers.fr",
						"favicon": "https://imgs.search.brave.com/K6IJkZlgEGTOfhKcZgb1RqQ85dhRNYWdEpOzPtYwTiI/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvY2JmZmRkZDU5/NzNjNzk3MzA1NGU2/NGQ5ZjkzMDM1MTM1/NDU0MjliMWUwZTM4/ZmNmNjZjNDI5OTU4/N2QyNGI0MS9mb3Jt/YXRpb25zLnVuaXYt/cG9pdGllcnMuZnIv",
						"path": "› fr  › index  › master-XB  › master-XB  › master-anthropologie-KTWR0YLD  › parcours-ethnographie-et-ecritures-audiovisuelles-KTWR5ECT  › ue-5-valorisation-scientifique-et-professionnalisation-KV9PP1DS  › le-documentaire-comme-outil-de-mediation-scientifique-KVAO95OV.html"
					}
				},
				{
					"title": "L'enquête au cœur des médiations culturelle et pédagogique",
					"url": "https://dtna.canoprof.fr/eleve/Arts%20et%20Culture/PREAC%20ARCHEOLOGIE/res/BIBLIOGRAPHIE_atelier1.pdf",
					"is_source_local": false,
					"is_source_both": false,
					"description": "CHAUMIER Serge in « Le partage des savoirs scientifiques, enjeux et risques » - Eska, 2007 (pp. 60-65). Résumé : L&#x27;article s&#x27;interroge sur le recours systématique au jeu et aux approches ludiques dans les techniques de · médiation et de transmission des savoirs dans les lieux culturels, tels que les expositions et les musées.",
					"profile": {
						"name": "Canoprof",
						"url": "https://dtna.canoprof.fr/eleve/Arts%20et%20Culture/PREAC%20ARCHEOLOGIE/res/BIBLIOGRAPHIE_atelier1.pdf",
						"long_name": "dtna.canoprof.fr",
						"img": "https://imgs.search.brave.com/eBOi2FINHZ7Q2jlfJWl2aS5VQIoyrklkNeAyc6yHglw/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWM0ODYyNDZi/ODM4YzNlMzEzNzky/ZWY5OWFhYmEzMzA5/OTJhNWY4NDkwNmJm/MDVmNGY4NmNiOGJm/OGZjZDQ1Yy9kdG5h/LmNhbm9wcm9mLmZy/Lw"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "dtna.canoprof.fr",
						"hostname": "dtna.canoprof.fr",
						"favicon": "https://imgs.search.brave.com/eBOi2FINHZ7Q2jlfJWl2aS5VQIoyrklkNeAyc6yHglw/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWM0ODYyNDZi/ODM4YzNlMzEzNzky/ZWY5OWFhYmEzMzA5/OTJhNWY4NDkwNmJm/MDVmNGY4NmNiOGJm/OGZjZDQ1Yy9kdG5h/LmNhbm9wcm9mLmZy/Lw",
						"path": "› eleve  › Arts et Culture  › PREAC ARCHEOLOGIE  › res  › BIBLIOGRAPHIE_atelier1.pdf"
					},
					"content_type": "pdf",
					"extra_snippets": [
						"CHAUMIER Serge in « Le partage des savoirs scientifiques, enjeux et risques » - Eska, 2007 (pp. 60-65). Résumé : L'article s'interroge sur le recours systématique au jeu et aux approches ludiques dans les techniques de · médiation et de transmission des savoirs dans les lieux culturels, tels que les expositions et les musées.",
						"Dans cet article, l’auteure examine quatorze lieux de patrimoine qui ont utilisé des serious games comme outil de · médiation culturelle.",
						"Associée à une volonté de démocratisation, la médiation culturelle repose sur le partage, avec le plus grand nombre, d’œuvres artistiques et de savoirs produits par les sciences. Le public se trouve de ce fait placé au cœur de tous les · domaines culturels, du spectacle vivant et des musées, comme des bibliothèques et des archives, de la création",
						"Quel point commun entre la visite guidée d’une exposition d’art contemporain, un atelier d’initiation à la musique · baroque organisé au cours d’un festival et un ciné-club de quartier ? Le médiateur culturel."
					]
				},
				{
					"title": "Médiation scientifique et culturelle - Thot Cursus",
					"url": "https://cursus.edu/fr/dossiers/145/mediation-scientifique-et-culturelle",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Les outils et ressources numériques sont omniprésents dans les musées, sur les sites historiques. Et ces derniers sont désormais accessibles, via leurs sites web et les applications mobiles, depuis n&#x27;importe quel point connecté du globe. On notera pourtant que la médiation s&#x27;exerce toujours dans le même sens : des tenants de la culture savante vers les représentants de la culture populaire.",
					"profile": {
						"name": "Thot Cursus",
						"url": "https://cursus.edu/fr/dossiers/145/mediation-scientifique-et-culturelle",
						"long_name": "cursus.edu",
						"img": "https://imgs.search.brave.com/JNMEgbDJVvd4dHg9pKPrpBFKMSRv198xpfqu_qOhJss/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYTEzMGM0M2M5/OGExNzA1N2EzMGFi/M2MzM2RlYWYyM2Uy/YjMzMzEyN2FlZTgz/MDQ4MjZiYWQ2ZGRm/ZGU5ZjI4YS9jdXJz/dXMuZWR1Lw"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "cursus.edu",
						"hostname": "cursus.edu",
						"favicon": "https://imgs.search.brave.com/JNMEgbDJVvd4dHg9pKPrpBFKMSRv198xpfqu_qOhJss/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYTEzMGM0M2M5/OGExNzA1N2EzMGFi/M2MzM2RlYWYyM2Uy/YjMzMzEyN2FlZTgz/MDQ4MjZiYWQ2ZGRm/ZGU5ZjI4YS9jdXJz/dXMuZWR1Lw",
						"path": "› fr  › dossiers  › 145  › mediation-scientifique-et-culturelle"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/YqYVHBralSPGwJCpwptueH3d6CDdMDhK-tc8wOd0a7Y/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9jdXJz/dXMuZWR1L3N0b3Jh/Z2UvdGh1bWJuYWls/cy85ODA0ODBlNWM4/OGZhYjU4YzQ1ZmZj/M2RlMDlhNjdjYy5q/cGc",
						"original": "https://cursus.edu/storage/thumbnails/980480e5c88fab58c45ffc3de09a67cc.jpg",
						"logo": false
					},
					"extra_snippets": [
						"A côté des établissements spécialisés dans le domaine (centres culturels, centres d'interprétation) les écoles, les médias, les bibliothèques... sont également investis d'une mission de médiation. Les outils de médiation se sont largement diversifiés au fil du temps.",
						"Rêvons d'un monde dans lequel tout groupe se sentirait légitime et disposerait des moyens nécessaires pour \"médiatiser\" sa culture, ses objets de fierté et son patrimoine. Comment imaginer une véritable culture commune sans cette pollinisation croisée ?",
						"Les outils et ressources numériques sont omniprésents dans les musées, sur les sites historiques. Et ces derniers sont désormais accessibles, via leurs sites web et les applications mobiles, depuis n'importe quel point connecté du globe. On notera pourtant que la médiation s'exerce toujours dans le même sens : des tenants de la culture savante vers les représentants de la culture populaire.",
						"Quel que soit son établissement de rattachement et le domaine dans lequel s'exerce sa mission, le médiateur vise à établir la relation entre l'individu, l'institution et l'objet."
					]
				},
				{
					"title": "Comment créer une application de quiz interactif ?",
					"url": "https://pandasuite.com/fr/blog/application-quiz-interactif/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Que vous soyez ingénieur pédagogique, chargé de médiation culturelle ou professionnel du marketing, l’application quiz interactif est simple à mettre en place. Elle s’intègre parfaitement dans des contextes variés comme les musées, la formation professionnelle ou même l’événementiel. Les outils de création de quiz en ligne peuvent parfois être décevants ou limitatifs quand on veut créer ce type d’expérience interactive.",
					"page_age": "2024-08-01T00:00:00",
					"profile": {
						"name": "PandaSuite",
						"url": "https://pandasuite.com/fr/blog/application-quiz-interactif/",
						"long_name": "pandasuite.com",
						"img": "https://imgs.search.brave.com/SaCPpDYpukEq_SsTsV637Q6dFAduq7S32xXF3rBo0I8/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvN2QyZDNmYjgw/ZDBiNWE2ZDU0OTE1/M2RlMmFlYjg5OWRh/NmFlYzcxMzQwZjA1/Yjc3NjgxOTQ3MjQ0/NTZlNzMxNC9wYW5k/YXN1aXRlLmNvbS8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "pandasuite.com",
						"hostname": "pandasuite.com",
						"favicon": "https://imgs.search.brave.com/SaCPpDYpukEq_SsTsV637Q6dFAduq7S32xXF3rBo0I8/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvN2QyZDNmYjgw/ZDBiNWE2ZDU0OTE1/M2RlMmFlYjg5OWRh/NmFlYzcxMzQwZjA1/Yjc3NjgxOTQ3MjQ0/NTZlNzMxNC9wYW5k/YXN1aXRlLmNvbS8",
						"path": "› fr  › blog  › application-quiz-interactif"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/gyaJ227zkVS_Zd4ke3RShSJzp2OlIvUGf-ImzUbWDbw/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9wYW5k/YXN1aXRlLmNvbS9h/c3NldHMvY292ZXIt/YXBwbGljYXRpb24t/cXVpei1pbnRlcmFj/dGlmLkJsY2NFbHBx/X1pVY2xLVC53ZWJw",
						"original": "https://pandasuite.com/assets/cover-application-quiz-interactif.BlccElpq_ZUclKT.webp",
						"logo": false
					},
					"age": "August 1, 2024",
					"extra_snippets": [
						"Que vous soyez ingénieur pédagogique, chargé de médiation culturelle ou professionnel du marketing, l’application quiz interactif est simple à mettre en place. Elle s’intègre parfaitement dans des contextes variés comme les musées, la formation professionnelle ou même l’événementiel. Les outils de création de quiz en ligne peuvent parfois être décevants ou limitatifs quand on veut créer ce type d’expérience interactive.",
						"C’est un outil à la fois simple, ludique et engageant ! Tous les magazines féminins l’ont bien compris et c’est le classique de la mallette du formateur ! Imaginez votre quiz installé sur un dispositif tactile comme un smartphone, une tablette ou une borne.",
						"L’entreprise de santé Stago a réalisé ce quiz sous la forme d’un e-learning interactif pour les médecins. Ces applications montrent comment un quiz peut être un outil puissant pour l’évaluation des compétences et la formation continue.",
						"Le QCM vous montre comment créer un quiz à choix multiplie et même l’intégrer sur un LMS via la compatibilité SCORM · Le quiz animaux Airtable s’appuie sur l’outil Airtable pour générer dynamiquement les questions."
					]
				},
				{
					"title": "Jeune recherche : les métiers de la médiation scientifique et culturelle | Institut des Amériques",
					"url": "https://www.institutdesameriques.fr/agenda/jeune-recherche-les-metiers-de-la-mediation-scientifique-et-culturelle",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Par ce biais, le principal objectif est de mettre en avant les métiers de la médiation scientifique et culturelle sous toutes ses formes (ingénieur.e de recherche, chargé.e d’appui à la recherche, responsable administratif d’École doctorale, expert scientifique, archiviste-documentaliste…), et en particulier les fonctions basées sur l’utilisation des outils numériques (coordination d’un site web, veille scientifique, édition d’une revue en ligne…) qui occupent une place chaque fois plus importante dans la formation des doctorants.",
					"profile": {
						"name": "Institut des Amériques",
						"url": "https://www.institutdesameriques.fr/agenda/jeune-recherche-les-metiers-de-la-mediation-scientifique-et-culturelle",
						"long_name": "institutdesameriques.fr",
						"img": "https://imgs.search.brave.com/ulUDVyYB0bRgNmvPjUYFeYuDKzRG1sNslXcB8G5fE-Q/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvY2ZmYTNiMWFk/YzI0OTliZDcxM2Fj/ZDRmNDU5YTFmMDRk/OTdjOTY3OTU1OWY5/NmJmMTVmOWZhZWZj/OTAxMDgzYi93d3cu/aW5zdGl0dXRkZXNh/bWVyaXF1ZXMuZnIv"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "event",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "institutdesameriques.fr",
						"hostname": "www.institutdesameriques.fr",
						"favicon": "https://imgs.search.brave.com/ulUDVyYB0bRgNmvPjUYFeYuDKzRG1sNslXcB8G5fE-Q/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvY2ZmYTNiMWFk/YzI0OTliZDcxM2Fj/ZDRmNDU5YTFmMDRk/OTdjOTY3OTU1OWY5/NmJmMTVmOWZhZWZj/OTAxMDgzYi93d3cu/aW5zdGl0dXRkZXNh/bWVyaXF1ZXMuZnIv",
						"path": "› agenda  › jeune-recherche-les-metiers-de-la-mediation-scientifique-et-culturelle"
					},
					"extra_snippets": [
						"Par ce biais, le principal objectif est de mettre en avant les métiers de la médiation scientifique et culturelle sous toutes ses formes (ingénieur.e de recherche, chargé.e d’appui à la recherche, responsable administratif d’École doctorale, expert scientifique, archiviste-documentaliste…), et en particulier les fonctions basées sur l’utilisation des outils numériques (coordination d’un site web, veille scientifique, édition d’une revue en ligne…) qui occupent une place chaque fois plus importante dans la formation des doctorants.",
						"Afin d’embrasser des thématiques variées et de promouvoir le dialogue le plus large possible dans les études interaméricaines ou comparatistes, l’IdA organise un congrès biennal, ambitieux, sensible aux nouveaux paradigmes en sciences sociales ainsi qu’à la transformation des savoirs en politiques publiques, convivial et ouvert sur des manifestations culturelles.",
						"Parcourir les vidéos des évènements scientifiques et culturels du congrès (cérémonies, entretiens, documentaires)",
						"L’accès et l’usage des sources « culturelles » américaines dans la recherche française ou européenne"
					]
				},
				{
					"title": "médiateur scientifique - médiatrice scientifique",
					"url": "https://www.onisep.fr/ressources/univers-metier/metiers/mediateur-mediatrice-scientifique",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Il doit aussi se questionner, se demander comment sont perçus aujourd&#x27;hui les métiers scientifiques par les jeunes, comment les sciences sont jugées par les différents acteurs (économiques, politiques, sociaux)... Il peut faire de la recherche sur ces thématiques. Il participe enfin à l&#x27;élaboration des programmes scientifiques définis par son établissement. Le médiateur scientifique n&#x27;est pas seul.",
					"page_age": "2026-05-29T17:59:06",
					"profile": {
						"name": "Onisep",
						"url": "https://www.onisep.fr/ressources/univers-metier/metiers/mediateur-mediatrice-scientifique",
						"long_name": "onisep.fr",
						"img": "https://imgs.search.brave.com/OJdz6N8wUaeboXtKlArutlJEXms2FP--Kc1cLshRgFU/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNzgzNDFlOTZm/MzU1YzI1NDU2MDQw/OTcwNjVkZTFlNTdj/NjczYmM2ZDkwMDY1/MTQwZjExNGU1ZWVm/NmUzYjVjYi93d3cu/b25pc2VwLmZyLw"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "article",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "onisep.fr",
						"hostname": "www.onisep.fr",
						"favicon": "https://imgs.search.brave.com/OJdz6N8wUaeboXtKlArutlJEXms2FP--Kc1cLshRgFU/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNzgzNDFlOTZm/MzU1YzI1NDU2MDQw/OTcwNjVkZTFlNTdj/NjczYmM2ZDkwMDY1/MTQwZjExNGU1ZWVm/NmUzYjVjYi93d3cu/b25pc2VwLmZyLw",
						"path": "› ressources  › univers-metier  › metiers  › mediateur-mediatrice-scientifique"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/GGRL8l_dqfIe6PnPxwAH-U8xt0esIwRdzc3EKJZyE30/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/b25pc2VwLmZyL3Zh/ci9vbmlzZXAvc3Rv/cmFnZS9pbWFnZXMv/NS85LzIvNC8xNjM5/NDI5NS01LWZyZS1G/Ui80NTg5NjY0ZWEx/NDAtbWVkaWF0ZXVy/LXNjaWVudGlmaXF1/ZS5qcGc",
						"original": "https://www.onisep.fr/var/onisep/storage/images/5/9/2/4/16394295-5-fre-FR/4589664ea140-mediateur-scientifique.jpg",
						"logo": false
					},
					"age": "1 month ago",
					"article": {
						"author": [],
						"date": "May 29, 2026"
					},
					"extra_snippets": [
						"Ce professionnel travaille dans un centre scientifique, où il propose et met en oeuvre la politique de médiation scientifique. Il peut s'agir d'un musée (comme le Palais de la découverte à Paris, par exemple) ou bien d'un organisme privé ou public dépendant d'un département, d'une région. Ces centres et services scientifiques à vocation culturelle ont des besoins importants en mathématiciens, et plus généralement en scientifiques, dans le secteur des services.",
						"Synonymes : Animateur territorial / animatrice territoriale en médiation scientifique, Chargé / chargée de médiation scientifique, Responsable de la médiation scientifique · Secteurs professionnels : Culture - patrimoine, Fonction publique · Centres d'intérêt : J'ai le sens du contact, J'aime communiquer",
						"La communication est sa première qualité. Il a une bonne diction et il joue avec le public : l'humour, l'imaginaire, le quotidien sont les ingrédients qu'il doit savoir utiliser. Pour susciter le plaisir et le désir d'apprendre, il conçoit et diffuse les activités de médiation scientifique à travers des pratiques pédagogiques innovantes et des approches essentiellement ludiques et spectaculaires.",
						"Il doit aussi se questionner, se demander comment sont perçus aujourd'hui les métiers scientifiques par les jeunes, comment les sciences sont jugées par les différents acteurs (économiques, politiques, sociaux)... Il peut faire de la recherche sur ces thématiques. Il participe enfin à l'élaboration des programmes scientifiques définis par son établissement. Le médiateur scientifique n'est pas seul."
					]
				},
				{
					"title": "Médiation scientifique — Wikipédia",
					"url": "https://fr.wikipedia.org/wiki/M%C3%A9diation_scientifique",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Les premières occurrences du terme font leur apparition dans les écrits publiés dans le cadre centre de formation de la future Cité des sciences et de l&#x27;industrie. À cette époque les deux pratiques <strong>de</strong> <strong>médiation</strong>, <strong>culturelle</strong> <strong>et</strong> <strong>scientifique</strong>, partagent une problématique commune de ...",
					"page_age": "2026-02-24T23:13:32",
					"profile": {
						"name": "Wikipedia",
						"url": "https://fr.wikipedia.org/wiki/M%C3%A9diation_scientifique",
						"long_name": "fr.wikipedia.org",
						"img": "https://imgs.search.brave.com/9hcXszQtxFqKhmv5bxBm9G2EFNIcGvLx34pvPEqARmw/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZTMzMDhhNDdi/YjBhOTk2ZTM1MTBm/ODZlNjc3Y2Q5ZjBj/MTFmOTQ5ZWIzNmRh/NjI4ZTI0NGRhZDgx/MmE4ZTJjNi9mci53/aWtpcGVkaWEub3Jn/Lw"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"deep_results": {
						"buttons": [
							{
								"type": "button_result",
								"title": "Historique",
								"url": "https://fr.wikipedia.org/wiki/M%C3%A9diation_scientifique#Historique"
							},
							{
								"type": "button_result",
								"title": "Médiation et vulgarisation",
								"url": "https://fr.wikipedia.org/wiki/M%C3%A9diation_scientifique#Médiation_et_vulgarisation"
							},
							{
								"type": "button_result",
								"title": "Formations universitaires",
								"url": "https://fr.wikipedia.org/wiki/M%C3%A9diation_scientifique#Formations_universitaires"
							},
							{
								"type": "button_result",
								"title": "Critiques et controverses",
								"url": "https://fr.wikipedia.org/wiki/M%C3%A9diation_scientifique#Critiques_et_controverses"
							},
							{
								"type": "button_result",
								"title": "Références",
								"url": "https://fr.wikipedia.org/wiki/M%C3%A9diation_scientifique#Références"
							}
						]
					},
					"meta_url": {
						"scheme": "https",
						"netloc": "fr.wikipedia.org",
						"hostname": "fr.wikipedia.org",
						"favicon": "https://imgs.search.brave.com/9hcXszQtxFqKhmv5bxBm9G2EFNIcGvLx34pvPEqARmw/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZTMzMDhhNDdi/YjBhOTk2ZTM1MTBm/ODZlNjc3Y2Q5ZjBj/MTFmOTQ5ZWIzNmRh/NjI4ZTI0NGRhZDgx/MmE4ZTJjNi9mci53/aWtpcGVkaWEub3Jn/Lw",
						"path": "› wiki  › Médiation_scientifique"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/DXMECiZkwKd-_QLdq-eSmIkQRJ3pJr2v0qtP89lKrNc/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I3L0NpdCVDMyVB/OV9kZXNfU2NpZW5j/ZXNfZXRfZGVfbCUy/N0luZHVzdHJpZS5q/cGc",
						"original": "https://upload.wikimedia.org/wikipedia/commons/b/b7/Cit%C3%A9_des_Sciences_et_de_l%27Industrie.jpg",
						"logo": false
					},
					"age": "February 24, 2026",
					"extra_snippets": [
						"Les premières occurrences du terme font leur apparition dans les écrits publiés dans le cadre centre de formation de la future Cité des sciences et de l'industrie. À cette époque les deux pratiques de médiation, culturelle et scientifique, partagent une problématique commune de reconnaissance professionnelle.",
						"Dans ce contexte la médiation scientifique prétend proposer un autre traitement culturel des sciences avec de nouvelles formes d’adresse au public: à la fois capable d'acculturer le grand public à l'accélération des évolutions technologiques et scientifique et de faire dialoguer les sciences et la société.",
						"Proche de la notion de vulgarisation, la médiation scientifique s'en distingue par son caractère plus général et ses buts. Elle tend à se défaire d'une approche descendante et univoque où le sachant (généralement un chercheur) apprend au non-sachant pour y substituer des pratiques de dialogues entre science et société (par exemple à travers des actions de sciences participatives). Elle se développe notamment comme une forme d'intermédiaire visant à nouer des liens entre la société et les institutions des sciences et techniques dans la perspective d'éclairer le débat public.",
						"Bien que le concept de médiation scientifique soit relativement récent, il est l'héritier de multiples courants qui ont trouvé leur développement durant XXe siècle sous de multiples dénominations : « propagande » dans l'après-guerre puis « information scientifique » dans les années 1960, « communication scientifique » dans les années 1970 et « culture scientifique » dans les années 1980.",
						"Depuis quelques années se développent des formations et parcours universitaires dédiés à la médiation scientifique. Le répertoire national des formations professionnelles « France compétences » et le réseau des masters en communication, médiation et journalisme scientifiques répertorie ainsi un certain nombre de formations allant de la licence professionnelle au master, parmi lesquelles on trouve :"
					]
				},
				{
					"title": "Quiz Culture Générale : Plus de 20 000 Questions et Jeux",
					"url": "https://www.culturequizz.com/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Jouez gratuitement à des milliers de quiz de culture générale : histoire, géo, cinéma, sciences, sport, tests de personnalité. Nouveaux jeux chaque jour.",
					"page_age": "2026-01-06T02:01:06",
					"profile": {
						"name": "Culture Quizz",
						"url": "https://www.culturequizz.com/",
						"long_name": "culturequizz.com",
						"img": "https://imgs.search.brave.com/vzbbVV8ljUi43TnjDJHComVjdVheJ2sFgIQfx9bZ31o/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMjI4YWQyMDgw/NjhiNjNmMTYyMGU0/OGFlMWUwMzlhZGU3/N2IwNjMzZGQ1MzU2/MzZlZWNmNDVmZGQ1/Y2MwYzAxOS93d3cu/Y3VsdHVyZXF1aXp6/LmNvbS8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "article",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "culturequizz.com",
						"hostname": "www.culturequizz.com",
						"favicon": "https://imgs.search.brave.com/vzbbVV8ljUi43TnjDJHComVjdVheJ2sFgIQfx9bZ31o/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMjI4YWQyMDgw/NjhiNjNmMTYyMGU0/OGFlMWUwMzlhZGU3/N2IwNjMzZGQ1MzU2/MzZlZWNmNDVmZGQ1/Y2MwYzAxOS93d3cu/Y3VsdHVyZXF1aXp6/LmNvbS8",
						"path": ""
					},
					"age": "January 6, 2026",
					"article": {
						"author": [
							{
								"type": "person",
								"name": "Superadmin"
							}
						],
						"date": "Jan 06, 2026",
						"publisher": {
							"type": "organization",
							"name": "Culture Quizz"
						}
					},
					"extra_snippets": [
						"CultureQuizz.com est un site qui vous propose tous les jours un nouveau quiz afin d'éveiller votre curiosité. En plus des quiz de culture générale, retrouvez diverses thématiques comme le cinéma, la littérature, la musique, la géographie, l'histoire de France, etc.",
						"Retrouvez une sélection de nos quiz populaires pour jouer, apprendre et s'amuser sur des thématiques que tout le monde apprécie comme la géographie, le sport, la langue française, l'histoire…"
					]
				},
				{
					"title": "Test d'orientation : Êtes-vous fait pour devenir médiateur culturel ? - Studyrama",
					"url": "https://www.studyrama.com/tests/etes-vous-fait-pour-devenir-mediateur-culturel-402",
					"is_source_local": false,
					"is_source_both": false,
					"description": "<strong>Ce test a été conçu pour vous permettre de faire le point sur vos compétences et votre motivation pour devenir médiateur culturel</strong>. Les questions vous aideront à évaluer votre affinité avec différents aspects de ce métier, comme l&#x27;organisation d&#x27;événements, la communication avec ...",
					"profile": {
						"name": "Studyrama",
						"url": "https://www.studyrama.com/tests/etes-vous-fait-pour-devenir-mediateur-culturel-402",
						"long_name": "studyrama.com",
						"img": "https://imgs.search.brave.com/cnQ422alw3uu3Y353Sqtvwl42APj013wyz1AXeMduwQ/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNWQ0NTkxMDVh/ZjIwZWMyOWE0NTlm/YmY1N2E3ZDg1YjY0/MDk0ZGQ1MTQ3M2Q5/YmQ0MmJlNWRjMDll/N2FlNzU1My93d3cu/c3R1ZHlyYW1hLmNv/bS8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "studyrama.com",
						"hostname": "www.studyrama.com",
						"favicon": "https://imgs.search.brave.com/cnQ422alw3uu3Y353Sqtvwl42APj013wyz1AXeMduwQ/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNWQ0NTkxMDVh/ZjIwZWMyOWE0NTlm/YmY1N2E3ZDg1YjY0/MDk0ZGQ1MTQ3M2Q5/YmQ0MmJlNWRjMDll/N2FlNzU1My93d3cu/c3R1ZHlyYW1hLmNv/bS8",
						"path": "› tests  › etes-vous-fait-pour-devenir-mediateur-culturel-402"
					},
					"extra_snippets": [
						"Ce test a été conçu pour vous permettre de faire le point sur vos compétences et votre motivation pour devenir médiateur culturel. Les questions vous aideront à évaluer votre affinité avec différents aspects de ce métier, comme l'organisation d'événements, la communication avec le public, et la gestion de projets culturels.",
						"Prenez le temps de répondre avec attention et honnêteté, et découvrez si vous avez le profil idéal pour devenir un médiateur culturel. Commencer le test",
						"À l'international, la médiation culturelle est également en pleine expansion, avec une demande croissante pour des professionnels capables de créer des liens entre des cultures diverses et de promouvoir le dialogue interculturel. Le métier de médiateur culturel est à la fois exigeant et gratifiant."
					]
				},
				{
					"title": "1500 Quiz Thématiques : Testez vos Connaissances",
					"url": "https://www.culturequizz.com/quiz/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Tous les jours, nous publions un nouveau quiz inédit sur des thématiques accessibles à tous, comme la langue française, le sport, la littérature, le cinéma, la géographie, etc. <strong>Nos quiz et jeux ont généralement pour objectif d&#x27;apporter une touche culturelle afin d&#x27;apprendre au quotidien</strong>.",
					"profile": {
						"name": "Culture Quizz",
						"url": "https://www.culturequizz.com/quiz/",
						"long_name": "culturequizz.com",
						"img": "https://imgs.search.brave.com/vzbbVV8ljUi43TnjDJHComVjdVheJ2sFgIQfx9bZ31o/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMjI4YWQyMDgw/NjhiNjNmMTYyMGU0/OGFlMWUwMzlhZGU3/N2IwNjMzZGQ1MzU2/MzZlZWNmNDVmZGQ1/Y2MwYzAxOS93d3cu/Y3VsdHVyZXF1aXp6/LmNvbS8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "culturequizz.com",
						"hostname": "www.culturequizz.com",
						"favicon": "https://imgs.search.brave.com/vzbbVV8ljUi43TnjDJHComVjdVheJ2sFgIQfx9bZ31o/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMjI4YWQyMDgw/NjhiNjNmMTYyMGU0/OGFlMWUwMzlhZGU3/N2IwNjMzZGQ1MzU2/MzZlZWNmNDVmZGQ1/Y2MwYzAxOS93d3cu/Y3VsdHVyZXF1aXp6/LmNvbS8",
						"path": "› quiz"
					},
					"extra_snippets": [
						"Tous les jours, nous publions un nouveau quiz inédit sur des thématiques accessibles à tous, comme la langue française, le sport, la littérature, le cinéma, la géographie, etc. Nos quiz et jeux ont généralement pour objectif d'apporter une touche culturelle afin d'apprendre au quotidien."
					]
				},
				{
					"title": "Plus de 180 questions et réponses sur les connaissances générales | Mise à jour 2025 - AhaSlides",
					"url": "https://ahaslides.com/fr/blog/general-knowledge-quiz-questions-and-answers/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Des films à la géographie, en passant par la culture pop et des anecdotes diverses, ce quiz de culture générale ultime mettra vos connaissances à l&#x27;épreuve. Jouez à ce jeu-questionnaire amusant entre amis, collègues ou en famille pour passer un bon moment ensemble. Dans ce nouvel article concernant notre nouveau projet blog post, vous découvrirez : 👉 Plus de 180 questions et réponses de culture générale couvrant divers sujets · 👉 Informations sur AhaSlides - un outil de présentation interactif qui vous aide à créer vos propres quiz en seulement une minute !",
					"page_age": "2025-11-24T07:20:22",
					"profile": {
						"name": "AhaSlides",
						"url": "https://ahaslides.com/fr/blog/general-knowledge-quiz-questions-and-answers/",
						"long_name": "ahaslides.com",
						"img": "https://imgs.search.brave.com/dcB-HKZeffdeXZzIjYYvaHgOst5rru4UXzNkNEdCwgk/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYTVmN2Y1MjIw/NjM5YThiZDEyNDE5/YmRhZTA1ODcyZDFj/YjdlNzcyN2NiOGY4/ZDllN2EwYTU1MjRl/MDM5OTBhZi9haGFz/bGlkZXMuY29tLw"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "article",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "ahaslides.com",
						"hostname": "ahaslides.com",
						"favicon": "https://imgs.search.brave.com/dcB-HKZeffdeXZzIjYYvaHgOst5rru4UXzNkNEdCwgk/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYTVmN2Y1MjIw/NjM5YThiZDEyNDE5/YmRhZTA1ODcyZDFj/YjdlNzcyN2NiOGY4/ZDllN2EwYTU1MjRl/MDM5OTBhZi9haGFz/bGlkZXMuY29tLw",
						"path": "› fr  › blog  › general-knowledge-quiz-questions-and-answers"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/mh6iSpk3bEbIjEdMaCF3yke_I2lDXAszVEBRwbjhTJ8/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9haGFz/bGlkZXMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI1LzA3/L0dLLXF1aXotbW9i/aWxlLmpwZw",
						"original": "https://ahaslides.com/wp-content/uploads/2025/07/GK-quiz-mobile.jpg",
						"logo": false
					},
					"age": "November 24, 2025",
					"article": {
						"author": [
							{
								"type": "person",
								"name": "Anh Vu"
							}
						],
						"date": "May 14, 2020",
						"publisher": {
							"type": "organization",
							"name": "AhaSlides Pte Ltd",
							"url": "https://ahaslides.com",
							"thumbnail": {
								"src": "https://imgs.search.brave.com/AjwgmdBr8HP-4FTEjNKGQ2RVdyMISOPNTFoEmH1qcQw/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9haGFz/bGlkZXMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI1LzA1/L2F2YXRhci1jb3Zl/ci1fWW91dHViZS1h/dmEuanBn",
								"original": "https://ahaslides.com/wp-content/uploads/2025/05/avatar-cover-_Youtube-ava.jpg"
							}
						}
					},
					"organization": {
						"type": "organization",
						"name": "AhaSlides Pte Ltd",
						"contact_points": []
					},
					"extra_snippets": [
						"Quiz et jeuxQuiz sur les scientifiques et les inventions | 2025 mis à jour · Quiz et jeux40 meilleurs quiz sur les cartes des Caraïbes pour tester vos connaissances | Révélation 2025 · Quiz et jeuxQuiz sur les types de phrases | Élevez vos compétences en communication dès aujourd’hui !",
						"Vous serez redirigé directement vers l'éditeur, où vous pourrez commencer à éditer votre présentation. Choisissez n'importe quel type de quiz dans la section « Quiz ».",
						"Des films à la géographie, en passant par la culture pop et des anecdotes diverses, ce quiz de culture générale ultime mettra vos connaissances à l'épreuve. Jouez à ce jeu-questionnaire amusant entre amis, collègues ou en famille pour passer un bon moment ensemble. Dans ce nouvel article concernant notre nouveau projet blog post, vous découvrirez : 👉 Plus de 180 questions et réponses de culture générale couvrant divers sujets · 👉 Informations sur AhaSlides - un outil de présentation interactif qui vous aide à créer vos propres quiz en seulement une minute !",
						"🏃 Voici encore plus Quiz sur le foot le Career Centre pour vous. 101. Quel artiste a créé «Campbell's Soup Cans» en 1962? Andy Warhol 102. Pouvez-vous nommer le sculpteur qui a créé «Family Group» en 1950, la première commande à grande échelle de l'artiste après la Seconde Guerre mondiale?"
					]
				},
				{
					"title": "Chapitre IV. Les outils du médiateur | Cairn.info",
					"url": "https://www.cairn.info/la-mediation-culturelle--9782130812166-page-95.htm",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Ceux qui sont issus de formations directement liées à la médiation culturelle bénéficient d’une approche englobant l’ensemble des matières nécessaires au développement des compétences dans ce secteur, un savoir lié aux connaissances et aux méthodes utilisées dans le domaine de la culture mais aussi aux publics et au contexte socioéconomique et juridique dans lequel s’exerce la médiation.",
					"page_age": "2018-10-01T00:00:00",
					"profile": {
						"name": "Cairn",
						"url": "https://www.cairn.info/la-mediation-culturelle--9782130812166-page-95.htm",
						"long_name": "cairn.info",
						"img": "https://imgs.search.brave.com/6uPX7UYLbV96I0z3lLa78mwQiUAcMYyq3Zk6Xpypi68/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMzhlYjU1MzAy/ODQwOWZmMTU1ZTNl/Mzc4NjVjMjEzMGVk/ZDFlZjgxYmYyMjhk/OTUxMDA4YjdlYWE0/YzFhYzI1OC93d3cu/Y2Fpcm4uaW5mby8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "cairn.info",
						"hostname": "www.cairn.info",
						"favicon": "https://imgs.search.brave.com/6uPX7UYLbV96I0z3lLa78mwQiUAcMYyq3Zk6Xpypi68/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMzhlYjU1MzAy/ODQwOWZmMTU1ZTNl/Mzc4NjVjMjEzMGVk/ZDFlZjgxYmYyMjhk/OTUxMDA4YjdlYWE0/YzFhYzI1OC93d3cu/Y2Fpcm4uaW5mby8",
						"path": "› la-mediation-culturelle--9782130812166-page-95.htm"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/EiMIAsYuvvVFJn0TvwZI2KCLTTGQA8yYrKEQ3ZyuxFE/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/Y2Fpcm4uaW5mby92/aWduX3Jldi9RU0ov/UFVGX0FCT1VEXzIw/MThfMDEuanBn",
						"original": "https://www.cairn.info/vign_rev/QSJ/PUF_ABOUD_2018_01.jpg",
						"logo": false
					},
					"age": "October 1, 2018",
					"extra_snippets": [
						"Les formations créées dans le but d’améliorer les compétences du médiateur culturel ne se sont développées que récemment, comme nous l’avons signalé au chapitre ii. C’est notamment pour cette raison que la plupart des médiateurs proviennent d’horizons partiellement différents. Nombre d’entre eux ont une formation essentiellement disciplinaire, fondée sur la connaissance culturelle (ou scientifique) d’un secteur : théâtre, histoire de l’art, musique, cinéma, etc.",
						"Ceux qui sont issus de formations directement liées à la médiation culturelle bénéficient d’une approche englobant l’ensemble des matières nécessaires au développement des compétences dans ce secteur, un savoir lié aux connaissances et aux méthodes utilisées dans le domaine de la culture mais aussi aux publics et au contexte socioéconomique et juridique dans lequel s’exerce la médiation.",
						"Ces connaissances ne constituent cependant qu’une des parties du processus : un certain nombre de savoir-faire sont également liés à la conception et la mise en œuvre des projets culturels évoqués au chapitre précédent, de même, bien sûr, qu’aux talents de rédacteur et d’orateur (ou d’acteur) nécessaires pour exercer face à un public. La formation académique dispensant les outils de la médiation culturelle repose sur trois piliers.",
						"Les connaissances en matière de culture se révèlent d’emblée d’une importance considérable, même si elles ne constituent pas, en soi, une condition suffisante pour développer de manière cohérente un projet de médiation… · I. – Méthodes de recherche et connaissances ... II. – Savoir-faire : conception et mise en œuvre de projets culturels"
					]
				}
			]
		},
		{
			"query": "théorie de l'apprentissage par le jeu et design de quiz",
			"results": [
				{
					"title": "Apprentissage par le jeu — Wikipédia",
					"url": "https://fr.wikipedia.org/wiki/Apprentissage_par_le_jeu",
					"is_source_local": false,
					"is_source_both": false,
					"description": "<strong>L</strong>&#x27;<strong>apprentissage</strong> <strong>par</strong> <strong>le</strong> <strong>jeu</strong> est une méthode éducative utilisée en éducation et en psychologie. Elle désigne la façon dont l&#x27;enfant apprend à donner du sens au monde qui l&#x27;entoure à travers <strong>le</strong> <strong>jeu</strong>. Cela l&#x27;aide à développer des aptitudes sociales et cognitives, à renforcer sa confiance ...",
					"page_age": "2026-06-03T10:01:22",
					"profile": {
						"name": "Wikipedia",
						"url": "https://fr.wikipedia.org/wiki/Apprentissage_par_le_jeu",
						"long_name": "fr.wikipedia.org",
						"img": "https://imgs.search.brave.com/9hcXszQtxFqKhmv5bxBm9G2EFNIcGvLx34pvPEqARmw/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZTMzMDhhNDdi/YjBhOTk2ZTM1MTBm/ODZlNjc3Y2Q5ZjBj/MTFmOTQ5ZWIzNmRh/NjI4ZTI0NGRhZDgx/MmE4ZTJjNi9mci53/aWtpcGVkaWEub3Jn/Lw"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"deep_results": {
						"buttons": [
							{
								"type": "button_result",
								"title": "Activité de jeu",
								"url": "https://fr.wikipedia.org/wiki/Apprentissage_par_le_jeu#Activité_de_jeu"
							},
							{
								"type": "button_result",
								"title": "Facteurs permettant l'apprentissage",
								"url": "https://fr.wikipedia.org/wiki/Apprentissage_par_le_jeu#Facteurs_permettant_l'apprentissage"
							},
							{
								"type": "button_result",
								"title": "Éléments du jeu chez l'enfant",
								"url": "https://fr.wikipedia.org/wiki/Apprentissage_par_le_jeu#Éléments_du_jeu_chez_l'enfant"
							},
							{
								"type": "button_result",
								"title": "Définition du jeu",
								"url": "https://fr.wikipedia.org/wiki/Apprentissage_par_le_jeu#Définition_du_jeu"
							},
							{
								"type": "button_result",
								"title": "L'apprentissage par le jeu libre et l'apprentissage par le jeu dirigé",
								"url": "https://fr.wikipedia.org/wiki/Apprentissage_par_le_jeu#L'apprentissage_par_le_jeu_libre_et_l'apprentissage_par_le_jeu_dirigé"
							},
							{
								"type": "button_result",
								"title": "Apprentissages potentiels générés par les jeux et les jeux vidéo",
								"url": "https://fr.wikipedia.org/wiki/Apprentissage_par_le_jeu#Apprentissages_potentiels_générés_par_les_jeux_et_les_jeux_vidéo"
							},
							{
								"type": "button_result",
								"title": "L'apprentissage par le jeu chez l'adulte et la gamification",
								"url": "https://fr.wikipedia.org/wiki/Apprentissage_par_le_jeu#L'apprentissage_par_le_jeu_chez_l'adulte_et_la_gamification"
							},
							{
								"type": "button_result",
								"title": "Notes et références",
								"url": "https://fr.wikipedia.org/wiki/Apprentissage_par_le_jeu#Notes_et_références"
							},
							{
								"type": "button_result",
								"title": "Articles connexes",
								"url": "https://fr.wikipedia.org/wiki/Apprentissage_par_le_jeu#Articles_connexes"
							}
						]
					},
					"meta_url": {
						"scheme": "https",
						"netloc": "fr.wikipedia.org",
						"hostname": "fr.wikipedia.org",
						"favicon": "https://imgs.search.brave.com/9hcXszQtxFqKhmv5bxBm9G2EFNIcGvLx34pvPEqARmw/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZTMzMDhhNDdi/YjBhOTk2ZTM1MTBm/ODZlNjc3Y2Q5ZjBj/MTFmOTQ5ZWIzNmRh/NjI4ZTI0NGRhZDgx/MmE4ZTJjNi9mci53/aWtpcGVkaWEub3Jn/Lw",
						"path": "› wiki  › Apprentissage_par_le_jeu"
					},
					"age": "3 weeks ago",
					"extra_snippets": [
						"Des dispositifs concrets comme les simulations, les jeux de rôle ou les quiz interactifs sont aujourd'hui couramment utilisés dans les universités et les formations professionnelles pour susciter une participation active et donner du sens aux apprentissages.",
						"Si l'apprentissage par le jeu est traditionnellement associé à l'enfance, il connaît un renouveau important dans la formation des adultes et l'enseignement supérieur, notamment à travers deux concepts proches: la gamification (ou ludification) et les jeux sérieux ( serious games ). La gamification désigne l'intégration de mécaniques propres aux jeux (points, niveaux, récompenses, défis) dans des contextes non ludiques afin d'augmenter la motivation et l'engagement des apprenants.",
						"Jacques Perriault reprend la théorie de Greenfield concernant la représentation spatiale et identifie celle-ci comme une habileté acquise lors des jeux informatisés grâce à leur bidimensionnalité, voire leur tridimensionnalité.",
						"L'activité de jeu, qu'elle se fasse seule ou à plusieurs, à l'intérieur comme à l'extérieur, permet à l'enfant d'apprendre en explorant son environnement. Ainsi, il tente de nouvelles choses, développe diverses aptitudes et prend des risques. Le jeu favorise donc la gestion des émotions, l'apprentissage par l'erreur, le contrôle de soi et la pensée créative."
					]
				},
				{
					"title": "Le jeu comme modalité d’apprentissage | éduscol | Ministère de l'Éducation nationale | Direction générale de l'enseignement scolaire",
					"url": "https://eduscol.education.fr/3759/le-jeu-comme-modalite-d-apprentissage",
					"is_source_local": false,
					"is_source_both": false,
					"description": "De nombreux travaux de recherche et d’études éclairent la place spécifique et le rôle original du jeu dans le processus d’apprentissage.",
					"profile": {
						"name": "Éduscol",
						"url": "https://eduscol.education.fr/3759/le-jeu-comme-modalite-d-apprentissage",
						"long_name": "eduscol.education.fr",
						"img": "https://imgs.search.brave.com/qJNHpyoTs7Ko2Ry9lVDa5iaamgiSW7UWlt-v4otu3oQ/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMGQ4ZGE3NGFj/NTljYjkzZDkwYmZh/YzRlZmU0ZGY0MzU2/ZmRlOWUyYzYzODY1/NzQ2MTJlNmJlZGM0/OGRhYTJkYi9lZHVz/Y29sLmVkdWNhdGlv/bi5mci8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "eduscol.education.fr",
						"hostname": "eduscol.education.fr",
						"favicon": "https://imgs.search.brave.com/qJNHpyoTs7Ko2Ry9lVDa5iaamgiSW7UWlt-v4otu3oQ/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMGQ4ZGE3NGFj/NTljYjkzZDkwYmZh/YzRlZmU0ZGY0MzU2/ZmRlOWUyYzYzODY1/NzQ2MTJlNmJlZGM0/OGRhYTJkYi9lZHVz/Y29sLmVkdWNhdGlv/bi5mci8",
						"path": "› 3759  › le-jeu-comme-modalite-d-apprentissage"
					},
					"extra_snippets": [
						"Le jeu « QuizIA » a été développé dans le cadre des travaux académiques mutualisés (TraAM) 2021-2022 par l’académie de Créteil sur la thématique de l’intelligence artificielle. Le jeu explore les discriminations liées par exemple aux jeux de données utilisées et qui contribuent à perpétuer certains stéréotypes.",
						"Le recours au jeu, de la maternelle au collège, peut favoriser les processus d’apprentissage, le bon développement de l’enfant et faciliter l’adhésion des élèves aux activités proposés.",
						"De nombreux travaux de recherche et d’études éclairent la place spécifique et le rôle original du jeu dans le processus d’apprentissage.",
						"Le parcours m@gistère « Le jeu numérique au service des apprentissages » a pour but de former les enseignants aux enjeux et aux apports des jeux numériques en classe."
					]
				},
				{
					"title": "Théories d’apprentissage par le jeu : comment ça marche ? - Graines de Blogueuses",
					"url": "https://www.grainesdeblogueuses.fr/theories-dapprentissage-par-le-jeu-comment-ca-marche/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "<strong>Les jeux de quiz interactifs, comme Kahoot, dynamisent les révisions et installent une saine émulation, tout en offrant un retour immédiat sur les réponses</strong>. Dans l’enseignement secondaire et supérieur, des plateformes comme Minecraft ...",
					"page_age": "2025-12-28T07:42:55",
					"profile": {
						"name": "Grainesdeblogueuses",
						"url": "https://www.grainesdeblogueuses.fr/theories-dapprentissage-par-le-jeu-comment-ca-marche/",
						"long_name": "grainesdeblogueuses.fr",
						"img": "https://imgs.search.brave.com/Ebnlw1dJ1c0f9MDvi3bDdWeTz2s4BELj6W8WLH8dU8I/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNmU5NTFjM2Jk/MjJjNzg2NTU5NTJi/ZWUyMjMxNzEzNTZk/NDIxYmM2NTFlNWZh/YTdiOWI3MWIzMmFi/NGY0YTI4Zi93d3cu/Z3JhaW5lc2RlYmxv/Z3VldXNlcy5mci8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "article",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "grainesdeblogueuses.fr",
						"hostname": "www.grainesdeblogueuses.fr",
						"favicon": "https://imgs.search.brave.com/Ebnlw1dJ1c0f9MDvi3bDdWeTz2s4BELj6W8WLH8dU8I/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNmU5NTFjM2Jk/MjJjNzg2NTU5NTJi/ZWUyMjMxNzEzNTZk/NDIxYmM2NTFlNWZh/YTdiOWI3MWIzMmFi/NGY0YTI4Zi93d3cu/Z3JhaW5lc2RlYmxv/Z3VldXNlcy5mci8",
						"path": "  › accueil  › théories d’apprentissage par le jeu : comment ça marche ?"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/uz7vhsljFQ5lhYgmV4uIjS-HuiUtPpvdoxgz33gtnuc/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/Z3JhaW5lc2RlYmxv/Z3VldXNlcy5mci93/cC1jb250ZW50L3Vw/bG9hZHMvZW5mYW50/cy1qZXUtZGUtc29j/aWV0ZS5wbmc",
						"original": "https://www.grainesdeblogueuses.fr/wp-content/uploads/enfants-jeu-de-societe.png",
						"logo": false
					},
					"age": "December 28, 2025",
					"article": {
						"author": [
							{
								"type": "person",
								"name": "Watson"
							}
						],
						"date": "Dec 28, 2025"
					},
					"extra_snippets": [
						"Une règle pédagogique persistante affirme que la mémorisation s’ancre mieux lorsqu’une activité sollicite simultanément plusieurs compétences cognitives et émotionnelles. Pourtant, de nombreux dispositifs éducatifs traditionnels continuent de privilégier la transmission unidirectionnelle de savoirs abstraits.SommaireSerious games : de la définition aux grands principes de l’apprentissage par le jeuQuelles méthodes pédagogiques et théories soutiennent l’efficacité des serious […]",
						"Les jeux de quiz interactifs, comme Kahoot, dynamisent les révisions et installent une saine émulation, tout en offrant un retour immédiat sur les réponses. Dans l’enseignement secondaire et supérieur, des plateformes comme Minecraft Éducation ou Duolingo redessinent les frontières de l’apprentissage.",
						"Duolingo, de son côté, propose une progression personnalisée et stimulante grâce à la gamification de l’apprentissage des langues. En formation professionnelle, les jeux de simulation, les tournois de quiz (PharmacoTrophée) ou encore Nutriquest offrent des expériences concrètes, adaptées à la réalité du terrain et à la résolution de cas pratiques.",
						"Serious games : de la définition aux grands principes de l’apprentissage par le jeuQuelles méthodes pédagogiques et théories soutiennent l’efficacité des serious games ?Avantages, limites et points de vigilance à connaître avant de se lancerDes exemples concrets pour comprendre comment les serious games transforment l’éducation et la formation"
					]
				},
				{
					"title": "L’apprentissage par le jeu | La Ligue de l’Enseignement et de l’Éducation permanente",
					"url": "https://ligue-enseignement.be/lapprentissage-par-le-jeu",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Au jeu, souvent utilisé en logopédie comme support d’apprentissage, Céline Clément associe un travail sur la gestion mentale (voir encadré). Selon la logopède, «cette théorie permet d’amener l’enfant à prendre conscience de ses stratégies mentales en l’occurrence, 5 gestes mentaux: l’attention, la compréhension, la mémorisation, la réflexion et l’imagination.",
					"profile": {
						"name": "La Ligue de l'Enseignement",
						"url": "https://ligue-enseignement.be/lapprentissage-par-le-jeu",
						"long_name": "ligue-enseignement.be",
						"img": "https://imgs.search.brave.com/cZAkQYC7AarUGvCyMoushUYrXQuPP5xf6wJ4ygop57Y/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvN2Q4ZmEwMjQ4/YTc5MDFhNTEyZDk2/ZTkxZDEwMjMxMDFh/OWMxYzE2YmFlOTI4/MzJjY2JlMDBjMDk2/MDg0Zjc2My9saWd1/ZS1lbnNlaWduZW1l/bnQuYmUv"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "ligue-enseignement.be",
						"hostname": "ligue-enseignement.be",
						"favicon": "https://imgs.search.brave.com/cZAkQYC7AarUGvCyMoushUYrXQuPP5xf6wJ4ygop57Y/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvN2Q4ZmEwMjQ4/YTc5MDFhNTEyZDk2/ZTkxZDEwMjMxMDFh/OWMxYzE2YmFlOTI4/MzJjY2JlMDBjMDk2/MDg0Zjc2My9saWd1/ZS1lbnNlaWduZW1l/bnQuYmUv",
						"path": "› lapprentissage-par-le-jeu"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/8ediH1MyHjWr5xaomV2udRNWHioGvRPJNwkscmRXWok/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9saWd1/ZS1lbnNlaWduZW1l/bnQuYmUvc2l0ZXMv/ZGVmYXVsdC9maWxl/cy9zdHlsZXMvb2df/MTIwMHg2MzAvcHVi/bGljL2ltcG9ydHMv/bWFyaXNhLWhvd2Vu/c3RpbmUtQ3E5c2xO/eFY4WVUtdW5zcGxh/c2guanBnP2l0b2s9/ZnkwVU1xZ3Q",
						"original": "https://ligue-enseignement.be/sites/default/files/styles/og_1200x630/public/imports/marisa-howenstine-Cq9slNxV8YU-unsplash.jpg?itok=fy0UMqgt",
						"logo": false
					},
					"extra_snippets": [
						"Les méthodes traditionnelles d’enseignement ne sont pas toujours efficaces et adaptées à tous les enfants. Alors certains n’hésitent pas à avoir recours au jeu comme support d’apprentissage... et cela fonctionne! L’apprentissage par le jeu est un concept utilisé en science de l’éducation et en psychologie qui défend l’idée selon laquelle l’enfant acquiert des compétences à travers l’activité de jeu, en donnant un sens au monde qui l’entoure.",
						"Au jeu, souvent utilisé en logopédie comme support d’apprentissage, Céline Clément associe un travail sur la gestion mentale (voir encadré). Selon la logopède, «cette théorie permet d’amener l’enfant à prendre conscience de ses stratégies mentales en l’occurrence, 5 gestes mentaux: l’attention, la compréhension, la mémorisation, la réflexion et l’imagination.",
						"C’est une étape très importante dans la construction de l’individu, qui s’arrête souvent trop vite pour laisser la place aux jeux à règles, c’est- à-dire aux jeux de société. À ce moment-là, l’individu perd en liberté mais gagne en socialisation, en culture. Les jeux à règles sont un apprentissage de la vie en société puisqu’on apprend des règles de vie.",
						"Le jeu est donc un support de choix dans le domaine des apprentissages, car il mobilise un grand nombre de capacités cognitives et permet une différenciation pédagogique qui porte ses fruits auprès de jeunes parfois en perte de vitesse face aux méthodes classiques d’instruction."
					]
				},
				{
					"title": "1.2 Apprentissage par le jeu dans une culture d’enquête | Programme de la maternelle et du jardin d’enfants, 2016 | ontario.ca",
					"url": "https://www.ontario.ca/fr/document/programme-de-la-maternelle-et-du-jardin-denfants-2016/apprentissage-par-le-jeu-dans-une-culture-denquete",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Du fait de son multiculturalisme dynamique et de ses paysages diversifiés, l&#x27;Ontario est un lieu idéal de résidence et de visite. Étendez vos connaissances sur la population, les lieux et l&#x27;histoire de l&#x27;Ontario. | Ontario&#x27;s vibrant multiculturalism and varied landscapes make this a great place to live and to visit. Find out more about Ontario’s people, places, and history.",
					"page_age": "2024-01-22T00:00:00",
					"profile": {
						"name": "Government of Ontario",
						"url": "https://www.ontario.ca/fr/document/programme-de-la-maternelle-et-du-jardin-denfants-2016/apprentissage-par-le-jeu-dans-une-culture-denquete",
						"long_name": "ontario.ca",
						"img": "https://imgs.search.brave.com/jtbUxJpHBhFSQ-dL8Wey4F_jNXiCsO1fHQQ5cdUAVmQ/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMDA5ZDYwZmFj/MjJjOGRkMTBhMzg2/MmZhMmViZmNjMzc0/ZGJhYWM4ODQzZjAy/OTY5ZTAwYTBhZGFh/NjNiZGIyZi93d3cu/b250YXJpby5jYS8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "ontario.ca",
						"hostname": "www.ontario.ca",
						"favicon": "https://imgs.search.brave.com/jtbUxJpHBhFSQ-dL8Wey4F_jNXiCsO1fHQQ5cdUAVmQ/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMDA5ZDYwZmFj/MjJjOGRkMTBhMzg2/MmZhMmViZmNjMzc0/ZGJhYWM4ODQzZjAy/OTY5ZTAwYTBhZGFh/NjNiZGIyZi93d3cu/b250YXJpby5jYS8",
						"path": "› fr  › document  › programme-de-la-maternelle-et-du-jardin-denfants-2016  › apprentissage-par-le-jeu-dans-une-culture-denquete"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/s9xFkNsoDe5mrWSqvyZd9GQYwAVZ29_QGkkKlw8bRz4/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/b250YXJpby5jYS9m/aWxlcy8yMDI1LTA0/L09udGFyaW9fTWV0/YS1pbWFnZV9EZWZh/dWx0LmpwZw",
						"original": "https://www.ontario.ca/files/2025-04/Ontario_Meta-image_Default.jpg",
						"logo": false
					},
					"age": "January 22, 2024",
					"extra_snippets": [
						"L’enfant tente continuellement de donner un sens à son univers et de communiquer sa vision de ce qui l’entoure. Le jeu est le contexte idéal pour tester ses idées et ses théories ainsi que se servir de ses connaissances afin d’approfondir sa compréhension et son apprentissage.",
						"Elle discute ensuite de la documentation, puis, d’après les éléments probants recueillis, réfléchit sur le sujet avec les enfants et négocie avec ceux-ci pour cibler le matériel que les enfants pourraient enlever ou ajouter afin de continuer à tester leurs théories sur les têtards et à consolider leur réflexion. Pour de plus amples renseignements sur la documentation pédagogique, voir le chapitre 1.4, Évaluation et apprentissage : rendre le raisonnement et l’apprentissage de l’enfant visibles.",
						"Pendant la transition entre les étapes où les enfants remarquent les objets qui les entourent et ce qui se passe autour d’eux et les étapes où ils les explorent, les observent et posent des questions de manière sérieuse, les membres de l’équipe pédagogique documentent leurs réflexions, remarques, théories, idées et intérêts. L’équipe pédagogique analyse et interprète la documentation pour informer sa propre enquête et son apprentissage au sujet des enfants.",
						"Toutefois, dans le programme de la maternelle et du jardin d’enfants, l’enquête n'est pas un ensemble de processus et d’habiletés, mais plutôt une approche générale ou une « démarche », une habitude de la pensée qui imprègne les réflexions et l’apprentissage pendant la journée."
					]
				},
				{
					"title": "Jouer pour apprendre — EduTech Wiki",
					"url": "https://edutechwiki.unige.ch/fr/Jouer_pour_apprendre",
					"is_source_local": false,
					"is_source_both": false,
					"description": "<strong>Le rôle du jeu pour apprendre est présent dans plusieurs théories de l&#x27;apprentissage, dont différentes variantes du constructivisme</strong>.",
					"profile": {
						"name": "EduTech Wiki",
						"url": "https://edutechwiki.unige.ch/fr/Jouer_pour_apprendre",
						"long_name": "edutechwiki.unige.ch",
						"img": "https://imgs.search.brave.com/oILnIkF-ZAXHAIugYCugi92IFQxfaXi5IEWgelrSVvw/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvM2UwZjZkYTY5/ZTBhODc0ZDAzY2Q1/ZmJhNWU3MzNjZTA3/YmVkZTQwYjBhODE5/ODhhYmY2YTY4YmRm/M2Q4ZGQzOC9lZHV0/ZWNod2lraS51bmln/ZS5jaC8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "edutechwiki.unige.ch",
						"hostname": "edutechwiki.unige.ch",
						"favicon": "https://imgs.search.brave.com/oILnIkF-ZAXHAIugYCugi92IFQxfaXi5IEWgelrSVvw/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvM2UwZjZkYTY5/ZTBhODc0ZDAzY2Q1/ZmJhNWU3MzNjZTA3/YmVkZTQwYjBhODE5/ODhhYmY2YTY4YmRm/M2Q4ZGQzOC9lZHV0/ZWNod2lraS51bmln/ZS5jaC8",
						"path": "› fr  › Jouer_pour_apprendre"
					},
					"extra_snippets": [
						"Jouer pour apprendre : est-ce bien sérieux ? Réflexions théoriques sur les relations entre jeu (vidéo) et apprentissage",
						"C'est une activité réalisée avec plaisir, et de manière volontaire. C’est pour cette raison que les enseignants l'utilisent comme un outil complémentaire pour certains contenus d’apprentissage. Et ceci au travers de différents types de jeux comme les jeux de sociétés, les jeux de rôle et et aussi les jeux vidéo.",
						"Au travers de l’histoire occidentale, différents pédagogues et philosophes ont réfléchi au jeu comme un élément d’apprentissage. Alors que dans l’Europe du 18ème siècle, le centre d'intérêt est resté sur l'enfance, car le jeu est associé fortement aux enfants.",
						"Au 19ème siècle, Friedich Fröbel, un pédagogue allemand, a proposé une pédagogie centrée sur le jeu. Il a créé à cet effet les jardins d'enfants. Il disait de ces enfants, qu'ils étaient de petits plantes et que leurs enseignants étaient des jardiniers. Dans ce contexte, il a proposé le jouet et l'activité ludique comme un moyen d'apprentissage dans le milieu éducatif."
					]
				},
				{
					"title": "Jeu-questionnaire – Enseigner en ligne par le jeu – Un livre de recettes",
					"url": "https://ecampusontario.pressbooks.pub/apprentissageparlejeu/chapter/jeux-questionnaire/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Vue d’ensemble : Les jeux de type questionnaires peuvent être réalisés par des étudiant.e.s ou des enseignant.e.s à l’aide de plateformes en ligne telles que Quizlet et Flippity. Les jeux-questionnaires encouragent la mémorisation, la répétition des tests et l’apprentissage distribué, qui sont tous des principes de base de l’apprentissage bien éprouvés.",
					"page_age": "2020-07-20T00:00:00",
					"profile": {
						"name": "Pressbooks",
						"url": "https://ecampusontario.pressbooks.pub/apprentissageparlejeu/chapter/jeux-questionnaire/",
						"long_name": "ecampusontario.pressbooks.pub",
						"img": "https://imgs.search.brave.com/sj--8-OB21KoXW5yKhXZT-lLwgDhj5mbOJ6RmHtKXhE/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNjA4Y2IyZjY2/Y2ZkNTViODRkNGVl/YTI2ZWI3ZjdlMDQ1/N2RhNDZlMDgxNzhh/ZjY2NjI4YjExZjZi/ODQ3ODY0ZS9lY2Ft/cHVzb250YXJpby5w/cmVzc2Jvb2tzLnB1/Yi8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "ecampusontario.pressbooks.pub",
						"hostname": "ecampusontario.pressbooks.pub",
						"favicon": "https://imgs.search.brave.com/sj--8-OB21KoXW5yKhXZT-lLwgDhj5mbOJ6RmHtKXhE/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNjA4Y2IyZjY2/Y2ZkNTViODRkNGVl/YTI2ZWI3ZjdlMDQ1/N2RhNDZlMDgxNzhh/ZjY2NjI4YjExZjZi/ODQ3ODY0ZS9lY2Ft/cHVzb250YXJpby5w/cmVzc2Jvb2tzLnB1/Yi8",
						"path": "› apprentissageparlejeu  › chapter  › jeux-questionnaire"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/BAebIldG-QEbSzp1HlSh1F9V1CJXBgM6uo0HxmhVYbI/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9lY2Ft/cHVzb250YXJpby5w/cmVzc2Jvb2tzLnB1/Yi9hcHAvdXBsb2Fk/cy9zaXRlcy84NTEv/MjAyMC8wNy9zaWx2/ZXItbWFjYm9vay1i/ZXNpZGUtYmxhY2st/c29ueS1wczQtZHVh/bHNob2NrLTQtc2ls/dmVyLTY4MjkzMy1z/Y2FsZWQuanBn",
						"original": "https://ecampusontario.pressbooks.pub/app/uploads/sites/851/2020/07/silver-macbook-beside-black-sony-ps4-dualshock-4-silver-682933-scaled.jpg",
						"logo": false
					},
					"age": "July 20, 2020",
					"extra_snippets": [
						"Vue d’ensemble : Les jeux de type questionnaires peuvent être réalisés par des étudiant.e.s ou des enseignant.e.s à l’aide de plateformes en ligne telles que Quizlet et Flippity. Les jeux-questionnaires encouragent la mémorisation, la répétition des tests et l’apprentissage distribué, qui sont tous des principes de base de l’apprentissage bien éprouvés.",
						"Les quiz, et plus généralement les jeux, ne doivent pas être uniquement basés sur des questions de bas niveau selon l’échelle d’apprentissage de Bloom, mais peuvent également intégrer l’application ou le transfert des connaissances, la résolution de problèmes et des questions analytiques.",
						"Un tableau de bord permet à l’étudiant.e de connaître ses performances par rapport à ses camarades (motivation, métacognition). Les étudiant.e.s ne peuvent faire que 3 jeux-questionnaires par jour, ce qui les oblige à jouer souvent (apprentissage distribué). Ressources en ligne : Quizlet, Biolingo, Genial.ly, Flippity, AhaSlides, Charades, Kahoot!, etc.",
						"La création de jeux de questions et de fiches dans Quizlet ou d’autres plateformes peut facilement devenir une banque de questions qui se construit au fil des ans."
					]
				},
				{
					"title": "Économie et cognition - L’apprentissage dans les jeux - Éditions de la Maison des sciences de l’homme",
					"url": "https://books.openedition.org/editionsmsh/9456?lang=fr",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Dans le cas où tous les joueurs apprennent, on aura affaire à une théorie de l’apprentissage considérant que l’objet de l’apprentissage (l’environnement) évolue de manière endogène. 2Le terme de « jeu non coopératif » (ou « jeu de stratégie ») désigne une situation dans laquelle interviennent plusieurs agents suivant des modalités spécifiées, et telle que le résultat de l’action d’un agent peut dépendre des actions effectuées par les autres agents.",
					"page_age": "2017-07-04T00:00:00",
					"profile": {
						"name": "OpenEdition",
						"url": "https://books.openedition.org/editionsmsh/9456?lang=fr",
						"long_name": "books.openedition.org",
						"img": "https://imgs.search.brave.com/hJJXF3jbXiOec2yhF_z2VF45UQr5GSXndbTXBTAZ3ms/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMmFkZTg2ZDJi/MTczODVmMDIzYjAz/Y2Q1NjNhZmFhYWIw/MTMyOTNmMDA1NTJi/YmNmNzc0ODJhYWVk/YmFhODViYS9ib29r/cy5vcGVuZWRpdGlv/bi5vcmcv"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "books.openedition.org",
						"hostname": "books.openedition.org",
						"favicon": "https://imgs.search.brave.com/hJJXF3jbXiOec2yhF_z2VF45UQr5GSXndbTXBTAZ3ms/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMmFkZTg2ZDJi/MTczODVmMDIzYjAz/Y2Q1NjNhZmFhYWIw/MTMyOTNmMDA1NTJi/YmNmNzc0ODJhYWVk/YmFhODViYS9ib29r/cy5vcGVuZWRpdGlv/bi5vcmcv",
						"path": "› editionsmsh  › 9456"
					},
					"age": "July 4, 2017",
					"extra_snippets": [
						"IntroductionEn alternant de manière répétée l’action et l’observation, nous apprenons simultanément quel est notre environnement et comment celui-ci nous permet d’utiliser nos possibilités d’action. Cet apprentissage est progressif par définition, et le comportement d’un individu en train d apprendre évolue même si l’environnement reste stable.",
						"Dans le cas où tous les joueurs apprennent, on aura affaire à une théorie de l’apprentissage considérant que l’objet de l’apprentissage (l’environnement) évolue de manière endogène. 2Le terme de « jeu non coopératif » (ou « jeu de stratégie ») désigne une situation dans laquelle interviennent plusieurs agents suivant des modalités spécifiées, et telle que le résultat de l’action d’un agent peut dépendre des actions effectuées par les autres agents.",
						"Nous comprendrons alors pourquoi ce qu’il est usuellement convenu d’appeler la théorie de l’apprentissage dans les jeux ne s’exprime pas dans cette structure, mais suppose au contraire la répétition à l’identique d’un jeu « de base » joué par des acteurs à rationalité limitée.",
						"Ce phénomène est typique de l’apprentissage dans les jeux non répétés : les actions sont aussi des signaux envoyés ; les joueurs apprennent aux autres et apprennent des autres. 9On voit aussi dans cet exemple simple que l’apprentissage repose sur la rationalité des acteurs. La théorie générale classiquement mobilisée pour ce genre de situation suppose que les agents sont parfaitement rationnels, savent que les autres le sont, et ainsi de suite."
					]
				},
				{
					"title": "L’apprentissage dans les serious games : proposition d’une typologie | Cairn.info",
					"url": "https://www.cairn.info/revue-agrh1-2015-3-page-11.htm",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Cette publication analyse les SG dans leur dimension apprentissage selon le plan suivant : (1) la formation et les serious games, (2) les théories de l’apprentissage, (3) la mise en œuvre de la recherche et enfin (4) une conclusion - discussion sur la typologie réalisée. 3Dans cette première partie nous présentons les serious games et montrons l’importance culturelle des jeux vidéo auxquels les serious games sont rattachés, puis nous étudions l’apprentissage dans la conception des serious games.",
					"page_age": "2015-12-15T00:00:00",
					"profile": {
						"name": "Cairn",
						"url": "https://www.cairn.info/revue-agrh1-2015-3-page-11.htm",
						"long_name": "cairn.info",
						"img": "https://imgs.search.brave.com/6uPX7UYLbV96I0z3lLa78mwQiUAcMYyq3Zk6Xpypi68/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMzhlYjU1MzAy/ODQwOWZmMTU1ZTNl/Mzc4NjVjMjEzMGVk/ZDFlZjgxYmYyMjhk/OTUxMDA4YjdlYWE0/YzFhYzI1OC93d3cu/Y2Fpcm4uaW5mby8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "article",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "cairn.info",
						"hostname": "www.cairn.info",
						"favicon": "https://imgs.search.brave.com/6uPX7UYLbV96I0z3lLa78mwQiUAcMYyq3Zk6Xpypi68/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMzhlYjU1MzAy/ODQwOWZmMTU1ZTNl/Mzc4NjVjMjEzMGVk/ZDFlZjgxYmYyMjhk/OTUxMDA4YjdlYWE0/YzFhYzI1OC93d3cu/Y2Fpcm4uaW5mby8",
						"path": "› revue-agrh1-2015-3-page-11.htm"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/JcZHU_zsQ8HkksgUgzj49BL7VXBnzQGtBNGPivT8UlQ/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9zaHMu/Y2Fpcm4uaW5mby9u/dW1lcm8vR1JIXzE1/My9jb3Zlci90aHVt/Ym5haWw_bGFuZz1m/cg",
						"original": "https://shs.cairn.info/numero/GRH_153/cover/thumbnail?lang=fr",
						"logo": false
					},
					"age": "December 15, 2015",
					"article": {
						"author": [
							{
								"type": "person",
								"name": "Philippe Cohard",
								"url": "https://www.idref.fr/175266409"
							}
						],
						"date": "Dec 15, 2015",
						"publisher": {
							"type": "organization",
							"name": "Association de Gestion des Ressources Humaines"
						},
						"isAccessibleForFree": true
					},
					"extra_snippets": [
						"Cette publication analyse les SG dans leur dimension apprentissage selon le plan suivant : (1) la formation et les serious games, (2) les théories de l’apprentissage, (3) la mise en œuvre de la recherche et enfin (4) une conclusion - discussion sur la typologie réalisée. 3Dans cette première partie nous présentons les serious games et montrons l’importance culturelle des jeux vidéo auxquels les serious games sont rattachés, puis nous étudions l’apprentissage dans la conception des serious games.",
						"Typologie proposée pour l’analyse des théories de l’apprentissage dans les SG Behaviorisme Cognitivisme Constructivisme Cognitif Expérientiel Socioculturel · 68Le tableau 4, ci-dessous, synthétise l’ensemble des 17 serious games analysés au travers de la typologie. ... Nom et type de Serious Game Modèles Source Jeu de simulation d’ERP E, CS Foster, & Hopkins, 2011 Jeu de simulation d’ERP E, CS Léger, 2006 Cloud manager, gestion d’un cloud informatique E Lang et al., 2009 Markstrat simulation de stratégie marketing E Ranchhod, & Loukis, 2012 Joint Theater Level Simulation,",
						"Le jeu est mis en test à la fois en interne dans l’entreprise conceptrice et en externe chez le client. L’expérience utilisateur permet ici de régler les derniers détails mais surtout « de vérifier à ce moment-là aussi que les apprentissages ou la sensibilisation voulue passent bien comme prévu ». 74Les précisions apportées par les concepteurs sur leur non-recours aux théories de l’apprentissage et les méthodes employées issues du développement informatique ainsi que l’explication complète et détaillée du cycle de vie d’un projet de conception/réalisation de serious game par le concepteur de l’entreprise B nous permettent de répondre à nos questions.",
						"Cependant ces deux exemples peuvent également mettre en œuvre l’apprentissage constructiviste socioculturel si des interactions en réseau ont été intégrées dans le jeu (réseaux d’apprenants, relations avec d’autres formés, forums, etc.). Cette typologie fournit donc un cadre de réflexion qui n’attribue pas à un type de compétence, un type de théorie de l’apprentissage donné qui réduirait le travail de conception à une activité purement mécaniste, mais suggère une orientation dans les choix pertinents, de multiples théories de l’apprentissage pouvant être implémentées dans un même serious game."
					]
				},
				{
					"title": "No 34 L’enfant et le jeu Approches théoriques et applications pédagogiques",
					"url": "http://www.iforep.fr/wp-content/uploads/2015/12/le-jeu-et-lenfant-approche-th%C3%A9orique-et-application-p%C3%A9dagogique-unesco.pdf",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Groos’ formulait sa théorie de d’exercice préparatoire)).",
					"profile": {
						"name": "Iforep",
						"url": "http://www.iforep.fr/wp-content/uploads/2015/12/le-jeu-et-lenfant-approche-th%C3%A9orique-et-application-p%C3%A9dagogique-unesco.pdf",
						"long_name": "iforep.fr",
						"img": "https://imgs.search.brave.com/aKFeQzbX1ZBaqZWaRmhqBv2gUUK__1ZxrHowRVMWbRw/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMWIwZTc4YmJi/MDUyMWI4YmFiZGQ3/M2NjMzY0ODFkMTYy/YWQ5YmRlN2E0NGJk/ZDFhODhiM2UzY2Jj/MmU5MzE1Mi93d3cu/aWZvcmVwLmZyLw"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "http",
						"netloc": "iforep.fr",
						"hostname": "www.iforep.fr",
						"favicon": "https://imgs.search.brave.com/aKFeQzbX1ZBaqZWaRmhqBv2gUUK__1ZxrHowRVMWbRw/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMWIwZTc4YmJi/MDUyMWI4YmFiZGQ3/M2NjMzY0ODFkMTYy/YWQ5YmRlN2E0NGJk/ZDFhODhiM2UzY2Jj/MmU5MzE1Mi93d3cu/aWZvcmVwLmZyLw",
						"path": "› wp-content  › uploads  › 2015  › 12  › le-jeu-et-lenfant-approche-théorique-et-application-pédagogique-unesco.pdf"
					},
					"content_type": "pdf",
					"extra_snippets": [
						"A . théoriques . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .",
						"A. APPROCHES THEORIQUES",
						"Groos’ formulait sa théorie de d’exercice préparatoire)).",
						"Ces théories, reprises par J."
					]
				},
				{
					"title": "Le rôle de l’apprentissage par le jeu sur le développement cognitif | Encyclopédie sur le développement des jeunes enfants",
					"url": "https://www.enfant-encyclopedie.com/apprentissage-par-le-jeu/selon-experts/le-role-de-lapprentissage-par-le-jeu-sur-le-developpement",
					"is_source_local": false,
					"is_source_both": false,
					"description": "En raison des besoins de justifier le temps consacré au jeu dans les programmes préscolaires, les chercheurs ont tenté d’étudier les effets possibles de la simulation (faire-semblant), des jeux et des jouets de construction sur des types particuliers d’apprentissage comme, l’acquisition du langage, la lecture et les mathématiques, et d’autres aptitudes cognitives, telles les fonctions exécutives, la créativité, le développement social et moral et la théorie de l’esprit (c’est-à-dire la capacité de comprendre ses propres états mentaux et de se rendre compte que les autres individus peuvent présenter des états mentaux similaires ou différents des siens).",
					"profile": {
						"name": "Encyclopédie sur le développement des jeunes enfants",
						"url": "https://www.enfant-encyclopedie.com/apprentissage-par-le-jeu/selon-experts/le-role-de-lapprentissage-par-le-jeu-sur-le-developpement",
						"long_name": "enfant-encyclopedie.com",
						"img": "https://imgs.search.brave.com/l8IY8N6CrxEoRtiBs3-DJluc1sUDx-6QVtVXVBnaUMc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZDAzOWY5MDE0/YWU0NTQyZmM5ZGQ4/MGE1ZjNjMTMwOTE0/OGUxNjQzMjRmZGFi/YmQ4NmUwMTY4ODY3/NTRjYjAyMi93d3cu/ZW5mYW50LWVuY3lj/bG9wZWRpZS5jb20v"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "article",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "enfant-encyclopedie.com",
						"hostname": "www.enfant-encyclopedie.com",
						"favicon": "https://imgs.search.brave.com/l8IY8N6CrxEoRtiBs3-DJluc1sUDx-6QVtVXVBnaUMc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZDAzOWY5MDE0/YWU0NTQyZmM5ZGQ4/MGE1ZjNjMTMwOTE0/OGUxNjQzMjRmZGFi/YmQ4NmUwMTY4ODY3/NTRjYjAyMi93d3cu/ZW5mYW50LWVuY3lj/bG9wZWRpZS5jb20v",
						"path": "› apprentissage-par-le-jeu  › selon-experts  › le-role-de-lapprentissage-par-le-jeu-sur-le-developpement"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/ZB7lyBGFxAgjQQ1Yqp3rMhMMeciIdqWA4hwq3xOpFww/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/ZW5mYW50LWVuY3lj/bG9wZWRpZS5jb20v/c2l0ZXMvZGVmYXVs/dC9maWxlcy9zdHls/ZXMvbWV0YV9pbWFn/ZS9wdWJsaWMvMjAy/NC0wMS9wbGF5LWJh/c2VkLWxlYXJuaW5n/LTcyMC5qcGc_aXRv/az1uaTRxbjViMw",
						"original": "https://www.enfant-encyclopedie.com/sites/default/files/styles/meta_image/public/2024-01/play-based-learning-720.jpg?itok=ni4qn5b3",
						"logo": false
					},
					"article": {
						"author": [
							{
								"type": "person",
								"name": "Doris Bergen, Ph.D., professeur émérite en psychologie éducative"
							}
						],
						"publisher": {
							"type": "organization",
							"name": "Miami University, États-Unis"
						}
					},
					"extra_snippets": [
						"Le rôle notable joué par l’apprentissage par le jeu dans la stimulation du développement cognitif des jeunes enfants a été décrit par les premiers théoriciens, éducateurs et chercheurs, comme Plato (p.",
						"Bien que l’attention accordée aujourd’hui à l’enseignement préscolaire soit tout à fait louable et ait entraîné l’augmentation du financement alloué aux programmes préscolaires auxquels de plus en plus d’enfants peuvent aller, les défenseurs actuels de l’enseignement préscolaire ne se sont pas toujours basés sur la théorie et la pratique pour l’éducation des jeunes enfants et ont considéré « l’apprentissage » comme un exercice dirigé par un enseignant, hautement structuré et difficile qui doit être imposé aux jeunes enfants.",
						"En raison des besoins de justifier le temps consacré au jeu dans les programmes préscolaires, les chercheurs ont tenté d’étudier les effets possibles de la simulation (faire-semblant), des jeux et des jouets de construction sur des types particuliers d’apprentissage comme, l’acquisition du langage, la lecture et les mathématiques, et d’autres aptitudes cognitives, telles les fonctions exécutives, la créativité, le développement social et moral et la théorie de l’esprit (c’est-à-dire la capacité de comprendre ses propres états mentaux et de se rendre compte que les autres individus peuvent présenter des états mentaux similaires ou différents des siens).",
						"Néanmoins, les bases théoriques et expérimentales qui appuient l’importance de l’apprentissage par le jeu sont tellement fortes, la priorité devrait être d’accorder davantage de financement et d’attention à la recherche consacrée à cette problématique."
					]
				},
				{
					"title": "Apprentissage par le jeu Mise à jour : Février 2018",
					"url": "https://www.enfant-encyclopedie.com/pdf/complet/apprentissage-par-le-jeu",
					"is_source_local": false,
					"is_source_both": false,
					"description": "des jouets de construction sur des types particuliers d’apprentissage comme, l’acquisition du · langage, la lecture et les mathématiques, et d’autres aptitudes cognitives, telles les fonctions · exécutives, la créativité, le développement social et moral et la théorie de l’esprit (c’est-à-dire la",
					"profile": {
						"name": "Encyclopédie sur le développement des jeunes enfants",
						"url": "https://www.enfant-encyclopedie.com/pdf/complet/apprentissage-par-le-jeu",
						"long_name": "enfant-encyclopedie.com",
						"img": "https://imgs.search.brave.com/l8IY8N6CrxEoRtiBs3-DJluc1sUDx-6QVtVXVBnaUMc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZDAzOWY5MDE0/YWU0NTQyZmM5ZGQ4/MGE1ZjNjMTMwOTE0/OGUxNjQzMjRmZGFi/YmQ4NmUwMTY4ODY3/NTRjYjAyMi93d3cu/ZW5mYW50LWVuY3lj/bG9wZWRpZS5jb20v"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "enfant-encyclopedie.com",
						"hostname": "www.enfant-encyclopedie.com",
						"favicon": "https://imgs.search.brave.com/l8IY8N6CrxEoRtiBs3-DJluc1sUDx-6QVtVXVBnaUMc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZDAzOWY5MDE0/YWU0NTQyZmM5ZGQ4/MGE1ZjNjMTMwOTE0/OGUxNjQzMjRmZGFi/YmQ4NmUwMTY4ODY3/NTRjYjAyMi93d3cu/ZW5mYW50LWVuY3lj/bG9wZWRpZS5jb20v",
						"path": "› pdf  › complet  › apprentissage-par-le-jeu"
					},
					"content_type": "pdf",
					"extra_snippets": [
						"Erikson,5 Piaget6 et Vygotsky;7 et des théoriciens et chercheurs plus récents, tels Bodrova et · Leong,8 DeVries,9 Fein,10 et Singer et Singer.11 Cependant, au cours des dernières années, le temps · consacré à l’apprentissage par le jeu et où l’enfant est actif a été écourté dans de nombreux",
						"Le rôle notable joué par l’apprentissage par le jeu dans la stimulation du développement cognitif · des jeunes enfants a été décrit par les premiers théoriciens, éducateurs et chercheurs, comme",
						"pas toujours basés sur la théorie et la pratique pour l’éducation des jeunes enfants et ont · considéré « l’apprentissage » comme un exercice dirigé par un enseignant, hautement structuré",
						"des jouets de construction sur des types particuliers d’apprentissage comme, l’acquisition du · langage, la lecture et les mathématiques, et d’autres aptitudes cognitives, telles les fonctions · exécutives, la créativité, le développement social et moral et la théorie de l’esprit (c’est-à-dire la"
					]
				},
				{
					"title": "La place et les fonctions du jeu dans les apprentissages",
					"url": "https://maternelle.circo25.ac-besancon.fr/wp-content/uploads/sites/16/2016/03/le-jeu-Valiant.pdf",
					"is_source_local": false,
					"is_source_both": false,
					"description": "On trouve une analyse du jeu très proche chez Jérôme Bruner. Il considère que le jeu est : ... Dans l’apprentissage, l’individu se soumet à l’organisation des faits.",
					"profile": {
						"name": "Ac-besancon",
						"url": "https://maternelle.circo25.ac-besancon.fr/wp-content/uploads/sites/16/2016/03/le-jeu-Valiant.pdf",
						"long_name": "maternelle.circo25.ac-besancon.fr",
						"img": "https://imgs.search.brave.com/496CKAtTVJT5wP7mM8JrrsLFYgeiSMY6W5dpBkPly-I/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZmRjNjliZTIz/NDEwODE4N2E1NDA3/ZmIzZWI0M2UxOWIw/NjhkZjY2Mzk4Mjky/YmU2MjRkZmY5ODNj/ZjM2MDFlYS9tYXRl/cm5lbGxlLmNpcmNv/MjUuYWMtYmVzYW5j/b24uZnIv"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "maternelle.circo25.ac-besancon.fr",
						"hostname": "maternelle.circo25.ac-besancon.fr",
						"favicon": "https://imgs.search.brave.com/496CKAtTVJT5wP7mM8JrrsLFYgeiSMY6W5dpBkPly-I/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZmRjNjliZTIz/NDEwODE4N2E1NDA3/ZmIzZWI0M2UxOWIw/NjhkZjY2Mzk4Mjky/YmU2MjRkZmY5ODNj/ZjM2MDFlYS9tYXRl/cm5lbGxlLmNpcmNv/MjUuYWMtYmVzYW5j/b24uZnIv",
						"path": "› wp-content  › uploads  › sites  › 16  › 2016  › 03  › le-jeu-Valiant.pdf"
					},
					"content_type": "pdf",
					"extra_snippets": [
						"On trouve une analyse du jeu très proche chez Jérôme Bruner. Il considère que le jeu est : ... Dans l’apprentissage, l’individu se soumet à l’organisation des faits.",
						"Le rôle de l’enseignant sera de mettre en place des situations d’apprentissage dans lesquelles l’élève sera · auteur. Dans lesquelles il pourra se projeter. Autrement dit, ne pas négliger la notion de choix. Les coins jeux de simulation sont particulièrement adaptés pour répondre à ce besoin.",
						"A noter que les jeux d’assemblage viennent nourrir le jeu symbolique. ...  Construire des apprentissages à partir des coins jeux c’est s’appuyer sur la culture commune de la classe.",
						"Sophie BRIQUET – DUHAZE, Coins jeux et apprentissage de la langue, 2009, Nathan"
					]
				},
				{
					"title": "Se plonger dans un jeu pour mieux apprendre? Théorie ...",
					"url": "https://tecfa.unige.ch/tecfa/maltt/memoire/SutterWidmer10.pdf",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Address and how to get there ? (Phone, Pictures and Maps) · History Tecfa&#x27;s server history, Internet Technologies used since 1993, Hits on Tecfa&#x27;s main www server since 1995 (in French). You can find similar information in English on our maintenance page. Activities report 1989-1999 (in french) ...",
					"profile": {
						"name": "University of Geneva",
						"url": "https://tecfa.unige.ch/tecfa/maltt/memoire/SutterWidmer10.pdf",
						"long_name": "tecfa.unige.ch",
						"img": "https://imgs.search.brave.com/0kWywEgmIJlNT8K_dsdzee8SIzrT83cm6hp4lmxYMhw/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZDg1OTYzMjgz/N2UyNDZjYmFiNzE4/M2I0OGYwYWY5MDI4/OTlkMjAyODM1YmU2/OGQyZWQ4MzQ3N2Vk/NDA4ZDNjMi90ZWNm/YS51bmlnZS5jaC8"
					},
					"language": "en",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "tecfa.unige.ch",
						"hostname": "tecfa.unige.ch",
						"favicon": "https://imgs.search.brave.com/0kWywEgmIJlNT8K_dsdzee8SIzrT83cm6hp4lmxYMhw/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZDg1OTYzMjgz/N2UyNDZjYmFiNzE4/M2I0OGYwYWY5MDI4/OTlkMjAyODM1YmU2/OGQyZWQ4MzQ3N2Vk/NDA4ZDNjMi90ZWNm/YS51bmlnZS5jaC8",
						"path": "› tecfa  › maltt  › memoire  › SutterWidmer10.pdf"
					},
					"content_type": "pdf"
				},
				{
					"title": "Pédagogie par le jeu : définition, types et applications pratiques",
					"url": "https://www.bienenseigner.com/pedagogie-par-le-jeu/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "<strong>La pédagogie par le jeu combine intention pédagogique sérieuse et mécanismes ludiques engageants</strong>. L’Association Nationale Recherche Technologie (ANRT) confirme dans son rapport 2024 qu’elle « transforme les situations d’apprentissage ...",
					"page_age": "2025-08-17T10:12:16",
					"profile": {
						"name": "Bien Enseigner",
						"url": "https://www.bienenseigner.com/pedagogie-par-le-jeu/",
						"long_name": "bienenseigner.com",
						"img": "https://imgs.search.brave.com/ycKaDfXCbQtsXwrQLyNN7CCGs3ATVcu92OdWDvNOuj8/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNzA2OWVhNGVk/NWI2N2U5MDBmYTMx/ZGQ2ODI3MWE5OTE5/NTVlY2MzNzY0ZTZi/YzFjYTYzY2FiNmRm/YzQ4MzJiNS93d3cu/YmllbmVuc2VpZ25l/ci5jb20v"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "faq",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "bienenseigner.com",
						"hostname": "www.bienenseigner.com",
						"favicon": "https://imgs.search.brave.com/ycKaDfXCbQtsXwrQLyNN7CCGs3ATVcu92OdWDvNOuj8/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNzA2OWVhNGVk/NWI2N2U5MDBmYTMx/ZGQ2ODI3MWE5OTE5/NTVlY2MzNzY0ZTZi/YzFjYTYzY2FiNmRm/YzQ4MzJiNS93d3cu/YmllbmVuc2VpZ25l/ci5jb20v",
						"path": "  › accueil  › méthodes pédagogiques"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/JXgOl2xuHCtF_-qvxOF55XY6nPG1VKIoR2UCIE66iow/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/YmllbmVuc2VpZ25l/ci5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTkvMDQvbGEt/cMOpZGFnb2dpZS1w/YXItbGUtamV1Lmpw/Zw",
						"original": "https://www.bienenseigner.com/wp-content/uploads/2019/04/la-pédagogie-par-le-jeu.jpg",
						"logo": false
					},
					"age": "August 17, 2025",
					"faq": {
						"items": [
							{
								"question": "Qu'est-ce que la pédagogie par le jeu ?",
								"answer": "Approche qui combine objectifs d'apprentissage précis et mécanismes ludiques. L'enfant développe des compétences en s'amusant, contrairement au jeu libre sans but pédagogique spécifique.",
								"title": "Pédagogie par le jeu : définition, types et applications pratiques",
								"url": "https://www.bienenseigner.com/pedagogie-par-le-jeu/",
								"meta_url": {
									"scheme": "https",
									"netloc": "bienenseigner.com",
									"hostname": "www.bienenseigner.com",
									"favicon": "https://imgs.search.brave.com/ycKaDfXCbQtsXwrQLyNN7CCGs3ATVcu92OdWDvNOuj8/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNzA2OWVhNGVk/NWI2N2U5MDBmYTMx/ZGQ2ODI3MWE5OTE5/NTVlY2MzNzY0ZTZi/YzFjYTYzY2FiNmRm/YzQ4MzJiNS93d3cu/YmllbmVuc2VpZ25l/ci5jb20v",
									"path": "  › accueil  › méthodes pédagogiques"
								}
							},
							{
								"question": "Quels sont les avantages de l'apprentissage par le jeu ?",
								"answer": "Motivation accrue, mémorisation renforcée, confiance en soi développée. Les neurosciences confirment : l'émotion positive améliore l'ancrage mémoriel et les apprentissages durables.",
								"title": "Pédagogie par le jeu : définition, types et applications pratiques",
								"url": "https://www.bienenseigner.com/pedagogie-par-le-jeu/",
								"meta_url": {
									"scheme": "https",
									"netloc": "bienenseigner.com",
									"hostname": "www.bienenseigner.com",
									"favicon": "https://imgs.search.brave.com/ycKaDfXCbQtsXwrQLyNN7CCGs3ATVcu92OdWDvNOuj8/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNzA2OWVhNGVk/NWI2N2U5MDBmYTMx/ZGQ2ODI3MWE5OTE5/NTVlY2MzNzY0ZTZi/YzFjYTYzY2FiNmRm/YzQ4MzJiNS93d3cu/YmllbmVuc2VpZ25l/ci5jb20v",
									"path": "  › accueil  › méthodes pédagogiques"
								}
							},
							{
								"question": "Comment utiliser le jeu en classe ?",
								"answer": "Définissez votre objectif, choisissez un jeu adapté, testez-le avant. Préparez matériel et consignes claires. Circulez, observez, guidez sans faire à la place.",
								"title": "Pédagogie par le jeu : définition, types et applications pratiques",
								"url": "https://www.bienenseigner.com/pedagogie-par-le-jeu/",
								"meta_url": {
									"scheme": "https",
									"netloc": "bienenseigner.com",
									"hostname": "www.bienenseigner.com",
									"favicon": "https://imgs.search.brave.com/ycKaDfXCbQtsXwrQLyNN7CCGs3ATVcu92OdWDvNOuj8/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNzA2OWVhNGVk/NWI2N2U5MDBmYTMx/ZGQ2ODI3MWE5OTE5/NTVlY2MzNzY0ZTZi/YzFjYTYzY2FiNmRm/YzQ4MzJiNS93d3cu/YmllbmVuc2VpZ25l/ci5jb20v",
									"path": "  › accueil  › méthodes pédagogiques"
								}
							},
							{
								"question": "Quelle est la différence entre jeu libre et jeu dirigé ?",
								"answer": "Jeu libre : l'enfant crée ses règles, explore librement. Jeu dirigé : l'adulte guide vers objectifs précis. Les deux sont complémentaires selon les besoins.",
								"title": "Pédagogie par le jeu : définition, types et applications pratiques",
								"url": "https://www.bienenseigner.com/pedagogie-par-le-jeu/",
								"meta_url": {
									"scheme": "https",
									"netloc": "bienenseigner.com",
									"hostname": "www.bienenseigner.com",
									"favicon": "https://imgs.search.brave.com/ycKaDfXCbQtsXwrQLyNN7CCGs3ATVcu92OdWDvNOuj8/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNzA2OWVhNGVk/NWI2N2U5MDBmYTMx/ZGQ2ODI3MWE5OTE5/NTVlY2MzNzY0ZTZi/YzFjYTYzY2FiNmRm/YzQ4MzJiNS93d3cu/YmllbmVuc2VpZ25l/ci5jb20v",
									"path": "  › accueil  › méthodes pédagogiques"
								}
							},
							{
								"question": "Comment choisir un jeu pédagogique adapté ?",
								"answer": "Vérifiez correspondance âge/niveau, objectif pédagogique clair, durée 15-45 minutes, matériel accessible. Testez personnellement avant utilisation avec vos élèves.",
								"title": "Pédagogie par le jeu : définition, types et applications pratiques",
								"url": "https://www.bienenseigner.com/pedagogie-par-le-jeu/",
								"meta_url": {
									"scheme": "https",
									"netloc": "bienenseigner.com",
									"hostname": "www.bienenseigner.com",
									"favicon": "https://imgs.search.brave.com/ycKaDfXCbQtsXwrQLyNN7CCGs3ATVcu92OdWDvNOuj8/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNzA2OWVhNGVk/NWI2N2U5MDBmYTMx/ZGQ2ODI3MWE5OTE5/NTVlY2MzNzY0ZTZi/YzFjYTYzY2FiNmRm/YzQ4MzJiNS93d3cu/YmllbmVuc2VpZ25l/ci5jb20v",
									"path": "  › accueil  › méthodes pédagogiques"
								}
							},
							{
								"question": "Le jeu est-il vraiment efficace pour l'apprentissage ?",
								"answer": "Oui, sous conditions ! UNESCO (2023) confirme l'efficacité si encadrement qualifié. Nécessite formation enseignant et choix pertinents pour être réellement efficace.",
								"title": "Pédagogie par le jeu : définition, types et applications pratiques",
								"url": "https://www.bienenseigner.com/pedagogie-par-le-jeu/",
								"meta_url": {
									"scheme": "https",
									"netloc": "bienenseigner.com",
									"hostname": "www.bienenseigner.com",
									"favicon": "https://imgs.search.brave.com/ycKaDfXCbQtsXwrQLyNN7CCGs3ATVcu92OdWDvNOuj8/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNzA2OWVhNGVk/NWI2N2U5MDBmYTMx/ZGQ2ODI3MWE5OTE5/NTVlY2MzNzY0ZTZi/YzFjYTYzY2FiNmRm/YzQ4MzJiNS93d3cu/YmllbmVuc2VpZ25l/ci5jb20v",
									"path": "  › accueil  › méthodes pédagogiques"
								}
							}
						]
					},
					"extra_snippets": [
						"Les enseignants cherchent des méthodes qui marchent vraiment. Pas de théories compliquées. Du concret qui transforme leurs classes. La pédagogie par le jeu révolutionne l’apprentissage depuis une décennie. Enfin, je veux dire… quand c’est scientifiquement appliqué !",
						"La pédagogie par le jeu combine intention pédagogique sérieuse et mécanismes ludiques engageants. L’Association Nationale Recherche Technologie (ANRT) confirme dans son rapport 2024 qu’elle « transforme les situations d’apprentissage dans le cadre scolaire et professionnel ».",
						"L’UNESCO souligne dans son rapport mondial 2023 que « les bienfaits d’apprentissage » existent réellement mais « disparaissent si la technologie est utilisée de manière excessive ou en dehors de la présence d’un enseignant qualifié ».",
						"La pédagogie par le jeu n’est plus une option, c’est une nécessité. Les recherches convergent : motivation, mémorisation, développement cognitif… tout s’améliore quand l’apprentissage devient ludique."
					]
				},
				{
					"title": "Philippeclauzard",
					"url": "https://www.formations.philippeclauzard.com/Jeu-apprentissage-theoriesdidactiques.pdf",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Psychologie de l&#x27;éducation..., Jeu d&#x27;apprentissage et théories didactiques, Penser son action enseignante en contexte , Analyse du travail enseignant, Histoire de l’éducation en 3 volets, Grands concepts en sciences de l&#x27;éducation , Conversations sur la pédagogie , Adulte en formation ...",
					"profile": {
						"name": "Philippeclauzard",
						"url": "https://www.formations.philippeclauzard.com/Jeu-apprentissage-theoriesdidactiques.pdf",
						"long_name": "formations.philippeclauzard.com",
						"img": "https://imgs.search.brave.com/suf2qWWFUssv8MSMpcvqm0vY3Li5LrIUel8DB_mkD6A/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOGUyYjM1MWYx/OTkxYjA1ZTIxNzlj/OTdhYTUzNWI1YWE5/NzZjM2FmZjU0ZDRi/ZjJjNDA3YzQ3NzE2/NDMxZDgwMy93d3cu/Zm9ybWF0aW9ucy5w/aGlsaXBwZWNsYXV6/YXJkLmNvbS8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "formations.philippeclauzard.com",
						"hostname": "www.formations.philippeclauzard.com",
						"favicon": "https://imgs.search.brave.com/suf2qWWFUssv8MSMpcvqm0vY3Li5LrIUel8DB_mkD6A/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOGUyYjM1MWYx/OTkxYjA1ZTIxNzlj/OTdhYTUzNWI1YWE5/NzZjM2FmZjU0ZDRi/ZjJjNDA3YzQ3NzE2/NDMxZDgwMy93d3cu/Zm9ybWF0aW9ucy5w/aGlsaXBwZWNsYXV6/YXJkLmNvbS8",
						"path": "› Jeu-apprentissage-theoriesdidactiques.pdf"
					},
					"content_type": "pdf"
				},
				{
					"title": "Quiz dynamique d'apprentissage | Modèles Genially",
					"url": "https://genially.com/fr/modele/quiz-dynamique-dapprentissage/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Animez des quiz, sondages et jeux d’équipe en direct, avec des réponses en temps réel. ... Accélérez la création de contenu grâce à l’IA, intégrée à chaque étape de votre flux de travail. ... Renforcez l’apprentissage et l’engagement grâce à la dynamique du jeu.",
					"page_age": "2025-11-11T09:44:43",
					"profile": {
						"name": "Genially",
						"url": "https://genially.com/fr/modele/quiz-dynamique-dapprentissage/",
						"long_name": "genially.com",
						"img": "https://imgs.search.brave.com/neC27oiwUc1MLxv1Jt--583t0ENMEaxU_jZEFOhAq4o/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMzY1ZGZjYTFh/MzZmNTE0MTE0MjZj/YzU3YTcyMDc2ZWE2/MjdjMDg4NmFlN2Ri/YmI2NDBlOGNkMzM2/ZDczZTAzYy9nZW5p/YWxseS5jb20v"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "genially.com",
						"hostname": "genially.com",
						"favicon": "https://imgs.search.brave.com/neC27oiwUc1MLxv1Jt--583t0ENMEaxU_jZEFOhAq4o/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMzY1ZGZjYTFh/MzZmNTE0MTE0MjZj/YzU3YTcyMDc2ZWE2/MjdjMDg4NmFlN2Ri/YmI2NDBlOGNkMzM2/ZDczZTAzYy9nZW5p/YWxseS5jb20v",
						"path": "  › modèles  › quiz  › quiz dynamique d'apprentissage"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/CVZMa0ZmoThHWjjOHwPWmkQhAsZs3mhz0bJ9t3PUcsQ/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZ2VuaWFsbHku/Y29tL2dlbmlhbC5s/eS9nZW5pYWxseS90/ZW1wbGF0ZXMvYWQw/ZjZmNzktYTkyNi00/MWE0LTlmNTQtOThi/OTBkOTk3ODA1Lmpw/ZWc",
						"original": "https://images.genially.com/genial.ly/genially/templates/ad0f6f79-a926-41a4-9f54-98b90d997805.jpeg",
						"logo": false
					},
					"age": "November 11, 2025",
					"extra_snippets": [
						"Créez un quiz interactif d'apprentissage gratuitement pour stimuler la participation de vos étudiants. Idéal pour des évaluations interactives, des questionnaires didactiques et des tests éducatifs. Personnalisable et amusant. Renforcez l'éducation en ligne. ... Rejoignez Genially, explorez notre galerie de modèles, leurs designs interactifs et animés sauront toucher vos cibles à cœur.",
						"Animez des quiz, sondages et jeux d’équipe en direct, avec des réponses en temps réel. ... Accélérez la création de contenu grâce à l’IA, intégrée à chaque étape de votre flux de travail. ... Renforcez l’apprentissage et l’engagement grâce à la dynamique du jeu.",
						"Rendez l’apprentissage ludique et motivant grâce à la gamification. ... Ressources interactives pour la formation en ligne et en entreprise. ... Ressources interactives pour la classe pour l'enseignement primaire et secondaire. ... Jeux d'évasion, quiz et autres activités d'apprentissage basées sur le jeu.",
						"Engagez les jeunes esprits avec du matériel pédagogique interactif et collaborez à des projets ensemble en classe."
					]
				},
				{
					"title": "APPRENTISSAGE PAR LE JEU Le rôle de l’apprentissage par",
					"url": "https://www.enfant-encyclopedie.com/pdf/expert/apprentissage-par-le-jeu/selon-experts/le-role-de-lapprentissage-par-le-jeu-sur-le-developpement",
					"is_source_local": false,
					"is_source_both": false,
					"description": "des jouets de construction sur des types particuliers d’apprentissage comme, l’acquisition du · langage, la lecture et les mathématiques, et d’autres aptitudes cognitives, telles les fonctions · exécutives, la créativité, le développement social et moral et la théorie de l’esprit (c’est-à-dire la",
					"profile": {
						"name": "Encyclopédie sur le développement des jeunes enfants",
						"url": "https://www.enfant-encyclopedie.com/pdf/expert/apprentissage-par-le-jeu/selon-experts/le-role-de-lapprentissage-par-le-jeu-sur-le-developpement",
						"long_name": "enfant-encyclopedie.com",
						"img": "https://imgs.search.brave.com/l8IY8N6CrxEoRtiBs3-DJluc1sUDx-6QVtVXVBnaUMc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZDAzOWY5MDE0/YWU0NTQyZmM5ZGQ4/MGE1ZjNjMTMwOTE0/OGUxNjQzMjRmZGFi/YmQ4NmUwMTY4ODY3/NTRjYjAyMi93d3cu/ZW5mYW50LWVuY3lj/bG9wZWRpZS5jb20v"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "enfant-encyclopedie.com",
						"hostname": "www.enfant-encyclopedie.com",
						"favicon": "https://imgs.search.brave.com/l8IY8N6CrxEoRtiBs3-DJluc1sUDx-6QVtVXVBnaUMc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZDAzOWY5MDE0/YWU0NTQyZmM5ZGQ4/MGE1ZjNjMTMwOTE0/OGUxNjQzMjRmZGFi/YmQ4NmUwMTY4ODY3/NTRjYjAyMi93d3cu/ZW5mYW50LWVuY3lj/bG9wZWRpZS5jb20v",
						"path": "› pdf  › expert  › apprentissage-par-le-jeu  › selon-experts  › le-role-de-lapprentissage-par-le-jeu-sur-le-developpement"
					},
					"content_type": "pdf",
					"extra_snippets": [
						"Erikson,5 Piaget6 et Vygotsky;7 et des théoriciens et chercheurs plus récents, tels Bodrova et · Leong,8 DeVries,9 Fein,10 et Singer et Singer.11 Cependant, au cours des dernières années, le temps · consacré à l’apprentissage par le jeu et où l’enfant est actif a été écourté dans de nombreux",
						"Le rôle notable joué par l’apprentissage par le jeu dans la stimulation du développement cognitif · des jeunes enfants a été décrit par les premiers théoriciens, éducateurs et chercheurs, comme",
						"pas toujours basés sur la théorie et la pratique pour l’éducation des jeunes enfants et ont · considéré « l’apprentissage » comme un exercice dirigé par un enseignant, hautement structuré",
						"des jouets de construction sur des types particuliers d’apprentissage comme, l’acquisition du · langage, la lecture et les mathématiques, et d’autres aptitudes cognitives, telles les fonctions · exécutives, la créativité, le développement social et moral et la théorie de l’esprit (c’est-à-dire la"
					]
				},
				{
					"title": "(PDF) Les jeux vidéo au banc d'essai des théories de l'apprentissage",
					"url": "https://www.researchgate.net/publication/325270197_Les_jeux_video_au_banc_d'essai_des_theories_de_l'apprentissage",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Au fil des années, <strong>les game designers ont su implémenter dans les jeux vidéo les principes des théories de l&#x27;apprentissage et du conditionnement ainsi que les théories constructivistes</strong>.",
					"page_age": "2018-05-21T00:00:00",
					"profile": {
						"name": "ResearchGate",
						"url": "https://www.researchgate.net/publication/325270197_Les_jeux_video_au_banc_d'essai_des_theories_de_l'apprentissage",
						"long_name": "researchgate.net",
						"img": "https://imgs.search.brave.com/WJ25-tL-91vp8kSoF0YS7d8CZVivP1cG-EjlGvrmxOc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZjE0MDk0Yzli/MWQ3NGQ2ZTNjODVh/YWVmMDNkM2NkZWI5/NGEzNjdhMmEyY2E2/N2EzN2Y0OThlZjdi/YWU3MjkwMi93d3cu/cmVzZWFyY2hnYXRl/Lm5ldC8"
					},
					"language": "en",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "article",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "researchgate.net",
						"hostname": "www.researchgate.net",
						"favicon": "https://imgs.search.brave.com/WJ25-tL-91vp8kSoF0YS7d8CZVivP1cG-EjlGvrmxOc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZjE0MDk0Yzli/MWQ3NGQ2ZTNjODVh/YWVmMDNkM2NkZWI5/NGEzNjdhMmEyY2E2/N2EzN2Y0OThlZjdi/YWU3MjkwMi93d3cu/cmVzZWFyY2hnYXRl/Lm5ldC8",
						"path": "› publication  › 325270197_Les_jeux_video_au_banc_d'essai_des_theories_de_l'apprentissage"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/GNEY84BVaywrO3Mm1wPf61x-eKITAiGyRqdRu9jI258/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9pMS5y/Z3N0YXRpYy5uZXQv/cHVibGljYXRpb24v/MzI1MjcwMTk3X0xl/c19qZXV4X3ZpZGVv/X2F1X2JhbmNfZCdl/c3NhaV9kZXNfdGhl/b3JpZXNfZGVfbCdh/cHByZW50aXNzYWdl/L2xpbmtzLzViMDJk/NmY3YWNhMjcyMGJh/MDk4ZTQwYy9sYXJn/ZXByZXZpZXcucG5n",
						"original": "https://i1.rgstatic.net/publication/325270197_Les_jeux_video_au_banc_d'essai_des_theories_de_l'apprentissage/links/5b02d6f7aca2720ba098e40c/largepreview.png",
						"logo": false
					},
					"age": "May 21, 2018",
					"article": {
						"author": [
							{
								"type": "person",
								"name": "Yann Leroux",
								"url": "https://www.researchgate.net/profile/Yann-Leroux",
								"thumbnail": {
									"src": "https://imgs.search.brave.com/fOjv3M7KCQ3lPnNlYNT4_L1y37l66mvWGFjfYjyxHdU/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9pMS5y/Z3N0YXRpYy5uZXQv/aWkvcHJvZmlsZS5p/bWFnZS8yNzIxOTUx/MjEzMTU4NTMtMTQ0/MTkwNzc4Mjk4Nl9R/NjQvWWFubi1MZXJv/dXguanBn",
									"original": "https://i1.rgstatic.net/ii/profile.image/272195121315853-1441907782986_Q64/Yann-Leroux.jpg"
								}
							}
						],
						"date": "Jan 01, 2016",
						"publisher": {
							"type": "organization",
							"name": "unknown",
							"url": "https://www.researchgate.net/unknown",
							"thumbnail": {
								"src": "https://imgs.search.brave.com/UjSGsXBrrrqKndxfeOp5EGUdM15aJCsZ_BUDIJcDQhs/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/cmVzZWFyY2hnYXRl/Lm5ldC91bmtub3du",
								"original": "https://www.researchgate.net/unknown"
							}
						}
					},
					"extra_snippets": [
						"Les jeux vidéo sont de formidables dispositifs d'apprentissage. Au fil des années, les game designers ont su implémenter dans les jeux vidéo les principes des théories de l'apprentissage et du conditionnement ainsi que les théories constructivistes. Les jeux vidéo sont un site d'apprentissage pour la perception, la vie affective, relationnelle et la cognition.",
						"Les jeux vidéo sont de formidables dispositifs d’apprentissage. Au fil des années, les game · designers ont su implémenter dans les jeux vidéo les principes des théories de",
						"Le dernier facilitateur concerne le design des jeux vidéo. Sous leur richesse graphique, les · jeux vidéo sont des systèmes simples. Contrairement à la vie de tous les jours, ils donnent · des objectifs clairs au joueur. Les feedbacks sans ambiguïté permettent de se situer avec · 11 Steinkuehler, Constance, and Sean Duncan. \"Scientific habits of mind in virtual worlds.\" Journal of ... Enfin, même si ces caractéristiques facilitent les apprentissages, ils ne sont pas décisifs.",
						"ans, les game designers ont peu à peu incorporé dans les jeux vidéo les principes des · théories de l’apprentissage et plus particulièrement des théories constructivistes qui mettent"
					]
				}
			]
		},
		{
			"query": "impact du quiz sur l'engagement cognitif en contexte muséal",
			"results": [
				{
					"title": "Le modèle contextuel de l'apprentissage dans les musées et autres environnements d'éducation non formelle : critique et bonification | Request PDF",
					"url": "https://www.researchgate.net/publication/315037277_Le_modele_contextuel_de_l'apprentissage_dans_les_musees_et_autres_environnements_d'education_non_formelle_critique_et_bonification",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Une étude réalisée au Musée des beaux-arts de Montréal (MBAM) a permis de rendre compte de l’expérience muséale d’adolescents (n=35) ayant participé à une visite guidée par une médiatrice et une visite assistée par un parcours-jeu sur tablette numérique. À partir d’un modèle de la situation pédagogique et du concept d’engagement (comportemental, cognitif et émotionnel), les deux contextes de visites sont observés puis comparés.",
					"page_age": "2016-04-01T00:00:00",
					"profile": {
						"name": "ResearchGate",
						"url": "https://www.researchgate.net/publication/315037277_Le_modele_contextuel_de_l'apprentissage_dans_les_musees_et_autres_environnements_d'education_non_formelle_critique_et_bonification",
						"long_name": "researchgate.net",
						"img": "https://imgs.search.brave.com/WJ25-tL-91vp8kSoF0YS7d8CZVivP1cG-EjlGvrmxOc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZjE0MDk0Yzli/MWQ3NGQ2ZTNjODVh/YWVmMDNkM2NkZWI5/NGEzNjdhMmEyY2E2/N2EzN2Y0OThlZjdi/YWU3MjkwMi93d3cu/cmVzZWFyY2hnYXRl/Lm5ldC8"
					},
					"language": "en",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "article",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "researchgate.net",
						"hostname": "www.researchgate.net",
						"favicon": "https://imgs.search.brave.com/WJ25-tL-91vp8kSoF0YS7d8CZVivP1cG-EjlGvrmxOc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZjE0MDk0Yzli/MWQ3NGQ2ZTNjODVh/YWVmMDNkM2NkZWI5/NGEzNjdhMmEyY2E2/N2EzN2Y0OThlZjdi/YWU3MjkwMi93d3cu/cmVzZWFyY2hnYXRl/Lm5ldC8",
						"path": "› publication  › 315037277_Le_modele_contextuel_de_l'apprentissage_dans_les_musees_et_autres_environnements_d'education_non_formelle_critique_et_bonification"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/NA3UWQdok5rp6uI2kyF0cHLVZy0QBikNBsFv8yDMrrc/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/cmVzZWFyY2hnYXRl/Lm5ldC9pbWFnZXMv/dGVtcGxhdGUvZGVm/YXVsdF9wdWJsaWNh/dGlvbl9wcmV2aWV3/X2xhcmdlLnBuZw",
						"original": "https://www.researchgate.net/images/template/default_publication_preview_large.png",
						"logo": false
					},
					"age": "April 1, 2016",
					"article": {
						"author": [
							{
								"type": "person",
								"name": "Charlène Bélanger",
								"url": "https://www.researchgate.net/profile/Charlene-Belanger-2",
								"thumbnail": {
									"src": "https://imgs.search.brave.com/M3Qp3KhTgWAupUdB6ymuHOuXQKCRiVFkTVpnIdiLkkY/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9pMS5y/Z3N0YXRpYy5uZXQv/aWkvcHJvZmlsZS5p/bWFnZS8xMDA1Mjcx/MzA4NTc4ODE3LTE2/MTY2ODY3NjUzNzJf/UTY0L0NoYXJsZW5l/LUJlbGFuZ2VyLTIu/anBn",
									"original": "https://i1.rgstatic.net/ii/profile.image/1005271308578817-1616686765372_Q64/Charlene-Belanger-2.jpg"
								}
							}
						],
						"date": "Apr 01, 2016",
						"publisher": {
							"type": "organization",
							"name": "unknown",
							"url": "https://www.researchgate.net/unknown",
							"thumbnail": {
								"src": "https://imgs.search.brave.com/UjSGsXBrrrqKndxfeOp5EGUdM15aJCsZ_BUDIJcDQhs/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/cmVzZWFyY2hnYXRl/Lm5ldC91bmtub3du",
								"original": "https://www.researchgate.net/unknown"
							}
						}
					},
					"extra_snippets": [
						"Une étude réalisée au Musée des beaux-arts de Montréal (MBAM) a permis de rendre compte de l’expérience muséale d’adolescents (n=35) ayant participé à une visite guidée par une médiatrice et une visite assistée par un parcours-jeu sur tablette numérique. À partir d’un modèle de la situation pédagogique et du concept d’engagement (comportemental, cognitif et émotionnel), les deux contextes de visites sont observés puis comparés.",
						"In what ways does your institution currently engage with contemporary research? Could it, should it, be doing it better? These questions and others will be posed and answered by scholars Marianne Achiam, Justin Dillon and Kevin Crowley. Join us for what promises to be a very stimulating discussion! ... John H. Falk · Education is a lifelong endeavor; the public learns in many places and contexts, for a diversity of reasons, throughout their lives.",
						"The framework provided by the Contextual Model of Learning proved useful for understanding how complex combinations of factors influenced visitor learning. These effects were clearerest when visitors were segmented by entry conditions such as prior knowledge and interest. © 2005 Wiley Periodicals, Inc. Sci Ed89:744–778, 2005 ... Abstract Major museums worldwide are starting to use social media such as blogs, podcasts and content shares to engage users via participatory communication.",
						"Bélanger (2016). Nous mobilisons également des fondements théoriques liés à la notion d'engagement en contexte d'éducation non formelle adaptéede Fredricks, Blumenfeld, et Paris (2004)."
					]
				},
				{
					"title": "L'UX design dans les musées | Acant",
					"url": "https://acant.fr/blog/limportance-de-lux-design-dans-lexperience-des-visiteurs-de-musee/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Apprentissage Interactif : Ateliers créatifs, jeux de piste et quiz interactifs permettent aux enfants de s’approprier les collections tout en s’amusant. Storytelling : Raconter des histoires captivantes pour donner vie aux personnages historiques. La technologie et le multimédia ont révolutionné l’expérience muséale en offrant une immersion interactive sans précédent.",
					"page_age": "2026-04-18T16:25:45",
					"profile": {
						"name": "Acant",
						"url": "https://acant.fr/blog/limportance-de-lux-design-dans-lexperience-des-visiteurs-de-musee/",
						"long_name": "acant.fr",
						"img": "https://imgs.search.brave.com/aoG8QXcdsnbfSm9IPw8wkNGCxTK5ET232659xs2poiQ/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNzlhZDk1ZjRk/MzA2MzVjYTA1NzZi/YmFkYWM2NTZkODhh/MzMxZTM1NDdiZTlm/YTkyOWE1ZjgzY2E1/ZmQzNTI5Zi9hY2Fu/dC5mci8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "acant.fr",
						"hostname": "acant.fr",
						"favicon": "https://imgs.search.brave.com/aoG8QXcdsnbfSm9IPw8wkNGCxTK5ET232659xs2poiQ/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNzlhZDk1ZjRk/MzA2MzVjYTA1NzZi/YmFkYWM2NTZkODhh/MzMxZTM1NDdiZTlm/YTkyOWE1ZjgzY2E1/ZmQzNTI5Zi9hY2Fu/dC5mci8",
						"path": "  › l’importance de l’ux design dans l’expérience des visiteurs de musée"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/WLY7Sh5a0gyUTeYwtstTbMaO8UUHLal6rXop40BOQRE/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9hY2Fu/dC5mci93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMy8xMi91c2Vk/LXBhdGF0b3I0NF91/bHRyYXJlYWxpc3Rp/Y19waC0zLndlYnA",
						"original": "https://acant.fr/wp-content/uploads/2023/12/used-patator44_ultrarealistic_ph-3.webp",
						"logo": false
					},
					"age": "April 18, 2026",
					"extra_snippets": [
						"Pourtant, entre la barrière de l’illégitimité cognitive et la passivité de certains parcours classiques, le fossé se creuse. Comment transformer une visite en un souvenir impérissable ? La réponse réside dans une hybridation méthodologique unique : l’alliance du Design Thinking (pour l’usage), de l’UX Design (pour la fluidité) et de l’Art Thinking (pour la rupture). Ce guide complet explore les leviers de l’innovation muséale, de l’accessibilité universelle à la médiation augmentée.",
						"Un visiteur sature après 45 minutes de visite intensive. C’est la « fatigue muséale ». L’innovation consiste ici à gérer la charge cognitive.",
						"Apprentissage Interactif : Ateliers créatifs, jeux de piste et quiz interactifs permettent aux enfants de s’approprier les collections tout en s’amusant. Storytelling : Raconter des histoires captivantes pour donner vie aux personnages historiques. La technologie et le multimédia ont révolutionné l’expérience muséale en offrant une immersion interactive sans précédent.",
						"Interaction et Engagement : L’UX favorise le passage du regard passif à la participation active via des dispositifs interactifs (écrans tactiles, applications mobiles, réalité augmentée). Accessibilité Universelle : L’UX design tient compte des besoins des visiteurs ayant des limitations physiques, sensorielles ou cognitives (Dys, Seniors, handicap)."
					]
				},
				{
					"title": "Projet Tutoré Evaluation de l’expérience de visite dans un contexte muséal",
					"url": "https://idmc.univ-lorraine.fr/wp-content/uploads/2019/07/Rapport_Kane_Martin_Pace_2019_sansANNEXES.pdf",
					"is_source_local": false,
					"is_source_both": false,
					"description": "déterminées. Toutefois, bien que “l’environnement muséal n’apparaît plus comme un énoncé · à apprendre, mais comme un contexte d’apprentissage où les visiteurs intègrent ce qui leur",
					"profile": {
						"name": "Univ-lorraine",
						"url": "https://idmc.univ-lorraine.fr/wp-content/uploads/2019/07/Rapport_Kane_Martin_Pace_2019_sansANNEXES.pdf",
						"long_name": "idmc.univ-lorraine.fr",
						"img": "https://imgs.search.brave.com/XGrzZtAYYibR6EvskrtAZuci71O_jyh2g295w7MvAAw/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZTlmYWQ3YmQ2/MTA4MTQwMTRkMTg5/MmNmOTU2NTkyMjMw/OTIwMzY3ZTE4MzA0/MjhjMjhmMjFhN2I5/NWQ4ZjFlMC9pZG1j/LnVuaXYtbG9ycmFp/bmUuZnIv"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "idmc.univ-lorraine.fr",
						"hostname": "idmc.univ-lorraine.fr",
						"favicon": "https://imgs.search.brave.com/XGrzZtAYYibR6EvskrtAZuci71O_jyh2g295w7MvAAw/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZTlmYWQ3YmQ2/MTA4MTQwMTRkMTg5/MmNmOTU2NTkyMjMw/OTIwMzY3ZTE4MzA0/MjhjMjhmMjFhN2I5/NWQ4ZjFlMC9pZG1j/LnVuaXYtbG9ycmFp/bmUuZnIv",
						"path": "› wp-content  › uploads  › 2019  › 07  › Rapport_Kane_Martin_Pace_2019_sansANNEXES.pdf"
					},
					"content_type": "pdf",
					"extra_snippets": [
						"A. APPRENTISSAGE DANS LE CONTEXTE MUSEAL",
						"déterminées. Toutefois, bien que “l’environnement muséal n’apparaît plus comme un énoncé · à apprendre, mais comme un contexte d’apprentissage où les visiteurs intègrent ce qui leur",
						"Apprentissage dans le contexte muséal .............................................................................",
						"muséal n’apparaît plus comme un énoncé à apprendre, mais comme un contexte"
					]
				},
				{
					"title": "View of L’ENGAGEMENT COGNITIF EN CONTEXTE POSTSECONDAIRE : TRADUCTION, ADAPTATION ET VALIDATION D’UNE ÉCHELLE DE MESURE | McGill Journal of Education / Revue des sciences de l'éducation de McGill",
					"url": "https://mje.mcgill.ca/article/view/9483/7385",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Return to Article Details L’<strong>ENGAGEMENT COGNITIF EN CONTEXTE</strong> POSTSECONDAIRE : TRADUCTION, ADAPTATION ET VALIDATION D’UNE ÉCHELLE DE MESURE",
					"profile": {
						"name": "Mcgill",
						"url": "https://mje.mcgill.ca/article/view/9483/7385",
						"long_name": "mje.mcgill.ca",
						"img": "https://imgs.search.brave.com/3RkWW0y3rhJqZQ_t03ThfatOapPkc0_GCEz336DM3TQ/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOGMxMzc0ODRh/NTk1NmFjMjVjMjNk/OWIzMTkyNDljMTY0/MDY5YWE2MzFjMDI2/ZTRhM2EyM2UwNDQ0/ZTE1M2Y5OS9tamUu/bWNnaWxsLmNhLw"
					},
					"language": "en",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "mje.mcgill.ca",
						"hostname": "mje.mcgill.ca",
						"favicon": "https://imgs.search.brave.com/3RkWW0y3rhJqZQ_t03ThfatOapPkc0_GCEz336DM3TQ/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOGMxMzc0ODRh/NTk1NmFjMjVjMjNk/OWIzMTkyNDljMTY0/MDY5YWE2MzFjMDI2/ZTRhM2EyM2UwNDQ0/ZTE1M2Y5OS9tamUu/bWNnaWxsLmNhLw",
						"path": "› article  › view  › 9483  › 7385"
					}
				},
				{
					"title": "L'engagement cognitif : le pilier oublié de l'apprentissage efficace",
					"url": "https://www.didask.com/post/engagement-cognitif",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Ils lisent, ils regardent, ils cliquent sur la bonne réponse. Leur cerveau reconnaît des patterns familiers sans jamais vraiment réfléchir. <strong>L&#x27;illusion de maîtrise s&#x27;installe, renforcée par des scores parfaits aux quiz</strong>.",
					"page_age": "2026-03-18T10:54:04",
					"profile": {
						"name": "Didask",
						"url": "https://www.didask.com/post/engagement-cognitif",
						"long_name": "didask.com",
						"img": "https://imgs.search.brave.com/m2Z7xRZgZm0yir4LbI_y75B0PXiOwwYXiEsDq14NUkc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMmVhYjQxZDgw/YzM2MGU5Y2IzOWYy/MWNmMTlkMDU0YWQy/M2M1NGU1YjExODNk/ZTEyODE5MjliMDQ4/MmJkYTdhMC93d3cu/ZGlkYXNrLmNvbS8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "faq",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "didask.com",
						"hostname": "www.didask.com",
						"favicon": "https://imgs.search.brave.com/m2Z7xRZgZm0yir4LbI_y75B0PXiOwwYXiEsDq14NUkc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMmVhYjQxZDgw/YzM2MGU5Y2IzOWYy/MWNmMTlkMDU0YWQy/M2M1NGU1YjExODNk/ZTEyODE5MjliMDQ4/MmJkYTdhMC93d3cu/ZGlkYXNrLmNvbS8",
						"path": "› post  › engagement-cognitif"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/p6uwSoZcLO8A0kSEFYN3--iw7Fw_cil1c6VyEAubYcg/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/OTJkY2UzZmNkNzZj/ZWE2MjQ3NTRkYjkv/Njk2N2EyOTRmY2U0/NzMyNDZjY2Q1YmMz/XzY5MjliOWUwNTFj/MWI3YmFkYjk0NTAz/MV9kaWRhc2staWEt/ZW5nYWdlbWVudC1j/b2duaXRpZi1iYW5u/aWVyZS53ZWJw",
						"original": "https://cdn.prod.website-files.com/692dce3fcd76cea624754db9/6967a294fce473246ccd5bc3_6929b9e051c1b7badb945031_didask-ia-engagement-cognitif-banniere.webp",
						"logo": false
					},
					"age": "March 18, 2026",
					"faq": {
						"items": [
							{
								"question": "Qu'est-ce que l'engagement cognitif ?",
								"answer": "L'engagement cognitif mesure l'intensité de l'effort mental fourni par l'apprenant durant son apprentissage. Ce concept se distingue de l'engagement comportemental ou émotionnel. Un apprenant peut terminer ses modules et être satisfait sans que son cerveau fournisse un effort réel d'apprentissage.",
								"title": "L'engagement cognitif : le pilier oublié de l'apprentissage efficace",
								"url": "https://www.didask.com/post/engagement-cognitif",
								"meta_url": {
									"scheme": "https",
									"netloc": "didask.com",
									"hostname": "www.didask.com",
									"favicon": "https://imgs.search.brave.com/m2Z7xRZgZm0yir4LbI_y75B0PXiOwwYXiEsDq14NUkc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMmVhYjQxZDgw/YzM2MGU5Y2IzOWYy/MWNmMTlkMDU0YWQy/M2M1NGU1YjExODNk/ZTEyODE5MjliMDQ4/MmJkYTdhMC93d3cu/ZGlkYXNrLmNvbS8",
									"path": "› post  › engagement-cognitif"
								}
							},
							{
								"question": "Quels sont les quatre niveaux du modèle ICAP ?",
								"answer": "Le modèle ICAP hiérarchise quatre niveaux d'engagement cognitif : Passif (réception passive de l'information), Actif (manipulation basique de l'information), Constructif (génération de nouvelles idées) et Interactif (co-construction de la compréhension en dialogue).",
								"title": "L'engagement cognitif : le pilier oublié de l'apprentissage efficace",
								"url": "https://www.didask.com/post/engagement-cognitif",
								"meta_url": {
									"scheme": "https",
									"netloc": "didask.com",
									"hostname": "www.didask.com",
									"favicon": "https://imgs.search.brave.com/m2Z7xRZgZm0yir4LbI_y75B0PXiOwwYXiEsDq14NUkc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMmVhYjQxZDgw/YzM2MGU5Y2IzOWYy/MWNmMTlkMDU0YWQy/M2M1NGU1YjExODNk/ZTEyODE5MjliMDQ4/MmJkYTdhMC93d3cu/ZGlkYXNrLmNvbS8",
									"path": "› post  › engagement-cognitif"
								}
							},
							{
								"question": "Comment mesurer l'engagement cognitif dans une formation ?",
								"answer": "L'engagement cognitif se mesure par des indicateurs comme le taux d'erreur aux exercices, le temps de réflexion avant réponse, la qualité des productions et le nombre de tentatives. Le temps passé et le taux de complétion ne révèlent rien sur l'intensité de l'effort mental réel.",
								"title": "L'engagement cognitif : le pilier oublié de l'apprentissage efficace",
								"url": "https://www.didask.com/post/engagement-cognitif",
								"meta_url": {
									"scheme": "https",
									"netloc": "didask.com",
									"hostname": "www.didask.com",
									"favicon": "https://imgs.search.brave.com/m2Z7xRZgZm0yir4LbI_y75B0PXiOwwYXiEsDq14NUkc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMmVhYjQxZDgw/YzM2MGU5Y2IzOWYy/MWNmMTlkMDU0YWQy/M2M1NGU1YjExODNk/ZTEyODE5MjliMDQ4/MmJkYTdhMC93d3cu/ZGlkYXNrLmNvbS8",
									"path": "› post  › engagement-cognitif"
								}
							},
							{
								"question": "Qu'est-ce que la difficulté désirable en formation ?",
								"answer": "La difficulté désirable désigne un niveau d'exercice situé dans la zone proximale de développement : ni trop simple au point que l'apprenant réponde sans réfléchir, ni trop complexe au risque de provoquer l'abandon. Ce niveau exige un effort cognitif authentique tout en restant atteignable.",
								"title": "L'engagement cognitif : le pilier oublié de l'apprentissage efficace",
								"url": "https://www.didask.com/post/engagement-cognitif",
								"meta_url": {
									"scheme": "https",
									"netloc": "didask.com",
									"hostname": "www.didask.com",
									"favicon": "https://imgs.search.brave.com/m2Z7xRZgZm0yir4LbI_y75B0PXiOwwYXiEsDq14NUkc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMmVhYjQxZDgw/YzM2MGU5Y2IzOWYy/MWNmMTlkMDU0YWQy/M2M1NGU1YjExODNk/ZTEyODE5MjliMDQ4/MmJkYTdhMC93d3cu/ZGlkYXNrLmNvbS8",
									"path": "› post  › engagement-cognitif"
								}
							},
							{
								"question": "Pourquoi les QCM classiques ne favorisent-ils pas l'engagement cognitif ?",
								"answer": "Les QCM à choix multiples où la bonne réponse saute aux yeux ne stimulent pas suffisamment le cerveau. Reconnaître une réponse parmi des options est plus facile que la générer activement. Pour un engagement cognitif profond, l'apprenant doit formuler, rédiger et justifier ses réponses.",
								"title": "L'engagement cognitif : le pilier oublié de l'apprentissage efficace",
								"url": "https://www.didask.com/post/engagement-cognitif",
								"meta_url": {
									"scheme": "https",
									"netloc": "didask.com",
									"hostname": "www.didask.com",
									"favicon": "https://imgs.search.brave.com/m2Z7xRZgZm0yir4LbI_y75B0PXiOwwYXiEsDq14NUkc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMmVhYjQxZDgw/YzM2MGU5Y2IzOWYy/MWNmMTlkMDU0YWQy/M2M1NGU1YjExODNk/ZTEyODE5MjliMDQ4/MmJkYTdhMC93d3cu/ZGlkYXNrLmNvbS8",
									"path": "› post  › engagement-cognitif"
								}
							},
							{
								"question": "Comment intégrer l'engagement cognitif dans vos formations digitales ?",
								"answer": "Intégrez l'engagement cognitif en créant des conflits cognitifs qui confrontent l'apprenant à ses conceptions initiales, en multipliant les cas pratiques avec des contextes variés, en utilisant des exercices de récupération en mémoire réguliers, et en proposant des mises en situation authentiques et complexes proches de la réalité professionnelle.",
								"title": "L'engagement cognitif : le pilier oublié de l'apprentissage efficace",
								"url": "https://www.didask.com/post/engagement-cognitif",
								"meta_url": {
									"scheme": "https",
									"netloc": "didask.com",
									"hostname": "www.didask.com",
									"favicon": "https://imgs.search.brave.com/m2Z7xRZgZm0yir4LbI_y75B0PXiOwwYXiEsDq14NUkc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMmVhYjQxZDgw/YzM2MGU5Y2IzOWYy/MWNmMTlkMDU0YWQy/M2M1NGU1YjExODNk/ZTEyODE5MjliMDQ4/MmJkYTdhMC93d3cu/ZGlkYXNrLmNvbS8",
									"path": "› post  › engagement-cognitif"
								}
							},
							{
								"question": "Quel est le rôle du feedback dans l'engagement cognitif ?",
								"answer": "Un feedback efficace doit pousser l'apprenant à analyser son erreur, comprendre pourquoi sa réponse était inappropriée et ajuster son raisonnement. Un simple 'Correct' ou 'Incorrect' ne stimule aucun processus cognitif. C'est dans cette réflexion métacognitive que l'apprentissage se consolide.",
								"title": "L'engagement cognitif : le pilier oublié de l'apprentissage efficace",
								"url": "https://www.didask.com/post/engagement-cognitif",
								"meta_url": {
									"scheme": "https",
									"netloc": "didask.com",
									"hostname": "www.didask.com",
									"favicon": "https://imgs.search.brave.com/m2Z7xRZgZm0yir4LbI_y75B0PXiOwwYXiEsDq14NUkc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMmVhYjQxZDgw/YzM2MGU5Y2IzOWYy/MWNmMTlkMDU0YWQy/M2M1NGU1YjExODNk/ZTEyODE5MjliMDQ4/MmJkYTdhMC93d3cu/ZGlkYXNrLmNvbS8",
									"path": "› post  › engagement-cognitif"
								}
							},
							{
								"question": "Qu'est-ce que le growth mindset et pourquoi est-il important pour l'engagement cognitif ?",
								"answer": "Le growth mindset, conceptualisé par Carol Dweck, désigne l'état d'esprit face à l'effort. Si les apprenants perçoivent la difficulté comme un échec personnel, ils éviteront l'engagement cognitif profond. La formation doit valoriser l'effort, normaliser l'erreur comme partie intégrante de l'apprentissage et présenter les challenges comme des opportunités de développement.",
								"title": "L'engagement cognitif : le pilier oublié de l'apprentissage efficace",
								"url": "https://www.didask.com/post/engagement-cognitif",
								"meta_url": {
									"scheme": "https",
									"netloc": "didask.com",
									"hostname": "www.didask.com",
									"favicon": "https://imgs.search.brave.com/m2Z7xRZgZm0yir4LbI_y75B0PXiOwwYXiEsDq14NUkc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMmVhYjQxZDgw/YzM2MGU5Y2IzOWYy/MWNmMTlkMDU0YWQy/M2M1NGU1YjExODNk/ZTEyODE5MjliMDQ4/MmJkYTdhMC93d3cu/ZGlkYXNrLmNvbS8",
									"path": "› post  › engagement-cognitif"
								}
							}
						]
					},
					"extra_snippets": [
						"La majorité des formations digitales maintiennent les apprenants dans un engagement de surface. Ils lisent, ils regardent, ils cliquent sur la bonne réponse. Leur cerveau reconnaît des patterns familiers sans jamais vraiment réfléchir. L'illusion de maîtrise s'installe, renforcée par des scores parfaits aux quiz.",
						"Durant la phase d'application, multipliez les cas pratiques en variant systématiquement les contextes. Cette méthode d'apprentissage entremêlé, validée par de nombreuses études en science cognitive, force le cerveau à discriminer les situations et à ajuster ses stratégies.",
						"La technologie peut servir cet objectif d'engagement cognitif. L'assistant IA de Didask, par exemple, permet de générer automatiquement des mises en situation personnalisées adaptées au contexte professionnel de chaque apprenant.",
						"Pour favoriser un engagement profond, vos formations doivent exiger une production active, créer une difficulté désirable et varier les contextes d'application."
					]
				},
				{
					"title": "Répondre à un QCM : Aspects cognitifs — Cours Evaluer les apprentissages, MEEF-PIF",
					"url": "http://espe-rtd-reflexpro.u-ga.fr/docs/scied-cours-qcm/fr/latest/QCM_cog.html",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Comme l’indique Frederiksen [Frederiksen, 1981], tout test censé évaluer des connaissances ou performances en contexte éducatif <strong>influer sur le comportement des apprenants, et même celui des enseignants</strong> (qui ont de fait tendance à enseigner ce qui va être testé).",
					"profile": {
						"name": "U-ga",
						"url": "http://espe-rtd-reflexpro.u-ga.fr/docs/scied-cours-qcm/fr/latest/QCM_cog.html",
						"long_name": "espe-rtd-reflexpro.u-ga.fr",
						"img": "https://imgs.search.brave.com/V50z6u3_0GCuyFzqMYFVePvRP94WSGY0NLWPgiQ9Be4/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvODgwNDk5MzFi/NGFjMTNmNGIzNjA3/MjlmNGFkODIyODRk/M2ViY2ExNWU1YTI3/YjFlZTNmMWM3Njkx/Mzg0NjRkNy9lc3Bl/LXJ0ZC1yZWZsZXhw/cm8udS1nYS5mci8"
					},
					"language": "en",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "article",
					"is_live": false,
					"meta_url": {
						"scheme": "http",
						"netloc": "espe-rtd-reflexpro.u-ga.fr",
						"hostname": "espe-rtd-reflexpro.u-ga.fr",
						"favicon": "https://imgs.search.brave.com/V50z6u3_0GCuyFzqMYFVePvRP94WSGY0NLWPgiQ9Be4/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvODgwNDk5MzFi/NGFjMTNmNGIzNjA3/MjlmNGFkODIyODRk/M2ViY2ExNWU1YTI3/YjFlZTNmMWM3Njkx/Mzg0NjRkNy9lc3Bl/LXJ0ZC1yZWZsZXhw/cm8udS1nYS5mci8",
						"path": "› docs  › scied-cours-qcm  › fr  › latest  › QCM_cog.html"
					},
					"article": {
						"author": []
					},
					"extra_snippets": [
						"Le quizz a été réalisé par Émilie Besse, projet ReFlexPro. Date de création : Septembre 2015. Date de publication : 17 décembre 2021. Statut : En travaux. Résumé : Ce document décrit les processus cognitifs engagés dans l’activité de réponse à des questionnaires à choix multiple.",
						"Un avantage peu mis en avant mais souvent évoqué dans la littérature de recherche est qu’il améliore l’apprentissage (une méta-analyse récente de [Sotola & Crede, 2020] montre une taille d’effet moyenne de .42 des quizz sur la réussite) : des apprenants confrontés à un apprentissage et passant un test à son propos ont de meilleures performances que des apprenants qui réalisent l’apprentissage sans passer le test [Bangert-Drowns et al., 1991]. Cela est dû à un effet bien connu dans le domaine de l’étude de l’apprentissage, l’effet de test (testing effect) : une infor",
						"Les QCM sont passés en utilisant des stylos d’une couleur donnée et, au lieu d’être corrigés tout de suite, les élèves s’engagent (seul ou collaborativement, le cas échéant avec le recours aux notes de cours et/ou manuels) dans une phase d’auto-correction où ils reprennent chaque item et déterminent si leur réponse était bien la bonne.",
						"Ensuite, l’enseignant corrige les QCM en attribuant le score de 1 si le choix initial était correct, de 0,5 si c’est le second choix qui était le bon, et de 0 dans les autres cas. L’auteur a remarqué un meilleur engagement de ses élèves avec cette méthode."
					]
				},
				{
					"title": "UFR Mathématiques et Informatique Université de Lorraine Master SCA",
					"url": "https://idmc.univ-lorraine.fr/wp-content/uploads/2018/05/IDMC-2016_2017-RAPPORT-musee.pdf",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Contexte . . . . . . . . . . . . . . . . . . . . . . . . . . . . .",
					"profile": {
						"name": "Univ-lorraine",
						"url": "https://idmc.univ-lorraine.fr/wp-content/uploads/2018/05/IDMC-2016_2017-RAPPORT-musee.pdf",
						"long_name": "idmc.univ-lorraine.fr",
						"img": "https://imgs.search.brave.com/XGrzZtAYYibR6EvskrtAZuci71O_jyh2g295w7MvAAw/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZTlmYWQ3YmQ2/MTA4MTQwMTRkMTg5/MmNmOTU2NTkyMjMw/OTIwMzY3ZTE4MzA0/MjhjMjhmMjFhN2I5/NWQ4ZjFlMC9pZG1j/LnVuaXYtbG9ycmFp/bmUuZnIv"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "idmc.univ-lorraine.fr",
						"hostname": "idmc.univ-lorraine.fr",
						"favicon": "https://imgs.search.brave.com/XGrzZtAYYibR6EvskrtAZuci71O_jyh2g295w7MvAAw/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZTlmYWQ3YmQ2/MTA4MTQwMTRkMTg5/MmNmOTU2NTkyMjMw/OTIwMzY3ZTE4MzA0/MjhjMjhmMjFhN2I5/NWQ4ZjFlMC9pZG1j/LnVuaXYtbG9ycmFp/bmUuZnIv",
						"path": "› wp-content  › uploads  › 2018  › 05  › IDMC-2016_2017-RAPPORT-musee.pdf"
					},
					"content_type": "pdf",
					"extra_snippets": [
						"Contexte . . . . . . . . . . . . . . . . . . . . . . . . . . . . ."
					]
				},
				{
					"title": "L’ENGAGEMENT COGNITIF EN CONTEXTE POSTSECONDAIRE : TRADUCTION, ADAPTATION ET VALIDATION D’UNE ÉCHELLE DE MESURE | Request PDF",
					"url": "https://www.researchgate.net/publication/332084950_L'ENGAGEMENT_COGNITIF_EN_CONTEXTE_POSTSECONDAIRE_TRADUCTION_ADAPTATION_ET_VALIDATION_D'UNE_ECHELLE_DE_MESURE",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Déterminant pour l’apprentissage, l’engagement cognitif des étudiants se définit par le déploiement de stratégies d’étude et d’apprentissage qui visent une maitrise plus ou moins élevée des notions abordées durant les cours. Il peut être étudié à l’aide du questionnaire Cognitive Engagement Scale qui n’est disponible qu’en anglais.",
					"page_age": "2019-03-29T00:00:00",
					"profile": {
						"name": "ResearchGate",
						"url": "https://www.researchgate.net/publication/332084950_L'ENGAGEMENT_COGNITIF_EN_CONTEXTE_POSTSECONDAIRE_TRADUCTION_ADAPTATION_ET_VALIDATION_D'UNE_ECHELLE_DE_MESURE",
						"long_name": "researchgate.net",
						"img": "https://imgs.search.brave.com/WJ25-tL-91vp8kSoF0YS7d8CZVivP1cG-EjlGvrmxOc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZjE0MDk0Yzli/MWQ3NGQ2ZTNjODVh/YWVmMDNkM2NkZWI5/NGEzNjdhMmEyY2E2/N2EzN2Y0OThlZjdi/YWU3MjkwMi93d3cu/cmVzZWFyY2hnYXRl/Lm5ldC8"
					},
					"language": "en",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "article",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "researchgate.net",
						"hostname": "www.researchgate.net",
						"favicon": "https://imgs.search.brave.com/WJ25-tL-91vp8kSoF0YS7d8CZVivP1cG-EjlGvrmxOc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZjE0MDk0Yzli/MWQ3NGQ2ZTNjODVh/YWVmMDNkM2NkZWI5/NGEzNjdhMmEyY2E2/N2EzN2Y0OThlZjdi/YWU3MjkwMi93d3cu/cmVzZWFyY2hnYXRl/Lm5ldC8",
						"path": "› publication  › 332084950_L'ENGAGEMENT_COGNITIF_EN_CONTEXTE_POSTSECONDAIRE_TRADUCTION_ADAPTATION_ET_VALIDATION_D'UNE_ECHELLE_DE_MESURE"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/NA3UWQdok5rp6uI2kyF0cHLVZy0QBikNBsFv8yDMrrc/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/cmVzZWFyY2hnYXRl/Lm5ldC9pbWFnZXMv/dGVtcGxhdGUvZGVm/YXVsdF9wdWJsaWNh/dGlvbl9wcmV2aWV3/X2xhcmdlLnBuZw",
						"original": "https://www.researchgate.net/images/template/default_publication_preview_large.png",
						"logo": false
					},
					"age": "March 29, 2019",
					"article": {
						"author": [
							{
								"type": "person",
								"name": "Diane Leduc",
								"url": "https://www.researchgate.net/scientific-contributions/Diane-Leduc-2182682664",
								"thumbnail": {
									"src": "https://imgs.search.brave.com/dMtHr8-Qesx_n1eD_yC484AdHx5Mu-SKRnED6CeBoes/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9jNS5y/Z3N0YXRpYy5uZXQv/bS80MzU5ODIzMDk0/ODEwMTAvaW1hZ2Vz/L3RlbXBsYXRlL2Rl/ZmF1bHQvYXV0aG9y/L2F1dGhvcl9kZWZh/dWx0X20uanBn",
									"original": "https://c5.rgstatic.net/m/435982309481010/images/template/default/author/author_default_m.jpg"
								}
							},
							{
								"type": "person",
								"name": "Anastassis Kozanitis",
								"url": "https://www.researchgate.net/profile/Anastassis-Kozanitis",
								"thumbnail": {
									"src": "https://imgs.search.brave.com/TEJ7Zy_zKoBl89iMSjTflIzZMLbRi1jQs8VjMMHv71w/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9pMS5y/Z3N0YXRpYy5uZXQv/aWkvcHJvZmlsZS5p/bWFnZS8yNzg3ODIw/ODM2NDk1NDktMTQ0/MzQ3ODIzNjQ5N19R/NjQvQW5hc3Rhc3Np/cy1Lb3phbml0aXMu/anBn",
									"original": "https://i1.rgstatic.net/ii/profile.image/278782083649549-1443478236497_Q64/Anastassis-Kozanitis.jpg"
								}
							},
							{
								"type": "person",
								"name": "Isabelle Lepage",
								"url": "https://www.researchgate.net/scientific-contributions/Isabelle-Lepage-2153084911",
								"thumbnail": {
									"src": "https://imgs.search.brave.com/dMtHr8-Qesx_n1eD_yC484AdHx5Mu-SKRnED6CeBoes/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9jNS5y/Z3N0YXRpYy5uZXQv/bS80MzU5ODIzMDk0/ODEwMTAvaW1hZ2Vz/L3RlbXBsYXRlL2Rl/ZmF1bHQvYXV0aG9y/L2F1dGhvcl9kZWZh/dWx0X20uanBn",
									"original": "https://c5.rgstatic.net/m/435982309481010/images/template/default/author/author_default_m.jpg"
								}
							}
						],
						"date": "Mar 29, 2019",
						"publisher": {
							"type": "organization",
							"name": "Consortium Erudit",
							"url": "https://www.researchgate.net/unknown",
							"thumbnail": {
								"src": "https://imgs.search.brave.com/UjSGsXBrrrqKndxfeOp5EGUdM15aJCsZ_BUDIJcDQhs/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/cmVzZWFyY2hnYXRl/Lm5ldC91bmtub3du",
								"original": "https://www.researchgate.net/unknown"
							}
						}
					},
					"extra_snippets": [
						"Analysis of these data revealed trends that suggested conceptualization and operationalization of deep and surface processing differed depending on the theoretical frame utilized in each study. Additionally, the choice of theoretical frame also seemed to impact what situational factors may or may not have been present as well as how the model of levels of processing and performance was specified.",
						"The past several decades have witnessed an impressive array of studies that have attempted to identify and explain the factors important to the success and failure of students as they pursue a college education. The extent of this effort is not surprising given the impact that level of education has on a variety of life domains (Pascarella & Terenzini, 2005) and given the difficulties universities have in retaining students (Braxton, 2001; Tinto, 1993).",
						"Déterminant pour l’apprentissage, l’engagement cognitif des étudiants se définit par le déploiement de stratégies d’étude et d’apprentissage qui visent une maitrise plus ou moins élevée des notions abordées durant les cours. Il peut être étudié à l’aide du questionnaire Cognitive Engagement Scale qui n’est disponible qu’en anglais.",
						"Les étudiantes et étudiants face à l’emploi de plateformes d’enseignement en ligne : représentations et engagement cognitif"
					]
				},
				{
					"title": "Pourquoi les quiz interactifs augmentent l’engagement des apprenants ?",
					"url": "https://www.experquiz.com/articles/pourquoi-les-quiz-interactifs-augmentent-lengagement-des-apprenants",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Découvrez pourquoi les quiz interactifs améliorent l’engagement en formation : mémorisation, motivation, participation, adaptive learning et learning analytics.",
					"page_age": "2026-05-27T16:18:52",
					"profile": {
						"name": "Experquiz",
						"url": "https://www.experquiz.com/articles/pourquoi-les-quiz-interactifs-augmentent-lengagement-des-apprenants",
						"long_name": "experquiz.com",
						"img": "https://imgs.search.brave.com/XfxwnqbyqCFIURwcBtNoOmW9s6P2ZigU_g16wur3vv8/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNGFlYTY2NGRm/ZWM0MzMyMzViYTlk/Nzg3MzQ4NDg5N2Ri/ZGVhYzgzZmQ1OTU5/NDcwZTM0N2JiM2Y1/ZWNjODA3My93d3cu/ZXhwZXJxdWl6LmNv/bS8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "article",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "experquiz.com",
						"hostname": "www.experquiz.com",
						"favicon": "https://imgs.search.brave.com/XfxwnqbyqCFIURwcBtNoOmW9s6P2ZigU_g16wur3vv8/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNGFlYTY2NGRm/ZWM0MzMyMzViYTlk/Nzg3MzQ4NDg5N2Ri/ZGVhYzgzZmQ1OTU5/NDcwZTM0N2JiM2Y1/ZWNjODA3My93d3cu/ZXhwZXJxdWl6LmNv/bS8",
						"path": "› articles  › pourquoi-les-quiz-interactifs-augmentent-lengagement-des-apprenants"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/sn3dT0mPCJdoW3N2qHnHJ2kTxpAMxzi_Q_ZWNau2P6Y/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/N2IzNDcwNjcyNTM1/MDExMmRiMjJmODUv/NmExNjk0MzMwZWZm/YmI2MDkyMzc3Mjhi/X3BvdXJxdW9pLWxl/cy1xdWl6LWludGVy/YWN0aWZzLWF1Z21l/bnRlbnQtbGVuZ2Fn/ZW1lbnQtZGVzLWFw/cHJlbmFudHMuYXZp/Zg",
						"original": "https://cdn.prod.website-files.com/67b34706725350112db22f85/6a1694330effbb609237728b_pourquoi-les-quiz-interactifs-augmentent-lengagement-des-apprenants.avif",
						"logo": false
					},
					"age": "1 month ago",
					"article": {
						"author": [
							{
								"type": "person",
								"name": "Alexander Torbet"
							}
						],
						"date": "May 27, 2026",
						"publisher": {
							"type": "organization",
							"name": "Experquiz",
							"thumbnail": {
								"src": "https://imgs.search.brave.com/vwlISrqeAwdTeMKjvAGvXXWZv3ZGsc45GXU8KSKNngU/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/N2IzNDcwNjcyNTM1/MDExMmRiMjJmNTYv/NjdmNjY3YTBjNjNh/MzlkODQ1OGJhZDBh/X0xvZ28lMjBzZXVs/LnN2Zw",
								"original": "https://cdn.prod.website-files.com/67b34706725350112db22f56/67f667a0c63a39d8458bad0a_Logo%20seul.svg"
							}
						}
					},
					"organization": {
						"type": "organization",
						"name": "Experquiz",
						"contact_points": []
					},
					"extra_snippets": [
						"Dans un contexte où la formation professionnelle est devenue un levier stratégique pour les entreprises, une question essentielle reste souvent sous-estimée : comment mesurer réellement l’efficacité d’une formation ? Trop de dispositifs se limitent encore à la diffusion de contenus, sans véritable mécanisme d’évaluation. Résultat : des investissements importants pour un impact parfois très limité.",
						"L’efficacité des quiz interactifs ne repose pas uniquement sur leur dimension ludique. Elle s’explique par plusieurs mécanismes cognitifs et comportementaux bien identifiés.",
						"À l’inverse, les formats passifs comme les longues vidéos ou les supports textuels linéaires favorisent davantage la dispersion cognitive.",
						"Les recherches en sciences cognitives montrent que le fait de récupérer activement une information améliore fortement la mémorisation à long terme."
					]
				},
				{
					"title": "Les quiz interactifs : un levier puissant pour engager les équipes - Evalandgo",
					"url": "https://www.evalandgo.com/blog/quiz-interactifs-levier-pour-engager-les-equipes/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Ce n’est pas un simple “jeu”, mais un levier cognitif. Des travaux montrent qu’un apprentissage actif (incluant des quiz live ou des exercices interactifs) améliore non seulement la mémorisation mais aussi la capacité d’application dans un contexte pro.",
					"page_age": "2026-01-02T10:06:31",
					"profile": {
						"name": "Evalandgo",
						"url": "https://www.evalandgo.com/blog/quiz-interactifs-levier-pour-engager-les-equipes/",
						"long_name": "evalandgo.com",
						"img": "https://imgs.search.brave.com/7RN0CaomUchZ8cLwaOxw1Mk8Mx1H_eEynuk_fwzOjRc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMmYyYjIyNWM3/M2FlMjQxMGJmZTlj/MzQxZDkwYjY1M2Qy/YTExMGJmNDlmZDdi/ZGIwNWVjNTA4MjY2/NzcwNmZmNC93d3cu/ZXZhbGFuZGdvLmNv/bS8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "article",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "evalandgo.com",
						"hostname": "www.evalandgo.com",
						"favicon": "https://imgs.search.brave.com/7RN0CaomUchZ8cLwaOxw1Mk8Mx1H_eEynuk_fwzOjRc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMmYyYjIyNWM3/M2FlMjQxMGJmZTlj/MzQxZDkwYjY1M2Qy/YTExMGJmNDlmZDdi/ZGIwNWVjNTA4MjY2/NzcwNmZmNC93d3cu/ZXZhbGFuZGdvLmNv/bS8",
						"path": "  › questionnaire en ligne  › blog  › les quiz interactifs : un levier puissant pour engager les équipes"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/-l51VhBq-J1XP1vSYXC3LmMCJy-yOZYbg_-AfIIR9BM/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/ZXZhbGFuZGdvLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NS8xMS9JbGx1c3Ry/YXRpb25zLUFydGlj/bGUtTW9kZS1MaXZl/LTEyLTEud2VicA",
						"original": "https://www.evalandgo.com/wp-content/uploads/2025/11/Illustrations-Article-Mode-Live-12-1.webp",
						"logo": false
					},
					"age": "January 2, 2026",
					"article": {
						"author": [
							{
								"type": "person",
								"name": "Didier Grapeloup"
							}
						],
						"date": "Nov 03, 2025",
						"publisher": {
							"type": "organization",
							"name": "Evalandgo",
							"url": "https://www.evalandgo.com/",
							"thumbnail": {
								"src": "https://imgs.search.brave.com/orBv-N0-SgxRGE_bTDeDpQLYymrKOOhEGDsddrFV-Xg/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/ZXZhbGFuZGdvLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NC8wMS9sb2dvLTIw/MjUucG5n",
								"original": "https://www.evalandgo.com/wp-content/uploads/2024/01/logo-2025.png"
							}
						}
					},
					"extra_snippets": [
						"Les travaux de psychologie cognitive de Roediger & Karpicke montrent qu’un simple test ou un rappel de l’information améliore la rétention à long terme. C’est le mécanisme dit de “rappel actif ». Ce biais neuroscientifique explique que demander aux participants de répondre à une question, les fait passer d’une posture d’écoute passive à une posture active d’apprentissage. Dans le contexte de la formation et du management, cela signifie qu’un format purement magistral est moins performant que des formats où les participants sont activement sollicités.",
						"Ce n’est pas un simple “jeu”, mais un levier cognitif. Des travaux montrent qu’un apprentissage actif (incluant des quiz live ou des exercices interactifs) améliore non seulement la mémorisation mais aussi la capacité d’application dans un contexte pro.",
						"Un turnover important, renouvellement des équipes (notamment dans le retail ou les biens de grande consommation – FMCG), multiplication des références produits ou processus, montée en compétences rapide nécessaire, formations régulières sur de nouveaux outils. Dans ce contexte, un quiz interactif seul ne suffit pas.",
						"Maintenant que nous avons posé le pourquoi et le comment : quels bénéfices concrets cela apporte dans un contexte professionnel."
					]
				},
				{
					"title": "L’ENGAGEMENT COGNITIF EN CONTEXTE POSTSECONDAIRE : TRADUCTION, ADAPTATION ET VALIDATION D’UNE ÉCHELLE DE MESURE – McGill Journal of Education / Revue des sciences de l'éducation de McGill",
					"url": "https://www.erudit.org/fr/revues/mje/2018-v53-n3-mje04479/1058412ar/resume/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Déterminant pour l’apprentissage, l’engagement cognitif des étudiants se définit par le déploiement de stratégies d’étude et d’apprentissage qui visent une maitrise plus ou moins élevée des notions abordées durant les cours. Il peut être étudié à l’aide du questionnaire Cognitive Engagement Scale qui n’est disponible qu’en anglais.",
					"page_age": "2019-03-29T00:00:00",
					"profile": {
						"name": "Érudit",
						"url": "https://www.erudit.org/fr/revues/mje/2018-v53-n3-mje04479/1058412ar/resume/",
						"long_name": "erudit.org",
						"img": "https://imgs.search.brave.com/8jiaFU-YepBjmvpXsd09ClM1ccKnz3zsjRuPmZH5ePk/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMTI4YjY4MjU3/MDczNjBiMWIwMTI1/NjQ4NTY5MWFlNmU4/MGE5MjVlMzk3OGMy/Y2NjOGRjODU3ZGJm/NWI2OGUxOS93d3cu/ZXJ1ZGl0Lm9yZy8"
					},
					"language": "en",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "article",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "erudit.org",
						"hostname": "www.erudit.org",
						"favicon": "https://imgs.search.brave.com/8jiaFU-YepBjmvpXsd09ClM1ccKnz3zsjRuPmZH5ePk/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMTI4YjY4MjU3/MDczNjBiMWIwMTI1/NjQ4NTY5MWFlNmU4/MGE5MjVlMzk3OGMy/Y2NjOGRjODU3ZGJm/NWI2OGUxOS93d3cu/ZXJ1ZGl0Lm9yZy8",
						"path": "  › érudit  › revues  › mcgill journal of education / revue des sciences de l'éducation de mcgill  › volume 53, numéro 3, automne 2018  › l’engagement cognitif en contexte postsecondaire : traduction, adaptation et validation d’une échelle de mesure  › notice bibliographique"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/6CdWxVvuLXuUWIBse5JD6wQoBzsJjQPTjMfbjEEF4GI/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/ZXJ1ZGl0Lm9yZy9m/ci9yZXZ1ZXMvbWpl/LzIwMTgtdjUzLW4z/LW1qZTA0NDc5L2Nv/dmVycGFnZS5qcGc",
						"original": "https://www.erudit.org/fr/revues/mje/2018-v53-n3-mje04479/coverpage.jpg",
						"logo": false
					},
					"age": "March 29, 2019",
					"article": {
						"author": [
							{
								"type": "person",
								"name": "Diane Leduc"
							},
							{
								"type": "person",
								"name": "Anastassis Kozanitis"
							},
							{
								"type": "person",
								"name": "Isabelle Lepage"
							}
						],
						"publisher": {
							"type": "organization",
							"name": "Faculty of Education, McGill University"
						}
					},
					"organization": {
						"type": "organization",
						"name": "Érudit",
						"contact_points": []
					},
					"extra_snippets": [
						"Un article de la revue McGill Journal of Education / Revue des sciences de l'éducation de McGill, diffusée par la plateforme Érudit.",
						"Déterminant pour l’apprentissage, l’engagement cognitif des étudiants se définit par le déploiement de stratégies d’étude et d’apprentissage qui visent une maitrise plus ou moins élevée des notions abordées durant les cours. Il peut être étudié à l’aide du questionnaire Cognitive Engagement Scale qui n’est disponible qu’en anglais.",
						"Bernet, S. (2010). Engagement affectif, comportemental et cognitif des élèves du primaire dans un contexte pédagogique d’intégration des TIC : une étude multicas en milieux défavorisé (Thèse de doctorat, Université de Montréal, Montréal, QC).",
						"Leduc, Diane, et al. « L’ENGAGEMENT COGNITIF EN CONTEXTE POSTSECONDAIRE : TRADUCTION, ADAPTATION ET VALIDATION D’UNE ÉCHELLE DE MESURE. » McGill Journal of Education / Revue des sciences de l'éducation de McGill, volume 53, numéro 3, automne 2018."
					]
				},
				{
					"title": "25+ Questions de sondage sur l'adhésion au musée (+ Modèles gratuits)",
					"url": "https://forms.app/fr/blog/questions-de-le-enquete-sur-le-adhesion-au-musee",
					"is_source_local": false,
					"is_source_both": false,
					"description": "💡<strong>Les questions de satisfaction des membres aident à évaluer l&#x27;engagement des membres et leurs opinions sur l&#x27;expérience globale</strong>.",
					"page_age": "2024-07-01T00:00:00",
					"profile": {
						"name": "forms.app",
						"url": "https://forms.app/fr/blog/questions-de-le-enquete-sur-le-adhesion-au-musee",
						"long_name": "forms.app",
						"img": "https://imgs.search.brave.com/aXUvvFY51qOhY3_C5gcdAWflVa-L8jSWjA4na52rbUk/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFlMzMwYzI0/MGY2NTdjZmQxZGYz/ZDAxZjQ4NTM4ZDUz/NDdiYTJlZWI3Y2Fh/MjczYTg5ZjNlZWM5/ODU5NDIwYi9mb3Jt/cy5hcHAv"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "article",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "forms.app",
						"hostname": "forms.app",
						"favicon": "https://imgs.search.brave.com/aXUvvFY51qOhY3_C5gcdAWflVa-L8jSWjA4na52rbUk/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWFlMzMwYzI0/MGY2NTdjZmQxZGYz/ZDAxZjQ4NTM4ZDUz/NDdiYTJlZWI3Y2Fh/MjczYTg5ZjNlZWM5/ODU5NDIwYi9mb3Jt/cy5hcHAv",
						"path": "  › accueil  › blog  › 25+ questions de sondage sur l'adhésion au musée (+ modèles gratuits)"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/3QzDXSZZL-ZfRLTuH_d7CpTy1qsLVYtSbqs8245WNVM/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9maWxl/LmZvcm1zLmFwcC9z/aXRlZmlsZS8yNStN/dXNldW0tTWVtYmVy/c2hpcC1TdXJ2ZXkt/UXVlc3Rpb25zLWNv/dmVyLTIuanBn",
						"original": "https://file.forms.app/sitefile/25+Museum-Membership-Survey-Questions-cover-2.jpg",
						"logo": false
					},
					"age": "July 1, 2024",
					"article": {
						"author": [
							{
								"type": "person",
								"name": "forms.app Team"
							}
						],
						"date": "Jul 01, 2024",
						"publisher": {
							"type": "organization",
							"name": "forms.app",
							"thumbnail": {
								"src": "https://imgs.search.brave.com/S8IEZgy7BTJS4zxePK48ZFwdp71adBHwKPNI6YHXfE4/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9mb3Jt/cy5hcHAvYXNzZXRz/L2ltZy9sb2dvLWhv/bWUuc3Zn",
								"original": "https://forms.app/assets/img/logo-home.svg"
							}
						}
					},
					"organization": {
						"type": "organization",
						"name": "forms.app",
						"contact_points": []
					},
					"extra_snippets": [
						"Écouter les opinions et les commentaires des membres et des visiteurs du musée est très important, car leur satisfaction de l'expérience muséale compte. Il ne devrait y avoir aucune difficulté ou opinion négative si vous voulez les garder heureux. Utiliser une enquête d'adhésion au musée vous aidera sûrement à atteindre cet objectif.",
						"💡Les questions de satisfaction des membres aident à évaluer l'engagement des membres et leurs opinions sur l'expérience globale."
					]
				},
				{
					"title": "Quel est l’impact du digital dans la valorisation de l’expérience muséale familiale ? | Cairn.info",
					"url": "https://shs.cairn.info/revue-management-et-avenir-2019-5-page-57?lang=fr",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Dans un contexte parallèle, De la Ville et Baludescu (2017) ont mené une recherche spécifique qui a conduit à l’élaboration d’un cadre théorique enchâssant différentes formes de médiation – muséale, parentale et technologique – et étayant l’expérience muséale conjointe entre parents et enfants. Ce cadre souligne la nécessité d’articuler le parcours de la dyade parent-enfant autour de la mise en récit des objets scénographiés (de la Ville et Tartas, 2011), associée à une relation continue entre les deux parties. Cette notion de zone proximale est, en effet, primordiale pour que l’enfant puisse développer son apprentissage cognitif et acquérir de nouvelles connaissances.",
					"page_age": "2019-10-04T00:00:00",
					"profile": {
						"name": "Cairn.info",
						"url": "https://shs.cairn.info/revue-management-et-avenir-2019-5-page-57?lang=fr",
						"long_name": "shs.cairn.info",
						"img": "https://imgs.search.brave.com/QceytGsxSBF4xVMq7z7hjJaQhkeghaT2KovLirOrV_4/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZmUzZGNmOWY5/OTVmZWRiOTM1ZjI3/ZDVkMWY0MDQyYWU3/ZWFkNDNkMWZmMDYw/MGExYmVhYmE5NGI5/NmRmMzQ5ZC9zaHMu/Y2Fpcm4uaW5mby8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "article",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "shs.cairn.info",
						"hostname": "shs.cairn.info",
						"favicon": "https://imgs.search.brave.com/QceytGsxSBF4xVMq7z7hjJaQhkeghaT2KovLirOrV_4/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZmUzZGNmOWY5/OTVmZWRiOTM1ZjI3/ZDVkMWY0MDQyYWU3/ZWFkNDNkMWZmMDYw/MGExYmVhYmE5NGI5/NmRmMzQ5ZC9zaHMu/Y2Fpcm4uaW5mby8",
						"path": "› revue-management-et-avenir-2019-5-page-57"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/7ppzT4boNMXlEWXIDXgQGWsMw5yrdTb2mPdFwXouFN0/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9zaHMu/Y2Fpcm4uaW5mby9u/dW1lcm8vTUFWXzEx/MS9jb3Zlci90aHVt/Ym5haWw_bGFuZz1m/cg",
						"original": "https://shs.cairn.info/numero/MAV_111/cover/thumbnail?lang=fr",
						"logo": false
					},
					"age": "October 4, 2019",
					"article": {
						"author": [
							{
								"type": "person",
								"name": "Guergana Guintcheva",
								"url": "https://www.idref.fr/078011337"
							},
							{
								"type": "person",
								"name": "Joëlle Lagier",
								"url": "https://www.idref.fr/077343883"
							}
						],
						"date": "Oct 04, 2019",
						"publisher": {
							"type": "organization",
							"name": "Management Prospective Éditions"
						},
						"isAccessibleForFree": true
					},
					"extra_snippets": [
						"12Dans ce même contexte, l’interaction parents-enfants constitue une source d’apprentissage importante lors de la visite muséale (Debenedetti, Caro et Krebs, 2009). Les parents et leurs enfants passent, en effet, plus de 80 % de leur temps ensemble dans les visites culturelles [5]. Les dispositifs interactifs stimulent ici la discussion, situation qui mène à un conflit socio-cognitif aidant l’enfant à mieux apprendre et structurer ses pensées.",
						"Dans un contexte parallèle, De la Ville et Baludescu (2017) ont mené une recherche spécifique qui a conduit à l’élaboration d’un cadre théorique enchâssant différentes formes de médiation – muséale, parentale et technologique – et étayant l’expérience muséale conjointe entre parents et enfants. Ce cadre souligne la nécessité d’articuler le parcours de la dyade parent-enfant autour de la mise en récit des objets scénographiés (de la Ville et Tartas, 2011), associée à une relation continue entre les deux parties. Cette notion de zone proximale est, en effet, primordiale pour que l’enfant puisse développer son apprentissage cognitif et acquérir de nouvelles connaissances.",
						"Après avoir exposé le positionnement conceptuel de notre recherche en analysant tout d’abord les différentes dimensions de l’activité muséale, puis le rôle de l’enfant vis-à-vis des parents lors de l’expérience muséale familiale et enfin l’intérêt de la digitalisation dans ce contexte, nous présenterons plus précisément nos principaux résultats et discuterons des implications managériales.",
						"Pour Deshayes (2004), le visioguide, outil interactif particulier, épouse précisément une dimension propre à l’environnement muséal : embarqué, il est aussi mobile que le visiteur qui se déplace dans un lieu artistique et n’éloigne pas pour autant le visiteur de son contexte."
					]
				},
				{
					"title": "Memoire Online - La motivation et l'apprentissage dans les musées - Astrid Langlois",
					"url": "https://www.memoireonline.com/05/11/4536/La-motivation-et-lapprentissage-dans-les-musees.html",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Memoire Online &gt; Biologie et Médecine &gt; Psychologie et neuropsychologie La motivation et l&#x27;apprentissage dans les musées ( Télécharger le fichier original ) par Astrid Langlois Université Nanterre Paris Ouest La Défense - Master 1 Psychologie Cognitive Appliquée 2010 · Disponible en ...",
					"profile": {
						"name": "Memoire Online",
						"url": "https://www.memoireonline.com/05/11/4536/La-motivation-et-lapprentissage-dans-les-musees.html",
						"long_name": "memoireonline.com",
						"img": "https://imgs.search.brave.com/N_Ee81alAE2bGgLxLVgUlBzoEMkbNH94q6RekXW1a1A/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZTI0ZjQ0ZjQw/MTdiYTljNzZhNjY1/MDBmZDI3YzMxNDFm/ZjkxYjliZDQ3Zjg2/NGFkZDQyMTU4MWI5/ZGZlOTMzNS93d3cu/bWVtb2lyZW9ubGlu/ZS5jb20v"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "memoireonline.com",
						"hostname": "www.memoireonline.com",
						"favicon": "https://imgs.search.brave.com/N_Ee81alAE2bGgLxLVgUlBzoEMkbNH94q6RekXW1a1A/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZTI0ZjQ0ZjQw/MTdiYTljNzZhNjY1/MDBmZDI3YzMxNDFm/ZjkxYjliZDQ3Zjg2/NGFkZDQyMTU4MWI5/ZGZlOTMzNS93d3cu/bWVtb2lyZW9ubGlu/ZS5jb20v",
						"path": "› 05  › 11  › 4536  › La-motivation-et-lapprentissage-dans-les-musees.html"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/okaiZiHXa72EYNbLwsjwAr3066puB_60Vj1RsT79-n8/rs:fit:200:200:1:0/g:ce/aHR0cDovL21lbW9p/cmVvbmxpbmUuY29t/L2xvZ29fMTAweDEw/MC5qcGc",
						"original": "http://memoireonline.com/logo_100x100.jpg",
						"logo": true
					}
				},
				{
					"title": "AXE : MÉMORISATION La mémorisation par questionnement",
					"url": "https://www.sciences-cognitives.fr/wp-content/uploads/2020/10/AFSC-Fiches-Theoriques-Memorisation-par-questionnement.pdf",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Nous utilisons des cookies essentiels afin de :",
					"profile": {
						"name": "Sciences-cognitives",
						"url": "https://www.sciences-cognitives.fr/wp-content/uploads/2020/10/AFSC-Fiches-Theoriques-Memorisation-par-questionnement.pdf",
						"long_name": "sciences-cognitives.fr",
						"img": "https://imgs.search.brave.com/P0Ho8BLPQDklM5gAXs5ex78_Qbq7A7KL95wzCD9Kajw/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZTVjMTI4MmVi/YTM0YjViOWViYjQz/OWYwNTk2OTQwNzNi/MGI2MGM1MDIxODli/ZWJhMGVjYzZkZjAy/ZGYzYTYxZS93d3cu/c2NpZW5jZXMtY29n/bml0aXZlcy5mci8"
					},
					"language": "en",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "sciences-cognitives.fr",
						"hostname": "www.sciences-cognitives.fr",
						"favicon": "https://imgs.search.brave.com/P0Ho8BLPQDklM5gAXs5ex78_Qbq7A7KL95wzCD9Kajw/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZTVjMTI4MmVi/YTM0YjViOWViYjQz/OWYwNTk2OTQwNzNi/MGI2MGM1MDIxODli/ZWJhMGVjYzZkZjAy/ZGYzYTYxZS93d3cu/c2NpZW5jZXMtY29n/bml0aXZlcy5mci8",
						"path": "› wp-content  › uploads  › 2020  › 10  › AFSC-Fiches-Theoriques-Memorisation-par-questionnement.pdf"
					}
				},
				{
					"title": "L’enrichissement de l’expérience de visite muséale par l’utilisation d’outils interactifs de médiation | Cairn.info",
					"url": "https://shs.cairn.info/article/DM_097_0087?lang=fr",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Par ailleurs, les spécificités ... et contextuel, et prend en compte l’apprentissage immédiat et différé. Notre article s’en distinguera cependant car il privilégiera une analyse au niveau individuel et se focalisera sur les bénéfices (cognitifs, affectifs, sociaux, etc.) immédiats retirés de l’usage d’outils interactifs de médiation pendant l’expérience de visite muséale...",
					"page_age": "2021-05-28T00:00:00",
					"profile": {
						"name": "Cairn",
						"url": "https://shs.cairn.info/article/DM_097_0087?lang=fr",
						"long_name": "shs.cairn.info",
						"img": "https://imgs.search.brave.com/QceytGsxSBF4xVMq7z7hjJaQhkeghaT2KovLirOrV_4/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZmUzZGNmOWY5/OTVmZWRiOTM1ZjI3/ZDVkMWY0MDQyYWU3/ZWFkNDNkMWZmMDYw/MGExYmVhYmE5NGI5/NmRmMzQ5ZC9zaHMu/Y2Fpcm4uaW5mby8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "shs.cairn.info",
						"hostname": "shs.cairn.info",
						"favicon": "https://imgs.search.brave.com/QceytGsxSBF4xVMq7z7hjJaQhkeghaT2KovLirOrV_4/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZmUzZGNmOWY5/OTVmZWRiOTM1ZjI3/ZDVkMWY0MDQyYWU3/ZWFkNDNkMWZmMDYw/MGExYmVhYmE5NGI5/NmRmMzQ5ZC9zaHMu/Y2Fpcm4uaW5mby8",
						"path": "› article  › DM_097_0087"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/cyF_S1N-kbpIYOq1q4WMBKBqU7eOMfy7ccBLVZl63_k/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9zaHMu/Y2Fpcm4uaW5mby9u/dW1lcm8vRE1fMDk3/L2NvdmVyL3RodW1i/bmFpbD9sYW5nPWZy",
						"original": "https://shs.cairn.info/numero/DM_097/cover/thumbnail?lang=fr",
						"logo": false
					},
					"age": "May 28, 2021",
					"extra_snippets": [
						"Par ailleurs, les spécificités du vécu seront mises en évidence selon la nature de l’outil interactif de médiation utilisé (spécificités non explorées par le « Contextual Model of Learning »). Enfin, ce cadre théorique appréhende l’avant, le déroulement et l’après visite, à la fois au niveau individuel et contextuel, et prend en compte l’apprentissage immédiat et différé. Notre article s’en distinguera cependant car il privilégiera une analyse au niveau individuel et se focalisera sur les bénéfices (cognitifs, affectifs, sociaux, etc.) immédiats retirés de l’usage d’outils interactifs de médiation pendant l’expérience de visite muséale.",
						"De plus ces outils tactiles séduisent les familles en stimulant l’intérêt pour les œuvres et développant l’apprentissage à travers l’offre d’une meilleure compréhension des objets et de leur contexte. Enfin, les recherches de Petr et Ngary (2014) confirment que l’utilisation d’une tablette tactile par un public adolescent agit sur les dimensions cognitive, émotionnelle et temporelle de l’expérience de visite car elle permet d’optimiser l’appropriation de l’information et les codes du comportement d’une visite muséale (allégement des contraintes spatiotemporelles, visite plus lente, plus de richesse sur le plan émotionnel).",
						"Ils viennent également étayer le postulat de Schmitt (2012, p. 333) qui considère cette dernière comme « des chaînes concaténées de perceptions, d’émotions, d’actions corporelles et cognitives », et celui de Falk et Dierking (2016) définissant l’expérience de visite muséale comme l’interaction constante entre les variables des contextes personnel, physique et social.",
						"Dossier : 525 applications mobiles muséales et patrimoniales en France, Club Innovation Culture (20/11/2019). Accessible depuis l’adresse http://www.club-innovation-culture.fr/applications-mobiles-france-3/ ... Selon la nature de l’outil, son coût, son usage (individuel ou collectif), son emplacement, son objectif, son degré d’interactivité, son impact sur l’interaction sociale, le type et le degré d’engagement d’immersion du visiteur, et enfin selon le type d’enrichissement de l’expérience muséale qu’il génère (bénéfices in situ ou hors site)."
					]
				},
				{
					"title": "(PDF) E-évaluation dynamique et engagement cognitif en contexte de grand groupe à l'université",
					"url": "https://researchgate.net/publication/340488414_E-evaluation_dynamique_et_engagement_cognitif_en_contexte_de_grand_groupe_a_l'universite",
					"is_source_local": false,
					"is_source_both": false,
					"description": "La méthodologie mixte utilisée a consisté à mesurer l’<strong>engagement cognitif</strong> des étudiants dans les cours à l’aide du Questionnaire de l’Engagement Cognitif (Leduc, Kozanitis &amp; Lepage, 2018) et à examiner l’influence de la e-évaluation ...",
					"page_age": "2020-04-07T00:00:00",
					"profile": {
						"name": "ResearchGate",
						"url": "https://researchgate.net/publication/340488414_E-evaluation_dynamique_et_engagement_cognitif_en_contexte_de_grand_groupe_a_l'universite",
						"long_name": "researchgate.net",
						"img": "https://imgs.search.brave.com/7qmgngm3MInw0IoU_gG0MzcPQn_6BPPaIwcJhB-lS84/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZThhYjAzMjQw/NTNlNjU0NjMwNmIx/NTM4NDhiNmY0ZmYw/MmQxNTlhMjg5MDdi/ZTk1OWQzYTg5Yzk2/OTExNDVjMS9yZXNl/YXJjaGdhdGUubmV0/Lw"
					},
					"language": "en",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "article",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "researchgate.net",
						"hostname": "researchgate.net",
						"favicon": "https://imgs.search.brave.com/7qmgngm3MInw0IoU_gG0MzcPQn_6BPPaIwcJhB-lS84/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZThhYjAzMjQw/NTNlNjU0NjMwNmIx/NTM4NDhiNmY0ZmYw/MmQxNTlhMjg5MDdi/ZTk1OWQzYTg5Yzk2/OTExNDVjMS9yZXNl/YXJjaGdhdGUubmV0/Lw",
						"path": "› publication  › 340488414_E-evaluation_dynamique_et_engagement_cognitif_en_contexte_de_grand_groupe_a_l'universite"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/pWw2v2Wdo2qQjlNd_0lVVPD2sg-tCHtaPomYvks4kx4/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9pMS5y/Z3N0YXRpYy5uZXQv/cHVibGljYXRpb24v/MzQwNDg4NDE0X0Ut/ZXZhbHVhdGlvbl9k/eW5hbWlxdWVfZXRf/ZW5nYWdlbWVudF9j/b2duaXRpZl9lbl9j/b250ZXh0ZV9kZV9n/cmFuZF9ncm91cGVf/YV9sJ3VuaXZlcnNp/dGUvbGlua3MvNWU4/YzlhMjU0NTg1MTUw/ODM5Yzc1YjFhL2xh/cmdlcHJldmlldy5w/bmc",
						"original": "https://i1.rgstatic.net/publication/340488414_E-evaluation_dynamique_et_engagement_cognitif_en_contexte_de_grand_groupe_a_l'universite/links/5e8c9a254585150839c75b1a/largepreview.png",
						"logo": false
					},
					"age": "April 7, 2020",
					"article": {
						"author": [
							{
								"type": "person",
								"name": "Isabelle Lepage",
								"url": "https://www.researchgate.net/scientific-contributions/Isabelle-Lepage-2153084911",
								"thumbnail": {
									"src": "https://imgs.search.brave.com/dMtHr8-Qesx_n1eD_yC484AdHx5Mu-SKRnED6CeBoes/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9jNS5y/Z3N0YXRpYy5uZXQv/bS80MzU5ODIzMDk0/ODEwMTAvaW1hZ2Vz/L3RlbXBsYXRlL2Rl/ZmF1bHQvYXV0aG9y/L2F1dGhvcl9kZWZh/dWx0X20uanBn",
									"original": "https://c5.rgstatic.net/m/435982309481010/images/template/default/author/author_default_m.jpg"
								}
							},
							{
								"type": "person",
								"name": "Diane Leduc",
								"url": "https://www.researchgate.net/profile/Diane-Leduc",
								"thumbnail": {
									"src": "https://imgs.search.brave.com/9kE-jcBzwHpGUkuO_gxbO-N_id1JW9DtiHlwtMropyA/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9pMS5y/Z3N0YXRpYy5uZXQv/aWkvcHJvZmlsZS5p/bWFnZS8yNzc2Mzgx/Mzc1NjUxODctMTQ0/MzIwNTQ5ODk5N19R/NjQvRGlhbmUtTGVk/dWMuanBn",
									"original": "https://i1.rgstatic.net/ii/profile.image/277638137565187-1443205498997_Q64/Diane-Leduc.jpg"
								}
							},
							{
								"type": "person",
								"name": "Alain Stockless",
								"url": "https://www.researchgate.net/profile/Alain-Stockless-2",
								"thumbnail": {
									"src": "https://imgs.search.brave.com/PuytPKCVJ6Qk5S-2zHRXxm8YMgRc7-t9HhcA1TdAqJc/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9pMS5y/Z3N0YXRpYy5uZXQv/aWkvcHJvZmlsZS5p/bWFnZS84Nzc3MDE5/MTMxMzcxNTktMTU4/NjI3MTg1MTYxMV9R/NjQvQWxhaW4tU3Rv/Y2tsZXNzLTIuanBn",
									"original": "https://i1.rgstatic.net/ii/profile.image/877701913137159-1586271851611_Q64/Alain-Stockless-2.jpg"
								}
							}
						],
						"date": "Dec 01, 2019",
						"publisher": {
							"type": "organization",
							"name": "unknown",
							"url": "https://researchgate.net/unknown",
							"thumbnail": {
								"src": "https://imgs.search.brave.com/ltge9_2H6O4XeNjXrO2Y-oJfOe86ZBlGDyG9WNzyhYM/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9yZXNl/YXJjaGdhdGUubmV0/L3Vua25vd24",
								"original": "https://researchgate.net/unknown"
							}
						}
					},
					"extra_snippets": [
						"L’engagement cognitif est une composante importante de l’apprentissage, car celui-ci est lié à un apprentissage en profondeur qui assure la maitrise des notions apprises par les étudiants (Dinsmore & Alexander, 2012 ; Greene, 2015).",
						"La méthodologie mixte utilisée a consisté à mesurer l’engagement cognitif des étudiants dans les cours à l’aide du Questionnaire de l’Engagement Cognitif (Leduc, Kozanitis & Lepage, 2018) et à examiner l’influence de la e-évaluation sur les dimensions de l’engagement cognitif à partir de deux entretiens de groupe et du journal de bord.",
						"Les résultats montrent que cette forme de e-évaluation a été favorable pour l’engagement cognitif des étudiants en leur offrant l’occasion de déployer des stratégies d’étude en profondeur et d’autoréguler leurs comportements d’étude en préparation à l’examen.",
						"Moyennes obtenues pour les dimensions de l'engagement cognitif dans le contexte des deux grands groupes à l'étude Rappelons que l'effort était mesuré à partir d'une question à choix de réponse et qu'il était unique."
					]
				},
				{
					"title": "Expérience muséale et nouveaux dispositifs immersifs | SFSIC",
					"url": "https://www.sfsic.org/aac-evenement/experience-museale-et-nouveaux-dispositifs-immersifs/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Nous observons également de la part des musées une volonté de s’inscrire dans la mouvance d’une culture numérique contemporaine, dominée par des attentes expérientielles du public qui se veulent à la fois interactives, immersives, ludiques et cognitives. Il s’agit alors pour les musées de connaître et d’intégrer les pratiques culturelles numériques des visiteurs (enfants, adultes, visite familiale, publics scolaires) et de prendre en compte leur intérêt croissant pour les expériences renouvelées que procurent les technologies numériques. L’émergence des nouveaux dispositifs immersifs au musée marque une mutation profonde dans le champ muséal et participe d’une inscription symbolique du musée qui oblige à reconsidérer le rapport aux collections, à la documentation et au parcours muséographique, tout comme le statut du public.",
					"page_age": "2023-11-26T09:42:54",
					"profile": {
						"name": "SFSIC",
						"url": "https://www.sfsic.org/aac-evenement/experience-museale-et-nouveaux-dispositifs-immersifs/",
						"long_name": "sfsic.org",
						"img": "https://imgs.search.brave.com/G2h6dS8idHTDdc9q6g4BcWATWC6M41Z4y2xw2txCl4M/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMmQ4MTEzMjNh/Yjc0ZWFiM2M0ZTUw/Y2JhZWQwMmZlMmFh/MTA3MjViNmRmZmMy/NzllY2I0MDRjNzgw/NGIyMTFjZi93d3cu/c2ZzaWMub3JnLw"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "article",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "sfsic.org",
						"hostname": "www.sfsic.org",
						"favicon": "https://imgs.search.brave.com/G2h6dS8idHTDdc9q6g4BcWATWC6M41Z4y2xw2txCl4M/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMmQ4MTEzMjNh/Yjc0ZWFiM2M0ZTUw/Y2JhZWQwMmZlMmFh/MTA3MjViNmRmZmMy/NzllY2I0MDRjNzgw/NGIyMTFjZi93d3cu/c2ZzaWMub3JnLw",
						"path": "  › accueil  › aac événement  › colloque  › expérience muséale et nouveaux dispositifs immersifs"
					},
					"age": "November 26, 2023",
					"article": {
						"author": [
							{
								"type": "person",
								"name": "Axelle Martin"
							}
						],
						"date": "Nov 26, 2023",
						"publisher": {
							"type": "organization",
							"name": "SFSIC",
							"url": "https://www.sfsic.org/",
							"thumbnail": {
								"src": "https://imgs.search.brave.com/3bEQ0t3p03Y4n-aOTfzppFvlaDyH24qViBO4_piSEM8/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/c2ZzaWMub3JnL3dw/LWluc2lkZS91cGxv/YWRzLzIwMjAvMDUv/bG9nby1zZnNpYy5q/cGc",
								"original": "https://www.sfsic.org/wp-inside/uploads/2020/05/logo-sfsic.jpg"
							}
						}
					},
					"extra_snippets": [
						"Appel à communication pour un colloque international France Canada organisé dans le cadre de l’accord France Canada avec le concours de l’Université de Poitiers, du Musée de la Pulperie à Chicoutimi et du Musée du Papier d’Angoulême, l’objectif de ce colloque international et interdisciplinaire est de réunir des universitaires ainsi que des professionnels de la culture afin de mettre en exergue la richesse épistémique des travaux en sciences humaines et sociales portant sur la question de l’expérience muséale et des nouveaux dispositifs immersifs.",
						"Nous observons également de la part des musées une volonté de s’inscrire dans la mouvance d’une culture numérique contemporaine, dominée par des attentes expérientielles du public qui se veulent à la fois interactives, immersives, ludiques et cognitives. Il s’agit alors pour les musées de connaître et d’intégrer les pratiques culturelles numériques des visiteurs (enfants, adultes, visite familiale, publics scolaires) et de prendre en compte leur intérêt croissant pour les expériences renouvelées que procurent les technologies numériques. L’émergence des nouveaux dispositifs immersifs au musée marque une mutation profonde dans le champ muséal et participe d’une inscription symbolique du musée qui oblige à reconsidérer le rapport aux collections, à la documentation et au parcours muséographique, tout comme le statut du public.",
						"Longuement étudiée comme forme discursive appréhendée autour de quatre moments de la construction du récit (préfiguration, configuration, figuration et réfiguration (Ricøeur 1983), l’expérience sociale immersive dans le champ muséal doit être davantage questionnée dans sa dimension figurative. En ce sens, le vécu de l’exercice, sa mise en scène (la figuration), complété par la dimension sensible et subjective de l’expérience mobilise la notion de transfert de connaissances, c’est-à-dire la restitution des moments agréables/désagréables de l’expérience de visite que l’individu pourra investir dans des contextes différents (la réfiguration).",
						"In fine examiner la médiation muséale à l’aune des nouveaux dispositifs immersifs revient à questionner les nouvelles pratiques d’usage des publics. À l’époque où les pratiques numériques se démocratisent, les publics des musées emploient souvent avec aisance les dispositifs numériques pour être plus efficaces, plus actifs dans un contexte de diffusion et d’accès aux contenus muséaux."
					]
				},
				{
					"title": "Les approches socio-cognitives de l'évaluation des expositions - Persée",
					"url": "https://www.persee.fr/doc/pumus_1164-5385_1992_num_1_1_1011",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Les changements dans la méthodologie ne sont pas de simples alternatives pour obtenir les mêmes résultats. Le paradigme de recherche que nous respectons, et d&#x27;après lequel nous travaillons maintenant, prend en compte le contexte social et éducatif dans lequel s&#x27;effectue une visite de musée.",
					"profile": {
						"name": "Persee",
						"url": "https://www.persee.fr/doc/pumus_1164-5385_1992_num_1_1_1011",
						"long_name": "persee.fr",
						"img": "https://imgs.search.brave.com/P7sYdYWq0svYtXwTAg0UbdJ0fzolnN9m5iKx4e-22JE/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvODM3ZWFiMWVi/ZjRlYTVhYmYwOWIw/NDhkZDNiMmI4M2Mx/NjUyNmVkOTMxNjkw/MzgwOTA0MzllMWQw/ZDE0Zjk1OS93d3cu/cGVyc2VlLmZyLw"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "article",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "persee.fr",
						"hostname": "www.persee.fr",
						"favicon": "https://imgs.search.brave.com/P7sYdYWq0svYtXwTAg0UbdJ0fzolnN9m5iKx4e-22JE/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvODM3ZWFiMWVi/ZjRlYTVhYmYwOWIw/NDhkZDNiMmI4M2Mx/NjUyNmVkOTMxNjkw/MzgwOTA0MzllMWQw/ZDE0Zjk1OS93d3cu/cGVyc2VlLmZyLw",
						"path": "› doc  › pumus_1164-5385_1992_num_1_1_1011"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/LCRt9vJNZBGWvRCd9rTGFG1YjkYVMzRfD-1Nc4sQj7Y/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/cGVyc2VlLmZyL3Jl/bmRlcklzc3VlQ292/ZXJUaHVtYm5haWwv/cHVtdXNfMTE2NC01/Mzg1XzE5OTJfbnVt/XzFfMS5qcGc",
						"original": "https://www.persee.fr/renderIssueCoverThumbnail/pumus_1164-5385_1992_num_1_1.jpg"
					},
					"article": {
						"author": [],
						"date": "Mar 31, 2010"
					},
					"extra_snippets": [
						"Les changements dans la méthodologie ne sont pas de simples alternatives pour obtenir les mêmes résultats. Le paradigme de recherche que nous respectons, et d'après lequel nous travaillons maintenant, prend en compte le contexte social et éducatif dans lequel s'effectue une visite de musée."
					]
				},
				{
					"title": "L’engagement cognitif – Les objectifs pédagogiques en formation",
					"url": "https://objectifspedagogiques.com/2025/10/22/lengagement-cognitif/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "L’<strong>engagement cognitif</strong> est un concept clé en pédagogie (et plus largement en formation). Il désigne le niveau d’implication mentale et intellectuelle d’un apprenant dans une activité d’apprentissage.",
					"page_age": "2025-10-22T05:33:23",
					"profile": {
						"name": "Objectifspedagogiques",
						"url": "https://objectifspedagogiques.com/2025/10/22/lengagement-cognitif/",
						"long_name": "objectifspedagogiques.com",
						"img": "https://imgs.search.brave.com/o19hwc5mwzPOGSIgV4Gc83_8m6gHvOrFjOc5r-fO55E/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvN2EyOThmZGZm/ZTBjODQzYWY2OTBl/OWEzYTc3OTQ1Nzlm/YTE0YWUxN2NmMDA5/OGE3Njk5NWNhNzll/ZjZmODIwNi9vYmpl/Y3RpZnNwZWRhZ29n/aXF1ZXMuY29tLw"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "objectifspedagogiques.com",
						"hostname": "objectifspedagogiques.com",
						"favicon": "https://imgs.search.brave.com/o19hwc5mwzPOGSIgV4Gc83_8m6gHvOrFjOc5r-fO55E/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvN2EyOThmZGZm/ZTBjODQzYWY2OTBl/OWEzYTc3OTQ1Nzlm/YTE0YWUxN2NmMDA5/OGE3Njk5NWNhNzll/ZjZmODIwNi9vYmpl/Y3RpZnNwZWRhZ29n/aXF1ZXMuY29tLw",
						"path": "› 2025  › 10  › 22  › lengagement-cognitif"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/h-qGY6VH7T2HZfDA4tGTku-Utvp1z9YmJh9hdCcxnqY/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vb2JqZWN0/aWZzcGVkYWdvZ2lx/dWVzLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNS8xMC9w/ZXhlbHMtcGhvdG8t/MzI3MzQ1LmpwZz9m/aXQ9MTIwMCUyQzgw/MCYjMDM4O3NzbD0x",
						"original": "https://i0.wp.com/objectifspedagogiques.com/wp-content/uploads/2025/10/pexels-photo-327345.jpg?fit=1200%2C800&#038;ssl=1",
						"logo": false
					},
					"age": "October 22, 2025",
					"extra_snippets": [
						"L’engagement cognitif est un concept clé en pédagogie (et plus largement en formation). Il désigne le niveau d’implication mentale et intellectuelle d’un apprenant dans une activité d’apprentissage. Il ne s’agit pas seulement pour lui (ou elle) d’être physiquement présent ou attentif, mais bien d’activer ses processus de pensée (sa cognition) pour se rappeler, comprendre, appliquer,…",
						"L’engagement cognitif est un concept clé en pédagogie (et plus largement en formation). Il désigne le niveau d’implication mentale et intellectuelle d’un apprenant dans une activité d’apprentissage…",
						"Il ne s’agit pas seulement pour lui (ou elle) d’être physiquement présent ou attentif, mais bien d’activer ses processus de pensée (sa cognition) pour se rappeler, comprendre, appliquer, analyser, évaluer et/ou synthétiser les connaissances abordées.",
						"Une motivation intrinsèque. L’engagement cognitif est généralement lié à un intérêt personnel pour le sujet et/ou à la perception de son utilité."
					]
				}
			]
		},
		{
			"query": "game design et mécanismes de quiz pour la transmission des savoirs",
			"results": [
				{
					"title": "Apprentissage ludique : comment la gamification révolutionne la formation - PEO",
					"url": "https://www.progresser-en-orthographe.com/apprentissage-ludique-comment-la-gamification-revolutionne-la-formation",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Dans ce cadre, les techniques pédagogiques sont pensées pour transformer l’apprenant en acteur plutôt qu’en simple récepteur de savoirs. Au cœur de la gamification, on retrouve quelques ingrédients récurrents, utilisés avec mesure. La narration pose le décor : une mission à accomplir, un scénario de crise à résoudre, une enquête à mener. Ce fil rouge donne du sens aux activités et ancre les concepts dans une histoire mémorable. Les points matérialisent la progression : chaque quiz réussi, chaque cas pratique résolu apporte une preuve tangible d’avancée, ce qui nourrit la motivation sans avoir besoin de longs discours.",
					"page_age": "2026-06-24T21:08:58",
					"profile": {
						"name": "PEO",
						"url": "https://www.progresser-en-orthographe.com/apprentissage-ludique-comment-la-gamification-revolutionne-la-formation",
						"long_name": "progresser-en-orthographe.com",
						"img": "https://imgs.search.brave.com/5LDkGDGtX8lCAxodFrV56CwvZhWUi3EIEN3uU40vOIY/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMWJjMDY2YWI2/ZDhlZWQ5YjY4MzVh/ZGY4MjAzNjFhNTFm/YjhmZjcwZGU2Y2My/NTA4NDZjYzQ0ZjJh/YzBlYThmZC93d3cu/cHJvZ3Jlc3Nlci1l/bi1vcnRob2dyYXBo/ZS5jb20v"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "progresser-en-orthographe.com",
						"hostname": "www.progresser-en-orthographe.com",
						"favicon": "https://imgs.search.brave.com/5LDkGDGtX8lCAxodFrV56CwvZhWUi3EIEN3uU40vOIY/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMWJjMDY2YWI2/ZDhlZWQ5YjY4MzVh/ZGY4MjAzNjFhNTFm/YjhmZjcwZGU2Y2My/NTA4NDZjYzQ0ZjJh/YzBlYThmZC93d3cu/cHJvZ3Jlc3Nlci1l/bi1vcnRob2dyYXBo/ZS5jb20v",
						"path": "› apprentissage-ludique-comment-la-gamification-revolutionne-la-formation"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/q2AkW8hRr-PlrtBR8wQLLQB3K6DQCcWrv4XUI2kyhIU/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/cHJvZ3Jlc3Nlci1l/bi1vcnRob2dyYXBo/ZS5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjYvMDYvQXBw/cmVudGlzc2FnZS1s/dWRpcXVlLWNvbW1l/bnQtbGEtZ2FtaWZp/Y2F0aW9uLXJldm9s/dXRpb25uZS1sYS1m/b3JtYXRpb24uanBn",
						"original": "https://www.progresser-en-orthographe.com/wp-content/uploads/2026/06/Apprentissage-ludique-comment-la-gamification-revolutionne-la-formation.jpg",
						"logo": false
					},
					"age": "2 days ago",
					"extra_snippets": [
						"Dans ce cadre, les techniques pédagogiques sont pensées pour transformer l’apprenant en acteur plutôt qu’en simple récepteur de savoirs. Au cœur de la gamification, on retrouve quelques ingrédients récurrents, utilisés avec mesure. La narration pose le décor : une mission à accomplir, un scénario de crise à résoudre, une enquête à mener. Ce fil rouge donne du sens aux activités et ancre les concepts dans une histoire mémorable. Les points matérialisent la progression : chaque quiz réussi, chaque cas pratique résolu apporte une preuve tangible d’avancée, ce qui nourrit la motivation sans avoir besoin de longs discours.",
						"Choisir les mécaniques de jeu pertinentes : points, défis, coopération, narration, selon le public et le contexte. Mettre en situation : créer des cas concrets, simulations ou scénarios immersifs en lien direct avec le terrain. Animer avec le jeu : alterner quiz, jeux de rôle, défis chronométrés pour maintenir la motivation.",
						"On ne se contente plus d’écouter, on agit, on essaie, on se trompe, on recommence. Et l’on retient bien mieux les compétences travaillées. Reste à comprendre comment ces mécaniques de jeu s’articulent pour servir réellement les objectifs de formation, et non l’inverse.",
						"Elle commence par clarifier les objectifs : identifier les signaux d’un conflit, adopter une posture de médiation, préparer un entretien délicat. À partir de là, elle choisit les mécaniques de gamification qui serviront directement ces cibles : études de cas sous forme d’enquête, points pour chaque bonne pratique repérée, badges liés aux postures adoptées."
					]
				},
				{
					"title": "La Gamification en formation : engager vos apprenants et maximiser la rétention | Argalis",
					"url": "https://argalis.fr/blog/articles/article-51.html",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Si c’est une bonne réponse : un signal visuel/sonore positif, une explication supplémentaire pour consolider le savoir. Si c’est une erreur : un message indiquant pourquoi c’est faux et éventuellement un indice pour réussir. Ce feedback doit être conçu comme un outil d’apprentissage, pas juste un jugement. Dans un jeu, l’erreur n’est pas pénalisante en soi : on peut réessayer. Il est donc opportun d’autoriser les apprenants à corriger leurs erreurs dans un environnement gamifié – par exemple, permettre plusieurs tentatives à un quiz, ou redonner des “vies” pour refaire un exercice.",
					"page_age": "2025-08-29T00:00:00",
					"profile": {
						"name": "Argalis",
						"url": "https://argalis.fr/blog/articles/article-51.html",
						"long_name": "argalis.fr",
						"img": "https://imgs.search.brave.com/GA7XPzYWrdl09WvLvBBJ-LLXFliFD7IxdTnUIWix3YY/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNzlkMGQ4MTYz/ZDRlNjgxZjFhMDlm/ZWM4ZjA4OTU5OTM3/NWRhZGRiMTU0Yjcy/MDg1Y2I5ZWE2NzQ0/MGY1NDc4Yi9hcmdh/bGlzLmZyLw"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "argalis.fr",
						"hostname": "argalis.fr",
						"favicon": "https://imgs.search.brave.com/GA7XPzYWrdl09WvLvBBJ-LLXFliFD7IxdTnUIWix3YY/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNzlkMGQ4MTYz/ZDRlNjgxZjFhMDlm/ZWM4ZjA4OTU5OTM3/NWRhZGRiMTU0Yjcy/MDg1Y2I5ZWE2NzQ0/MGY1NDc4Yi9hcmdh/bGlzLmZyLw",
						"path": "› blog  › articles  › article-51.html"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/GSHVv-SD2IzBvkUAIpOGADddb17KK_F-BmoBrijRLWs/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9hcmdh/bGlzLmZyL2ltYWdl/cy9sb2dvJTIwYXJn/YWxpcy5wbmc",
						"original": "https://argalis.fr/images/logo%20argalis.png",
						"logo": true
					},
					"age": "August 29, 2025",
					"extra_snippets": [
						"Nous définirons d’abord ce concept et ses mécanismes clés, avant d’examiner comment il s’articule avec les grands principes de l’apprentissage des adultes (p. ex. l’andragogie de Knowles, le cycle expérientiel de Kolb, l’apprenance selon Carré). Nous passerons ensuite en revue les bénéfices concrets de la gamification en termes de motivation, de participation active, de montée en compétences et de rétention des savoirs, à la lumière des études et méta-analyses disponibles.",
						"Si c’est une bonne réponse : un signal visuel/sonore positif, une explication supplémentaire pour consolider le savoir. Si c’est une erreur : un message indiquant pourquoi c’est faux et éventuellement un indice pour réussir. Ce feedback doit être conçu comme un outil d’apprentissage, pas juste un jugement. Dans un jeu, l’erreur n’est pas pénalisante en soi : on peut réessayer. Il est donc opportun d’autoriser les apprenants à corriger leurs erreurs dans un environnement gamifié – par exemple, permettre plusieurs tentatives à un quiz, ou redonner des “vies” pour refaire un exercice.",
						"La gamification, quant à elle, ne crée pas forcément un jeu complet, mais emprunte certains “mécanismes ludiques” pour les injecter dans une formation classique. C’est une démarche de conception pédagogique consistant à « ludifier » un dispositif existant. Par exemple, transformer un quiz de révision en y ajoutant un chronomètre, un score et un classement des participants est une forme de gamification.",
						"Par exemple, une formation en ligne sur la cybersécurité pourra attribuer des points à chaque module validé, décerner un badge « Défenseur » une fois tous les quiz réussis, et afficher un tableau des scores (anonymisé) pour encourager une saine émulation entre apprenants. Il existe également des mécaniques avancées de gamification : intégration d’un scénario narratif (l’apprenant devient le héros d’une histoire et doit accomplir des quêtes formatives), utilisation de l’aléa et de la surprise (coffres mystères, quizz bonus), mise en place de défis de groupe pour encourager la coopération (par exemple un escape game pédagogique où toute la classe doit résoudre des énigmes ensemble), ou encore personnalisation de l’avatar permettant à l’apprenant de se projeter dans le jeu."
					]
				},
				{
					"title": "Intégrer le jeu dans son cours, mode d’emploi | Pédagothèque de l’ENPC",
					"url": "https://pedagotheque.enpc.fr/2017/03/31/integrer-le-jeu-dans-son-cours-mode-demploi/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "La gamification (on parle également ... des mécanismes de jeu dans un enseignement afin d’encourager la participation et la motivation des étudiants. Ce concept, inhérent au jeu sérieux, n’y est cependant pas exclusif. Exemple : Utiliser un outil de quizz numérique dans sa classe, Kahoot · La simulation cherche à mettre en pratique des connaissances vues en classe et à immerger dans les conditions les plus réalistes pour tester et évaluer des savoirs-faire ou des ...",
					"profile": {
						"name": "Enpc",
						"url": "https://pedagotheque.enpc.fr/2017/03/31/integrer-le-jeu-dans-son-cours-mode-demploi/",
						"long_name": "pedagotheque.enpc.fr",
						"img": "https://imgs.search.brave.com/R_OrY1TvSNGk0B6nA1F3CLfGkZFSXtMkO7lf7rnWEnE/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZTg0YzhjYTAy/MTc5OTFhM2JjOTk3/MzUzMWQ4NDJjYTI3/YzI4ZDY1YzRlNTAw/NTA5OTliZTRjOWEz/NjgyY2I5Ny9wZWRh/Z290aGVxdWUuZW5w/Yy5mci8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "pedagotheque.enpc.fr",
						"hostname": "pedagotheque.enpc.fr",
						"favicon": "https://imgs.search.brave.com/R_OrY1TvSNGk0B6nA1F3CLfGkZFSXtMkO7lf7rnWEnE/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZTg0YzhjYTAy/MTc5OTFhM2JjOTk3/MzUzMWQ4NDJjYTI3/YzI4ZDY1YzRlNTAw/NTA5OTliZTRjOWEz/NjgyY2I5Ny9wZWRh/Z290aGVxdWUuZW5w/Yy5mci8",
						"path": "› 2017  › 03  › 31  › integrer-le-jeu-dans-son-cours-mode-demploi"
					},
					"extra_snippets": [
						"La gamification (on parle également de ludification) consiste à reprendre des mécanismes de jeu dans un enseignement afin d’encourager la participation et la motivation des étudiants. Ce concept, inhérent au jeu sérieux, n’y est cependant pas exclusif. Exemple : Utiliser un outil de quizz numérique dans sa classe, Kahoot · La simulation cherche à mettre en pratique des connaissances vues en classe et à immerger dans les conditions les plus réalistes pour tester et évaluer des savoirs-faire ou des savoirs-être .",
						"Dans un contexte de cours où ce qui est évalué d’abord sont des savoirs formels et structurés, les activités pédagogiques comme l’exposé ou les exercices d’application suffisent en général.",
						"évaluer une situation complexe, comme par exemple un savoir-faire technique, un savoir-être.",
						"Le serious game ou jeu sérieux se définit comme une application informatique, dont l’objectif est de combiner à la fois des aspects sérieux (serious) tels, de manière non exhaustive, l’enseignement, l’apprentissage, la communication, ou encore l’information, avec des ressorts ludiques issus du jeu vidéo (game). Il s’agit de l’objet le plus complexe mêlant pédagogie et jeu. Plus qu’une simple simulation, un serious game demande d’une part une scénarisation poussée et d’autre part un mécanisme de jeu ou gameplay efficace."
					]
				},
				{
					"title": "Gamification croissante d’un quiz de chimie – Effets comparés sur la performance, la perception de compétence et l’état de flow – Revue internationale des technologies en pédagogie universitaire / International Journal of Technologies in Higher Education",
					"url": "https://www.erudit.org/fr/revues/ritpu/2017-v14-n1-ritpu04557/1059580ar/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "La « gamification » désigne un processus par lequel des éléments et des mécanismes de jeux sont intentionnellement et méthodiquement insérés dans des activités humaines, autres que de divertissement, en vue d’en accroître la dimension ludique et le « fun » (Deterding, Dixon, Khaled et Nacke, 2011) que les participants éprouvent en s’y adonnant.",
					"page_age": "2019-05-07T00:00:00",
					"profile": {
						"name": "Érudit",
						"url": "https://www.erudit.org/fr/revues/ritpu/2017-v14-n1-ritpu04557/1059580ar/",
						"long_name": "erudit.org",
						"img": "https://imgs.search.brave.com/8jiaFU-YepBjmvpXsd09ClM1ccKnz3zsjRuPmZH5ePk/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMTI4YjY4MjU3/MDczNjBiMWIwMTI1/NjQ4NTY5MWFlNmU4/MGE5MjVlMzk3OGMy/Y2NjOGRjODU3ZGJm/NWI2OGUxOS93d3cu/ZXJ1ZGl0Lm9yZy8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "erudit.org",
						"hostname": "www.erudit.org",
						"favicon": "https://imgs.search.brave.com/8jiaFU-YepBjmvpXsd09ClM1ccKnz3zsjRuPmZH5ePk/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMTI4YjY4MjU3/MDczNjBiMWIwMTI1/NjQ4NTY5MWFlNmU4/MGE5MjVlMzk3OGMy/Y2NjOGRjODU3ZGJm/NWI2OGUxOS93d3cu/ZXJ1ZGl0Lm9yZy8",
						"path": "  › érudit  › revues  › revue internationale des technologies en pédagogie universitaire / international journal of technologies in higher education  › volume 14, numéro 1, 2017, p. 6-83  › gamification croissante d’un quiz de chimie – effets comparés sur la performance, la perception de compétence et l’état de flow"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/5kVc5hULgVmy3SGwKKUD78JRKXK_gDWP06zr5q1NkwI/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/ZXJ1ZGl0Lm9yZy9m/ci9yZXZ1ZXMvcml0/cHUvMjAxNy12MTQt/bjEtcml0cHUwNDU1/Ny9jb3ZlcnBhZ2Ut/aGQuanBn",
						"original": "https://www.erudit.org/fr/revues/ritpu/2017-v14-n1-ritpu04557/coverpage-hd.jpg",
						"logo": false
					},
					"age": "May 7, 2019",
					"extra_snippets": [
						"Gamification croissante d’un quiz de chimie – Effets comparés sur la performance, la perception de compétence et l’état de flow. Un article de la revue Revue internationale des technologies en pédagogie universitaire / International Journal of Technologies in Higher Education (Volume 14, numéro 1, 2017, p. 6-83) diffusée par la plateforme Érudit.",
						"Un article de la revue Revue internationale des technologies en pédagogie universitaire / International Journal of Technologies in Higher Education, diffusée par la plateforme Érudit.",
						"Un des facteurs essentiels concernant le jeu est de savoir si l’activité est vécue comme un jeu. Dans son étude, Lavigne (2016) montre que les étudiants ne considèrent pas forcément comme des jeux ce que leurs enseignants leur présentent comme tels. Il ne suffit pas d’ajouter des éléments de jeu dans un contexte scolaire pour que ça devienne ludique pour tous les étudiants.",
						"La « gamification » désigne un processus par lequel des éléments et des mécanismes de jeux sont intentionnellement et méthodiquement insérés dans des activités humaines, autres que de divertissement, en vue d’en accroître la dimension ludique et le « fun » (Deterding, Dixon, Khaled et Nacke, 2011) que les participants éprouvent en s’y adonnant."
					]
				},
				{
					"title": "1 LE POUVOIR DE L’INTELLIGENCE COLLECTIVE LA PÉDAGOGIE PAR LE JEU",
					"url": "https://www.anrt.asso.fr/sites/default/files/2024-start/comment_remettre_les_apprentissages_en_jeu-novembre_2019.pdf",
					"is_source_local": false,
					"is_source_both": false,
					"description": "2 / LE JEU COMME VECTEUR DE TRANSMISSION DE SAVOIRS ET DE COMPÉTENCES · Développer des compétences transverses · Rendre les savoirs attractifs · Organiser le déroulement de la séquence pédagogique ludique · Un terrain de jeu exemplaire : les mécanismes d’apprentissage de l’IFSImulation ·",
					"profile": {
						"name": "ANRT",
						"url": "https://www.anrt.asso.fr/sites/default/files/2024-start/comment_remettre_les_apprentissages_en_jeu-novembre_2019.pdf",
						"long_name": "anrt.asso.fr",
						"img": "https://imgs.search.brave.com/dkFIn9V5An1rM_5xSC-bgk8HlrSZw1mkr93Mhrxe1Kg/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZGI3NWU0NjM4/ODY3MjNmM2U2ZDkw/YzczNjViMTg1NDgy/ZDk1OTA1MTJjOWY2/Yzk2OGE3ZDlhYjFl/Mjg1YzA2MS93d3cu/YW5ydC5hc3NvLmZy/Lw"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "anrt.asso.fr",
						"hostname": "www.anrt.asso.fr",
						"favicon": "https://imgs.search.brave.com/dkFIn9V5An1rM_5xSC-bgk8HlrSZw1mkr93Mhrxe1Kg/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZGI3NWU0NjM4/ODY3MjNmM2U2ZDkw/YzczNjViMTg1NDgy/ZDk1OTA1MTJjOWY2/Yzk2OGE3ZDlhYjFl/Mjg1YzA2MS93d3cu/YW5ydC5hc3NvLmZy/Lw",
						"path": "› sites  › default  › files  › 2024-start  › comment_remettre_les_apprentissages_en_jeu-novembre_2019.pdf"
					},
					"content_type": "pdf",
					"extra_snippets": [
						"2 / LE JEU COMME VECTEUR DE TRANSMISSION DE SAVOIRS ET DE COMPÉTENCES · Développer des compétences transverses · Rendre les savoirs attractifs · Organiser le déroulement de la séquence pédagogique ludique · Un terrain de jeu exemplaire : les mécanismes d’apprentissage de l’IFSImulation ·"
					]
				},
				{
					"title": "Quiz spécialité HLP - La transmission des savoirs - L'Etudiant",
					"url": "https://www.letudiant.fr/quiz/bac/specialites-en-terminale/quiz-terminale-specialite-hlp-la-transmission-des-savoirs.html",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Révisez tout au long de l&#x27;année avec les quiz de notre partenaire SchoolMouv ! Découvrez si vous maîtrisez la thématique &quot;La transmission des savoirs &quot; du programme de la spécialité Humanité-Littérature-Philosophie en Terminale avec ce quiz de 10 questions qui aborde les points importants à connaître.",
					"profile": {
						"name": "L'Étudiant",
						"url": "https://www.letudiant.fr/quiz/bac/specialites-en-terminale/quiz-terminale-specialite-hlp-la-transmission-des-savoirs.html",
						"long_name": "letudiant.fr",
						"img": "https://imgs.search.brave.com/otPYdlktHD9WnDxNA2IZq7MKA7-It9_kkQ8mhn6_JZ4/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNGQwNjcwYjdl/OGRlNGZlMjVhMjQ3/ODM3MzFhYmQyYzhk/NTA4NjkxZGMxMWRh/NmI5NmViNjMwNWVi/MGVhMWY3OS93d3cu/bGV0dWRpYW50LmZy/Lw"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "letudiant.fr",
						"hostname": "www.letudiant.fr",
						"favicon": "https://imgs.search.brave.com/otPYdlktHD9WnDxNA2IZq7MKA7-It9_kkQ8mhn6_JZ4/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNGQwNjcwYjdl/OGRlNGZlMjVhMjQ3/ODM3MzFhYmQyYzhk/NTA4NjkxZGMxMWRh/NmI5NmViNjMwNWVi/MGVhMWY3OS93d3cu/bGV0dWRpYW50LmZy/Lw",
						"path": "  › accueil  › quiz  › quiz bac 02- spécialités en terminale  › quiz spécialité hlp - la transmission des savoirs"
					},
					"extra_snippets": [
						"Quiz spécialité HLP - La transmission des savoirs © Adobe Stock",
						"Révisez tout au long de l'année avec les quiz de notre partenaire SchoolMouv ! Découvrez si vous maîtrisez la thématique \"La transmission des savoirs \" du programme de la spécialité Humanité-Littérature-Philosophie en Terminale avec ce quiz de 10 questions qui aborde les points importants à connaître.",
						"Chaque quiz vous rapporte de l'XP."
					]
				},
				{
					"title": "La ludification est une démarche pour apprendre facilement",
					"url": "https://www.bma-worldwide.com/fr/news/the-gamification-approach-learning-by-playing.html",
					"is_source_local": false,
					"is_source_both": false,
					"description": "<strong>Les mécanismes établissent un système fictif de concurrence à l&#x27;intérieur de l&#x27;équipe de collaborateurs</strong>. Un système de points accorde un certain statut à un utilisateur selon son classement : plus son nombre de points est élevé et ...",
					"page_age": "2024-03-08T00:00:00",
					"profile": {
						"name": "Bma-worldwide",
						"url": "https://www.bma-worldwide.com/fr/news/the-gamification-approach-learning-by-playing.html",
						"long_name": "bma-worldwide.com",
						"img": "https://imgs.search.brave.com/2JJ0KfOdoAiraQlGKDox0vSX7A8mTcPxcKXlkYbDuuc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNzNkZWY1NTJh/NWVhODI5ZjUyNzUy/YjA2YTgyZDViZWY0/ZGMxMGM1YWMwODFi/ZjFlZTdkNDYwMjdi/YmVlNGM4ZC93d3cu/Ym1hLXdvcmxkd2lk/ZS5jb20v"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "bma-worldwide.com",
						"hostname": "www.bma-worldwide.com",
						"favicon": "https://imgs.search.brave.com/2JJ0KfOdoAiraQlGKDox0vSX7A8mTcPxcKXlkYbDuuc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNzNkZWY1NTJh/NWVhODI5ZjUyNzUy/YjA2YTgyZDViZWY0/ZGMxMGM1YWMwODFi/ZjFlZTdkNDYwMjdi/YmVlNGM4ZC93d3cu/Ym1hLXdvcmxkd2lk/ZS5jb20v",
						"path": "  › aperçu  › actualités  › 2021  › the gamification approach: learning by playing"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/4BbTO-eIWikULMlsoGsOCMXVWflBFLLwX7Knx10-Qvo/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/Ym1hLXdvcmxkd2lk/ZS5jb20vZmlsZWFk/bWluL19wcm9jZXNz/ZWRfL2IvMC9jc21f/Qk1BX0luZm9fNTlf/XzFfX2EzMDg1N2Zh/MDYuanBn",
						"original": "https://www.bma-worldwide.com/fileadmin/_processed_/b/0/csm_BMA_Info_59__1__a30857fa06.jpg",
						"logo": false
					},
					"age": "March 8, 2024",
					"extra_snippets": [
						"Les éléments de la ludification fonctionnent, car ils s'adressent à l'envie de jouer de chacun d'entre nous.8 Le savoir, les valeurs et les normes sont transmises de façon ludique aux enfants dès l'école maternelle. Cette pulsion fait partie de la nature humaine et ne concerne pas seulement les enfants et les jeunes.",
						"Un jeu vidéo suit souvent les mécanismes habituels : un scénario, des objets, des rouages, une technologie et l'équilibrage.5 La démarche de ludification se sert alors d'éléments choisis dans le mécanisme de jeu. Les auteurs G. Zichermann et C. Cunningham décrivent que les « core mechanics », c.-à-d.",
						"Les mécanismes établissent un système fictif de concurrence à l'intérieur de l'équipe de collaborateurs. Un système de points accorde un certain statut à un utilisateur selon son classement : plus son nombre de points est élevé et plus sa place est également élevée.",
						"Cela signifie qu'on intègre les mécanismes ludiques d'un jeu vidéo dans un environnement autre que celui du jeu."
					]
				},
				{
					"title": "Design en jeu #2 : le jeu vidéo en 10 principes inspirants | by Thomas Thibault | Medium",
					"url": "https://medium.com/collectifbam/design-en-jeu-2-le-jeu-vid%C3%A9o-en-10-principes-inspirants-66bc03cac7f1",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Cet article est la suite de Design en jeu #1, traitant de notions comme l’affordance, les tutoriels invisibles, la navigation intuitive…",
					"page_age": "2020-02-05T09:41:48",
					"profile": {
						"name": "Medium",
						"url": "https://medium.com/collectifbam/design-en-jeu-2-le-jeu-vid%C3%A9o-en-10-principes-inspirants-66bc03cac7f1",
						"long_name": "medium.com",
						"img": "https://imgs.search.brave.com/4R4hFITz_F_be0roUiWbTZKhsywr3fnLTMTkFL5HFow/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOTZhYmQ1N2Q4/NDg4ZDcyODIyMDZi/MzFmOWNhNjE3Y2E4/Y2YzMThjNjljNDIx/ZjllZmNhYTcwODhl/YTcwNDEzYy9tZWRp/dW0uY29tLw"
					},
					"language": "en",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "article",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "medium.com",
						"hostname": "medium.com",
						"favicon": "https://imgs.search.brave.com/4R4hFITz_F_be0roUiWbTZKhsywr3fnLTMTkFL5HFow/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOTZhYmQ1N2Q4/NDg4ZDcyODIyMDZi/MzFmOWNhNjE3Y2E4/Y2YzMThjNjljNDIx/ZjllZmNhYTcwODhl/YTcwNDEzYy9tZWRp/dW0uY29tLw",
						"path": "› collectifbam  › design-en-jeu-2-le-jeu-vidéo-en-10-principes-inspirants-66bc03cac7f1"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/RWBJGIwxX2xxWVB0ApC8LdyfkXicvSqxGGlmR11PUoI/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/MSpHZ3lQZG1TQWlL/WTBNN3k4T0pWY0Rn/LmpwZWc",
						"original": "https://miro.medium.com/1*GgyPdmSAiKY0M7y8OJVcDg.jpeg",
						"logo": false
					},
					"age": "February 5, 2020",
					"article": {
						"author": [
							{
								"type": "person",
								"name": "Thomas Thibault",
								"url": "https://medium.com/@thomas_thibault"
							}
						],
						"date": "Feb 03, 2020",
						"publisher": {
							"type": "organization",
							"name": "Collectif Bam",
							"url": "https://medium.com/collectifbam",
							"thumbnail": {
								"src": "https://imgs.search.brave.com/Ds_Y-09PhlcXN_rUGmBurNEpqoUINuPBNGowoSn73HM/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/djIvcmVzaXplOmZp/dDo1OTEvMSUyQWpv/YlotSUFYbkJBMXpM/WDhKOW9FR3cucG5n",
								"original": "https://miro.medium.com/v2/resize:fit:591/1%2AjobZ-IAXnBA1zLX8J9oEGw.png"
							}
						},
						"isAccessibleForFree": true
					},
					"extra_snippets": [
						"Design en jeu #2 : le jeu vidéo en 10 principes inspirants Cet article est la suite de Design en jeu #1, traitant de notions comme l’affordance, les tutoriels invisibles, la navigation intuitive …",
						"En créant l’Atelier Numérique de l’École Boulle, un espace d’apprentissage des savoirs numériques entre pairs dans l’école, j’ai pu mettre en œuvre des dispositifs qui favorisent des boucles de rétroaction positive.",
						"L’affichage sur le mur des compétences, l’appellation “Jedi” etc sont plein de moyens pour encourager ceux qui progressent à continuer. Cette boucle faisait sens car nous étions en manque de savoir-faire du côté du corps enseignant.",
						"Pour le projet Apidou réalisé avec Charlotte Debrenne, nous avions comme défi de faire comprendre progressivement la technologie d’une peluche interactive et programmable aux jeunes enfants. Les mécanismes d’apprentissage sont inspirés ici de l’état de flow."
					]
				},
				{
					"title": "Gamification d'un Quiz - Guilde des Ludopédagogues Francophones - Apprentissage avec le jeu - GUILDELUDO",
					"url": "https://apprendre-avec-le-jeu.com/gamification-dun-quiz/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "<strong>Un Quiz, qu&#x27;il soit numérique ou non, ne constitue pas un jeu, mais un ensemble de défis d&#x27;un type défini</strong>. C&#x27;est à la base un exerciseur mais il est tout à fait possible de transformer un Quiz en jeu d&#x27;apprentissage ou d&#x27;utiliser des Quizs ...",
					"page_age": "2022-12-20T15:59:12",
					"profile": {
						"name": "Apprendre-avec-le-jeu",
						"url": "https://apprendre-avec-le-jeu.com/gamification-dun-quiz/",
						"long_name": "apprendre-avec-le-jeu.com",
						"img": "https://imgs.search.brave.com/QPPecFJYdhiRocrNiv_Zf21ptdv9cAEpWD9Z5MbTV9w/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZmI1M2U2ZTJi/NmM2NzA0MGY1MTA3/ZjJiMTEwMDAzZThm/MDc4N2U3MjJjMjdk/Zjk0MTMwZDM1NDAw/YjdiYzVkZi9hcHBy/ZW5kcmUtYXZlYy1s/ZS1qZXUuY29tLw"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "article",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "apprendre-avec-le-jeu.com",
						"hostname": "apprendre-avec-le-jeu.com",
						"favicon": "https://imgs.search.brave.com/QPPecFJYdhiRocrNiv_Zf21ptdv9cAEpWD9Z5MbTV9w/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZmI1M2U2ZTJi/NmM2NzA0MGY1MTA3/ZjJiMTEwMDAzZThm/MDc4N2U3MjJjMjdk/Zjk0MTMwZDM1NDAw/YjdiYzVkZi9hcHBy/ZW5kcmUtYXZlYy1s/ZS1qZXUuY29tLw",
						"path": "  › accueil  › gamification d’un quiz"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/Yz5sxLS00xfPl_gxWDFCD9tNWe1GLEorPfT1SbW0eQw/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9hcHBy/ZW5kcmUtYXZlYy1s/ZS1qZXUuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIyLzEy/L1F1aXoucG5n",
						"original": "https://apprendre-avec-le-jeu.com/wp-content/uploads/2022/12/Quiz.png",
						"logo": false
					},
					"age": "December 20, 2022",
					"article": {
						"author": [
							{
								"type": "person",
								"name": "Thierry Secqueville"
							}
						],
						"date": "Dec 20, 2022"
					}
				},
				{
					"title": "Formation : Intégrer du jeu dans ses formations - Comundi",
					"url": "https://www.comundi.fr/formations/formation-integrer-du-jeu-dans-ses-formations-gamifier.html",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Découverte et apprentissage de l’outils digitaux en formation et mécaniques de l’escape game et du serious game ... Évaluation des acquis en amont via un questionnaire d’auto-positionnement et en aval via un questionnaire d’évaluation rempli par le formateur sur la base des mises en situation réalisées en formation · Distanciel : contenu et durée identiques + pédagogie adaptée + assistance technique 5j/7 (disponible par mail : [email protected]) ... quiz digital : les mécanismes de jeu, les classifications, les profils de joueurs et les intelligences",
					"profile": {
						"name": "Comundi",
						"url": "https://www.comundi.fr/formations/formation-integrer-du-jeu-dans-ses-formations-gamifier.html",
						"long_name": "comundi.fr",
						"img": "https://imgs.search.brave.com/j44s8WtP78kq2w163Fiebt2ZKDysTY5mnPUsg3yXZSo/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNzM4MGZiZDQ2/OTFlM2ViMWMyYjM5/ZjhmYjdiY2UzNDJh/ZjNjZTFiYzRhZjkx/MzVhMTUyNDllMDYw/ZjY0NzA2ZS93d3cu/Y29tdW5kaS5mci8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "comundi.fr",
						"hostname": "www.comundi.fr",
						"favicon": "https://imgs.search.brave.com/j44s8WtP78kq2w163Fiebt2ZKDysTY5mnPUsg3yXZSo/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNzM4MGZiZDQ2/OTFlM2ViMWMyYjM5/ZjhmYjdiY2UzNDJh/ZjNjZTFiYzRhZjkx/MzVhMTUyNDllMDYw/ZjY0NzA2ZS93d3cu/Y29tdW5kaS5mci8",
						"path": "  › accueil  › ressources humaines, formation, droit social  › formation : intégrer du jeu dans ses formations. gamifier"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/w2JUlj6k4l5ozUq9-uCYFQouFBi7-CvgNPe4Owo0ZqE/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/Y29tdW5kaS5mci9t/ZWRpYS9jYWNoZS9y/ZXNvbHZlL21vZHVs/ZVBvc3RlckVtYmVk/L3RyYWluaW5nX2Rl/ZmF1bHQuanBn",
						"original": "https://www.comundi.fr/media/cache/resolve/modulePosterEmbed/training_default.jpg",
						"logo": false
					},
					"extra_snippets": [
						"Découverte et apprentissage de l’outils digitaux en formation et mécaniques de l’escape game et du serious game ... Évaluation des acquis en amont via un questionnaire d’auto-positionnement et en aval via un questionnaire d’évaluation rempli par le formateur sur la base des mises en situation réalisées en formation · Distanciel : contenu et durée identiques + pédagogie adaptée + assistance technique 5j/7 (disponible par mail : [email protected]) ... quiz digital : les mécanismes de jeu, les classifications, les profils de joueurs et les intelligences",
						"Quentin est consultant et formateur, spécialisé en ingénierie de la formation et en innovations pédagogiques. Il intervient régulièrement auprès des professionnels de la formation pour les aider à développer leurs compétences en... En savoir plus"
					]
				},
				{
					"title": "Savoirs ENS",
					"url": "https://savoirs.ens.fr/recherche.php?rechercheTerme=game+design",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Les derniers cours, séminaires, colloques et conférences enregistrées à l&#x27;Ecole Normale Supérieure (Paris)",
					"profile": {
						"name": "Ens",
						"url": "https://savoirs.ens.fr/recherche.php?rechercheTerme=game+design",
						"long_name": "savoirs.ens.fr",
						"img": "https://imgs.search.brave.com/Mm5YThHWHlAo0l9DODajopwFJjP4ifE-UqzF2Xd4_70/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNDQzNWFiNDQx/MWQ5Njc2ZWY0MDk1/ZTZkNmM1YmY5MmVi/MmFlNTY0NGYzYmE5/MTg2NTA5M2ViODlj/OWViYjI5ZS9zYXZv/aXJzLmVucy5mci8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "savoirs.ens.fr",
						"hostname": "savoirs.ens.fr",
						"favicon": "https://imgs.search.brave.com/Mm5YThHWHlAo0l9DODajopwFJjP4ifE-UqzF2Xd4_70/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNDQzNWFiNDQx/MWQ5Njc2ZWY0MDk1/ZTZkNmM1YmY5MmVi/MmFlNTY0NGYzYmE5/MTg2NTA5M2ViODlj/OWViYjI5ZS9zYXZv/aXJzLmVucy5mci8",
						"path": "› recherche.php"
					}
				},
				{
					"title": "🕹️ Structures de Quiz, tests & game design | Celestory Documentation",
					"url": "https://documentation.celestory.io/fr/article/structures-de-quiz-tests-game-design-glj7md/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Vous pouvez utiliser quizz et mini-jeux pour des examens, des mises en situations, des exercices d’entrainement, des bilans de performance, ou de l’auto-évaluation.",
					"profile": {
						"name": "Celestory",
						"url": "https://documentation.celestory.io/fr/article/structures-de-quiz-tests-game-design-glj7md/",
						"long_name": "documentation.celestory.io",
						"img": "https://imgs.search.brave.com/ygMRN7gTq1MHUxGWAYcRiTaumFllRsXYSsSNJqm62UE/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYmViZGUxN2Yx/OWVlNGZkMjc2YWNi/YjMxN2U4NjY0ODBj/MmIyMTM2YzdmZTI3/MjIzN2M0ZDVjZDg4/NjRhZTNiYi9kb2N1/bWVudGF0aW9uLmNl/bGVzdG9yeS5pby8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "documentation.celestory.io",
						"hostname": "documentation.celestory.io",
						"favicon": "https://imgs.search.brave.com/ygMRN7gTq1MHUxGWAYcRiTaumFllRsXYSsSNJqm62UE/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYmViZGUxN2Yx/OWVlNGZkMjc2YWNi/YjMxN2U4NjY0ODBj/MmIyMTM2YzdmZTI3/MjIzN2M0ZDVjZDg4/NjRhZTNiYi9kb2N1/bWVudGF0aW9uLmNl/bGVzdG9yeS5pby8",
						"path": "› fr  › article  › structures-de-quiz-tests-game-design-glj7md"
					}
				},
				{
					"title": "Gamification dans la formation : Jouez et testez vos connaissances !",
					"url": "https://www.dendreo.com/blog/gamification-formation-quizz",
					"is_source_local": false,
					"is_source_both": false,
					"description": "‍ Vous avez trouvé la partie difficile ou souhaitez recevoir une petite piqûre de rappel concernant <strong>la gamification</strong> ? On a vous explique tout ça en quelques mots ! La gamification, parfois également appelée “ludification” est le principe ...",
					"profile": {
						"name": "Dendreo",
						"url": "https://www.dendreo.com/blog/gamification-formation-quizz",
						"long_name": "dendreo.com",
						"img": "https://imgs.search.brave.com/B5F2Nu_1LSdgNC3peC8R-36oW1XOVslNAiEASCgS0sE/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNWFkYTdmZGY5/N2JhY2I0ZjczMTQz/ZmQ5NjE5ODFlNDgy/YjQ2ODM5ZjhkNjE5/YWFjOGI5MTI2YzY1/Y2Y5MjNiNC93d3cu/ZGVuZHJlby5jb20v"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "dendreo.com",
						"hostname": "www.dendreo.com",
						"favicon": "https://imgs.search.brave.com/B5F2Nu_1LSdgNC3peC8R-36oW1XOVslNAiEASCgS0sE/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNWFkYTdmZGY5/N2JhY2I0ZjczMTQz/ZmQ5NjE5ODFlNDgy/YjQ2ODM5ZjhkNjE5/YWFjOGI5MTI2YzY1/Y2Y5MjNiNC93d3cu/ZGVuZHJlby5jb20v",
						"path": "› blog  › gamification-formation-quizz"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/d6feP9B1G7PC47IoENtD-hyRFXkYVG9RvFup3ZTvdAc/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS81/ZTdlMDkzMTA5ZDBm/ZTU3YmNiNWU5ODAv/NjM2M2M3MWVmYzEz/ZjE3NjE1NDMzZWI1/X0xhJTIwR2FtaWZp/Y2F0aW9uJTIwYXBw/bGlxdSVDMyVBOWUl/MjAlQzMlQTAlMjBs/YSUyMGZvcm1hdGlv/bi5wbmc",
						"original": "https://cdn.prod.website-files.com/5e7e093109d0fe57bcb5e980/6363c71efc13f17615433eb5_La%20Gamification%20appliqu%C3%A9e%20%C3%A0%20la%20formation.png",
						"logo": false
					},
					"extra_snippets": [
						"Ce quizz a été créé par Morgane Dabrowski pour l’Université de Haute Alsace. ‍ Vous avez trouvé la partie difficile ou souhaitez recevoir une petite piqûre de rappel concernant la gamification ? On a vous explique tout ça en quelques mots ! La gamification, parfois également appelée “ludification” est le principe d’incorporer différents éléments et mécanismes propres à l’univers des jeux, au sein de processus dont la raison d’être au premier abord n’est pas de divertir."
					]
				},
				{
					"title": "Des jeux nés en paix - Le niveau 1 de gamification - Sydologie",
					"url": "https://sydologie.com/2025/10/des-jeux-nes-en-paix-niveau-1-gamification/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Après avoir découvert les différents niveaux de gamification dans notre précédent article, plongeons maintenant dans le niveau 1 de gamification appliquée aux jeux pédagogiques. Ce premier palier, le plus simple à mettre en œuvre, repose sur des mécaniques ludiques accessibles — comme le Memory ou la Timeline — qui transforment l’apprentissage en une expérience plus engageante sans complexifier le design.",
					"page_age": "2025-10-27T10:09:40",
					"profile": {
						"name": "Sydologie",
						"url": "https://sydologie.com/2025/10/des-jeux-nes-en-paix-niveau-1-gamification/",
						"long_name": "sydologie.com",
						"img": "https://imgs.search.brave.com/UzGDPtuySj7dQ9yBsRENBg8Yd_e6JdHO3UCTEZu7ip8/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvODc1Y2NmNjBm/ZDg4M2VkNGJmMDhj/MDNkZjdjZDFiZjMz/OGUzYmExZGExMjNm/YTc5ZWY2MzVkODJm/OTA5MjE3OS9zeWRv/bG9naWUuY29tLw"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "article",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "sydologie.com",
						"hostname": "sydologie.com",
						"favicon": "https://imgs.search.brave.com/UzGDPtuySj7dQ9yBsRENBg8Yd_e6JdHO3UCTEZu7ip8/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvODc1Y2NmNjBm/ZDg4M2VkNGJmMDhj/MDNkZjdjZDFiZjMz/OGUzYmExZGExMjNm/YTc5ZWY2MzVkODJm/OTA5MjE3OS9zeWRv/bG9naWUuY29tLw",
						"path": "  › le mag'  › des jeux nés en paix – le niveau 1 de gamification"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/d7ObSfCL3jKjUz8VPMrvmC8qJJxywTUZ81Ai11giCvg/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9zeWRv/bG9naWUuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI1LzEw/LzMtMS5wbmc",
						"original": "https://sydologie.com/wp-content/uploads/2025/10/3-1.png",
						"logo": false
					},
					"age": "October 27, 2025",
					"article": {
						"author": [
							{
								"type": "person",
								"name": "Amélie Wallut"
							}
						],
						"date": "Oct 20, 2025",
						"publisher": {
							"type": "organization",
							"name": "Sydologie",
							"url": "https://sydologie.com/",
							"thumbnail": {
								"src": "https://imgs.search.brave.com/_RgQiE_B5UEIFxp0MnvW5PHiF-hhQOrUmHyzshBhpxs/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9zeWRv/bG9naWUuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIyLzEx/L2xvZ28uZ2lm.jpeg",
								"original": "https://sydologie.com/wp-content/uploads/2022/11/logo.gif"
							}
						}
					},
					"extra_snippets": [
						"J’ai toujours aimé débroussailler les sujets compliqués, les reformuler et les synthétiser, bien souvent sous la forme de schéma : la satisfaction de comprendre et de réussir à expliquer. Chaque nouveau sujet me donne envie d’en savoir plus, tout m’intéresse, en particulier les sujets techniques et scientifiques qui me fascinent.",
						"Ce site utilise Akismet pour réduire les indésirables. En savoir plus sur la façon dont les données de vos commentaires sont traitées.",
						"Après avoir découvert les différents niveaux de gamification dans notre précédent article, plongeons maintenant dans le niveau 1 de gamification appliquée aux jeux pédagogiques. Ce premier palier, le plus simple à mettre en œuvre, repose sur des mécaniques ludiques accessibles — comme le Memory ou la Timeline — qui transforment l’apprentissage en une expérience plus engageante sans complexifier le design.",
						"Voyons comment ces jeux à faible degré d’engagement peuvent, avec quelques ajustements, devenir de puissants outils pédagogiques. Comment imaginer un jeu à but pédagogique, ses mécanismes, ses rebondissements, bref, son game design ? Je vous rassure tout de suite, vous n’allez pas réinventer la roue !"
					]
				},
				{
					"title": "La gamification en 10 questions - UX-REPUBLIC",
					"url": "https://www.ux-republic.com/la-gamification-en-10-questions/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "UX-REPUBLIC La gamification en 10 questions La gamification en 10 questions. Êtes-vous prêt pour un petit challenge ? Testez vos connaissances avec ce quiz sur la Gamification et ses principes fondamentaux. Happy quiz, and &quot;may the odds be in your favor&quot; !",
					"page_age": "2021-10-07T13:03:06",
					"profile": {
						"name": "UX-REPUBLIC",
						"url": "https://www.ux-republic.com/la-gamification-en-10-questions/",
						"long_name": "ux-republic.com",
						"img": "https://imgs.search.brave.com/03hS0k0UbUK4nMb1yMt8bzpPCPc6zr9jkmkVfSVHqfQ/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZjBlMWRlMzll/Yzc5MjViOTI4ZTM2/Y2E2NTI5MTZiNDAx/OTA4YTc4ZDU5Y2My/MTFhNWEwNzI0NzRl/Mjc1ZTJhOC93d3cu/dXgtcmVwdWJsaWMu/Y29tLw"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "article",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "ux-republic.com",
						"hostname": "www.ux-republic.com",
						"favicon": "https://imgs.search.brave.com/03hS0k0UbUK4nMb1yMt8bzpPCPc6zr9jkmkVfSVHqfQ/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZjBlMWRlMzll/Yzc5MjViOTI4ZTM2/Y2E2NTI5MTZiNDAx/OTA4YTc4ZDU5Y2My/MTFhNWEwNzI0NzRl/Mjc1ZTJhOC93d3cu/dXgtcmVwdWJsaWMu/Y29tLw",
						"path": "  › accueil  › insight  › la gamification en 10 questions"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/f8NbYwOdz6usF_HfGSJ_9-6cQLO3zO3xaLGsaDmAwzI/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/dXgtcmVwdWJsaWMu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIxLzEwL3VubmFt/ZWQuanBlZw",
						"original": "https://www.ux-republic.com/wp-content/uploads/2021/10/unnamed.jpeg",
						"logo": false
					},
					"age": "October 7, 2021",
					"article": {
						"author": [
							{
								"type": "person",
								"name": "UX-Republic Experts team",
								"url": "https://www.ux-republic.com/author/ux-republic/",
								"thumbnail": {
									"src": "https://imgs.search.brave.com/fXbtQBf6GJ1fqkX8Jd_NDyUFYDGh69UswUg-oCAP1P0/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9zZWN1/cmUuZ3JhdmF0YXIu/Y29tL2F2YXRhci80/ZTM1ZmU2MmMxYjdm/OWRlNWFlM2UyOTI4/ZGE1NDAzNj9zPTk2/JmQ9bW0mcj1n",
									"original": "https://secure.gravatar.com/avatar/4e35fe62c1b7f9de5ae3e2928da54036?s=96&d=mm&r=g"
								}
							}
						],
						"date": "Oct 07, 2021",
						"publisher": {
							"type": "organization",
							"name": "UX-REPUBLIC",
							"url": "https://www.ux-republic.com/",
							"thumbnail": {
								"src": "https://imgs.search.brave.com/CISjvoTI_CczlPZQkUi2PVcPO1jms3-o6pDmEWCz0uE/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9pMi53/cC5jb20vd3d3LnV4/LXJlcHVibGljLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MC8wOS9Mb2dvX1VY/Ul9CT0xERcyBX25v/aXIucG5nP2ZpdD03/NTYlMkM3NjAmc3Ns/PTE",
								"original": "https://i2.wp.com/www.ux-republic.com/wp-content/uploads/2020/09/Logo_UXR_BOLDÉ_noir.png?fit=756%2C760&ssl=1"
							}
						}
					},
					"organization": {
						"type": "organization",
						"name": "UX-REPUBLIC",
						"contact_points": []
					},
					"extra_snippets": [
						"Duolingo utilise le mécanisme de niveau (niveau du joueur et niveaux de jeu) pour motiver ses utilisateurs à continuer d’apprendre une nouvelle langue.",
						"Happy quiz, and “may the odds be in your favor” !",
						"Game dynamics est la manière dont le joueur interagit avec les mécanisme de votre jeu,"
					]
				},
				{
					"title": "Game design & Esprit critique #1 : Déconstruire le jeu | ECHOSCIENCES - COGITO",
					"url": "https://www.echosciences-normandie.fr/articles/game-design-esprit-critique-deconstruire-le-jeu",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Mécanismes : <strong>Règles du jeu (But, actions, contraintes, interactions, …)</strong>",
					"profile": {
						"name": "Echosciences-normandie",
						"url": "https://www.echosciences-normandie.fr/articles/game-design-esprit-critique-deconstruire-le-jeu",
						"long_name": "echosciences-normandie.fr",
						"img": "https://imgs.search.brave.com/a6pITcVhYFZW0pj8GsGK-5Yw1dPEpnLKcRIk0mK5SWs/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNDJlMGJhYzMw/NWFjN2UzYWI3NTc2/YjUzMDA1MjAxZDdk/NTM5NjA4ODkwYWY4/MTI5ZWJmZDhhMDgw/YjIzNzkxOC93d3cu/ZWNob3NjaWVuY2Vz/LW5vcm1hbmRpZS5m/ci8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "echosciences-normandie.fr",
						"hostname": "www.echosciences-normandie.fr",
						"favicon": "https://imgs.search.brave.com/a6pITcVhYFZW0pj8GsGK-5Yw1dPEpnLKcRIk0mK5SWs/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNDJlMGJhYzMw/NWFjN2UzYWI3NTc2/YjUzMDA1MjAxZDdk/NTM5NjA4ODkwYWY4/MTI5ZWJmZDhhMDgw/YjIzNzkxOC93d3cu/ZWNob3NjaWVuY2Vz/LW5vcm1hbmRpZS5m/ci8",
						"path": "› articles  › game-design-esprit-critique-deconstruire-le-jeu"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/UBdQ62Mh2mJSXwRy2KYPcyy50ttcUYW2SDz3Kqf4h5o/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/ZWNob3NjaWVuY2Vz/LW5vcm1hbmRpZS5m/ci91cGxvYWRzL2Fy/dGljbGUvaW1hZ2Uv/YXR0YWNobWVudC8x/MDA1NDgwODE4L2xn/X1NhbnMtdGl0cmUt/Mi4wMDEuanBn",
						"original": "https://www.echosciences-normandie.fr/uploads/article/image/attachment/1005480818/lg_Sans-titre-2.001.jpg",
						"logo": false
					},
					"extra_snippets": [
						"Mécanismes : Des achats de propriété (Posséder signifie s’enrichir et appauvrir les autres).",
						"Entrer dans le jeu : Il faut avant tout expliquer les règles tout en introduisant le récit. C’est pour cette raison qu’il est important que les mécanismes soient liés à l’histoire !",
						"Mécanismes : Règles du jeu (But, actions, contraintes, interactions, …)"
					]
				},
				{
					"title": "Serious Game, Game-Based Learning: Comprendre les différences",
					"url": "https://seriousfactory.com/blog/fr/serious-games-jeux-serieux-game-based-learning-quelles-differences/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Un dispositif simple (quiz gamifiés) consolide les bases. Un dispositif intermédiaire (mises en situation avec choix de phrases, émotions, gestes) développe les soft skills en contexte. Un dispositif avancé (serious game avec quêtes, ressources, temps limité) maximise engagement et transfert, mais demande plus de design et de production.",
					"page_age": "2025-09-12T14:38:12",
					"profile": {
						"name": "Le Blog",
						"url": "https://seriousfactory.com/blog/fr/serious-games-jeux-serieux-game-based-learning-quelles-differences/",
						"long_name": "seriousfactory.com",
						"img": "https://imgs.search.brave.com/NbiTQ_DLg8ZzLfKe43_RfSW9CLoiLjVDsO6iUyOFIAA/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYTVmYjlhODc0/Y2M3NDk3YjRkNzkx/OTg5NjA3N2E3MjM1/YTA1YmU3NTExMzM5/NjQwODdmYzkxZTFl/ZjRlNTYzNi9zZXJp/b3VzZmFjdG9yeS5j/b20v"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "article",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "seriousfactory.com",
						"hostname": "seriousfactory.com",
						"favicon": "https://imgs.search.brave.com/NbiTQ_DLg8ZzLfKe43_RfSW9CLoiLjVDsO6iUyOFIAA/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYTVmYjlhODc0/Y2M3NDk3YjRkNzkx/OTg5NjA3N2E3MjM1/YTA1YmU3NTExMzM5/NjQwODdmYzkxZTFl/ZjRlNTYzNi9zZXJp/b3VzZmFjdG9yeS5j/b20v",
						"path": "  › home  › le blog  › serious games, jeux sérieux, game-based learning : quelles différences ?"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/ggWDXq5GxFi5p-1NBKWu7ZALCLInx0QdXRavLyhSxcQ/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9zZXJp/b3VzZmFjdG9yeS5j/b20vYmxvZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNS8wOC9T/ZXJpb3VzLUdhbWVz/LWpldXgtc2VyaWV1/eC1nYW1lLWJhc2Vk/LWxlYXJuaW5nLXF1/ZWxsZXMtZGlmZmVy/ZW5jZXMtLnBuZw",
						"original": "https://seriousfactory.com/blog/wp-content/uploads/2025/08/Serious-Games-jeux-serieux-game-based-learning-quelles-differences-.png",
						"logo": false
					},
					"age": "September 12, 2025",
					"organization": {
						"type": "organization",
						"name": "Le Blog",
						"contact_points": []
					},
					"extra_snippets": [
						"Le game-based learning n’a pas pour objectif de créer un “grand jeu”. Il emprunte des mécaniques de jeu (défis, points, badges, chrono) pour dynamiser des activités de pratique très ciblées : quiz, appariements, glisser‑déposer, curseurs de décision, mises en situation courtes et ramifiées.",
						"Exemple. Pour un lancement produit, combinez des micro‑cas de vente (choix de phrases avec feedback immédiat et émotions des personnages), des appariements bénéfices/objections et des quiz chronométrés.",
						"Pour “se souvenir” et “comprendre”, privilégiez des activités rapides : diaporamas scénarisés avec voix off, vrai‑faux commentés, quiz. Pour “appliquer” et “analyser”, misez sur des scénarios ramifiés et des simulations (choix, curseurs, zones cliquables) qui apportent de la pratique en contexte.",
						"Un dispositif simple (quiz gamifiés) consolide les bases. Un dispositif intermédiaire (mises en situation avec choix de phrases, émotions, gestes) développe les soft skills en contexte. Un dispositif avancé (serious game avec quêtes, ressources, temps limité) maximise engagement et transfert, mais demande plus de design et de production."
					]
				},
				{
					"title": "Des jeux pour apprendre et se divertir",
					"url": "https://www.lemonde.fr/sciences/article/2019/05/21/des-jeux-pour-apprendre-et-se-divertir_5465035_1650684.html",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Les contenus de ces jeux sont ­caractéristiques de l’approche ­encyclopédique et transversale des savoirs qui caractérise la ­« culture générale » à la française : des éléments issus des humanités classiques, des sciences et techniques, des faits d’actualité et de la culture populaire (chanson, sport, cinéma…).",
					"page_age": "2019-05-21T16:27:03",
					"profile": {
						"name": "Le Monde",
						"url": "https://www.lemonde.fr/sciences/article/2019/05/21/des-jeux-pour-apprendre-et-se-divertir_5465035_1650684.html",
						"long_name": "lemonde.fr",
						"img": "https://imgs.search.brave.com/XrjVKYGyjr5PA_j6q5d8QLJeWTIPyQfDNe_Nr6hG_K4/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYjE3NTU1MTNl/NTAwM2M2ZWZlY2M4/OWJkNWViZGMyNWJl/NmI3ODhiZDNiYTVl/YjczMzdmMzQ1ODQ2/NTNlNmQ1Mi93d3cu/bGVtb25kZS5mci8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "article",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "lemonde.fr",
						"hostname": "www.lemonde.fr",
						"favicon": "https://imgs.search.brave.com/XrjVKYGyjr5PA_j6q5d8QLJeWTIPyQfDNe_Nr6hG_K4/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYjE3NTU1MTNl/NTAwM2M2ZWZlY2M4/OWJkNWViZGMyNWJl/NmI3ODhiZDNiYTVl/YjczMzdmMzQ1ODQ2/NTNlNmQ1Mi93d3cu/bGVtb25kZS5mci8",
						"path": "  › a la une  › sciences  › débats"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/Z4TVM0fMKBPdAbeAdgfj_l9FeNtmj9RKYisxD1aY7Yc/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9pbWcu/bGVtZGUuZnIvMjAx/OS8wNS8xNy8xNTcv/MC8yMzQ4LzExNzQv/MTM0Mi82NzEvNjAv/MC84ZGIwZGE5X1RU/d3FaaTBhdENoTzdE/QjBuTXpJNGVETy5q/cGc",
						"original": "https://img.lemde.fr/2019/05/17/157/0/2348/1174/1342/671/60/0/8db0da9_TTwqZi0atChO7DB0nMzI4eDO.jpg",
						"logo": false
					},
					"age": "May 21, 2019",
					"article": {
						"author": [
							{
								"type": "person",
								"name": "Anne Dujin"
							}
						],
						"date": "May 21, 2019",
						"publisher": {
							"type": "organization",
							"name": "Le Monde",
							"thumbnail": {
								"src": "https://imgs.search.brave.com/MbdAge8AXQ5Zw4ZAsCmfSJx5avdYqkEu3ADRlLEHz54/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dC5sZW1kZS5mci9t/ZWRpYXMvaW1nL2xv/Z29zL2xlbW9uZGUu/cG5n",
								"original": "https://asset.lemde.fr/medias/img/logos/lemonde.png"
							}
						},
						"isAccessibleForFree": false
					},
					"extra_snippets": [
						"Les contenus de ces jeux sont ­caractéristiques de l’approche ­encyclopédique et transversale des savoirs qui caractérise la ­« culture générale » à la française : des éléments issus des humanités classiques, des sciences et techniques, des faits d’actualité et de la culture populaire (chanson, sport, cinéma…).",
						"Son caractère ­omniscient, avec ses fiches, rappelle la figure de l’instituteur, qui pose les questions, corrige, encourage. Julien Lepers ajoutait toujours un commentaire ou une anecdote après la réponse, comme le fait dans une classe le détenteur du savoir qu’est le maître d’école."
					]
				},
				{
					"title": "La conception de serious games ou jeux vidéo éducatifs : quelles convergences de métier entre enseignant et game designer ? | Request PDF",
					"url": "https://www.researchgate.net/publication/332414398_La_conception_de_serious_games_ou_jeux_video_educatifs_quelles_convergences_de_metier_entre_enseignant_et_game_designer",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Voilà défini le programme, ambitieux, du livre : présenter un (des) cadre(s) théoriques et des méthodologies aptes à saisir l’action conjointe enseignants-élèves à propos de savoirs et (dé-)montrer, par l’acte, la faisabilité de l’analyse par les outils proposés, tout en présentant un certain nombre de résultats.",
					"page_age": "2019-03-21T00:00:00",
					"profile": {
						"name": "ResearchGate",
						"url": "https://www.researchgate.net/publication/332414398_La_conception_de_serious_games_ou_jeux_video_educatifs_quelles_convergences_de_metier_entre_enseignant_et_game_designer",
						"long_name": "researchgate.net",
						"img": "https://imgs.search.brave.com/WJ25-tL-91vp8kSoF0YS7d8CZVivP1cG-EjlGvrmxOc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZjE0MDk0Yzli/MWQ3NGQ2ZTNjODVh/YWVmMDNkM2NkZWI5/NGEzNjdhMmEyY2E2/N2EzN2Y0OThlZjdi/YWU3MjkwMi93d3cu/cmVzZWFyY2hnYXRl/Lm5ldC8"
					},
					"language": "en",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "article",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "researchgate.net",
						"hostname": "www.researchgate.net",
						"favicon": "https://imgs.search.brave.com/WJ25-tL-91vp8kSoF0YS7d8CZVivP1cG-EjlGvrmxOc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZjE0MDk0Yzli/MWQ3NGQ2ZTNjODVh/YWVmMDNkM2NkZWI5/NGEzNjdhMmEyY2E2/N2EzN2Y0OThlZjdi/YWU3MjkwMi93d3cu/cmVzZWFyY2hnYXRl/Lm5ldC8",
						"path": "› publication  › 332414398_La_conception_de_serious_games_ou_jeux_video_educatifs_quelles_convergences_de_metier_entre_enseignant_et_game_designer"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/NA3UWQdok5rp6uI2kyF0cHLVZy0QBikNBsFv8yDMrrc/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/cmVzZWFyY2hnYXRl/Lm5ldC9pbWFnZXMv/dGVtcGxhdGUvZGVm/YXVsdF9wdWJsaWNh/dGlvbl9wcmV2aWV3/X2xhcmdlLnBuZw",
						"original": "https://www.researchgate.net/images/template/default_publication_preview_large.png",
						"logo": false
					},
					"age": "March 21, 2019",
					"article": {
						"author": [
							{
								"type": "person",
								"name": "Meriem EL Mansouri",
								"url": "https://www.researchgate.net/profile/Meriem-El-Mansouri",
								"thumbnail": {
									"src": "https://imgs.search.brave.com/JqzrWbr9kBr0EOgPme1QwvC2zYil1X_iPnIq9n-v_jM/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9pMS5y/Z3N0YXRpYy5uZXQv/aWkvcHJvZmlsZS5p/bWFnZS82ODIwMTYy/MjM3OTcyNDgtMTUz/OTYxNjc0NzE4NF9R/NjQvTWVyaWVtLUVs/LU1hbnNvdXJpLmpw/Zw",
									"original": "https://i1.rgstatic.net/ii/profile.image/682016223797248-1539616747184_Q64/Meriem-El-Mansouri.jpg"
								}
							},
							{
								"type": "person",
								"name": "Nicole Biagioli",
								"url": "https://www.researchgate.net/profile/Nicole-Biagioli",
								"thumbnail": {
									"src": "https://imgs.search.brave.com/A9bJm9AflGU-klp0f7hsyRziYv3hqnREnPu2UX0AC38/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9pMS5y/Z3N0YXRpYy5uZXQv/aWkvcHJvZmlsZS5p/bWFnZS8yNzI1NTc4/OTUwNTc0MTEtMTQ0/MTk5NDI3NDM1N19R/NjQvTmljb2xlLUJp/YWdpb2xpLmpwZw",
									"original": "https://i1.rgstatic.net/ii/profile.image/272557895057411-1441994274357_Q64/Nicole-Biagioli.jpg"
								}
							}
						],
						"date": "Mar 21, 2019",
						"publisher": {
							"type": "organization",
							"name": "unknown",
							"url": "https://www.researchgate.net/unknown",
							"thumbnail": {
								"src": "https://imgs.search.brave.com/UjSGsXBrrrqKndxfeOp5EGUdM15aJCsZ_BUDIJcDQhs/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/cmVzZWFyY2hnYXRl/Lm5ldC91bmtub3du",
								"original": "https://www.researchgate.net/unknown"
							}
						}
					},
					"extra_snippets": [
						"Inédit dans le paysage des recherches en éducation, ce livre est le fruit du travail d'un collectif international, accompli pendant plus d'une dizaine d'années, pour élaborer les premiers éléments d'une théorie de l'action conjointe en didactique. Sa vocation est d'abord anthropologique, puisqu'il cherche à penser le savoir en tant que puissance d'agir, dans un conception ouverte de la didactique.",
						"L'immersion fictionnelle proposée par le jeu vidéo est un outil de connexion entre l'apprenant et le savoir. En effet, la fictionnalisation de contenus didactiques et tout particulièrement la production fictionnelle mimétique (Schaeffer J.M, 1999) est un moyen d'apprentissage.",
						"Voilà défini le programme, ambitieux, du livre : présenter un (des) cadre(s) théoriques et des méthodologies aptes à saisir l’action conjointe enseignants-élèves à propos de savoirs et (dé-)montrer, par l’acte, la faisabilité de l’analyse par les outils proposés, tout en présentant un certain nombre de résultats.",
						"El Mansouri, M. (2017a). Le jeu vidéo éducatif ou serious game, vecteur de savoir du xxi e siècle : processus de conception, ingénierie didactique et approche pédagogique. Conférence prononcée lors de la journée doctorale OMNSH 2."
					]
				},
				{
					"title": "Tutoriels QuizWhizzer – L'atelier du formateur",
					"url": "https://latelierduformateur.fr/tutoriels-quizwhizzer/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "En effet, <strong>il sera possible avec Quiznetic de créer des jeux à jouer en direct de type jeu de plateau, basés sur des quiz</strong>.",
					"page_age": "2020-02-19T09:12:53",
					"profile": {
						"name": "L'atelier du formateur",
						"url": "https://latelierduformateur.fr/tutoriels-quizwhizzer/",
						"long_name": "latelierduformateur.fr",
						"img": "https://imgs.search.brave.com/llFKvLl_gxT9_gHq4iwtkl4fsYRfYbqYf-UZu7Pmex8/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvM2I4ZTVkNDkz/ZmExYjg1ZDliOGVj/MWFmYzQ2MGQ5YTI1/N2Y5MTdhYjEwZmE2/ZjA1ZGE3NThhYzg1/ZDAxMGE0OC9sYXRl/bGllcmR1Zm9ybWF0/ZXVyLmZyLw"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "article",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "latelierduformateur.fr",
						"hostname": "latelierduformateur.fr",
						"favicon": "https://imgs.search.brave.com/llFKvLl_gxT9_gHq4iwtkl4fsYRfYbqYf-UZu7Pmex8/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvM2I4ZTVkNDkz/ZmExYjg1ZDliOGVj/MWFmYzQ2MGQ5YTI1/N2Y5MTdhYjEwZmE2/ZjA1ZGE3NThhYzg1/ZDAxMGE0OC9sYXRl/bGllcmR1Zm9ybWF0/ZXVyLmZyLw",
						"path": "  › accueil  › outils numériques"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/h8dS3tQtPk_bkSMKZiepTQgGHiwNWjJCuFlsGsJfUg8/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9sYXRl/bGllcmR1Zm9ybWF0/ZXVyLmZyL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIwLzAyL0Nh/cHR1cmUtNy5wbmc",
						"original": "https://latelierduformateur.fr/wp-content/uploads/2020/02/Capture-7.png",
						"logo": false
					},
					"age": "February 19, 2020",
					"article": {
						"author": [
							{
								"type": "person",
								"name": "idremeau",
								"url": "https://latelierduformateur.fr"
							}
						],
						"date": "Feb 10, 2020",
						"publisher": {
							"type": "organization",
							"name": "L'atelier du formateur",
							"thumbnail": {
								"src": "https://imgs.search.brave.com/F7LqLZ7lM88gY1nZzkc__z7w8r7XvxfrV8bc56q0OnA/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9sYXRl/bGllcmR1Zm9ybWF0/ZXVyLmZyL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE3LzA3L2xv/Z29fYXRlbGllcl9k/dV9mb3JtYXRldXIu/cG5n",
								"original": "https://latelierduformateur.fr/wp-content/uploads/2017/07/logo_atelier_du_formateur.png"
							}
						}
					},
					"extra_snippets": [
						"Le site Quiznetic Quiznetic est un site en ligne qui permet de créer un quiz sous la forme d’un jeu de plateau avec des cases, chaque case correspondant à une question. Le site nécessite la création d’un compte (gratuit) côté professeur.",
						"Quiznetic se présente comme un service de quiz de plus, avec des types de question peu variées mais qui apporte un petit plus de ludification qui fait toute la différence.",
						"En effet, il sera possible avec Quiznetic de créer des jeux à jouer en direct de type jeu de plateau, basés sur des quiz.",
						"L’accès ou le stockage technique est strictement nécessaire dans la finalité d’intérêt légitime de permettre l’utilisation d’un service spécifique explicitement demandé par l’abonné ou l’utilisateur, ou dans le seul but d’effectuer la transmission d’une communication sur un réseau de communications électroniques."
					]
				}
			]
		},
		{
			"query": "psychologie cognitive et efficacité pédagogique des questionnaires interactifs",
			"results": [
				{
					"title": "Pourquoi les quiz interactifs augmentent l’engagement des apprenants ?",
					"url": "https://www.experquiz.com/articles/pourquoi-les-quiz-interactifs-augmentent-lengagement-des-apprenants",
					"is_source_local": false,
					"is_source_both": false,
					"description": "C’est précisément là que les <strong>quiz interactifs</strong> jouent un rôle essentiel. Contrairement à une simple lecture ou à une vidéo passive, un quiz sollicite activement l’apprenant.",
					"page_age": "2026-05-27T16:18:52",
					"profile": {
						"name": "Experquiz",
						"url": "https://www.experquiz.com/articles/pourquoi-les-quiz-interactifs-augmentent-lengagement-des-apprenants",
						"long_name": "experquiz.com",
						"img": "https://imgs.search.brave.com/XfxwnqbyqCFIURwcBtNoOmW9s6P2ZigU_g16wur3vv8/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNGFlYTY2NGRm/ZWM0MzMyMzViYTlk/Nzg3MzQ4NDg5N2Ri/ZGVhYzgzZmQ1OTU5/NDcwZTM0N2JiM2Y1/ZWNjODA3My93d3cu/ZXhwZXJxdWl6LmNv/bS8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "article",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "experquiz.com",
						"hostname": "www.experquiz.com",
						"favicon": "https://imgs.search.brave.com/XfxwnqbyqCFIURwcBtNoOmW9s6P2ZigU_g16wur3vv8/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNGFlYTY2NGRm/ZWM0MzMyMzViYTlk/Nzg3MzQ4NDg5N2Ri/ZGVhYzgzZmQ1OTU5/NDcwZTM0N2JiM2Y1/ZWNjODA3My93d3cu/ZXhwZXJxdWl6LmNv/bS8",
						"path": "› articles  › pourquoi-les-quiz-interactifs-augmentent-lengagement-des-apprenants"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/sn3dT0mPCJdoW3N2qHnHJ2kTxpAMxzi_Q_ZWNau2P6Y/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/N2IzNDcwNjcyNTM1/MDExMmRiMjJmODUv/NmExNjk0MzMwZWZm/YmI2MDkyMzc3Mjhi/X3BvdXJxdW9pLWxl/cy1xdWl6LWludGVy/YWN0aWZzLWF1Z21l/bnRlbnQtbGVuZ2Fn/ZW1lbnQtZGVzLWFw/cHJlbmFudHMuYXZp/Zg",
						"original": "https://cdn.prod.website-files.com/67b34706725350112db22f85/6a1694330effbb609237728b_pourquoi-les-quiz-interactifs-augmentent-lengagement-des-apprenants.avif",
						"logo": false
					},
					"age": "1 month ago",
					"article": {
						"author": [
							{
								"type": "person",
								"name": "Alexander Torbet"
							}
						],
						"date": "May 27, 2026",
						"publisher": {
							"type": "organization",
							"name": "Experquiz",
							"thumbnail": {
								"src": "https://imgs.search.brave.com/vwlISrqeAwdTeMKjvAGvXXWZv3ZGsc45GXU8KSKNngU/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/N2IzNDcwNjcyNTM1/MDExMmRiMjJmNTYv/NjdmNjY3YTBjNjNh/MzlkODQ1OGJhZDBh/X0xvZ28lMjBzZXVs/LnN2Zw",
								"original": "https://cdn.prod.website-files.com/67b34706725350112db22f56/67f667a0c63a39d8458bad0a_Logo%20seul.svg"
							}
						}
					},
					"organization": {
						"type": "organization",
						"name": "Experquiz",
						"contact_points": []
					},
					"extra_snippets": [
						"Dans un contexte où les utilisateurs sont sollicités en permanence, capter durablement l’attention devient un enjeu pédagogique majeur. C’est précisément là que les quiz interactifs jouent un rôle essentiel. Contrairement à une simple lecture ou à une vidéo passive, un quiz sollicite activement l’apprenant. Il transforme l’utilisateur en acteur du parcours de formation. L’efficacité des quiz interactifs ne repose pas uniquement sur leur dimension ludique. Elle s’explique par plusieurs mécanismes cognitifs et comportementaux bien identifiés.",
						"Les recherches en sciences cognitives montrent que le fait de récupérer activement une information améliore fortement la mémorisation à long terme. Ce mécanisme est connu sous le nom de “testing effect”. Une étude publiée dans Psychological Science in the Public Interest montre que les tests réguliers améliorent davantage l’apprentissage que la simple relecture des contenus.",
						"De la création des questionnaires à l’analyse des résultats, en passant par l’administration et la correction automatisée, le e-Assessment transforme en profondeur les pratiques pédagogiques.",
						"Proposer des dispositifs de formation ne suffit plus : les formations doivent être réellement efficaces, et cette efficacité doit pouvoir être mesurée. Il est donc essentiel d’évaluer objectivement la qualité de chaque formation afin de savoir si elle a atteint ses objectifs pédagogiques et si elle a véritablement apporté de la valeur aux apprenants comme à l’organisation."
					]
				},
				{
					"title": "Les quiz interactifs : un levier puissant pour engager les équipes - Evalandgo",
					"url": "https://www.evalandgo.com/blog/quiz-interactifs-levier-pour-engager-les-equipes/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "<strong>Ce sont de véritables leviers de transformation pédagogique et managériale</strong>. Ils s’appuient sur des principes neuroscientifiques (écoute active, rappel actif, feedback immédiat) et des études rigoureuses.",
					"page_age": "2026-01-02T10:06:31",
					"profile": {
						"name": "Evalandgo",
						"url": "https://www.evalandgo.com/blog/quiz-interactifs-levier-pour-engager-les-equipes/",
						"long_name": "evalandgo.com",
						"img": "https://imgs.search.brave.com/7RN0CaomUchZ8cLwaOxw1Mk8Mx1H_eEynuk_fwzOjRc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMmYyYjIyNWM3/M2FlMjQxMGJmZTlj/MzQxZDkwYjY1M2Qy/YTExMGJmNDlmZDdi/ZGIwNWVjNTA4MjY2/NzcwNmZmNC93d3cu/ZXZhbGFuZGdvLmNv/bS8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "article",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "evalandgo.com",
						"hostname": "www.evalandgo.com",
						"favicon": "https://imgs.search.brave.com/7RN0CaomUchZ8cLwaOxw1Mk8Mx1H_eEynuk_fwzOjRc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMmYyYjIyNWM3/M2FlMjQxMGJmZTlj/MzQxZDkwYjY1M2Qy/YTExMGJmNDlmZDdi/ZGIwNWVjNTA4MjY2/NzcwNmZmNC93d3cu/ZXZhbGFuZGdvLmNv/bS8",
						"path": "  › questionnaire en ligne  › blog  › les quiz interactifs : un levier puissant pour engager les équipes"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/-l51VhBq-J1XP1vSYXC3LmMCJy-yOZYbg_-AfIIR9BM/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/ZXZhbGFuZGdvLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NS8xMS9JbGx1c3Ry/YXRpb25zLUFydGlj/bGUtTW9kZS1MaXZl/LTEyLTEud2VicA",
						"original": "https://www.evalandgo.com/wp-content/uploads/2025/11/Illustrations-Article-Mode-Live-12-1.webp",
						"logo": false
					},
					"age": "January 2, 2026",
					"article": {
						"author": [
							{
								"type": "person",
								"name": "Didier Grapeloup"
							}
						],
						"date": "Nov 03, 2025",
						"publisher": {
							"type": "organization",
							"name": "Evalandgo",
							"url": "https://www.evalandgo.com/",
							"thumbnail": {
								"src": "https://imgs.search.brave.com/orBv-N0-SgxRGE_bTDeDpQLYymrKOOhEGDsddrFV-Xg/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/ZXZhbGFuZGdvLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NC8wMS9sb2dvLTIw/MjUucG5n",
								"original": "https://www.evalandgo.com/wp-content/uploads/2024/01/logo-2025.png"
							}
						}
					},
					"extra_snippets": [
						"Les travaux de psychologie cognitive de Roediger & Karpicke montrent qu’un simple test ou un rappel de l’information améliore la rétention à long terme.",
						"Pour les professionnels de la formation, cela signifie que chaque question en quiz live est une opportunité de consolider l’apprentissage. Ce n’est pas un simple “jeu”, mais un levier cognitif.",
						"Les quiz interactifs en Mode Live ne sont pas des gadgets. Ce sont de véritables leviers de transformation pédagogique et managériale. Ils s’appuient sur des principes neuroscientifiques (écoute active, rappel actif, feedback immédiat) et des études rigoureuses.",
						"Lors d’une formation, un coach peut utiliser le Mode Live pour procéder à une évaluation à chaud. L’objectif étant de mesurer la satisfaction, l’engagement, la perception de l’utilité. Il est aussi possible de créer un questionnaire de formation à chaud après la formation afin de collecter plus de données."
					]
				},
				{
					"title": "Cours : Les questionnaires interactifs en soutien à l’apprentissage | Campus RÉCIT",
					"url": "https://campus.recit.qc.ca/course/view.php?id=342",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Peuvent servir plusieurs disciplines et intentions pédagogiques. Dans cette section, vous aurez la possibilité d&#x27;utiliser trois outils différents pour guider votre choix d&#x27;un questionnaire interactif. Les caractéristiques des différents questionnaires retenus sont présentés dans un tableau à double entrée, un organigramme et un questionnaire interactif.",
					"profile": {
						"name": "Campus RÉCIT",
						"url": "https://campus.recit.qc.ca/course/view.php?id=342",
						"long_name": "campus.recit.qc.ca",
						"img": "https://imgs.search.brave.com/ugGzwRZGSCNrrKJSrwkpZ9IyYUxhvj76JSfLmFwY1zc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNjUyNDAzNTZj/MmYzNGZmMDgwNGE5/MWU1Yjk1YWZjZGRi/NzM3OGI3YWRhMDY2/YWZhZTlmYjA1ZmZk/ODdjYjMxNS9jYW1w/dXMucmVjaXQucWMu/Y2Ev"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "campus.recit.qc.ca",
						"hostname": "campus.recit.qc.ca",
						"favicon": "https://imgs.search.brave.com/ugGzwRZGSCNrrKJSrwkpZ9IyYUxhvj76JSfLmFwY1zc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNjUyNDAzNTZj/MmYzNGZmMDgwNGE5/MWU1Yjk1YWZjZGRi/NzM3OGI3YWRhMDY2/YWZhZTlmYjA1ZmZk/ODdjYjMxNS9jYW1w/dXMucmVjaXQucWMu/Y2Ev",
						"path": "› course  › view.php"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/0jlttnK6pZNjsfQrtPZ0kFaMG8YvO5A0fZ1BmW61k7Y/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9jYW1w/dXMucmVjaXQucWMu/Y2EvcGx1Z2luZmls/ZS5waHAvMS90aGVt/ZV9jYW1wdXNyZWNp/dC9mYmxvZ28vMTc3/ODc1NjQ4MC9Mb2dv/JTIwQ2FtcHVzJTIw/JTI4MTIwMCUyMHgl/MjA2MzAlMjBweCUy/OS5wbmc",
						"original": "https://campus.recit.qc.ca/pluginfile.php/1/theme_campusrecit/fblogo/1778756480/Logo%20Campus%20%281200%20x%20630%20px%29.png",
						"logo": true
					},
					"extra_snippets": [
						"Avant d’utiliser un questionnaire interactif, il importe d’abord de penser à votre intention. Afin de vous alimenter à cet effet, cette section met en lumière différentes intentions pédagogiques. À la fin de la présente section, vous serez invités à cibler une intention que vous pourriez utiliser dans la réalisation d’un premier questionnaire.",
						"Pour l'obtention du badge « Appropriation », vous serez invité à expliquer les raisons qui ont guidées le choix de votre questionnaire interactif. Vous trouverez dans la section suivante les onglets pour ouvrir les trois phases d'une activité. Sélectionner l’activité Votre intention pédagogique",
						"Peuvent servir plusieurs disciplines et intentions pédagogiques. Dans cette section, vous aurez la possibilité d'utiliser trois outils différents pour guider votre choix d'un questionnaire interactif. Les caractéristiques des différents questionnaires retenus sont présentés dans un tableau à double entrée, un organigramme et un questionnaire interactif.",
						"Par la suite, afin d'obtenir le badge « Expérimentation » vous aurez à justifier votre choix en tenant compte de votre intention pédagogique, des contraintes technologiques propre à votre milieu et des besoins de vos élèves. À la fin de la formation, d'autres liens sont disponibles proposant des questionnaires interactifs différents qui pourraient tout aussi bien convenir à votre intention pédagogique."
					]
				},
				{
					"title": "Diversifier les types de questions dans les évaluations : un levier pour l’apprentissage",
					"url": "https://www.experquiz.com/articles/diversifier-les-types-de-questions-dans-les-evaluations-un-levier-pour-lapprentissage",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Découvrez pourquoi les <strong>quiz interactifs</strong> améliorent l’engagement en formation : mémorisation, motivation, participation, adaptive learning et learning analytics. ... Découvrez comment réduire la triche dans les évaluations en ligne grâce ...",
					"page_age": "2026-02-12T08:48:21",
					"profile": {
						"name": "Experquiz",
						"url": "https://www.experquiz.com/articles/diversifier-les-types-de-questions-dans-les-evaluations-un-levier-pour-lapprentissage",
						"long_name": "experquiz.com",
						"img": "https://imgs.search.brave.com/XfxwnqbyqCFIURwcBtNoOmW9s6P2ZigU_g16wur3vv8/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNGFlYTY2NGRm/ZWM0MzMyMzViYTlk/Nzg3MzQ4NDg5N2Ri/ZGVhYzgzZmQ1OTU5/NDcwZTM0N2JiM2Y1/ZWNjODA3My93d3cu/ZXhwZXJxdWl6LmNv/bS8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "article",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "experquiz.com",
						"hostname": "www.experquiz.com",
						"favicon": "https://imgs.search.brave.com/XfxwnqbyqCFIURwcBtNoOmW9s6P2ZigU_g16wur3vv8/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNGFlYTY2NGRm/ZWM0MzMyMzViYTlk/Nzg3MzQ4NDg5N2Ri/ZGVhYzgzZmQ1OTU5/NDcwZTM0N2JiM2Y1/ZWNjODA3My93d3cu/ZXhwZXJxdWl6LmNv/bS8",
						"path": "› articles  › diversifier-les-types-de-questions-dans-les-evaluations-un-levier-pour-lapprentissage"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/osixRFSisgUxq7Rt5mX8UDthoMoBg3GYdQR0S5qRWow/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/N2IzNDcwNjcyNTM1/MDExMmRiMjJmODUv/Njk2N2EwY2Y2MzMy/NDM3OTE0NTdlNWQy/X2RpdmVyc2lmaWVy/LWxlcy10eXBlcy1k/ZS1xdWVzdGlvbnMt/ZGFucy1sZXMtZXZh/bHVhdGlvbnMtdW4t/bGV2aWVyLXBvdXIt/bGFwcHJlbnRpc3Nh/Z2UuYXZpZg",
						"original": "https://cdn.prod.website-files.com/67b34706725350112db22f85/6967a0cf633243791457e5d2_diversifier-les-types-de-questions-dans-les-evaluations-un-levier-pour-lapprentissage.avif",
						"logo": false
					},
					"age": "February 12, 2026",
					"article": {
						"author": [
							{
								"type": "person",
								"name": "Alexander Torbet"
							}
						],
						"date": "Feb 12, 2026",
						"publisher": {
							"type": "organization",
							"name": "Experquiz",
							"thumbnail": {
								"src": "https://imgs.search.brave.com/vwlISrqeAwdTeMKjvAGvXXWZv3ZGsc45GXU8KSKNngU/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/N2IzNDcwNjcyNTM1/MDExMmRiMjJmNTYv/NjdmNjY3YTBjNjNh/MzlkODQ1OGJhZDBh/X0xvZ28lMjBzZXVs/LnN2Zw",
								"original": "https://cdn.prod.website-files.com/67b34706725350112db22f56/67f667a0c63a39d8458bad0a_Logo%20seul.svg"
							}
						}
					},
					"organization": {
						"type": "organization",
						"name": "Experquiz",
						"contact_points": []
					},
					"extra_snippets": [
						"De la création des questionnaires à l’analyse des résultats, en passant par l’administration et la correction automatisée, le e-Assessment transforme en profondeur les pratiques pédagogiques.",
						"Découvrez pourquoi les quiz interactifs améliorent l’engagement en formation : mémorisation, motivation, participation, adaptive learning et learning analytics. ... Découvrez comment réduire la triche dans les évaluations en ligne grâce à des méthodes éprouvées : randomisation, QCM intelligents, IA, analytics et bonnes pratiques LMS. ... L’intelligence artificielle transforme rapidement la manière de concevoir des contenus pédagogiques.",
						"Le testing effect, ou effet de test, est l’un des principes les plus puissants en sciences cognitives. Pourtant, il reste largement sous-utilisé dans les méthodes d’apprentissage traditionnelles.",
						"C’est un type de question où l’apprenant doit taper lui-même la réponse au lieu de choisir parmi des propositions. La réponse peut être un mot, une expression, un nombre, ou une phrase courte selon l’objectif pédagogique."
					]
				},
				{
					"title": "Psychologie des interactions sociocognitives et apprentissages scolaires : regards croisés de pédagogues et de chercheurs | Cairn.info",
					"url": "https://www.cairn.info/revue-les-sciences-de-l-education-pour-l-ere-nouvelle-2007-4-page-47.htm",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Ces bénéfices sont en fait cognitifs et métacognitifs au sens où, par exemple, l’explicitation des savoirs a une double incidence : sur la capacité à verbaliser un savoir mais aussi sur le savoir à proprement parler du fait de la reformulation qu’il subit dans la phase d’explicitation. ... Les modalités initiales (de 1 à 7) ont été regroupées comme suit : 1=1 à 4 ; 2=5 ; 3=6 ; 4=7. ... Costet, J.-P. et Pelloux, P. (2007). Psychologie des interactions sociocognitives et apprentissages scolaires : regards croisés de pédagogues et de chercheurs.",
					"page_age": "2013-01-21T00:00:00",
					"profile": {
						"name": "Cairn",
						"url": "https://www.cairn.info/revue-les-sciences-de-l-education-pour-l-ere-nouvelle-2007-4-page-47.htm",
						"long_name": "cairn.info",
						"img": "https://imgs.search.brave.com/6uPX7UYLbV96I0z3lLa78mwQiUAcMYyq3Zk6Xpypi68/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMzhlYjU1MzAy/ODQwOWZmMTU1ZTNl/Mzc4NjVjMjEzMGVk/ZDFlZjgxYmYyMjhk/OTUxMDA4YjdlYWE0/YzFhYzI1OC93d3cu/Y2Fpcm4uaW5mby8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "cairn.info",
						"hostname": "www.cairn.info",
						"favicon": "https://imgs.search.brave.com/6uPX7UYLbV96I0z3lLa78mwQiUAcMYyq3Zk6Xpypi68/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMzhlYjU1MzAy/ODQwOWZmMTU1ZTNl/Mzc4NjVjMjEzMGVk/ZDFlZjgxYmYyMjhk/OTUxMDA4YjdlYWE0/YzFhYzI1OC93d3cu/Y2Fpcm4uaW5mby8",
						"path": "› revue-les-sciences-de-l-education-pour-l-ere-nouvelle-2007-4-page-47.htm"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/3gh-p6PjUnxYT-aRVn777YzVwR9KHhjUxiM34yBHw4A/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9zaHMu/Y2Fpcm4uaW5mby9u/dW1lcm8vTFNETEVf/NDA0L2NvdmVyL3Ro/dW1ibmFpbD9sYW5n/PWZy",
						"original": "https://shs.cairn.info/numero/LSDLE_404/cover/thumbnail?lang=fr",
						"logo": false
					},
					"age": "January 21, 2013",
					"extra_snippets": [
						"Psychologie des interactions sociocognitives et apprentissages scolaires : regards croisés de pédagogues et de chercheurs. Les Sciences de l'éducation - Pour l'Ère nouvelle, . 40(4), 47-79. https://doi.org/10.3917/lsdle.404.0047. ... Maître de Conférences, Laboratoire «Processus cognitifs et conduites interactives», Université Paris X.",
						"Les apports possibles concernent, de manière consensuelle, les domaines classiquement identifiés comme relevant des compétences du psychologue, à savoir la prise en charge des troubles du comportement ou de la souffrance psychologique (items 1 et 2). Les apports relatifs à la connaissance des processus d’apprentissages généraux ou spécifiques à chaque discipline et à l’étude des situations pédagogiques (items 4, 5 et 6) font l’objet d’une indécision et de taux de désaccord plus importants (chiffres en italiques). Dans le domaine des apprentissages, l’apport du psycholog",
						"Doctorante, Laboratoire « Processus cognitifs et conduites interactives », Université Paris X. ... Chargé de mission en « Ingénierie pédagogique » au CDP de Mayotte.",
						"Ces bénéfices sont en fait cognitifs et métacognitifs au sens où, par exemple, l’explicitation des savoirs a une double incidence : sur la capacité à verbaliser un savoir mais aussi sur le savoir à proprement parler du fait de la reformulation qu’il subit dans la phase d’explicitation. ... Les modalités initiales (de 1 à 7) ont été regroupées comme suit : 1=1 à 4 ; 2=5 ; 3=6 ; 4=7. ... Costet, J.-P. et Pelloux, P. (2007). Psychologie des interactions sociocognitives et apprentissages scolaires : regards croisés de pédagogues et de chercheurs."
					]
				},
				{
					"title": "UNIVERSITÉ DU QUÉBEC À MONTRÉAL TECHNIQUES D’APPRENTISSAGE PROFOND POUR LA",
					"url": "https://archipel.uqam.ca/14098/1/D3775.pdf",
					"is_source_local": false,
					"is_source_both": false,
					"description": "systèmes interactifs d’apprentissage (jeux sérieux par exemple). • Un modèle enrichi de l’usager qui inclut diﬀérents facteurs explicites (lorsque · disponibles et captés par diﬀérentes modalités) liés aux compétences cog- nitives et méta-cognitives de celui-ci, à son proﬁl aﬀectif, à sa personnalité · et son proﬁl social, permet une adaptation réussie en terme d’eﬃcacité · pédagogique.",
					"profile": {
						"name": "UQAM",
						"url": "https://archipel.uqam.ca/14098/1/D3775.pdf",
						"long_name": "archipel.uqam.ca",
						"img": "https://imgs.search.brave.com/8XPesr9BXoAkn49eRg4g2cPOCQGh7lwa0LmshAH3n8A/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNDNhMzVjMDYz/ZmNhMGQ5NDcxYjU4/MDM1N2YyZTc4Yzc3/MDIyMWUyMGRjMDUy/ODc3ZDE3NjM0MDUx/YjU4Yjg0ZS9hcmNo/aXBlbC51cWFtLmNh/Lw"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "archipel.uqam.ca",
						"hostname": "archipel.uqam.ca",
						"favicon": "https://imgs.search.brave.com/8XPesr9BXoAkn49eRg4g2cPOCQGh7lwa0LmshAH3n8A/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNDNhMzVjMDYz/ZmNhMGQ5NDcxYjU4/MDM1N2YyZTc4Yzc3/MDIyMWUyMGRjMDUy/ODc3ZDE3NjM0MDUx/YjU4Yjg0ZS9hcmNo/aXBlbC51cWFtLmNh/Lw",
						"path": "› 14098  › 1  › D3775.pdf"
					},
					"content_type": "pdf",
					"extra_snippets": [
						"systèmes interactifs d’apprentissage (jeux sérieux par exemple). • Un modèle enrichi de l’usager qui inclut diﬀérents facteurs explicites (lorsque · disponibles et captés par diﬀérentes modalités) liés aux compétences cog- nitives et méta-cognitives de celui-ci, à son proﬁl aﬀectif, à sa personnalité · et son proﬁl social, permet une adaptation réussie en terme d’eﬃcacité · pédagogique.",
						"de l’utilisateur : comme les facteurs de personnalité, les facteurs cognitifs et les"
					]
				},
				{
					"title": "Utiliser des questionnaires interactifs - École branchée",
					"url": "https://ecolebranchee.com/questionnaires-interactifs/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Exercices, évaluation, autocorrection, rétroaction rapide et précise; moins de correction et moins gestion; plus de plaisir et d’efficacité! Survolez en sa compagnie les forces de chaque outil ainsi que le large éventail de possibilités qu’ils offrent à l’enseignant(e). Wooclap est une application gratuite pour les enseignants du primaire et du secondaire (et +!) qui offre de nombreuses possibilités d’interactivité et de collecte d’information à propos du cheminement des élèves.",
					"page_age": "2021-07-06T12:44:11",
					"profile": {
						"name": "École branchée",
						"url": "https://ecolebranchee.com/questionnaires-interactifs/",
						"long_name": "ecolebranchee.com",
						"img": "https://imgs.search.brave.com/4Vc_FJEvRjlRP9XCidpdPH_IDyTLzqRcYM-c2UH-QZc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYTZlMWRhMzBj/NDA3OTg3ZmY3YTJh/ZmJhYWI5YWUwMzEy/ODUxM2FmYzdlNmUx/ZjIwYzFiYzNiNWZh/NTUwYWJjNS9lY29s/ZWJyYW5jaGVlLmNv/bS8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "article",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "ecolebranchee.com",
						"hostname": "ecolebranchee.com",
						"favicon": "https://imgs.search.brave.com/4Vc_FJEvRjlRP9XCidpdPH_IDyTLzqRcYM-c2UH-QZc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYTZlMWRhMzBj/NDA3OTg3ZmY3YTJh/ZmJhYWI5YWUwMzEy/ODUxM2FmYzdlNmUx/ZjIwYzFiYzNiNWZh/NTUwYWJjNS9lY29s/ZWJyYW5jaGVlLmNv/bS8",
						"path": "› questionnaires-interactifs"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/iKf0E1BerVf9T75I0xbULCKLv40jdSAA1GUsNb6ozMQ/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9lY29s/ZWJyYW5jaGVlLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MS8wNy9DcmXMgWFD/YW1wLURlzIFjb3V2/ZXJ0ZS0yMDIxLTIw/MjItNS5wbmc",
						"original": "https://ecolebranchee.com/wp-content/uploads/2021/07/CréaCamp-Découverte-2021-2022-5.png",
						"logo": false
					},
					"age": "July 6, 2021",
					"article": {
						"author": [
							{
								"type": "person",
								"name": "Laurie Couture"
							}
						],
						"date": "Jul 06, 2021",
						"publisher": {
							"type": "organization",
							"name": "L\\'École branchée",
							"thumbnail": {
								"src": "https://imgs.search.brave.com/mP419bvC-GEQJMoNcc_R4yc9Yosd_auj_4ScU4UeO1Y/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9lY29s/ZWJyYW5jaGVlLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MS8wOC9Mb2dvLTIw/MjFfRUJpY29uZS1u/b2lyLWNvdWxldXIu/cG5n",
								"original": "https://ecolebranchee.com/wp-content/uploads/2021/08/Logo-2021_EBicone-noir-couleur.png"
							}
						}
					},
					"organization": {
						"type": "organization",
						"name": "L\\'École branchée",
						"contact_points": []
					},
					"extra_snippets": [
						"Exercices, évaluation, autocorrection, rétroaction rapide et précise; moins de correction et moins gestion; plus de plaisir et d’efficacité! Survolez en sa compagnie les forces de chaque outil ainsi que le large éventail de possibilités qu’ils offrent à l’enseignant(e). Wooclap est une application gratuite pour les enseignants du primaire et du secondaire (et +!) qui offre de nombreuses possibilités d’interactivité et de collecte d’information à propos du cheminement des élèves.",
						"Dans ce grand dossier, nous vous proposons un tour d’horizon du monde de la ludification/ludicisation et nous vous expliquons pourquoi cette pratique est accessible à l’ensemble des enseignants. Hé non, nul besoin de revoir de fond en comble ses pratiques pédagogiques pour apporter une touche ludique à sa classe!",
						"LearningApps est devenu un classique pour créer des activités interactives numériques pour les élèves."
					]
				},
				{
					"title": "Articuler connaissances en psychologie cognitive et ingénierie pédagogique | Cairn.info",
					"url": "https://shs.cairn.info/revue-raisons-educatives-2021-1-page-141?lang=fr",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Cette démarche qui part des résultats de la <strong>psychologie cognitive</strong> des apprentissages peut donner lieu à des développements très aboutis en ingénierie pédagogique comme dans le grand classique de Gagne et Briggs (1974).",
					"page_age": "2021-10-11T00:00:00",
					"profile": {
						"name": "Cairn.info",
						"url": "https://shs.cairn.info/revue-raisons-educatives-2021-1-page-141?lang=fr",
						"long_name": "shs.cairn.info",
						"img": "https://imgs.search.brave.com/QceytGsxSBF4xVMq7z7hjJaQhkeghaT2KovLirOrV_4/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZmUzZGNmOWY5/OTVmZWRiOTM1ZjI3/ZDVkMWY0MDQyYWU3/ZWFkNDNkMWZmMDYw/MGExYmVhYmE5NGI5/NmRmMzQ5ZC9zaHMu/Y2Fpcm4uaW5mby8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "shs.cairn.info",
						"hostname": "shs.cairn.info",
						"favicon": "https://imgs.search.brave.com/QceytGsxSBF4xVMq7z7hjJaQhkeghaT2KovLirOrV_4/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZmUzZGNmOWY5/OTVmZWRiOTM1ZjI3/ZDVkMWY0MDQyYWU3/ZWFkNDNkMWZmMDYw/MGExYmVhYmE5NGI5/NmRmMzQ5ZC9zaHMu/Y2Fpcm4uaW5mby8",
						"path": "› revue-raisons-educatives-2021-1-page-141"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/S8gg_hwYTvWBkhjyVSDHQ7x6gGugvMzvy3k6dzR5tMY/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9zaHMu/Y2Fpcm4uaW5mby9u/dW1lcm8vUkFJU0VE/XzAyNS9jb3Zlci90/aHVtYm5haWw_bGFu/Zz1mcg",
						"original": "https://shs.cairn.info/numero/RAISED_025/cover/thumbnail?lang=fr",
						"logo": false
					},
					"age": "October 11, 2021",
					"extra_snippets": [
						"Les effets solidement établis au plan expérimental sont ensuite exportés, avec plus ou moins de bonheur, vers les apprentissages scolaires (e.g. McDaniel, Roediger, & McDermott, 2007). Cette démarche qui part des résultats de la psychologie cognitive des apprentissages peut donner lieu à des développements très aboutis en ingénierie pédagogique comme dans le grand classique de Gagne et Briggs (1974).",
						"Mousavi, S.Y., Low, R., & Sweller, J. (1995). Reducing cognitive load by mixing auditory and visual presentation modes. Journal of Educational Psychology, 87, 319. Musial, M., & Tricot, A. (2020). Précis d’ingénierie pédagogique.",
						"TRICOT, André, 2021. Articuler connaissances en psychologie cognitive et ingénierie pédagogique. Raisons éducatives, 2021/1 N° 25, p.141-162. DOI : 10.3917/raised.025.0141.",
						"Tricot, André. « Articuler connaissances en psychologie cognitive et ingénierie pédagogique ». Raisons éducatives, 2021/1 N° 25, 2021."
					]
				},
				{
					"title": "ICN",
					"url": "https://pedagogienumeriqueenaction.cforp.ca/icn7_10/Index.html",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Pédagogie Numérique en Action · Document de fondements · Ressources et références · Stratégie - apprentissage électronique · Citoyenneté numérique · Recension des écrits · Nos partenaires",
					"profile": {
						"name": "Cforp",
						"url": "https://pedagogienumeriqueenaction.cforp.ca/icn7_10/Index.html",
						"long_name": "pedagogienumeriqueenaction.cforp.ca",
						"img": "https://imgs.search.brave.com/FJheqLntmh-OD6vl1uTuwWUG2ZNndSOXfkElgvtmDXU/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvM2NmMmFiOTgw/OThjMDUyNjJjMTg3/NTZiY2NkYmZiYzJm/NTcxODMwYmM1OGVj/OWFmYWY1Y2YyOWYz/OTI1ZjQ5Mi9wZWRh/Z29naWVudW1lcmlx/dWVlbmFjdGlvbi5j/Zm9ycC5jYS8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "pedagogienumeriqueenaction.cforp.ca",
						"hostname": "pedagogienumeriqueenaction.cforp.ca",
						"favicon": "https://imgs.search.brave.com/FJheqLntmh-OD6vl1uTuwWUG2ZNndSOXfkElgvtmDXU/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvM2NmMmFiOTgw/OThjMDUyNjJjMTg3/NTZiY2NkYmZiYzJm/NTcxODMwYmM1OGVj/OWFmYWY1Y2YyOWYz/OTI1ZjQ5Mi9wZWRh/Z29naWVudW1lcmlx/dWVlbmFjdGlvbi5j/Zm9ycC5jYS8",
						"path": "› icn7_10  › Index.html"
					}
				},
				{
					"title": "Module : Introduction | Les questionnaires interactifs en soutien à l’apprentissage | Campus RÉCIT",
					"url": "https://campus.recit.qc.ca/course/section.php?id=3081",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Au terme de ce parcours d’apprentissage d’une durée de 2 à 5 heures en fonction de l’outil que vous choisirez, vous serez en mesure de prendre conscience des différentes intentions pédagogiques derrière l’utilisation des QI afin de soutenir l’apprentissage et la rétroaction offerte aux élèves.",
					"profile": {
						"name": "Campus RÉCIT",
						"url": "https://campus.recit.qc.ca/course/section.php?id=3081",
						"long_name": "campus.recit.qc.ca",
						"img": "https://imgs.search.brave.com/ugGzwRZGSCNrrKJSrwkpZ9IyYUxhvj76JSfLmFwY1zc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNjUyNDAzNTZj/MmYzNGZmMDgwNGE5/MWU1Yjk1YWZjZGRi/NzM3OGI3YWRhMDY2/YWZhZTlmYjA1ZmZk/ODdjYjMxNS9jYW1w/dXMucmVjaXQucWMu/Y2Ev"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "campus.recit.qc.ca",
						"hostname": "campus.recit.qc.ca",
						"favicon": "https://imgs.search.brave.com/ugGzwRZGSCNrrKJSrwkpZ9IyYUxhvj76JSfLmFwY1zc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNjUyNDAzNTZj/MmYzNGZmMDgwNGE5/MWU1Yjk1YWZjZGRi/NzM3OGI3YWRhMDY2/YWZhZTlmYjA1ZmZk/ODdjYjMxNS9jYW1w/dXMucmVjaXQucWMu/Y2Ev",
						"path": "› course  › section.php"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/xuIdXd-zSlikQmPEz7hq1jDqeS_iahFaJ4TAqBdN5ZI/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9jYW1w/dXMucmVjaXQucWMu/Y2EvcGx1Z2luZmls/ZS5waHAvMS90aGVt/ZV9jYW1wdXNyZWNp/dC9mYmxvZ28vMTc4/MTE5OTQ1MS9Mb2dv/JTIwQ2FtcHVzJTIw/JTI4MTIwMCUyMHgl/MjA2MzAlMjBweCUy/OS5wbmc",
						"original": "https://campus.recit.qc.ca/pluginfile.php/1/theme_campusrecit/fblogo/1781199451/Logo%20Campus%20%281200%20x%20630%20px%29.png",
						"logo": true
					},
					"extra_snippets": [
						"Au terme de ce parcours d’apprentissage d’une durée de 2 à 5 heures en fonction de l’outil que vous choisirez, vous serez en mesure de prendre conscience des différentes intentions pédagogiques derrière l’utilisation des QI afin de soutenir l’apprentissage et la rétroaction offerte aux élèves.",
						"Les questionnaires interactifs (QI) font partie des plateformes numériques coup de cœur des enseignants depuis plusieurs années."
					]
				},
				{
					"title": "Les questionnaires interactifs pour favoriser l’engagement des élèves",
					"url": "https://www.education.gouv.qc.ca/fileadmin/site_web/documents/education/jne/Questionnaires_interactifs_JNE_2020.pdf",
					"is_source_local": false,
					"is_source_both": false,
					"description": "favoriser l’engagement · monurl.ca/2020questionnaires",
					"profile": {
						"name": "Gouv",
						"url": "https://www.education.gouv.qc.ca/fileadmin/site_web/documents/education/jne/Questionnaires_interactifs_JNE_2020.pdf",
						"long_name": "education.gouv.qc.ca",
						"img": "https://imgs.search.brave.com/hw3d4rIRkQyfDTSQrpp0WaCEpDmZxM8ZdkqB4XX_VXc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOGQzMzFkNTAy/NWFmMTRjNGY5YzFl/M2IyZDQ3ZDM4OTI0/ODc2NWVlZmRjYTc0/ZGU2N2ZiYzVhNjFj/YzE5NTIxYy93d3cu/ZWR1Y2F0aW9uLmdv/dXYucWMuY2Ev"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "education.gouv.qc.ca",
						"hostname": "www.education.gouv.qc.ca",
						"favicon": "https://imgs.search.brave.com/hw3d4rIRkQyfDTSQrpp0WaCEpDmZxM8ZdkqB4XX_VXc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOGQzMzFkNTAy/NWFmMTRjNGY5YzFl/M2IyZDQ3ZDM4OTI0/ODc2NWVlZmRjYTc0/ZGU2N2ZiYzVhNjFj/YzE5NTIxYy93d3cu/ZWR1Y2F0aW9uLmdv/dXYucWMuY2Ev",
						"path": "› fileadmin  › site_web  › documents  › education  › jne  › Questionnaires_interactifs_JNE_2020.pdf"
					},
					"content_type": "pdf"
				},
				{
					"title": "N/Réf.: X2 614 001 QUESTIONNAIRE DE L'ÉVALUATION DE L’ENSEIGNEMENT",
					"url": "https://cchic.ca/fichiers/outil_1.pdf",
					"is_source_local": false,
					"is_source_both": false,
					"description": "23. Des stratégies de communication interactives encourageant la · participation ont été utilisées. 4 3 2 1 · 24. Notre rythme d’apprentissage a été respecté. 4 3 2 1 · 25. Nos commentaires ont été pris en compte dans l’approche · pédagogique utilisée.",
					"profile": {
						"name": "Cégep de Chicoutimi",
						"url": "https://cchic.ca/fichiers/outil_1.pdf",
						"long_name": "cchic.ca",
						"img": "https://imgs.search.brave.com/LEsCaAtmFQ-xMhD6pZ1xYf1j0qOQYwjzcIzo5iCIViM/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZjBkZTY0ZWI4/Y2ZhMTAxODc5MTc4/NjZiNzM4MThhYzlh/YTAwYWQxN2IxYmRl/MTQ1MzVkOGMzZDJl/OWFlNGM3OS9jY2hp/Yy5jYS8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "cchic.ca",
						"hostname": "cchic.ca",
						"favicon": "https://imgs.search.brave.com/LEsCaAtmFQ-xMhD6pZ1xYf1j0qOQYwjzcIzo5iCIViM/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZjBkZTY0ZWI4/Y2ZhMTAxODc5MTc4/NjZiNzM4MThhYzlh/YTAwYWQxN2IxYmRl/MTQ1MzVkOGMzZDJl/OWFlNGM3OS9jY2hp/Yy5jYS8",
						"path": "› fichiers  › outil_1.pdf"
					},
					"content_type": "pdf",
					"extra_snippets": [
						"23. Des stratégies de communication interactives encourageant la · participation ont été utilisées. 4 3 2 1 · 24. Notre rythme d’apprentissage a été respecté. 4 3 2 1 · 25. Nos commentaires ont été pris en compte dans l’approche · pédagogique utilisée."
					]
				},
				{
					"title": "1 Master Mention Psychologie MASTER 1 parcours PSYCHOLOGIE COGNITIVE",
					"url": "https://psychologie.u-paris.fr/wp-content/uploads/sites/10/2025/09/Brochure-M1-2025-2026-PCFA-.pdf",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Application de la méthode expérimentale à la pratique de recherche en psychologie. ... Utilisation des différentes statistiques appliquées au domaine de la cognition. ... Introduction au fonctionnement et à l’utilisation de nouveaux outils numériques avancés (ex. : IA, python, modélisation comportementale). ... ● Analyser, évaluer et expertiser les besoins et comportements des utilisateurs, l’ergonomie et · l’usage des produits et services proposés (acceptabilité, utilisabilité et efficacité).",
					"profile": {
						"name": "Université Paris Cité",
						"url": "https://psychologie.u-paris.fr/wp-content/uploads/sites/10/2025/09/Brochure-M1-2025-2026-PCFA-.pdf",
						"long_name": "psychologie.u-paris.fr",
						"img": "https://imgs.search.brave.com/p6MJSMDkOq-g97-UKhZetzj6j4nSNWRuORuSRY2g1EU/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMWU3MGI3MzZj/Mzk3YmFkODUxYmU5/ZTc2YzRmMDgzNTQw/Y2RjZjMyODNkZjRi/YWVlMmFhNDJkMjVk/OTFhMDUxMS9wc3lj/aG9sb2dpZS51LXBh/cmlzLmZyLw"
					},
					"language": "en",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "psychologie.u-paris.fr",
						"hostname": "psychologie.u-paris.fr",
						"favicon": "https://imgs.search.brave.com/p6MJSMDkOq-g97-UKhZetzj6j4nSNWRuORuSRY2g1EU/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMWU3MGI3MzZj/Mzk3YmFkODUxYmU5/ZTc2YzRmMDgzNTQw/Y2RjZjMyODNkZjRi/YWVlMmFhNDJkMjVk/OTFhMDUxMS9wc3lj/aG9sb2dpZS51LXBh/cmlzLmZyLw",
						"path": "› wp-content  › uploads  › sites  › 10  › 2025  › 09  › Brochure-M1-2025-2026-PCFA-.pdf"
					},
					"content_type": "pdf",
					"extra_snippets": [
						"Application de la méthode expérimentale à la pratique de recherche en psychologie. ... Utilisation des différentes statistiques appliquées au domaine de la cognition. ... Introduction au fonctionnement et à l’utilisation de nouveaux outils numériques avancés (ex. : IA, python, modélisation comportementale). ... ● Analyser, évaluer et expertiser les besoins et comportements des utilisateurs, l’ergonomie et · l’usage des produits et services proposés (acceptabilité, utilisabilité et efficacité).",
						"appliquée, du conseil, de la recherche centrée utilisateur et de l'évaluation cognitive. La structuration · pédagogique permet aux étudiants de s'orienter progressivement vers le secteur professionnel de leur ... Titre de Psychologue. Le stage devra être soutenu devant ce psychologue. Le parcours se caractérise par une forte spécialisation en psychologie cognitive et en",
						"L’équipe pédagogique est garante de sa mise en œuvre. La · convention de stage doit être établie le plus tôt possible, et avant la mi-décembre, le stage ne pouvant · débuter qu'après la signature des trois parties (étudiant, organisme d'accueil, université). L’étudiant trouvera l’ensemble des documents ici : https://psychologie.u-paris.fr/bureau-des-",
						"L’équipe pédagogique est garante de sa mise en œuvre. La · convention de stage doit être établie le plus tôt possible, et avant mi-décembre, le stage ne pouvant · débuter qu'après la signature des trois parties (étudiant, organisme d'accueil, université). Le stage peut · avoir commencé avant le second semestre si l’étudiant le souhaite. L’étudiant trouvera l’ensemble des documents ici : https://psychologie.u-paris.fr/bureau-des-"
					]
				},
				{
					"title": "Echelles psychométriques - Questionnaires - Apprendre la Psychologie",
					"url": "https://tcc.apprendre-la-psychologie.fr/catalogue/tests-psychologiques/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Anxiété Anxiété généralisée <strong>Ce questionnaire contient 27 items mesurant les émotions, cognitions et comportements dans des situations ambiguës, les conséquences du faitd&#x27;être incertain et les tentatives pour contrôler le futur</strong>.L&#x27;échelle ...",
					"profile": {
						"name": "Apprendre la Psychologie",
						"url": "https://tcc.apprendre-la-psychologie.fr/catalogue/tests-psychologiques/",
						"long_name": "tcc.apprendre-la-psychologie.fr",
						"img": "https://imgs.search.brave.com/8JCnL1W8mdY0kzO8MYsctU7yN_OE08y2puvbhlVrEN4/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZTBiOTA3YzI5/MDZjNzc3MjNiZTYw/YTQzZGM0NGIwMTk5/OGUxMTA5NjAxMTgx/YmJhZmFlNWIyNzhk/NzNkNzQ2OC90Y2Mu/YXBwcmVuZHJlLWxh/LXBzeWNob2xvZ2ll/LmZyLw"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "tcc.apprendre-la-psychologie.fr",
						"hostname": "tcc.apprendre-la-psychologie.fr",
						"favicon": "https://imgs.search.brave.com/8JCnL1W8mdY0kzO8MYsctU7yN_OE08y2puvbhlVrEN4/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZTBiOTA3YzI5/MDZjNzc3MjNiZTYw/YTQzZGM0NGIwMTk5/OGUxMTA5NjAxMTgx/YmJhZmFlNWIyNzhk/NzNkNzQ2OC90Y2Mu/YXBwcmVuZHJlLWxh/LXBzeWNob2xvZ2ll/LmZyLw",
						"path": "  › apprendre les tcc  › catalogue  › echelles psychométriques - questionnaires"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/JbQoUD_LaxSBdSrl9bSlEVt3BrvVvGctyMjTlvwxFqU/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly90Y2Mu/YXBwcmVuZHJlLWxh/LXBzeWNob2xvZ2ll/LmZyL21lZGlhL2df/dmlnbmV0dGUvMTAz/Mi5qcGc",
						"original": "https://tcc.apprendre-la-psychologie.fr/media/g_vignette/1032.jpg",
						"logo": false
					},
					"extra_snippets": [
						"Voici les principaux questionnaires et échelles psychométriques utilisés en psychologie scientifique et en particulier dans les thérapies cognitivo-comportementales. En TCC on considère comme indispensable de bien répertorier les symptômes du patient et d’en évaluer la gravité avant de débuter la thérapie, cela donne le niveau de base («baseline») de la personne, c'est-à-dire comment elle se situe actuellement.",
						"Sont notamment prises en compte l'anxiété sociale et l'anxiété de séparation. Le questionnaire en version française ... Méditation Mindfulness Ce questionnaire mesure la conscience et l’attention sur le moment présent dans la vie quotidienne dans les domaines physique, cognitif, émotionnel et interpersonnel.",
						"Aaron Beck Dépression Suicide Cette échelle sert à évaluer la sévérité de l’idéation suicidaire chez l’adulte et l’adolescent.Utilisée conjointement avec l’échelle de désespoir (BHS), la BHS permet d'évaluer le risque ... Anxiété Anxiété généralisée Ce questionnaire contient 27 items mesurant les émotions, cognitions et comportements dans des situations ambiguës, les conséquences du faitd'être incertain et les tentatives pour contrôler le futur.L'échelle permet d'identifier les personnes souffrant d'un ...",
						"Aaron Beck Dépression Jean Cottraux Suicide L’échelle évalue le niveau de pessimisme chez le patient souffrant d'un trouble dépressif et les schémas cognitifs concernant le futur. Cette échelle reflète donc indirectement l'intention suicidaire. Anorexie Boulimie Troubles du comportement alimentaire Cet auto-questionnaire vise à évaluer le biais cognitif de fusion pensée-forme très présent dans les troubles des conduites alimentaires."
					]
				},
				{
					"title": "(a) Faculté de psychologie, des sciences de l’éducation et de la formation.",
					"url": "https://www.ritpu.ca/ritpu/files/numeros/124/ritpu-v22n1-03.pdf",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Cette étude souligne la nécessité d’une approche équilibrée, combinant l’efficacité de l’IA avec · l’expertise humaine pour optimiser la création et l’utilisation des QCM dans le domaine éducatif. Le corps enseignant, fort de son expertise et de sa compréhension nuancée des besoins · pédagogiques, apporte une valeur ajoutée essentielle qui ne peut être entièrement reproduite par · N. Meirmanova · Analyse comparative entre la génération automatique de questionnaires à choix multiples par ChatGPT ...",
					"profile": {
						"name": "Ritpu",
						"url": "https://www.ritpu.ca/ritpu/files/numeros/124/ritpu-v22n1-03.pdf",
						"long_name": "ritpu.ca",
						"img": "https://imgs.search.brave.com/OUDFoNAQ3_HgwpOFVvk3SUtSdP1RH-sOSXoNsrwwddM/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNGNjMWM4YzU4/NDdmNjM5YTFlNzlh/NjdkNjRjNzgwNWE2/Njg1YzA1OWY5MGJi/YTY4NGM0NDg5Nzlj/ODUzMTcwMC93d3cu/cml0cHUuY2Ev"
					},
					"language": "fr",
					"family_friendly": false,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "ritpu.ca",
						"hostname": "www.ritpu.ca",
						"favicon": "https://imgs.search.brave.com/OUDFoNAQ3_HgwpOFVvk3SUtSdP1RH-sOSXoNsrwwddM/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNGNjMWM4YzU4/NDdmNjM5YTFlNzlh/NjdkNjRjNzgwNWE2/Njg1YzA1OWY5MGJi/YTY4NGM0NDg5Nzlj/ODUzMTcwMC93d3cu/cml0cHUuY2Ev",
						"path": "› ritpu  › files  › numeros  › 124  › ritpu-v22n1-03.pdf"
					},
					"content_type": "pdf",
					"extra_snippets": [
						"Cette étude souligne la nécessité d’une approche équilibrée, combinant l’efficacité de l’IA avec · l’expertise humaine pour optimiser la création et l’utilisation des QCM dans le domaine éducatif. Le corps enseignant, fort de son expertise et de sa compréhension nuancée des besoins · pédagogiques, apporte une valeur ajoutée essentielle qui ne peut être entièrement reproduite par · N. Meirmanova · Analyse comparative entre la génération automatique de questionnaires à choix multiples par ChatGPT ...",
						"Analyse comparative entre la génération automatique de questionnaires à choix multiples par ChatGPT ... 2025 – Revue internationale des technologies en pédagogie universitaire, 22(1), article 3",
						"Analyse comparative entre la génération automatique de questionnaires à choix multiples par ChatGPT ... 2025 – International Journal of Technologies in Higher Education, 22(1), article 3 ... pédagogiques : 1) formulation d’un plan thématique sur les concepts essentiels, 2) établissement",
						"Analyse comparative entre la génération automatique de questionnaires à choix multiples par ChatGPT ... 2025 – International Journal of Technologies in Higher Education, 22(1), article 3 ... Régnier, N. (2013, août). Systèmes de réponse instantanée pour une pédagogie active"
					]
				},
				{
					"title": "L'évaluation des compétences scolaires - Chapitre V. — Des années 1990 à aujourd’hui. Les apports de la recherche en psychologie cognitive à l’évaluation des apprentissages - Presses universitaires de Rennes",
					"url": "https://books.openedition.org/pur/159?lang=fr",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Il en va ainsi de la BREV qui est destinée aux médecins scolaires en vue de confirmer ou d’infirmer la suspicion d’un trouble des apprentissages (troubles de l’attention, du langage oral, etc.) et d’orienter les évaluations complémentaires ainsi que la démarche pédagogique ou de soins. D’inspiration neuropsychologique, la batterie est composée de 18 sub-tests évaluant chez les enfants âgés de 4 à 9 ans différentes fonctions cognitives et langagières (langage oral et écrit, graphisme, attention, mémoire, fonctions exécutives, etc.).",
					"page_age": "2010-08-23T00:00:00",
					"profile": {
						"name": "OpenEdition",
						"url": "https://books.openedition.org/pur/159?lang=fr",
						"long_name": "books.openedition.org",
						"img": "https://imgs.search.brave.com/hJJXF3jbXiOec2yhF_z2VF45UQr5GSXndbTXBTAZ3ms/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMmFkZTg2ZDJi/MTczODVmMDIzYjAz/Y2Q1NjNhZmFhYWIw/MTMyOTNmMDA1NTJi/YmNmNzc0ODJhYWVk/YmFhODViYS9ib29r/cy5vcGVuZWRpdGlv/bi5vcmcv"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "books.openedition.org",
						"hostname": "books.openedition.org",
						"favicon": "https://imgs.search.brave.com/hJJXF3jbXiOec2yhF_z2VF45UQr5GSXndbTXBTAZ3ms/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMmFkZTg2ZDJi/MTczODVmMDIzYjAz/Y2Q1NjNhZmFhYWIw/MTMyOTNmMDA1NTJi/YmNmNzc0ODJhYWVk/YmFhODViYS9ib29r/cy5vcGVuZWRpdGlv/bi5vcmcv",
						"path": "› pur  › 159"
					},
					"age": "August 23, 2010",
					"extra_snippets": [
						"IntroductionComme on l’a vu précédemment, les évolutions sociales et économiques de ces deux dernières décennies ont réorienté les objectifs éducatifs afin de relever les nouveaux défis de l’école mais également de contribuer à résoudre le problème lancinant de l’échec scolaire et en particulier de l’illettrisme (Kail & Fayol, 2003).",
						"Elles permettent en outre d’envisager des pistes d’action susceptibles de pallier les difficultés des élèves et plus largement d’éclairer l’action pédagogique (Fayol, 1999 ; Foulin & Toczek, 2006). 5L’objectif de ce chapitre est de rendre compte succinctement des principaux apports de la psychologie cognitive et de la psychologie du développement à l’évaluation des apprentissages scolaires.",
						"Quant à l’évaluation diagnostique, elle est assurée par une équipe pluridisciplinaire (médecins, psychologues, orthophonistes, neuropsychologues, etc.) dans les structures créées à cet effet. S’agissant des outils d’évaluation, ceux-ci sont diversifiés : questionnaires pour le repérage des difficultés, batteries standardisées comportant une variété d’épreuves cognitives et langagières pour le dépistage, instruments cognitifs et/ou langagiers plus spécifiques dans le cadre du diagnostic.",
						"Il en va ainsi de la BREV qui est destinée aux médecins scolaires en vue de confirmer ou d’infirmer la suspicion d’un trouble des apprentissages (troubles de l’attention, du langage oral, etc.) et d’orienter les évaluations complémentaires ainsi que la démarche pédagogique ou de soins. D’inspiration neuropsychologique, la batterie est composée de 18 sub-tests évaluant chez les enfants âgés de 4 à 9 ans différentes fonctions cognitives et langagières (langage oral et écrit, graphisme, attention, mémoire, fonctions exécutives, etc.)."
					]
				},
				{
					"title": "Les questionnaires interactifs | Ressources",
					"url": "https://ressources.csscdr.gouv.qc.ca/les-questionnaires-interactifs/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Plusieurs outils gratuits permettent de créer des questionnaires en ligne. Tout ce dont vos élèves ont besoin, c’est d’un appareil mobile et d’une connexion internet. Mais, avant tout, quelle est la valeur pédagogique d’un questionnaire interactif?",
					"profile": {
						"name": "Gouv",
						"url": "https://ressources.csscdr.gouv.qc.ca/les-questionnaires-interactifs/",
						"long_name": "ressources.csscdr.gouv.qc.ca",
						"img": "https://imgs.search.brave.com/qofn9KHvpR_U8xJqpdlDGX1QexLQkp0H8dgkOt78urM/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOThiNDYzYzlj/OTMwN2E2NjY1OGE5/MTU1ZjFkYTRhMmI1/MmVjMzIxM2M2YmM2/MTg2OTBmNjkyNmQw/YzgwMGI5Mi9yZXNz/b3VyY2VzLmNzc2Nk/ci5nb3V2LnFjLmNh/Lw"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "ressources.csscdr.gouv.qc.ca",
						"hostname": "ressources.csscdr.gouv.qc.ca",
						"favicon": "https://imgs.search.brave.com/qofn9KHvpR_U8xJqpdlDGX1QexLQkp0H8dgkOt78urM/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOThiNDYzYzlj/OTMwN2E2NjY1OGE5/MTU1ZjFkYTRhMmI1/MmVjMzIxM2M2YmM2/MTg2OTBmNjkyNmQw/YzgwMGI5Mi9yZXNz/b3VyY2VzLmNzc2Nk/ci5nb3V2LnFjLmNh/Lw",
						"path": "› les-questionnaires-interactifs"
					}
				},
				{
					"title": "Les questionnaires interactifs comme moyen d’apprentissage (CAMP TIC Jour 2) | Le Carnet de Normand",
					"url": "https://lecarnetdenormand.com/2016/08/16/les-questionnaires-interactifs-comme-moyen-dapprentissage-camp-tic-jour-2/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "<strong>Les questionnaires interactifs lient à la fois la pédagogie active et la compréhension des apprentissages, car ils mettent les élèves en action en les invitant à participer ou à construire leurs propres questionnaires</strong>.",
					"page_age": "2016-08-17T02:17:57",
					"profile": {
						"name": "Le Carnet de Normand",
						"url": "https://lecarnetdenormand.com/2016/08/16/les-questionnaires-interactifs-comme-moyen-dapprentissage-camp-tic-jour-2/",
						"long_name": "lecarnetdenormand.com",
						"img": "https://imgs.search.brave.com/7YqvTJnXmzQ2OlFhpLT5oc-ehZrpL7M7qCKFNKkdBXY/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMWE0YjU1Nzkw/ZGQ4MGI3N2Y0NGQ5/NTY4M2ZlYTQxOWRj/MzFlMzRkNjViZjFi/ZjU3MzdmOGRjOTM3/Yzk4YzdlNC9sZWNh/cm5ldGRlbm9ybWFu/ZC5jb20v"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "lecarnetdenormand.com",
						"hostname": "lecarnetdenormand.com",
						"favicon": "https://imgs.search.brave.com/7YqvTJnXmzQ2OlFhpLT5oc-ehZrpL7M7qCKFNKkdBXY/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMWE0YjU1Nzkw/ZGQ4MGI3N2Y0NGQ5/NTY4M2ZlYTQxOWRj/MzFlMzRkNjViZjFi/ZjU3MzdmOGRjOTM3/Yzk4YzdlNC9sZWNh/cm5ldGRlbm9ybWFu/ZC5jb20v",
						"path": "› 2016  › 08  › 16  › les-questionnaires-interactifs-comme-moyen-dapprentissage-camp-tic-jour-2"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/93UzjwZSASN-YJs1wFimITjvPhRHtzgjaDmqy3zGhAY/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9sZWNh/cm5ldGRlbm9ybWFu/ZC5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTYvMDgvcGMz/YTlkYWdvZ2llLWFj/dGl2ZS5qcGc_dz0z/MDA",
						"original": "https://lecarnetdenormand.com/wp-content/uploads/2016/08/pc3a9dagogie-active.jpg?w=300",
						"logo": false
					},
					"age": "August 17, 2016",
					"extra_snippets": [
						"L’école est réputée pour être le lieu où les élèves doivent répondre à tout plein de questions : elle en détient peut-être même le monopole. Le questionnement, c’est connu, fait partie des stratégies d’apprentissage pour vérifier le niveau d’acquisition de connaissances des élèves ou encore pour valider le degré de compréhension d’une séquence d’enseignement.",
						"L’école est réputée pour être le lieu où les élèves doivent répondre à tout plein de questions : elle en détient peut-être même le monopole. Le questionnement, c’est connu, fait partie des stratégi…",
						"Les questionnaires interactifs lient à la fois la pédagogie active et la compréhension des apprentissages, car ils mettent les élèves en action en les invitant à participer ou à construire leurs propres questionnaires.",
						"Cela permet d’offrir une rétroaction rapide et ciblée au groupe ou à certains élèves en particulier. Une belle occasion de faire de la différenciation pédagogique ! Ces outils permettent aussi aux élèves de rédiger leurs propres questionnaires tout comme aux enseignant(e)s de créer leurs formulaires personnalisés."
					]
				}
			]
		},
		{
			"query": "retour d'expérience conception dispositifs ludo-éducatifs quiz",
			"results": [
				{
					"title": "Formation Ludopédagogie : intégrez les jeux dans vos formations - Nell et Associés",
					"url": "https://nell-associes.com/formation/formation-utiliser-la-ludopedagogie-et-concevoir-des-jeux/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Vous découvrirez aussi comment évaluer l’impact des jeux sur les apprenants et ajuster votre animation en fonction des retours. L’expérimentation de différents types d’activités ludopédagogiques (jeux de rôle, icebreakers, quiz, escape games, simulations). La définition des bonnes pratiques pour concevoir et animer une formation ludique. La conception de vos propres outils et supports ludiques adaptés à vos publics.",
					"page_age": "2026-03-11T08:42:08",
					"profile": {
						"name": "Nell et Associés",
						"url": "https://nell-associes.com/formation/formation-utiliser-la-ludopedagogie-et-concevoir-des-jeux/",
						"long_name": "nell-associes.com",
						"img": "https://imgs.search.brave.com/A2ri6QkL4BnJ9wNY4wAIN_QGFprothRDSNgzZlrsOeE/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOTM4OWMwNDJi/NWM3MGU1YTAxNTY4/ZThjZTVjMTc0ZGI2/YWRiYjVmOGUwYjFk/NDI4MGJhZWU0NDg0/OTE1OWNmOS9uZWxs/LWFzc29jaWVzLmNv/bS8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "nell-associes.com",
						"hostname": "nell-associes.com",
						"favicon": "https://imgs.search.brave.com/A2ri6QkL4BnJ9wNY4wAIN_QGFprothRDSNgzZlrsOeE/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOTM4OWMwNDJi/NWM3MGU1YTAxNTY4/ZThjZTVjMTc0ZGI2/YWRiYjVmOGUwYjFk/NDI4MGJhZWU0NDg0/OTE1OWNmOS9uZWxs/LWFzc29jaWVzLmNv/bS8",
						"path": "  › accueil  › formations  › formations de formateurs  › formation ludopédagogie : intégrez les jeux dans vos formations"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/Bn7MHzfYup-XgR3kjSdqUZqq24ZKopyX00tozq1oOfs/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9uZWxs/LWFzc29jaWVzLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/Mi8xMS9VdGlsaXNl/cl9sYV9sdWRvcGVk/YWdvZ2llX2NvbmNl/dm9pcl9qZXV4Xzcw/MHB4LmpwZw",
						"original": "https://nell-associes.com/wp-content/uploads/2022/11/Utiliser_la_ludopedagogie_concevoir_jeux_700px.jpg",
						"logo": false
					},
					"age": "March 11, 2026",
					"extra_snippets": [
						"Vous découvrirez aussi comment évaluer l’impact des jeux sur les apprenants et ajuster votre animation en fonction des retours. L’expérimentation de différents types d’activités ludopédagogiques (jeux de rôle, icebreakers, quiz, escape games, simulations). La définition des bonnes pratiques pour concevoir et animer une formation ludique. La conception de vos propres outils et supports ludiques adaptés à vos publics.",
						"Apprendre en jouant n’est pas réservé aux enfants. La ludopédagogie, qui intègre des jeux et des activités ludiques dans les dispositifs de formation, est aujourd’hui un puissant levier pour favoriser l’engagement, la motivation et la mémorisation des apprenants.",
						"Elle s’adresse notamment aux concepteurs pédagogiques désireux de créer des dispositifs plus engageants, aux chefs de projet formation qui souhaitent innover dans leur offre, aux responsables RH ou responsables formation qui cherchent à renforcer l’efficacité de leurs dispositifs internes, ainsi qu’aux formateurs qui veulent dynamiser leurs animations et mieux capter l’attention de leurs participants. Plus largement, elle s’adresse à tous ceux qui veulent rendre leurs formations plus participatives et mémorables. Suivre cette formation Ludopédagogie, c’est s’offrir l’opportunité de découvrir comment le jeu peut devenir un outil pédagogique puissant au service de vos objectifs.",
						"Illustrer l’intérêt et les fonctions pédagogiques du jeu Construire une progression ludopédagogique ... Adapter à la classe virtuelle les spécificités du jeu en formation Animer une séquence de formation avec le jeu ... Si vous souhaitez que l’on adapte cette formation à un public spécifique, contactez un de nos conseillers formation. Chef de projet, Concepteur pédagogique, Formateur, Responsable formation, Responsable RH"
					]
				},
				{
					"title": "Logiciel éducatif ✔️ Comparatif des outils (2026) - iSpring",
					"url": "https://www.ispring.fr/blog/logiciel-educatif",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Intégrer le jeu dans la formation par le biais d’un logiciel ludo-éducatif pratique permet de valider des connaissances sans la lourdeur d’un examen classique. Voici une sélection de vrais outils de création de tests dynamiques, où l’on peut transformer une évaluation en un parcours interactif sur un site e-learning. Parcourez-les pour trouver votre nouveau logiciel éducatif. Avec ses 14 modèles de questions, iSpring QuizMaker permet d’imaginer des activités variées : glisser-déposer des objets, identifier des zones sur une image ou résoudre des équations complexes.",
					"page_age": "2026-05-19T12:10:19",
					"profile": {
						"name": "iSpring",
						"url": "https://www.ispring.fr/blog/logiciel-educatif",
						"long_name": "ispring.fr",
						"img": "https://imgs.search.brave.com/3Cu8yEvbuY5rowHs7VMVYbV_93or4_BIXJ9uLs0h6WU/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYmM4ZmUzMWJj/NDU3Nzk5ZGVmYWE4/ZjJkYWMyYzg5MWY3/ZTA5ZGE5MWI1ZTMx/N2JjNjc0NmI5YjRk/YzdjNjJjZS93d3cu/aXNwcmluZy5mci8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "article",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "ispring.fr",
						"hostname": "www.ispring.fr",
						"favicon": "https://imgs.search.brave.com/3Cu8yEvbuY5rowHs7VMVYbV_93or4_BIXJ9uLs0h6WU/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYmM4ZmUzMWJj/NDU3Nzk5ZGVmYWE4/ZjJkYWMyYzg5MWY3/ZTA5ZGE5MWI1ZTMx/N2JjNjc0NmI5YjRk/YzdjNjJjZS93d3cu/aXNwcmluZy5mci8",
						"path": "  › blog  › bases de l'elearning  › logiciel éducatif : applications et outils pour apprendre en jouant"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/YFMgdu471hqIat9CAfJkzN52xnX9-49WMnAO-ZcB2M8/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/aXNwcmluZy5mci9i/bG9nL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI0LzExL1RvcC0x/OS5wbmc",
						"original": "https://www.ispring.fr/blog/wp-content/uploads/2024/11/Top-19.png",
						"logo": false
					},
					"age": "May 19, 2026",
					"article": {
						"author": []
					},
					"extra_snippets": [
						"Les logiciels d’éducation en ligne sont devenus incontournables, pour l’éducation des enfants comme des adultes. Souvent personnalisables aux couleurs de la marque, ils comprennent des plateformes précieuses pour l’apprentissage et les résultats sont améliorés par le recours à la gamification dans divers domaines.",
						"Intégrer le jeu dans la formation par le biais d’un logiciel ludo-éducatif pratique permet de valider des connaissances sans la lourdeur d’un examen classique. Voici une sélection de vrais outils de création de tests dynamiques, où l’on peut transformer une évaluation en un parcours interactif sur un site e-learning. Parcourez-les pour trouver votre nouveau logiciel éducatif. Avec ses 14 modèles de questions, iSpring QuizMaker permet d’imaginer des activités variées : glisser-déposer des objets, identifier des zones sur une image ou résoudre des équations complexes.",
						"Les quiz sont incontournables pour réviser en s’amusant, aussi seul qu’en équipe. Ce site met à disposition une vaste bibliothèque de modèles pour enrichir votre contenu. En tant qu’enseignants, vous gardez le contrôle total en personnalisant les feedbacks, les scores et le temps imparti.",
						"Kapitec Software a par exemple utilisé iSpring QuizMaker pour faire de chaque évaluation une expérience immersive."
					]
				},
				{
					"title": "Animer une formation avec la ludopédagogie et les outils immersifs - CNEH",
					"url": "https://www.cneh.fr/nos-domaines-de-formations/animer-une-formation-avec-la-ludopedagogie-et-les-outils-immersifs/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "L’analyse des données et l’amélioration continue &gt; Atelier : Conception d’un flash-quiz d’évaluation ludique avec un outil numérique · Brainstorming, REX et analyse des pratiques d’animation de formation · Ateliers de simulation ludo-pédagogique à chaque séquence de formation auprès du groupe de participants, activités ludiques et interactives (numériques)",
					"page_age": "2026-04-19T23:20:31",
					"profile": {
						"name": "CNEH",
						"url": "https://www.cneh.fr/nos-domaines-de-formations/animer-une-formation-avec-la-ludopedagogie-et-les-outils-immersifs/",
						"long_name": "cneh.fr",
						"img": "https://imgs.search.brave.com/gUQl8t33QJ_yfJxeOmx3a4VBC2h5ycGmX6vdPqM9JTY/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYjZmZDZhNjZk/NWU3NzNmNzE0OWU0/MDJlYzk1MmY3ZDc0/OTk2MzM5ZTgzNDQy/NDU1NmUyZDI2N2Mx/MDlhNWUzNC93d3cu/Y25laC5mci8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "cneh.fr",
						"hostname": "www.cneh.fr",
						"favicon": "https://imgs.search.brave.com/gUQl8t33QJ_yfJxeOmx3a4VBC2h5ycGmX6vdPqM9JTY/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYjZmZDZhNjZk/NWU3NzNmNzE0OWU0/MDJlYzk1MmY3ZDc0/OTk2MzM5ZTgzNDQy/NDU1NmUyZDI2N2Mx/MDlhNWUzNC93d3cu/Y25laC5mci8",
						"path": "  › nos domaines de formations  › management fondamentaux, innovations, outils  › la boîte à outils du manager  › animer une formation avec la ludopédagogie et les outils immersifs"
					},
					"age": "April 19, 2026",
					"extra_snippets": [
						"L’analyse des données et l’amélioration continue > Atelier : Conception d’un flash-quiz d’évaluation ludique avec un outil numérique · Brainstorming, REX et analyse des pratiques d’animation de formation · Ateliers de simulation ludo-pédagogique à chaque séquence de formation auprès du groupe de participants, activités ludiques et interactives (numériques)",
						"Les cinq postures du formateur (transmissif, compagnonnage, développemental, facilitateur, apprenant) > Atelier : Cohésion et animation d’un groupe avec le jeu \"Mieux travailler ensemble\" > Les méthodes et outils ludo-pédagogiques · Les outils numériques interactifs (Kahoot, Wooclap) Les serious games, jeux de rôle, escape games pédagogiques · Les outils créatifs (Lego® Serious Play®, post-it, mind mapping, photolangage) Les mini-cas cliniques, études de cas, défis chronométrés, ateliers visuels · L’élaboration de supports pédagogiques adaptés (diaporama, fiches-outils, quiz) > Atelier : Création express d’un jeu ludo-pédagogique avec l’IAG > La mise en situation d’animation et feedback",
						"La conception d’outils d’évaluation : quizz pré/post, questionnaires de satisfaction, grilles d’observation",
						"Former des formateurs internes un défi important pour les institutions aujourd’hui. Cette formation immersive propose des innovations ludo-pédagogiques avec des outils de digital-learning qui transforment les scénarios de parcours de formations en expériences captivantes et engageantes."
					]
				},
				{
					"title": "(PDF) Ludo-pédagogie : pratiques et références mobilisées pour accompagner les enseignant·es dans la conception. Quel équilibre entre expérience de jeu et alignement pédagogique ? 2. Organisateur-trice(s)",
					"url": "https://www.researchgate.net/publication/365892949_Ludo-pedagogie_pratiques_et_references_mobilisees_pour_accompagner_les_enseignantes_dans_la_conception_Quel_equilibre_entre_experience_de_jeu_et_alignement_pedagogique_2_Organisateur-trices",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Les cinq dimensions du modèle évolutif CEPAJe (acronyme de « Contexte », « Enseignant », « Pédagogie », « Apprenant » &amp; « Jeu ») proposé par Alvarez (2017) serviront de fil conducteur au <strong>retour d&#x27;expérience</strong>.",
					"page_age": "2022-12-01T00:00:00",
					"profile": {
						"name": "ResearchGate",
						"url": "https://www.researchgate.net/publication/365892949_Ludo-pedagogie_pratiques_et_references_mobilisees_pour_accompagner_les_enseignantes_dans_la_conception_Quel_equilibre_entre_experience_de_jeu_et_alignement_pedagogique_2_Organisateur-trices",
						"long_name": "researchgate.net",
						"img": "https://imgs.search.brave.com/WJ25-tL-91vp8kSoF0YS7d8CZVivP1cG-EjlGvrmxOc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZjE0MDk0Yzli/MWQ3NGQ2ZTNjODVh/YWVmMDNkM2NkZWI5/NGEzNjdhMmEyY2E2/N2EzN2Y0OThlZjdi/YWU3MjkwMi93d3cu/cmVzZWFyY2hnYXRl/Lm5ldC8"
					},
					"language": "en",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "article",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "researchgate.net",
						"hostname": "www.researchgate.net",
						"favicon": "https://imgs.search.brave.com/WJ25-tL-91vp8kSoF0YS7d8CZVivP1cG-EjlGvrmxOc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZjE0MDk0Yzli/MWQ3NGQ2ZTNjODVh/YWVmMDNkM2NkZWI5/NGEzNjdhMmEyY2E2/N2EzN2Y0OThlZjdi/YWU3MjkwMi93d3cu/cmVzZWFyY2hnYXRl/Lm5ldC8",
						"path": "› publication  › 365892949_Ludo-pedagogie_pratiques_et_references_mobilisees_pour_accompagner_les_enseignantes_dans_la_conception_Quel_equilibre_entre_experience_de_jeu_et_alignement_pedagogique_2_Organisateur-trices"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/cd7WfI9BCVoAo-KY8zyDDiOy37TmbQMrQbvdYa8ZExI/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9pMS5y/Z3N0YXRpYy5uZXQv/cHVibGljYXRpb24v/MzY1ODkyOTQ5X0x1/ZG8tcGVkYWdvZ2ll/X3ByYXRpcXVlc19l/dF9yZWZlcmVuY2Vz/X21vYmlsaXNlZXNf/cG91cl9hY2NvbXBh/Z25lcl9sZXNfZW5z/ZWlnbmFudGVzX2Rh/bnNfbGFfY29uY2Vw/dGlvbl9RdWVsX2Vx/dWlsaWJyZV9lbnRy/ZV9leHBlcmllbmNl/X2RlX2pldV9ldF9h/bGlnbmVtZW50X3Bl/ZGFnb2dpcXVlXzJf/T3JnYW5pc2F0ZXVy/LXRyaWNlcy9saW5r/cy82Mzg4ODFlNmNh/MmU0YjIzOWM3YTgx/ZTMvbGFyZ2VwcmV2/aWV3LnBuZw",
						"original": "https://i1.rgstatic.net/publication/365892949_Ludo-pedagogie_pratiques_et_references_mobilisees_pour_accompagner_les_enseignantes_dans_la_conception_Quel_equilibre_entre_experience_de_jeu_et_alignement_pedagogique_2_Organisateur-trices/links/638881e6ca2e4b239c7a81e3/largepreview.png",
						"logo": false
					},
					"age": "December 1, 2022",
					"article": {
						"author": [
							{
								"type": "person",
								"name": "Isabelle Motte",
								"url": "https://www.researchgate.net/scientific-contributions/Isabelle-Motte-2166348953",
								"thumbnail": {
									"src": "https://imgs.search.brave.com/dMtHr8-Qesx_n1eD_yC484AdHx5Mu-SKRnED6CeBoes/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9jNS5y/Z3N0YXRpYy5uZXQv/bS80MzU5ODIzMDk0/ODEwMTAvaW1hZ2Vz/L3RlbXBsYXRlL2Rl/ZmF1bHQvYXV0aG9y/L2F1dGhvcl9kZWZh/dWx0X20uanBn",
									"original": "https://c5.rgstatic.net/m/435982309481010/images/template/default/author/author_default_m.jpg"
								}
							},
							{
								"type": "person",
								"name": "Pascal Vangrunderbeeck",
								"url": "https://www.researchgate.net/profile/Pascal-Vangrunderbeeck",
								"thumbnail": {
									"src": "https://imgs.search.brave.com/LlGvsFjYBn5hQyjBPP17PSCB3KJhOYQTp9_R6Yeeugk/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9pMS5y/Z3N0YXRpYy5uZXQv/aWkvcHJvZmlsZS5p/bWFnZS84MjMwNjg0/NDAxMzM2MzQtMTU3/MzI0NjIxNjk1N19R/NjQvUGFzY2FsLVZh/bmdydW5kZXJiZWVj/ay5qcGc",
									"original": "https://i1.rgstatic.net/ii/profile.image/823068440133634-1573246216957_Q64/Pascal-Vangrunderbeeck.jpg"
								}
							}
						],
						"date": "Nov 17, 2022",
						"publisher": {
							"type": "organization",
							"name": "unknown",
							"url": "https://www.researchgate.net/unknown",
							"thumbnail": {
								"src": "https://imgs.search.brave.com/UjSGsXBrrrqKndxfeOp5EGUdM15aJCsZ_BUDIJcDQhs/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/cmVzZWFyY2hnYXRl/Lm5ldC91bmtub3du",
								"original": "https://www.researchgate.net/unknown"
							}
						}
					},
					"extra_snippets": [
						"Les cinq dimensions du modèle évolutif CEPAJe (acronyme de « Contexte », « Enseignant », « Pédagogie », « Apprenant » & « Jeu ») proposé par Alvarez (2017) serviront de fil conducteur au retour d'expérience. La présentation abordera les questions à se poser en termes de conception et d'animation, en particulier pour envisager la phase de débriefing du jeu. Comme le souligne Alvarez, le débriefing est un élément essentiel d’un dispositif d’apprentissage ludique qui permet de dégager collectivement des pistes de travail ou de réflexion sur les usages du numérique.",
						"L’accompagnement des enseignants dans la conception d’activités ludo-pédagogiques exige de relever au moins trois types de défis : Concevoir une activité qui trouve son équilibre entre l’expérience de jeu et l’expérience d’apprentissage ; Permettre aux acteurs issus du monde de l’enseignement et du monde du jeu de collaborer, sachant que chacun des ces intervenants mobilise des références et une sémantique, ainsi que des pratiques différentes ; Guider la conception en s’inspirant à la fois de références qui proviennent des théories du jeu et des modèles issues de",
						"Ces pratiques ludo-pédagogiques ont renforcé les demandes en matière d’accompagnement de dispositifs basés sur le jeu et ont conduit les ... [Show full abstract] conseillers à mobiliser des références pour tenter de formaliser un guide de conception.",
						"accompagner les enseignant·es dans la conception. Quel équilibre · entre expérience de jeu et alignement pédagogique ? ... Inscrire la ludo-pédagogie dans une stratégie d’établissement. Retour"
					]
				},
				{
					"title": "La ludo-pédagogie en formation professionnelle – Isidoreo",
					"url": "https://isidoreo.solutions/la-ludo-pedagogie-en-formation-professionnelle/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "2.3. Kolb – Cycle de l’apprentissage expérientiel La ludo-pédagogie alimente toutes les étapes du cycle de Kolb : expérience concrète, observation réflexive, conceptualisation et expérimentation active. 2.4. Malone et Lepper – Motivation intrinsèque Le jeu favorise l’engagement par le plaisir d’apprendre, le défi, le retour immédiat, et la personnalisation de l’expérience.",
					"page_age": "2025-05-30T09:30:00",
					"profile": {
						"name": "Isidoreo",
						"url": "https://isidoreo.solutions/la-ludo-pedagogie-en-formation-professionnelle/",
						"long_name": "isidoreo.solutions",
						"img": "https://imgs.search.brave.com/tRbowiZ61Zi9XWa09ODdsRwWcskVQ8oF8cbb_QluHfU/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZjY5NzAwNjdh/Y2I3Mjk5ZDdkMTll/ODg4NGJhOTg1Njdm/NDIzODVlOTBmZmFh/M2M5ZDE1ZjhjNzkx/M2RkOWZmOS9pc2lk/b3Jlby5zb2x1dGlv/bnMv"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "location",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "isidoreo.solutions",
						"hostname": "isidoreo.solutions",
						"favicon": "https://imgs.search.brave.com/tRbowiZ61Zi9XWa09ODdsRwWcskVQ8oF8cbb_QluHfU/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZjY5NzAwNjdh/Y2I3Mjk5ZDdkMTll/ODg4NGJhOTg1Njdm/NDIzODVlOTBmZmFh/M2M5ZDE1ZjhjNzkx/M2RkOWZmOS9pc2lk/b3Jlby5zb2x1dGlv/bnMv",
						"path": "  › home  › ressources  › ingénierie  › la ludo-pédagogie en formation professionnelle"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/LKhmEbK_-w_4g_7DA_avPxRMP6cQo0RD0SSjJjAy6sQ/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9pc2lk/b3Jlby5zb2x1dGlv/bnMvc3RvcmFnZS8y/MDI1LzA1L0x1ZG9w/ZWRhZ29naWUucG5n",
						"original": "https://isidoreo.solutions/storage/2025/05/Ludopedagogie.png",
						"logo": false
					},
					"age": "May 30, 2025",
					"location": {
						"title": "Isidoréo",
						"url": "https://isidoreo.solutions",
						"is_source_local": false,
						"is_source_both": false,
						"family_friendly": true,
						"type": "location_result",
						"provider_url": "https://isidoreo.solutions/la-ludo-pedagogie-en-formation-professionnelle/",
						"zoom_level": 7,
						"thumbnail": {
							"src": "https://imgs.search.brave.com/WoadfsosDM6sQSSKSY5Lvu9dMIKNIAwfxO8Z0UXF4rk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pc2lk/b3Jlby5zb2x1dGlv/bnMvc3RvcmFnZS8y/MDI0LzAzL0xvZ28t/SXNpZG9yZW8ucG5n",
							"original": "https://isidoreo.solutions/storage/2024/03/Logo-Isidoreo.png"
						},
						"postal_address": {
							"type": "PostalAddress",
							"country": "FR",
							"displayAddress": "FR"
						},
						"opening_hours": {
							"current_day": [
								{
									"abbr_name": "Fri",
									"full_name": "Friday",
									"opens": "09:30",
									"closes": "17:30"
								}
							],
							"days": [
								[
									{
										"abbr_name": "Mon",
										"full_name": "Monday",
										"opens": "09:30",
										"closes": "15:00"
									}
								],
								[
									{
										"abbr_name": "Tue",
										"full_name": "Tuesday",
										"opens": "09:30",
										"closes": "17:30"
									}
								],
								[
									{
										"abbr_name": "Wed",
										"full_name": "Wednesday",
										"opens": "09:30",
										"closes": "17:30"
									}
								],
								[
									{
										"abbr_name": "Thu",
										"full_name": "Thursday",
										"opens": "09:30",
										"closes": "17:30"
									}
								]
							]
						},
						"profiles": [
							{
								"type": "external",
								"name": "isidoreo.solutions",
								"url": "https://isidoreo.solutions/la-ludo-pedagogie-en-formation-professionnelle/",
								"img": "https://imgs.search.brave.com/tRbowiZ61Zi9XWa09ODdsRwWcskVQ8oF8cbb_QluHfU/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZjY5NzAwNjdh/Y2I3Mjk5ZDdkMTll/ODg4NGJhOTg1Njdm/NDIzODVlOTBmZmFh/M2M5ZDE1ZjhjNzkx/M2RkOWZmOS9pc2lk/b3Jlby5zb2x1dGlv/bnMv"
							}
						],
						"pictures": {
							"results": [
								{
									"src": "https://imgs.search.brave.com/WoadfsosDM6sQSSKSY5Lvu9dMIKNIAwfxO8Z0UXF4rk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pc2lk/b3Jlby5zb2x1dGlv/bnMvc3RvcmFnZS8y/MDI0LzAzL0xvZ28t/SXNpZG9yZW8ucG5n",
									"original": "https://isidoreo.solutions/storage/2024/03/Logo-Isidoreo.png"
								},
								{
									"src": "https://imgs.search.brave.com/2amZn3J_QWQDoZxMpiM0dLuYofq5gHeNLa8sGawlY1M/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pc2lk/b3Jlby5zb2x1dGlv/bnMvc3RvcmFnZS8y/MDI1LzA1L0x1ZG9w/ZWRhZ29naWUucG5n",
									"original": "https://isidoreo.solutions/storage/2025/05/Ludopedagogie.png"
								}
							]
						},
						"categories": []
					},
					"extra_snippets": [
						"2.3. Kolb – Cycle de l’apprentissage expérientiel La ludo-pédagogie alimente toutes les étapes du cycle de Kolb : expérience concrète, observation réflexive, conceptualisation et expérimentation active. 2.4. Malone et Lepper – Motivation intrinsèque Le jeu favorise l’engagement par le plaisir d’apprendre, le défi, le retour immédiat, et la personnalisation de l’expérience.",
						"Asynchrone : serious game individuel, quizz gamifiés avec suivi des scores, missions à réaliser. Loin d’être un gadget, la ludo-pédagogie repose sur de véritables leviers d’apprentissage.",
						"Milieu de parcours : Jeux de réactivation, quizz, escape game intermédiaire pour faire le point de manière dynamique. Fin de formation : Jeu de révision, battle de connaissances, escape game d’évaluation ou jeu de rôle d’intégration des acquis. Salariés d’entreprise : Préférer les jeux courts, concrets, avec retour immédiat sur les apprentissages.",
						"Exemple 4 – Quiz Battle (bureautique) À la manière d’un jeu télévisé, les stagiaires s’affrontent sur des questions Excel/Word."
					]
				},
				{
					"title": "Présentation d'un modèle dédié à l’évaluation d’activités ludo-pédagogiques et retours d’expériences | Request PDF",
					"url": "https://www.researchgate.net/publication/318334271_Presentation_d'un_modele_dedie_a_l'evaluation_d'activites_ludo-pedagogiques_et_retours_d'experiences",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Les cinq dimensions du modèle évolutif CEPAJe (acronyme de « Contexte », « Enseignant », « Pédagogie », « Apprenant » &amp; « Jeu ») proposé par Alvarez (2017) serviront de fil conducteur au <strong>retour d&#x27;expérience</strong>.",
					"page_age": "2017-06-30T00:00:00",
					"profile": {
						"name": "ResearchGate",
						"url": "https://www.researchgate.net/publication/318334271_Presentation_d'un_modele_dedie_a_l'evaluation_d'activites_ludo-pedagogiques_et_retours_d'experiences",
						"long_name": "researchgate.net",
						"img": "https://imgs.search.brave.com/WJ25-tL-91vp8kSoF0YS7d8CZVivP1cG-EjlGvrmxOc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZjE0MDk0Yzli/MWQ3NGQ2ZTNjODVh/YWVmMDNkM2NkZWI5/NGEzNjdhMmEyY2E2/N2EzN2Y0OThlZjdi/YWU3MjkwMi93d3cu/cmVzZWFyY2hnYXRl/Lm5ldC8"
					},
					"language": "en",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "article",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "researchgate.net",
						"hostname": "www.researchgate.net",
						"favicon": "https://imgs.search.brave.com/WJ25-tL-91vp8kSoF0YS7d8CZVivP1cG-EjlGvrmxOc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZjE0MDk0Yzli/MWQ3NGQ2ZTNjODVh/YWVmMDNkM2NkZWI5/NGEzNjdhMmEyY2E2/N2EzN2Y0OThlZjdi/YWU3MjkwMi93d3cu/cmVzZWFyY2hnYXRl/Lm5ldC8",
						"path": "› publication  › 318334271_Presentation_d'un_modele_dedie_a_l'evaluation_d'activites_ludo-pedagogiques_et_retours_d'experiences"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/NA3UWQdok5rp6uI2kyF0cHLVZy0QBikNBsFv8yDMrrc/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/cmVzZWFyY2hnYXRl/Lm5ldC9pbWFnZXMv/dGVtcGxhdGUvZGVm/YXVsdF9wdWJsaWNh/dGlvbl9wcmV2aWV3/X2xhcmdlLnBuZw",
						"original": "https://www.researchgate.net/images/template/default_publication_preview_large.png",
						"logo": false
					},
					"age": "June 30, 2017",
					"article": {
						"author": [
							{
								"type": "person",
								"name": "Julian Alvarez",
								"url": "https://www.researchgate.net/profile/Julian-Alvarez-3",
								"thumbnail": {
									"src": "https://imgs.search.brave.com/DFg9I8ePKUc0yfuxkkoqJhPiE_cJkrqQEJDZ1b_1CdE/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9pMS5y/Z3N0YXRpYy5uZXQv/aWkvcHJvZmlsZS5p/bWFnZS8xMTQzMTI4/MTEyMTQ2OTg1MS0x/Njc2OTk4NzU5Nzg4/X1E2NC9KdWxpYW4t/QWx2YXJlei0zLmpw/Zw",
									"original": "https://i1.rgstatic.net/ii/profile.image/11431281121469851-1676998759788_Q64/Julian-Alvarez-3.jpg"
								}
							},
							{
								"type": "person",
								"name": "Pascal Chaumette",
								"url": "https://www.researchgate.net/profile/Pascal-Chaumette-2",
								"thumbnail": {
									"src": "https://imgs.search.brave.com/5gdCI7PCZY5BlQWC1BdmlSDuWn23D4dMlyyVVgV-z7Y/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9pMS5y/Z3N0YXRpYy5uZXQv/aWkvcHJvZmlsZS5p/bWFnZS83MjY4NTU4/MjA3ODc3MTMtMTU1/MDMwNzM0MDI2MV9R/NjQvUGFzY2FsLUNo/YXVtZXR0ZS0yLmpw/Zw",
									"original": "https://i1.rgstatic.net/ii/profile.image/726855820787713-1550307340261_Q64/Pascal-Chaumette-2.jpg"
								}
							}
						],
						"date": "Jun 30, 2017",
						"publisher": {
							"type": "organization",
							"name": "OpenEdition",
							"url": "https://www.researchgate.net/unknown",
							"thumbnail": {
								"src": "https://imgs.search.brave.com/UjSGsXBrrrqKndxfeOp5EGUdM15aJCsZ_BUDIJcDQhs/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/cmVzZWFyY2hnYXRl/Lm5ldC91bmtub3du",
								"original": "https://www.researchgate.net/unknown"
							}
						}
					},
					"extra_snippets": [
						"Les cinq dimensions du modèle évolutif CEPAJe (acronyme de « Contexte », « Enseignant », « Pédagogie », « Apprenant » & « Jeu ») proposé par Alvarez (2017) serviront de fil conducteur au retour d'expérience. La présentation abordera les questions à se poser en termes de conception et d'animation, en particulier pour envisager la phase de débriefing du jeu. Comme le souligne Alvarez, le débriefing est un élément essentiel d’un dispositif d’apprentissage ludique qui permet de dégager collectivement des pistes de travail ou de réflexion sur les usages du numérique.",
						"Notre communication aura pour but de partager les retours d'expériences positifs et critiques ainsi que les perspectives issues de ces dispositifs pédagogiques. ... Cette thèse s’inscrit à la frontière de l'informatique et des sciences humaines. Elle traite de la conception de serious games et de leur utilisation dans des contextes d’apprentissage ciblés.",
						"L’accompagnement des enseignants dans la conception d’activités ludo-pédagogiques exige de relever au moins trois types de défis : Concevoir une activité qui trouve son équilibre entre l’expérience de jeu et l’expérience d’apprentissage ; Permettre aux acteurs issus du monde de l’enseignement et du monde du jeu de collaborer, sachant que chacun des ces intervenants mobilise des références et une sémantique, ainsi que des pratiques différentes ; Guider la conception en s’inspirant à la fois de références qui proviennent des théories du jeu et des modèles issues de",
						"Soutenus par des ressources théoriques externes et internes, nous proposons également un guide de conception, d'animation et d'évaluation des activités ludopédagogiques de type « escape game » basé sur le modèle CEPAJe (Alvarez et Chaumette, 2017). Nous partagerons les retours des enseignants créateurs et des enseignants QPES-(Faire) coopérer pour (faire) apprendre 2 participants à des escape games pédagogiques afin d'en extraire les enjeux essentiels, les défis et les opportunités que cela présente."
					]
				},
				{
					"title": "L'apprentissage à travers le jeu (Serious game) : L'élaboration d'un scénario ludo-pédagogique. Cas de l'enseignement-apprentissage du FLE | Request PDF",
					"url": "https://www.researchgate.net/publication/333309656_L'apprentissage_a_travers_le_jeu_Serious_game_L'elaboration_d'un_scenario_ludo-pedagogique_Cas_de_l'enseignement-apprentissage_du_FLE",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Après avoir exploré les principaux champs d’application du serious game et défini ce dernier, l’étude de cette problématique s’effectue en trois temps au travers des systèmes culturel, pragmatique et formel au sens où l’entendent les concepteurs de jeux (game designers) Salen et Zimmerman. Ainsi le système culturel qui sous-tend une approche transversale, prend en compte dans notre cas, les aspects humains, économiques, techniques, artistiques, ludiques, pédagogiques, et organisationnels. Ce système est exploré grâce à un retour d’expérience qui a consisté à développer un serious game destiné à des collégiens.",
					"page_age": "2019-03-02T00:00:00",
					"profile": {
						"name": "ResearchGate",
						"url": "https://www.researchgate.net/publication/333309656_L'apprentissage_a_travers_le_jeu_Serious_game_L'elaboration_d'un_scenario_ludo-pedagogique_Cas_de_l'enseignement-apprentissage_du_FLE",
						"long_name": "researchgate.net",
						"img": "https://imgs.search.brave.com/WJ25-tL-91vp8kSoF0YS7d8CZVivP1cG-EjlGvrmxOc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZjE0MDk0Yzli/MWQ3NGQ2ZTNjODVh/YWVmMDNkM2NkZWI5/NGEzNjdhMmEyY2E2/N2EzN2Y0OThlZjdi/YWU3MjkwMi93d3cu/cmVzZWFyY2hnYXRl/Lm5ldC8"
					},
					"language": "en",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "article",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "researchgate.net",
						"hostname": "www.researchgate.net",
						"favicon": "https://imgs.search.brave.com/WJ25-tL-91vp8kSoF0YS7d8CZVivP1cG-EjlGvrmxOc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZjE0MDk0Yzli/MWQ3NGQ2ZTNjODVh/YWVmMDNkM2NkZWI5/NGEzNjdhMmEyY2E2/N2EzN2Y0OThlZjdi/YWU3MjkwMi93d3cu/cmVzZWFyY2hnYXRl/Lm5ldC8",
						"path": "› publication  › 333309656_L'apprentissage_a_travers_le_jeu_Serious_game_L'elaboration_d'un_scenario_ludo-pedagogique_Cas_de_l'enseignement-apprentissage_du_FLE"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/NA3UWQdok5rp6uI2kyF0cHLVZy0QBikNBsFv8yDMrrc/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/cmVzZWFyY2hnYXRl/Lm5ldC9pbWFnZXMv/dGVtcGxhdGUvZGVm/YXVsdF9wdWJsaWNh/dGlvbl9wcmV2aWV3/X2xhcmdlLnBuZw",
						"original": "https://www.researchgate.net/images/template/default_publication_preview_large.png",
						"logo": false
					},
					"age": "March 2, 2019",
					"article": {
						"author": [
							{
								"type": "person",
								"name": "Salma Beddaou",
								"url": "https://www.researchgate.net/profile/Salma-Beddaou-2",
								"thumbnail": {
									"src": "https://imgs.search.brave.com/Ypf7e8KR1e2Z0LUnVkeBTVnLifkahSqELb4zFJy0Tpc/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9jNS5y/Z3N0YXRpYy5uZXQv/bS80NjcxODcyMjIw/NzY0L2ltYWdlcy90/ZW1wbGF0ZS9kZWZh/dWx0L3Byb2ZpbGUv/cHJvZmlsZV9kZWZh/dWx0X20uanBn",
									"original": "https://c5.rgstatic.net/m/4671872220764/images/template/default/profile/profile_default_m.jpg"
								}
							}
						],
						"date": "Mar 02, 2019",
						"publisher": {
							"type": "organization",
							"name": "unknown",
							"url": "https://www.researchgate.net/unknown",
							"thumbnail": {
								"src": "https://imgs.search.brave.com/UjSGsXBrrrqKndxfeOp5EGUdM15aJCsZ_BUDIJcDQhs/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/cmVzZWFyY2hnYXRl/Lm5ldC91bmtub3du",
								"original": "https://www.researchgate.net/unknown"
							}
						}
					},
					"extra_snippets": [
						"Request PDF | L'apprentissage à travers le jeu (Serious game) : L'élaboration d'un scénario ludo-pédagogique. Cas de l'enseignement-apprentissage du FLE | Aujourd’hui, à l'heure de la révolution numérique et l’innovation pédagogique, des nouvelles technologies sont apparues pour moderniser les...",
						"Cette synthèse d'HDR propose des clés de lecture des modes d'action et de réaction d'un système éducatif confronté au fait nouveau de l'informatique. ... Cette thèse identifie et vise à affronter certains verrous scientifiques concernant la conception des scenarios des serious games, leurs utilisations par un meilleur partage entre les concepteurs dans des contextes d’apprentissage ciblés.",
						"Après avoir exploré les principaux champs d’application du serious game et défini ce dernier, l’étude de cette problématique s’effectue en trois temps au travers des systèmes culturel, pragmatique et formel au sens où l’entendent les concepteurs de jeux (game designers) Salen et Zimmerman. Ainsi le système culturel qui sous-tend une approche transversale, prend en compte dans notre cas, les aspects humains, économiques, techniques, artistiques, ludiques, pédagogiques, et organisationnels. Ce système est exploré grâce à un retour d’expérience qui a consisté à développer un serious game destiné à des collégiens.",
						"Genvo, S. (2012). La théorie de la ludicisation : une approche anti-essentialiste des phénomènes ludiques. Communication lors de la journée d'études « Jeu et jouabilité à l'ère numérique ». Repéré à http://www.ludologique.com/publis/LudicisationDec12.pdf Godwin-Jones, R."
					]
				},
				{
					"title": "Intégrer la ludopédagogie dans des dispositifs de formation de la conception à la mise en œuvre - Cours - FUN MOOC",
					"url": "https://www.fun-mooc.fr/fr/cours/integrer-la-ludopedagogie-dans-des-dispositifs-de-formation-de-la-conception-a-la-mise-en-oeuvre/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Les équipes de conception ont suivi les recommandations du référentiel général d’amélioration de l’accessibilité, publié par la Direction Interministérielle du Numérique. ... Introduction générale, prise en main de la plateforme, constitution des groupes, présentation du jeu Ludopolis",
					"profile": {
						"name": "FUN MOOC",
						"url": "https://www.fun-mooc.fr/fr/cours/integrer-la-ludopedagogie-dans-des-dispositifs-de-formation-de-la-conception-a-la-mise-en-oeuvre/",
						"long_name": "fun-mooc.fr",
						"img": "https://imgs.search.brave.com/jfOOJ5f3mjv6PmdLcjexIKSLIRQg7XKhnnCB_dUC-WU/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvY2U5YjNkOGRh/NTQ0NGMzZmFmMzBh/MzUyNGZhNTI0YmQ2/YzJlMTQ5MTJmMTcz/NzJkNmI0ZWQ5NDBl/ZDc0MWRmYi93d3cu/ZnVuLW1vb2MuZnIv"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "fun-mooc.fr",
						"hostname": "www.fun-mooc.fr",
						"favicon": "https://imgs.search.brave.com/jfOOJ5f3mjv6PmdLcjexIKSLIRQg7XKhnnCB_dUC-WU/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvY2U5YjNkOGRh/NTQ0NGMzZmFmMzBh/MzUyNGZhNTI0YmQ2/YzJlMTQ5MTJmMTcz/NzJkNmI0ZWQ5NDBl/ZDc0MWRmYi93d3cu/ZnVuLW1vb2MuZnIv",
						"path": "› fr  › cours  › integrer-la-ludopedagogie-dans-des-dispositifs-de-formation-de-la-conception-a-la-mise-en-oeuvre"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/nT9ZabhLs2__w8E9xG33vQoEBW5jA6hHjfH78kBuvHo/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly8xYzFm/ZWY3Yi0yZmEwLTQ1/NWEtOTg3ZC02NzNi/Y2RkMDcyYWUuc3Zj/LmVkZ2Uuc2N3LmNs/b3VkL21lZGlhL2Zp/bGVyX3B1YmxpY190/aHVtYm5haWxzL2Zp/bGVyX3B1YmxpYy8x/YS84Yi8xYThiNDgz/YS0wNTNjLTQ5NDMt/ODg5ZS04NjBlMTFh/ZjI2NDMvdmlzdWVs/X3NlX2Zvcm1lcl9h/X2xhX2x1ZG9wZWRh/Z29naWUucG5nX18x/MjAweDYzMF9xODVf/Y3JvcF9yZXBsYWNl/X2FscGhhLSUyM0ZG/RkZGRl9zdWJzYW1w/bGluZy0yX3Vwc2Nh/bGUuanBn",
						"original": "https://1c1fef7b-2fa0-455a-987d-673bcdd072ae.svc.edge.scw.cloud/media/filer_public_thumbnails/filer_public/1a/8b/1a8b483a-053c-4943-889e-860e11af2643/visuel_se_former_a_la_ludopedagogie.png__1200x630_q85_crop_replace_alpha-%23FFFFFF_subsampling-2_upscale.jpg",
						"logo": false
					},
					"extra_snippets": [
						"Cette formation vise à approfondir la compréhension de la ludopédagogie à travers un panorama critique des concepts-clés et des stratégies existantes (gamification, ludicisation, jeux sérieux...), la prise en main des modèles de l’engagement ludiques pour tester et apprécier la diversité des profils des apprenants-joueurs, les bases du game design, du narrative design, du level design et du game art design, et enfin les méthodes concrètes permettant aux ingénieurs pédagogiques d’accompagner les enseignants mobilisant la ludopédagogie : choix du type de média (jeu numérique ou analogique), création du projet, animation des sessions, débriefing, évaluation, documentation.",
						"Les équipes de conception ont suivi les recommandations du référentiel général d’amélioration de l’accessibilité, publié par la Direction Interministérielle du Numérique. ... Introduction générale, prise en main de la plateforme, constitution des groupes, présentation du jeu Ludopolis",
						"Ce fût très intense, mais cette micro-certification m'a vraiment beaucoup apporté dans ma pratique, ma conception de formations adultes. Je la recommande fortement si vous avez envie d'acquérir une spécificité pour se démarquer et si vous avez déjà une appétence pour le jeu. Nadia · Très chouette formation, bon contenu et belle émulation collective ! Thomas · Équipe pédagogique experte et passionnée, la formation \"Se former à la ludopédagogie\" m'a tellement convaincue que je m'inscris au bootcamp avancé pour parfaire mes compétences.",
						"Cette formation s'adresse notamment aux enseignants, formateurs, ingénieurs pédagogiques, concepteurs de jeux éducatifs, médiateurs et éducateurs spécialisés, évoluant dans des structures variées : établissements scolaires, universités, organismes de formation, entreprises, musées et institutions culturelles ou sociales."
					]
				},
				{
					"title": "La ludopédagogie : une approche innovante pour apprendre en s'amusant – Éditions Upbility",
					"url": "https://upbility.fr/blogs/news/la-ludopedagogie-une-approche-innovante-pour-apprendre-en-samusant",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Selon des enseignants, l’intégration de jeux éducatifs a permis de renforcer les compétences sociales et de communication des étudiants. Un retour d’expérience indique que les activités ludiques favorisent : un climat de classe positif, encourageant ainsi la collaboration entre élèves. des projets de ludopédagogie mis en place dans plusieurs établissements, avec des résultats démontrant une amélioration des performances académiques des élèves.",
					"page_age": "2025-06-30T06:34:10",
					"profile": {
						"name": "Upbility",
						"url": "https://upbility.fr/blogs/news/la-ludopedagogie-une-approche-innovante-pour-apprendre-en-samusant",
						"long_name": "upbility.fr",
						"img": "https://imgs.search.brave.com/-EOGCvgAPvmJ1Y0tHGAvo9Eq3jh7nsOhGPEjAdMGWKQ/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvN2E2OGMxNmQz/Y2JjOTQwZDA4NjBh/ZTgxNzhkMmU2OWU0/M2MwZWE4YWVmMmE4/MTExNzkzMmIyOGUx/OGYwZTcwNS91cGJp/bGl0eS5mci8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "article",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "upbility.fr",
						"hostname": "upbility.fr",
						"favicon": "https://imgs.search.brave.com/-EOGCvgAPvmJ1Y0tHGAvo9Eq3jh7nsOhGPEjAdMGWKQ/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvN2E2OGMxNmQz/Y2JjOTQwZDA4NjBh/ZTgxNzhkMmU2OWU0/M2MwZWE4YWVmMmE4/MTExNzkzMmIyOGUx/OGYwZTcwNS91cGJp/bGl0eS5mci8",
						"path": "› blogs  › news  › la-ludopedagogie-une-approche-innovante-pour-apprendre-en-samusant"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/xG-E4hVmjkGJJ6fVI1LxONHDKIznlXxfnNmzg-UYdi0/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly91cGJp/bGl0eS5mci9jZG4v/c2hvcC9hcnRpY2xl/cy9ibG9nX2Jhbm5l/cnNfMV9mZTFiNzdi/OS03NTNiLTRiY2It/OGQ1Mi1kYzliZTli/NTYwYjQucG5nP3Y9/MTc1MTI2NTI1NyZ3/aWR0aD0xOTIw",
						"original": "https://upbility.fr/cdn/shop/articles/blog_banners_1_fe1b77b9-753b-4bcb-8d52-dc9be9b560b4.png?v=1751265257&width=1920",
						"logo": false
					},
					"age": "June 30, 2025",
					"article": {
						"author": [
							{
								"type": "person",
								"name": "Maria Drakouli"
							}
						],
						"date": "Jun 30, 2025",
						"publisher": {
							"type": "organization",
							"name": "Éditions Upbility"
						}
					},
					"organization": {
						"type": "organization",
						"name": "Éditions Upbility",
						"contact_points": []
					},
					"extra_snippets": [
						"Malgré des défis d’intégration, la ludopédagogie prouve son efficacité à travers des exemples concrets et des retours d’expérience positifs dans divers contextes éducatifs. La ludopédagogie est une méthode de formation innovante qui repose sur l’utilisation du jeu didactique et de dispositifs ludiques pour faciliter l’apprentissage.",
						"L’application pratique de la ludopédagogie en classe peut transformer l’expérience éducative. Que ce soit par la conception de jeux pédagogiques, l’animation de sessions ludiques ou l’évaluation des apprentissages, les jeux offrent des outils puissants pour améliorer l’engagement et les compétences des élèves.",
						"De même, Marie-Pierre Dussine utilise des cartes à jouer et des jeux de rôle pour enseigner l’économie à ses étudiants, rendant les concepts économiques plus accessibles et engageants. Pour ceux qui souhaitent approfondir leurs connaissances en ludopédagogie, plusieurs ressources sont disponibles. La Lib’ – Librairie de l’éducation à Paris, par exemple, fournit une variété de livres et de supports pédagogiques sur le sujet.",
						"Selon des enseignants, l’intégration de jeux éducatifs a permis de renforcer les compétences sociales et de communication des étudiants. Un retour d’expérience indique que les activités ludiques favorisent : un climat de classe positif, encourageant ainsi la collaboration entre élèves. des projets de ludopédagogie mis en place dans plusieurs établissements, avec des résultats démontrant une amélioration des performances académiques des élèves."
					]
				},
				{
					"title": "Ludopédagogie – MaProfBranchee",
					"url": "https://maprofbranchee.fr/apprendre-par-le-jeu/ludopedagogie/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Protocole d’évaluation : Un questionnaire avant/après et l’observation des comportements en classe sur 3 à 4 séances minimum permettent une mesure fiable de l’efficacité du dispositif. Le jeu comme modalité d’apprentissage Éduscol Apprendre par le jeu : fiches pédagogiques Réseau Canopé Les 4 piliers de l’apprentissage Académie de Paris / S. Dehaene Cours de psychologie cognitive Collège de France / S. Dehaene La ludification d’un contenu pédagogique Académie de Toulouse Class’Échecs à l’École Éduscol / FFÉ Jouer et apprendre (Cycle 1) Éduscol Retour : Jouer en classe MaProfBranchee",
					"profile": {
						"name": "Maprofbranchee",
						"url": "https://maprofbranchee.fr/apprendre-par-le-jeu/ludopedagogie/",
						"long_name": "maprofbranchee.fr",
						"img": "https://imgs.search.brave.com/pHW0ATrsJT_X3g_PHxpdScxONLjagd9WMaA8SK9SlL4/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMDc4NGI3YTA5/ZmE1ODE5ODRmZmQw/YjcwMTUwMDg1YzQx/MzkxMmVhMGM3YTE2/MjlkNjNiMGE1NTZi/MTg1MDdlMi9tYXBy/b2ZicmFuY2hlZS5m/ci8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "maprofbranchee.fr",
						"hostname": "maprofbranchee.fr",
						"favicon": "https://imgs.search.brave.com/pHW0ATrsJT_X3g_PHxpdScxONLjagd9WMaA8SK9SlL4/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMDc4NGI3YTA5/ZmE1ODE5ODRmZmQw/YjcwMTUwMDg1YzQx/MzkxMmVhMGM3YTE2/MjlkNjNiMGE1NTZi/MTg1MDdlMi9tYXBy/b2ZicmFuY2hlZS5m/ci8",
						"path": "› apprendre-par-le-jeu  › ludopedagogie"
					},
					"extra_snippets": [
						"Jeux conçus spécifiquement à des fins éducatives, combinant divertissement et objectifs pédagogiques précis. Point commun : Ces trois approches partagent un objectif : rendre l’apprentissage plus engageant, motivant et efficace. Elles peuvent se combiner dans un même dispositif pédagogique.",
						"Protocole d’évaluation : Un questionnaire avant/après et l’observation des comportements en classe sur 3 à 4 séances minimum permettent une mesure fiable de l’efficacité du dispositif. Le jeu comme modalité d’apprentissage Éduscol Apprendre par le jeu : fiches pédagogiques Réseau Canopé Les 4 piliers de l’apprentissage Académie de Paris / S. Dehaene Cours de psychologie cognitive Collège de France / S. Dehaene La ludification d’un contenu pédagogique Académie de Toulouse Class’Échecs à l’École Éduscol / FFÉ Jouer et apprendre (Cycle 1) Éduscol Retour : Jouer en classe MaProfBranchee",
						"Argument institutionnel : La ludopédagogie répond directement aux attendus du socle commun sur la différenciation pédagogique et l’école inclusive (CRPE/CAFIPEMF).",
						"Écueil à éviter : Ne pas tomber dans le « tout ludique ». Le jeu doit servir l’apprentissage, pas l’inverse. Un dispositif ludique qui n’améliore pas les apprentissages reste du divertissement, pas de la pédagogie."
					]
				},
				{
					"title": "La ludopédagogie au cœur des apprentissages des secteurs éducatif, social et de la santé",
					"url": "https://ligue-enseignement.be/education-enseignement/articles/dossier/la-ludopedagogie-au-coeur-des-apprentissages-des-secteurs",
					"is_source_local": false,
					"is_source_both": false,
					"description": "La ludopédagogie comprend d’une part la pédagogie du jeu centrée sur l’attitude ludique et la ludification des apprentissages et, d’autre part, la pédagogie des jeux qui consiste à créer, adapter et utiliser des jeux à règles préétablies à des fins pédagogiques. Ces deux manières de la concevoir sont complémentaires et doivent idéalement être combinées. L’attitude ludique est la disposition d’esprit du joueur qui fait de son activité un jeu.",
					"page_age": "2023-01-30T00:00:00",
					"profile": {
						"name": "La Ligue de l'Enseignement",
						"url": "https://ligue-enseignement.be/education-enseignement/articles/dossier/la-ludopedagogie-au-coeur-des-apprentissages-des-secteurs",
						"long_name": "ligue-enseignement.be",
						"img": "https://imgs.search.brave.com/cZAkQYC7AarUGvCyMoushUYrXQuPP5xf6wJ4ygop57Y/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvN2Q4ZmEwMjQ4/YTc5MDFhNTEyZDk2/ZTkxZDEwMjMxMDFh/OWMxYzE2YmFlOTI4/MzJjY2JlMDBjMDk2/MDg0Zjc2My9saWd1/ZS1lbnNlaWduZW1l/bnQuYmUv"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "ligue-enseignement.be",
						"hostname": "ligue-enseignement.be",
						"favicon": "https://imgs.search.brave.com/cZAkQYC7AarUGvCyMoushUYrXQuPP5xf6wJ4ygop57Y/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvN2Q4ZmEwMjQ4/YTc5MDFhNTEyZDk2/ZTkxZDEwMjMxMDFh/OWMxYzE2YmFlOTI4/MzJjY2JlMDBjMDk2/MDg0Zjc2My9saWd1/ZS1lbnNlaWduZW1l/bnQuYmUv",
						"path": "› education-enseignement  › articles  › dossier  › la-ludopedagogie-au-coeur-des-apprentissages-des-secteurs"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/S-NreMC33uFTxwSxjlPMTK2g-9wJG5d_zno7S6KSOdY/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9saWd1/ZS1lbnNlaWduZW1l/bnQuYmUvc2l0ZXMv/ZGVmYXVsdC9maWxl/cy9zdHlsZXMvb2df/MTIwMHg2MzAvcHVi/bGljL2ltcG9ydHMv/bHVkby5qcGc_aXRv/az1aSXRnbXRqVw",
						"original": "https://ligue-enseignement.be/sites/default/files/styles/og_1200x630/public/imports/ludo.jpg?itok=ZItgmtjW",
						"logo": false
					},
					"age": "January 30, 2023",
					"extra_snippets": [
						"Un concept pluriel : pédagogie du jeu et pédagogie des jeux La ludopédagogie comprend d’une part la pédagogie du jeu centrée sur l’attitude ludique et la ludification des apprentissages et, d’autre part, la pédagogie des jeux qui consiste à créer, adapter et utiliser des jeux à règles préétablies à des fins pédagogiques.",
						"La ludopédagogie comprend d’une part la pédagogie du jeu centrée sur l’attitude ludique et la ludification des apprentissages et, d’autre part, la pédagogie des jeux qui consiste à créer, adapter et utiliser des jeux à règles préétablies à des fins pédagogiques. Ces deux manières de la concevoir sont complémentaires et doivent idéalement être combinées. L’attitude ludique est la disposition d’esprit du joueur qui fait de son activité un jeu.",
						"La démarche ludopédagogique consiste dès lors d’une part à ludifier l’activité, c’est-à-dire encourager l’attitude ludique en lui donnant les attributs du jeu et d’autre part à fournir un cadre minimum rassurant qui structure l’activité et permet à cette attitude ludique de s’exprimer.",
						"De fait, les (ludo)pédagogues de l’Antiquité étaient souvent représentés un sac d’osselets à la main[8] et, par exemple, le dé à 20 faces de nos jeux de rôles n’est autre que l’un des solides de Platon[9]. Au-delà de ses propriétés mathématiques, on a notamment retrouvé de nombreux exemplaires antiques pourvus d’une lettre différente de l’alphabet grec sur chacune de ses faces[10], préfigurant des jeux de vocabulaire actuels tels le jeu « Boggle »."
					]
				},
				{
					"title": "Ludopédagogie : pourquoi utiliser le jeu dans l'apprentissage",
					"url": "https://www.adictiz.com/blog/ludopedagogie-jeu-et-apprentissage/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Dans un premier temps, nous conseillons de se tourner vers des jeux simples, auxquels les apprenants sont déjà familiarisés. <strong>Un trivia ou un quiz sera par exemple un excellent choix, puisque les participants en connaissent déjà les règles</strong>.",
					"page_age": "2025-11-20T15:41:51",
					"profile": {
						"name": "Adictiz",
						"url": "https://www.adictiz.com/blog/ludopedagogie-jeu-et-apprentissage/",
						"long_name": "adictiz.com",
						"img": "https://imgs.search.brave.com/IveYIdce_SlYb1FSYAyxz25L6ENZPc4HjOSogSOYzMI/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMThkNjAxMWNi/Yzg1YmI1YWQ3NWEz/ZjMxNzA3MTc4YWU0/MjA2N2M3YTUxYmZh/YjAwMGM3OTQ0Njlh/OTUzOWJhOC93d3cu/YWRpY3Rpei5jb20v"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "article",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "adictiz.com",
						"hostname": "www.adictiz.com",
						"favicon": "https://imgs.search.brave.com/IveYIdce_SlYb1FSYAyxz25L6ENZPc4HjOSogSOYzMI/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMThkNjAxMWNi/Yzg1YmI1YWQ3NWEz/ZjMxNzA3MTc4YWU0/MjA2N2M3YTUxYmZh/YjAwMGM3OTQ0Njlh/OTUzOWJhOC93d3cu/YWRpY3Rpei5jb20v",
						"path": "  › accueil  › ludopédagogie : pourquoi utiliser le jeu interactif dans l’apprentissage"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/1DcgRZ4UBFnEPb3Dac8zLDJjZZpPuUSsHwggrsdQ60U/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/YWRpY3Rpei5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjQv/MDYvYWRpY3Rpei1i/b3gtdmlzdWFsLndl/YnA",
						"original": "https://www.adictiz.com/wp-content/uploads/2024/06/adictiz-box-visual.webp",
						"logo": false
					},
					"age": "November 20, 2025",
					"article": {
						"author": [
							{
								"type": "person",
								"name": "Audrey Edart"
							}
						],
						"date": "Apr 14, 2025",
						"publisher": {
							"type": "organization",
							"name": "Adictiz",
							"url": "https://www.adictiz.com/",
							"thumbnail": {
								"src": "https://imgs.search.brave.com/y_J23nuSAVn1xiV4hX9TNPTyZHQpT-w8Rz2SKR-P0MM/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/YWRpY3Rpei5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDQvTG9nby1hZGlj/dGl6LTY5Ni53ZWJw",
								"original": "https://www.adictiz.com/wp-content/uploads/2023/04/Logo-adictiz-696.webp"
							}
						}
					},
					"extra_snippets": [
						"Lorsque vous introduisez la gamification en RH avec une activité ludo-éducative, il est important de bien choisir son jeu en fonction des participants. Dans un premier temps, nous conseillons de se tourner vers des jeux simples, auxquels les apprenants sont déjà familiarisés. Un trivia ou un quiz sera par exemple un excellent choix, puisque les participants en connaissent déjà les règles.",
						"Pour résumer, la ludopédagogie c’est apprendre en s’amusant et de façon participative. On imagine très facilement comment ce concept peut être mobilisé dans l’apprentissage des jeunes enfants.",
						"Une hausse de la compréhension de connaissances conceptuelles de 11 % ; Une augmentation de la capacité de rétention de l’information de 9 %. Créer un jeu interactif dans le cadre de modules de formation professionnelle présente donc un réel potentiel de maximiser son impact. Mais ce n’est pas le seul avantage de la ludopédagogie",
						"Le concept de gamification implique également d’encourager les efforts des participants via un système de récompenses. Ces dernières peuvent être un bon moyen de motiver ses employés, voire de créer un effet d’émulation. La ludopédagogie est un outil qui a besoin d’être contextualisé."
					]
				},
				{
					"title": "Ludopédagogie et évaluations - by Sonia Mangin",
					"url": "https://soniamanginalegriagogia.substack.com/p/ludopedagogie-et-evaluations",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Apprécié pour sa facilité de correction, le quiz peut s’avérer pourtant contre-productif car la réponse peut être hasardeuse ou la question mal interprétée. Aussi, d’autres modalités d’évaluation ludopédagogique peuvent s’y substituer.",
					"page_age": "2024-06-03T06:02:10",
					"profile": {
						"name": "Substack",
						"url": "https://soniamanginalegriagogia.substack.com/p/ludopedagogie-et-evaluations",
						"long_name": "soniamanginalegriagogia.substack.com",
						"img": "https://imgs.search.brave.com/j7tf2NVaCE1idrKFln0mFyxUG--VOfGeyFIyoQtBtYs/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNmMwNzMwNDYz/NTRlYjI1OTRlNmRi/YjExY2E4NDUyN2Rl/ZTRkYTM4MTA3MTU3/YjdkZmIwMDg1NThm/M2UxZjgyZi9zb25p/YW1hbmdpbmFsZWdy/aWFnb2dpYS5zdWJz/dGFjay5jb20v"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "article",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "soniamanginalegriagogia.substack.com",
						"hostname": "soniamanginalegriagogia.substack.com",
						"favicon": "https://imgs.search.brave.com/j7tf2NVaCE1idrKFln0mFyxUG--VOfGeyFIyoQtBtYs/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNmMwNzMwNDYz/NTRlYjI1OTRlNmRi/YjExY2E4NDUyN2Rl/ZTRkYTM4MTA3MTU3/YjdkZmIwMDg1NThm/M2UxZjgyZi9zb25p/YW1hbmdpbmFsZWdy/aWFnb2dpYS5zdWJz/dGFjay5jb20v",
						"path": "› p  › ludopedagogie-et-evaluations"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/uByrP8dDZOrzp2R_w8MyMHrsw_EJHDMZTo9iijqZql8/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9zdWJz/dGFjay1wb3N0LW1l/ZGlhLnMzLmFtYXpv/bmF3cy5jb20vcHVi/bGljL2ltYWdlcy8w/ZDZmYjRlNS0wMjM3/LTQxOTMtYTY1My00/ZTVhMWNhMmNlYTNf/MTIwMHgxMjAwLnBu/Zw",
						"original": "https://substack-post-media.s3.amazonaws.com/public/images/0d6fb4e5-0237-4193-a653-4e5a1ca2cea3_1200x1200.png",
						"logo": false
					},
					"age": "June 3, 2024",
					"article": {
						"author": [
							{
								"type": "person",
								"name": "Sonia Mangin",
								"url": "https://substack.com/@soniamanginalegriagogia",
								"thumbnail": {
									"src": "https://imgs.search.brave.com/oXNeJ83V-Sd52twQK4ZJ1maHn_uKtOBpyQ_tY-pYEQo/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9zdWJz/dGFja2Nkbi5jb20v/aW1hZ2UvZmV0Y2gv/JHNfIW13elchLGZf/YXV0byxxX2F1dG86/Z29vZCxmbF9wcm9n/cmVzc2l2ZTpzdGVl/cC9odHRwcyUzQSUy/RiUyRnN1YnN0YWNr/LXBvc3QtbWVkaWEu/czMuYW1hem9uYXdz/LmNvbSUyRnB1Ymxp/YyUyRmltYWdlcyUy/RmI5MzhiMWNjLWRi/ODQtNDRhNS04NDY2/LWY4N2M4NTk2ZDcw/ZV81Nng1Ni5wbmc",
									"original": "https://substackcdn.com/image/fetch/$s_!mwzW!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb938b1cc-db84-44a5-8466-f87c8596d70e_56x56.png"
								}
							}
						],
						"date": "Jun 03, 2024",
						"publisher": {
							"type": "organization",
							"name": "LudiLundi, la revue de la ludopédagogie",
							"url": "https://soniamanginalegriagogia.substack.com",
							"thumbnail": {
								"src": "https://imgs.search.brave.com/O3AUsUvVzF-Iiaf8Jfs47DVqp3ap-Xnf-MgMQzxfPhk/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9zdWJz/dGFja2Nkbi5jb20v/aW1hZ2UvZmV0Y2gv/JHNfITZ0ajAhLGZf/YXV0byxxX2F1dG86/Z29vZCxmbF9wcm9n/cmVzc2l2ZTpzdGVl/cC9odHRwcyUzQSUy/RiUyRnN1YnN0YWNr/LXBvc3QtbWVkaWEu/czMuYW1hem9uYXdz/LmNvbSUyRnB1Ymxp/YyUyRmltYWdlcyUy/RmIzM2EyODlkLTky/ZTAtNDRjZi05MTFm/LTM1ODE1ODJhMmEx/NF84MzV4ODM1LnBu/Zw",
								"original": "https://substackcdn.com/image/fetch/$s_!6tj0!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb33a289d-92e0-44cf-911f-3581582a2a14_835x835.png"
							}
						},
						"isAccessibleForFree": false
					},
					"extra_snippets": [
						"Il n’est pas rare de trouver en guise d’évaluation formative, voire sommative, des questionnaires à choix unique ou à choix multiple, autrement appelés quiz.",
						"Car oui, un quiz, activité souvent pressentie pour ludifier une évaluation, n’est rien d’autre qu’un questionnaire.",
						"Au sommaire de cet article"
					]
				},
				{
					"title": "Ludomaker - UFR LLSHS - Université Sorbonne Paris Nord",
					"url": "https://llshs.univ-paris13.fr/unites-recherche-plateformes/ludomaker/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Mis en place par le département des sciences de l’éducation de l’université Sorbonne Paris Nord, dans le cadre de l’appel à projet de l’IDEX « Pédagogies innovantes », cet espace offre aux étudiants, aux enseignants et aux chercheurs la possibilité de découvrir, concevoir, prototyper et tester des produits et des applications ludiques, éducatives ou non : jouets, jeux de société, jeux vidéo … ... Le Fab Lab fonctionne selon deux logiques : une première, que l’on pourrait qualifier de “formelle”, inscrit l’usage de ce dispositif dans des cursus universitaires. Dans le cadre d’UE spécifiquement orientées autour de problématiques de design, de conception et de création de supports ludiques et/ou éducatifs, le Fab Lab est accessible aux étudiants, aux enseignants, aux chercheurs et aux professionnels (game designer).",
					"page_age": "2020-01-29T09:59:28",
					"profile": {
						"name": "Université Paris 13",
						"url": "https://llshs.univ-paris13.fr/unites-recherche-plateformes/ludomaker/",
						"long_name": "llshs.univ-paris13.fr",
						"img": "https://imgs.search.brave.com/xRGkbg64ACUQzA46urlKFM2QSyJgtETaFAPQUkJ2j6k/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMGJkM2NhYTBj/ODNmMzNlNTU0MzI4/ZmQ5MmEwMjY1NTll/NmY4YWEzNzVmNzM4/OGM2M2IzMjk1ZDAx/ZDFhODAzMy9sbHNo/cy51bml2LXBhcmlz/MTMuZnIv"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "llshs.univ-paris13.fr",
						"hostname": "llshs.univ-paris13.fr",
						"favicon": "https://imgs.search.brave.com/xRGkbg64ACUQzA46urlKFM2QSyJgtETaFAPQUkJ2j6k/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMGJkM2NhYTBj/ODNmMzNlNTU0MzI4/ZmQ5MmEwMjY1NTll/NmY4YWEzNzVmNzM4/OGM2M2IzMjk1ZDAx/ZDFhODAzMy9sbHNo/cy51bml2LXBhcmlz/MTMuZnIv",
						"path": "  › accueil  › unités de recherche, plateformes et structures  › ludomaker"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/WhX0cMP9RqaoTpBoUNxqA93qnbOI0p_CPhLtycihIpY/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9sbHNo/cy51bml2LXBhcmlz/MTMuZnIvd3AtY29u/dGVudC91cGxvYWRz/L3ZpZ25ldHRlLWx1/ZG9tYWtlci5qcGc",
						"original": "https://llshs.univ-paris13.fr/wp-content/uploads/vignette-ludomaker.jpg",
						"logo": false
					},
					"age": "January 29, 2020",
					"extra_snippets": [
						"Ludomaker GameLab dédié à la conception de jeux, de jouets et de dispositifs ludiques. Inauguré en juin 2016, Ludomaker est un “jeune” Fab Lab dédié à la conception de jeux, de jouets et de dispositifs ludiques. Il a pour principale mission d’être un lieu de formation, de recherche et d’innovation dans le domaine des produits […]",
						"Inauguré en juin 2016, Ludomaker est un “jeune” Fab Lab dédié à la conception de jeux, de jouets et de dispositifs ludiques. Il a pour principale mission d’être un lieu de formation, de recherche et d’innovation dans le domaine des produits et des industries culturelles, tout particulièrement celles liées au jeu (vidéo) et à l’éducation.",
						"Mis en place par le département des sciences de l’éducation de l’université Sorbonne Paris Nord, dans le cadre de l’appel à projet de l’IDEX « Pédagogies innovantes », cet espace offre aux étudiants, aux enseignants et aux chercheurs la possibilité de découvrir, concevoir, prototyper et tester des produits et des applications ludiques, éducatives ou non : jouets, jeux de société, jeux vidéo … ... Le Fab Lab fonctionne selon deux logiques : une première, que l’on pourrait qualifier de “formelle”, inscrit l’usage de ce dispositif dans des cursus universitaires. Dans le cadre d’UE spécifiquement orientées autour de problématiques de design, de conception et de création de supports ludiques et/ou éducatifs, le Fab Lab est accessible aux étudiants, aux enseignants, aux chercheurs et aux professionnels (game designer).",
						"Hors du temps institutionnel des formations, le dispositif est ouvert aux initiatives individuelles et aux projets personnels des étudiants, des enseignants et du personnel de l’université USPC. Des initiatives personnelles de conception, de création et d’innovation sont encouragées et soutenues dans le cadre bien sûr des possibilités légales, techniques et humaines du lieu."
					]
				},
				{
					"title": "Idées reçues et nouvelles pistes de réflexion sur les jeux ...",
					"url": "https://www.openscience.fr/Numero-1-678",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Dans le cadre d’une recherche sur la conception d’un produit culturel destiné aux enfants (une bande dessinée et le dessin animé qui en a été adapté), nous avons étudié une application dérivée du même univers, outil de promotion commandé par la chaîne de télévision coproductrice. Dans le cadre de cette étude de cas, nous avons analysé la place de l’action proposée à l’enfant à travers différents dispositifs considérés comme interactifs dont le jeu, ainsi que les discours produits par les conceptrices.",
					"profile": {
						"name": "Openscience",
						"url": "https://www.openscience.fr/Numero-1-678",
						"long_name": "openscience.fr",
						"img": "https://imgs.search.brave.com/z6fTK2Efly4Sk3B5UIGF5RUHbQ_zbih_Py9dPqtfomk/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNjE4YzY5NDk2/MTlmZDMxOWQxMzFh/ZDcyN2MyOTBhZTMw/MGI1NzllYzgxNTAw/ZTI5ZThlM2M3NTNj/NDBmZGE0Mi93d3cu/b3BlbnNjaWVuY2Uu/ZnIv"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "openscience.fr",
						"hostname": "www.openscience.fr",
						"favicon": "https://imgs.search.brave.com/z6fTK2Efly4Sk3B5UIGF5RUHbQ_zbih_Py9dPqtfomk/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNjE4YzY5NDk2/MTlmZDMxOWQxMzFh/ZDcyN2MyOTBhZTMw/MGI1NzllYzgxNTAw/ZTI5ZThlM2M3NTNj/NDBmZGE0Mi93d3cu/b3BlbnNjaWVuY2Uu/ZnIv",
						"path": "› Numero-1-678"
					},
					"extra_snippets": [
						"La ludopédagogie en école de management : le cas du projet EdUTeam ... Au début des années 2010, l’Association Information et Management (AIM) créait un groupe de recherche sur les jeux sérieux afin d’accompagner les praticiens dans l’implémentation de ces dispositifs dans les sciences de gestion.",
						"Nous explorons dans cet article le concept de ludopédagogie à travers une approche sociologique et d’une analyse de contenu afin de connaître son usage actuel et sa signification.",
						"Dans le cadre d’une recherche sur la conception d’un produit culturel destiné aux enfants (une bande dessinée et le dessin animé qui en a été adapté), nous avons étudié une application dérivée du même univers, outil de promotion commandé par la chaîne de télévision coproductrice. Dans le cadre de cette étude de cas, nous avons analysé la place de l’action proposée à l’enfant à travers différents dispositifs considérés comme interactifs dont le jeu, ainsi que les discours produits par les conceptrices.",
						"À cette fin, nous interrogeons la manière dont trois paradigmes - éducation par les jeux (vidéo), éducation aux jeux (vidéo) et gamification - affectent les objets et les expériences (vidéo)ludiques, tout en infléchissant les rapports que les publics visés entretiennent avec les savoirs travaillés en classe, dans les dispositifs qui les mettent en oeuvre."
					]
				},
				{
					"title": "Modèles de quiz et de jeux éducatifs | Genially",
					"url": "https://genially.com/fr/modeles/jeux/education/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Évaluez vos étudiant·e·s et recueillez les retours de votre audience avec des questions interactives.",
					"page_age": "2024-10-10T06:06:21",
					"profile": {
						"name": "Genially",
						"url": "https://genially.com/fr/modeles/jeux/education/",
						"long_name": "genially.com",
						"img": "https://imgs.search.brave.com/neC27oiwUc1MLxv1Jt--583t0ENMEaxU_jZEFOhAq4o/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMzY1ZGZjYTFh/MzZmNTE0MTE0MjZj/YzU3YTcyMDc2ZWE2/MjdjMDg4NmFlN2Ri/YmI2NDBlOGNkMzM2/ZDczZTAzYy9nZW5p/YWxseS5jb20v"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "faq",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "genially.com",
						"hostname": "genially.com",
						"favicon": "https://imgs.search.brave.com/neC27oiwUc1MLxv1Jt--583t0ENMEaxU_jZEFOhAq4o/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMzY1ZGZjYTFh/MzZmNTE0MTE0MjZj/YzU3YTcyMDc2ZWE2/MjdjMDg4NmFlN2Ri/YmI2NDBlOGNkMzM2/ZDczZTAzYy9nZW5p/YWxseS5jb20v",
						"path": "  › modèles  › jeux  › jeux éducatifs"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/6rY-brDi5qkY_lZK1IoAtX_T3tRnQZlpl8X7jzuHz7M/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuZ2VuaWFsbHku/Y29tL3MzZnMtcHVi/bGljL2ltYWdlcy9n/ZW5pYWxseS5jb21f/LnBuZw",
						"original": "https://assets.genially.com/s3fs-public/images/genially.com_.png",
						"logo": false
					},
					"age": "October 10, 2024",
					"faq": {
						"items": [
							{
								"question": "Jeux éducatifs en ligne par Genially",
								"answer": "<p>Vous voulez que vos élèves soient motivés et qu’ils adorent vos cours ? Découvrez les jeux éducatifs en ligne de Genially, c’est le meilleur moyen de stimuler vos élèves. </p>\n<p> </p>\n<p>Avec les modèles de jeux en ligne gratuits de Genially, tout le monde peut créer des jeux à jouer à la maison, des jeux éducatifs pour la classe et des jeux vidéo amusants pour le e-learning, en un rien de temps. </p>\n<p> </p>\n<p>Peu importe que vos élèves étudient en primaire, au lycée, à l’université ou qu’ils suivent une formation.  Les design de Genially vont susciter l’intérêt et booster l’apprentissage des enfants comme des adultes en formation. </p>\n<p> </p>\n<p>Tous nos jeux éducatifs sont prêts à l’emploi. Vous n'avez pas besoin de connaissances techniques ou de compétences en design graphique pour créer vos propres jeux. Les modèles ont été créés par une équipe d’infographistes professionnels et comprennent des graphiques animés, des effets sonores sympas, de la musique et des boutons interactifs. Et en plus, ils sont très faciles à personnaliser.</p>\n<p> </p>\n<p>Pourquoi les jeux Genially sont-ils différents des autres ? Un maître mot : Interactivité Ces modèles contiennent des boutons cliquables, des pop-ups, des indices cachés, des effets sonores et des messages codés qui vont captiver vos élèves. Ils oublieront même qu'ils sont en classe !  C’est une expérience totalement immersive, pour les élèves de tout âge, et aussi engageante que les jeux de leurs smartphones. </p>\n<p> </p>\n<p>En plus des boutons interactifs, les modèles comprennent également des graphiques animés. Les effets visuels tels que les couleurs clignotantes, les images en mouvement et les dessins qui s'illuminent et font vibrer l'écran vont captiver vos élèves. </p>\n<p> </p>\n<p>Capter l'attention de vos élèves, animer la classe et éveiller son intérêt pour votre matière devient un jeu d’enfant. Et, bien sûr, vous pouvez aussi en profiter si vous avez des enfants à la maison.</p>",
								"title": "Modèles de quiz et de jeux éducatifs | Genially",
								"url": "https://genially.com/fr/modeles/jeux/education/",
								"meta_url": {
									"scheme": "https",
									"netloc": "genially.com",
									"hostname": "genially.com",
									"favicon": "https://imgs.search.brave.com/neC27oiwUc1MLxv1Jt--583t0ENMEaxU_jZEFOhAq4o/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMzY1ZGZjYTFh/MzZmNTE0MTE0MjZj/YzU3YTcyMDc2ZWE2/MjdjMDg4NmFlN2Ri/YmI2NDBlOGNkMzM2/ZDczZTAzYy9nZW5p/YWxseS5jb20v",
									"path": "  › modèles  › jeux  › jeux éducatifs"
								}
							},
							{
								"question": "Comment utiliser les jeux éducatifs en classe",
								"answer": "<p>Il existe de nombreuses façons d'intégrer des jeux dans vos cours. Par exemple, vous pouvez commencer par un plateau de jeu standard et adapter le thème à votre programme d’études. Essayez d'utiliser un jeu de cartes, un \"Qui suis-je\", un modèle de tableau blanc ou un modèle de jeu de mémoire. Personnalisez-le avec des images du monde réel, des exemples, des cartes et des documents thématiques, en histoire, en sciences, en mathématiques ou dans tout autre domaine.</p>\n<p> </p>\n<p>Vous pouvez également utiliser des modèles familiers. La galerie de modèles de Genially comprend un certain nombre de modèles de jeux de société modifiables. Il y a des modèles pour faire le jeu des serpents et des échelles, le tangram, le Monopoly, le jeu de l'oie, le toucher-couler et beaucoup d'autres plateaux de jeux pour enfants. Pour générer un peu d’émotion parmi vos élèves, essayez un modèle de jeu de roulette.</p>",
								"title": "Modèles de quiz et de jeux éducatifs | Genially",
								"url": "https://genially.com/fr/modeles/jeux/education/",
								"meta_url": {
									"scheme": "https",
									"netloc": "genially.com",
									"hostname": "genially.com",
									"favicon": "https://imgs.search.brave.com/neC27oiwUc1MLxv1Jt--583t0ENMEaxU_jZEFOhAq4o/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMzY1ZGZjYTFh/MzZmNTE0MTE0MjZj/YzU3YTcyMDc2ZWE2/MjdjMDg4NmFlN2Ri/YmI2NDBlOGNkMzM2/ZDczZTAzYy9nZW5p/YWxseS5jb20v",
									"path": "  › modèles  › jeux  › jeux éducatifs"
								}
							},
							{
								"question": "Qu'est-ce qu'une frise chronologique interactive ?",
								"answer": "<p>Si vous êtes enseignant, vôtre temps est compté. Idéalement, vous aurez le temps de préparer le jeu entre deux cours. </p>\n<p> </p>\n<p>Le moyen le plus simple et le plus rapide de concevoir un jeu en ligne est d'utiliser l'un des modèles de jeu en ligne gratuits de Genially. Il existe des jeux multijoueurs et individuels créés spécialement pour les enseignants, mais ils peuvent également être utilisés à la maison, pour jouer en famille. </p>\n<p> </p>\n<p>Choisissez celui que vous préférez et cliquez sur <em>Utiliser ce modèle</em>. Si vous utilisez Genially pour la première fois, il vous sera demandé de créer un compte gratuit. </p>\n<p> </p>\n<p>Personnalisez ensuite le jeu avec vos propres questions/réponses, et remplacez les images par les vôtres ou par des illustrations de la banque de ressources Genially. L'éditeur est très intuitif, et les modèles sont très faciles à modifier.</p>\n<p> </p>\n<p>Votre jeu est prêt ? Cliquez sur Publier... Tadaaam ! Voilà votre jeu en ligne. Vous pouvez le présenter dans la classe en présentiel ou partager votre écran pour un cours d’e-learning. </p>\n<p> </p>\n<p>Une autre option consiste à partager le lien directement avec vos élèves pour qu'ils puissent jouer individuellement ou en groupe. Si vous utilisez un LMS, téléchargez vos jeux avec le reste du matériel pédagogique. Vous voulez créer un jeu dans Google Classroom ? Il suffit de poster le lien du jeu Genially dans la rubrique devoirs. Amusez-vous bien !</p>",
								"title": "Modèles de quiz et de jeux éducatifs | Genially",
								"url": "https://genially.com/fr/modeles/jeux/education/",
								"meta_url": {
									"scheme": "https",
									"netloc": "genially.com",
									"hostname": "genially.com",
									"favicon": "https://imgs.search.brave.com/neC27oiwUc1MLxv1Jt--583t0ENMEaxU_jZEFOhAq4o/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMzY1ZGZjYTFh/MzZmNTE0MTE0MjZj/YzU3YTcyMDc2ZWE2/MjdjMDg4NmFlN2Ri/YmI2NDBlOGNkMzM2/ZDczZTAzYy9nZW5p/YWxseS5jb20v",
									"path": "  › modèles  › jeux  › jeux éducatifs"
								}
							}
						]
					},
					"extra_snippets": [
						"Évaluez vos étudiant·e·s et recueillez les retours de votre audience avec des questions interactives.",
						"Favorisez la concentration avec des cartes à retourner ou à faire défiler."
					]
				},
				{
					"title": "5 astuces pour intégrer la ludopédagogie dans vos formations",
					"url": "https://groupe-aps.fr/integrer-ludopedagogie-formations/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Sélectionner le format de jeu adapté En fonction de votre public, du sujet traité et du temps disponible, choisissez une approche pertinente : quiz interactif, jeu de rôle, escape game, serious game, etc. Tester, analyser et ajuster Recueillez des retours d’expérience, observez la réaction des apprenants et ajustez votre approche pour maximiser l’impact pédagogique. L’intégration de la ludopédagogie dans vos formations permet de rendre l’apprentissage plus dynamique, interactif et efficace.",
					"page_age": "2025-04-07T06:43:46",
					"profile": {
						"name": "APSFE",
						"url": "https://groupe-aps.fr/integrer-ludopedagogie-formations/",
						"long_name": "groupe-aps.fr",
						"img": "https://imgs.search.brave.com/uY-wJaaViMXBm7LdLIpluKNDGyBQRWYPJBo4NyPddII/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNDI0ZTQyYjE1/YTYwMDE1NDA1ZmE4/ZTc4NDBlNTk5MzI1/YThmMWU0MDYzNTNk/ZjczOThjNjllMDk0/N2RkN2M0Mi9ncm91/cGUtYXBzLmZyLw"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "article",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "groupe-aps.fr",
						"hostname": "groupe-aps.fr",
						"favicon": "https://imgs.search.brave.com/uY-wJaaViMXBm7LdLIpluKNDGyBQRWYPJBo4NyPddII/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNDI0ZTQyYjE1/YTYwMDE1NDA1ZmE4/ZTc4NDBlNTk5MzI1/YThmMWU0MDYzNTNk/ZjczOThjNjllMDk0/N2RkN2M0Mi9ncm91/cGUtYXBzLmZyLw",
						"path": "  › accueil  › formation de formateur  › 5 astuces pour intégrer la…"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/JhZzEw9RPcb-p70GP-RgjE4V7tLBWFu2RUPDDYprlLM/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9ncm91/cGUtYXBzLmZyL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI1LzAy/L0x1ZG8tMS5wbmc",
						"original": "https://groupe-aps.fr/wp-content/uploads/2025/02/Ludo-1.png",
						"logo": false
					},
					"age": "April 7, 2025",
					"article": {
						"author": [
							{
								"type": "person",
								"name": "annepasselaigue@apsfe.fr"
							}
						],
						"date": "Apr 07, 2025"
					},
					"extra_snippets": [
						"Sélectionner le format de jeu adapté En fonction de votre public, du sujet traité et du temps disponible, choisissez une approche pertinente : quiz interactif, jeu de rôle, escape game, serious game, etc. Tester, analyser et ajuster Recueillez des retours d’expérience, observez la réaction des apprenants et ajustez votre approche pour maximiser l’impact pédagogique. L’intégration de la ludopédagogie dans vos formations permet de rendre l’apprentissage plus dynamique, interactif et efficace.",
						"Pour y remédier, la ludopédagogie est une approche innovante qui associe le jeu et la pédagogie afin de rendre l’enseignement plus interactif et motivant. En intégrant les 5 astuces pour intégrer la ludopédagogie dans vos formations, vous stimulez l’engagement des apprenants, améliorez la mémorisation des concepts et favorisez le plaisir d’apprendre.",
						"Que ce soit à travers la gamification, les serious games, les quiz interactifs, les jeux coopératifs ou encore le storytelling ludique, ces approches innovantes offrent de nombreux avantages pédagogiques et stimulent la motivation des apprenants. Envie d’aller plus loin ? Nous proposons la formations « Utiliser la ludopédagogie pour animer un groupe » pour vous aider à intégrer des méthodes pédagogiques modernes et à enrichir vos pratiques pédagogiques.",
						"Découvrez nos programmes et donnez un nouveau souffle à vos formations grâce à la ludopédagogie !"
					]
				},
				{
					"title": "Monsieur Mathieu – « Le jeu est sérieux […] c’est même travailler plus intensément que dans des situations de travail » Henriot",
					"url": "https://monsieurmathieu.fr/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Découvrez les ressources ludo-pédagogiques sur les 3R (Réduire, Réemployer, Recycler) pour les cycles 2, 3 et 4 de chez Club Citéo. <strong>Sur leur site vous aurez accès à des fiches enseignants, des quizz, des infographies et même une bande dessinée sur le recyclage, la réduction des déchets</strong> ...",
					"profile": {
						"name": "Monsieur Mathieu",
						"url": "https://monsieurmathieu.fr/",
						"long_name": "monsieurmathieu.fr",
						"img": "https://imgs.search.brave.com/id2bP1JHgtH-RRjjrU1KjYBbYSC8gs86utEdGWa0PWc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvODBjMmVlZjMw/YWI0NmRmZTNkMGZl/NGE0MGI0NTM3YzA5/N2I2NWY0MmJmOWRh/MGQ0ZWQzMDZiODNl/MDc5ZDZkMy9tb25z/aWV1cm1hdGhpZXUu/ZnIv"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "monsieurmathieu.fr",
						"hostname": "monsieurmathieu.fr",
						"favicon": "https://imgs.search.brave.com/id2bP1JHgtH-RRjjrU1KjYBbYSC8gs86utEdGWa0PWc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvODBjMmVlZjMw/YWI0NmRmZTNkMGZl/NGE0MGI0NTM3YzA5/N2I2NWY0MmJmOWRh/MGQ0ZWQzMDZiODNl/MDc5ZDZkMy9tb25z/aWV1cm1hdGhpZXUu/ZnIv",
						"path": ""
					},
					"extra_snippets": [
						"Découvrez les ressources ludo-pédagogiques sur les 3R (Réduire, Réemployer, Recycler) pour les cycles 2, 3 et 4 de chez Club Citéo. Sur leur site vous aurez accès à des fiches enseignants, des quizz, des infographies et même une bande dessinée sur le recyclage, la réduction des déchets et le réemploi.",
						"Dans le cadre de sa mission d’information, l’interprofession développe des supports et des animations pédagogiques réalisés dans le respect des programmes de l’éducation Nationale et du Programme national nutrition santé (PNNS4). Découvrez d’autres supports ludo pédagogiques sur son site https://www.monassiette-maplanete.fr/",
						"Depuis la rentrée 2021, Aprifel propose des dispositifs pédagogiques innovants sur l’éducation alimentaire, en particulier sur l’intérêt des fruits et légumes dans l’alimentation. Afin de compléter ces dispositifs, le jeu de société « J’en mange 5 !",
						"Un document complet qui peut servir de base pour construire vos séances d’Éducation au Développement Durable ! Pour vous abonner rien de plus simple cliquez sur ce lien: Abonner ma classe à Ecojunior · Je le rappelle il s’agit d’un magazine gratuit. Il vous sera livré par enveloppe de 28 exemplaires en novembre, mars et juin. Il est diffusé dans la limite de 15 000 abonnements donc ne tardez pas à inscrire votre classe. ... Aujourd’hui je souhaitais vous parler d’un dispositif vous aidant à lancer un cycle Savoir rouler à vélo dans votre école."
					]
				},
				{
					"title": "Quelle est la différence entre un jeu éducatif et un jeu ludo-pédagogi",
					"url": "https://jeunoh.fr/blogs/infos/quelle-est-la-difference-entre-un-jeu-educatif-et-un-jeu-ludo-pedagogique",
					"is_source_local": false,
					"is_source_both": false,
					"description": "<strong>Ils peuvent inclure des exercices, des quiz ou des questions à choix multiples pour évaluer la compréhension des joueurs</strong>. En revanche, les jeux ludo-pédagogiques cherchent à créer une expérience de jeu immersive et captivante.",
					"page_age": "2023-06-05T15:51:52",
					"profile": {
						"name": "super-co-quotidien",
						"url": "https://jeunoh.fr/blogs/infos/quelle-est-la-difference-entre-un-jeu-educatif-et-un-jeu-ludo-pedagogique",
						"long_name": "jeunoh.fr",
						"img": "https://imgs.search.brave.com/M31zlm_XApjFfr1a8WIf5gKWM4pegQo6k1m-JNsWUYU/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYzA0MTAyYzM5/ZTEzNGMzOTFkY2Jk/YWFlMGE1ZDI4ZWU3/NmE4YmY1MzBiNjE3/NDFjNDFhNWZlOGI2/NmMwOTA1Yy9qZXVu/b2guZnIv"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "article",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "jeunoh.fr",
						"hostname": "jeunoh.fr",
						"favicon": "https://imgs.search.brave.com/M31zlm_XApjFfr1a8WIf5gKWM4pegQo6k1m-JNsWUYU/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYzA0MTAyYzM5/ZTEzNGMzOTFkY2Jk/YWFlMGE1ZDI4ZWU3/NmE4YmY1MzBiNjE3/NDFjNDFhNWZlOGI2/NmMwOTA1Yy9qZXVu/b2guZnIv",
						"path": "› blogs  › infos  › quelle-est-la-difference-entre-un-jeu-educatif-et-un-jeu-ludo-pedagogique"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/PX60ApNN2s4CRO4HwqmLh7IVFaD0HKSnen-hzj6klVI/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9qZXVu/b2guZnIvY2RuL3No/b3AvYXJ0aWNsZXMv/RFNDMDY1NzNfYjRh/NWIzYmMtYmY1Yi00/ZjYwLWI3NzUtN2Fm/NDcxZDQ0YTA2Lmpw/Zz92PTE3NDEyNzkw/NjUmd2lkdGg9MTUw/MA",
						"original": "https://jeunoh.fr/cdn/shop/articles/DSC06573_b4a5b3bc-bf5b-4f60-b775-7af471d44a06.jpg?v=1741279065&width=1500",
						"logo": false
					},
					"age": "June 5, 2023",
					"article": {
						"author": [
							{
								"type": "person",
								"name": "Noémie OGNO"
							}
						],
						"date": "Jun 05, 2023",
						"publisher": {
							"type": "organization",
							"name": "super-co-quotidien",
							"thumbnail": {
								"src": "https://imgs.search.brave.com/PX60ApNN2s4CRO4HwqmLh7IVFaD0HKSnen-hzj6klVI/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9qZXVu/b2guZnIvY2RuL3No/b3AvYXJ0aWNsZXMv/RFNDMDY1NzNfYjRh/NWIzYmMtYmY1Yi00/ZjYwLWI3NzUtN2Fm/NDcxZDQ0YTA2Lmpw/Zz92PTE3NDEyNzkw/NjUmd2lkdGg9MTUw/MA",
								"original": "https://jeunoh.fr/cdn/shop/articles/DSC06573_b4a5b3bc-bf5b-4f60-b775-7af471d44a06.jpg?v=1741279065&width=1500"
							}
						}
					},
					"organization": {
						"type": "organization",
						"name": "super-co-quotidien",
						"contact_points": []
					},
					"extra_snippets": [
						"Les jeux éducatifs et les jeux ludo-pédagogiques sont deux types de jeux qui visent à promouvoir l'apprentissage et l'éducation. Bien que leurs objectifs soient similaires, il existe des nuances importantes entre ces deux termes. Dans cet article, nous allons explorer la distinction entre un jeu éducatif et un jeu ludo",
						"Dans cet article, nous allons explorer la distinction entre un jeu éducatif et un jeu ludo-pédagogique, en mettant en évidence leurs caractéristiques distinctes. Définitions : Commençons par clarifier les définitions. Un jeu éducatif est un jeu conçu pour enseigner des concepts ou développer des compétences chez les joueurs.",
						"Les jeux éducatifs sont souvent axés sur l'acquisition de connaissances et de compétences spécifiques, ce qui peut parfois donner l'impression d'une expérience plus scolaire. Ils peuvent inclure des exercices, des quiz ou des questions à choix multiples pour évaluer la compréhension des joueurs. En revanche, les jeux ludo-pédagogiques cherchent à créer une expérience de jeu immersive et captivante.",
						"Approche pédagogique : La principale distinction entre les jeux éducatifs et les jeux ludo-pédagogiques réside dans leur approche pédagogique. Les jeux éducatifs sont conçus pour atteindre des objectifs d'apprentissage précis."
					]
				},
				{
					"title": "Formation ludopédagogie : Apprendre en s'amusant | Techniques innovantes",
					"url": "https://www.competens.net/formation-la-ludopedagogie-apprendre-par-le-jeu-f-MOD2237",
					"is_source_local": false,
					"is_source_both": false,
					"description": "En cours de session : <strong>Evaluation formative des acquis du participant via les échanges, quiz et débriefing tout au long de la formation</strong>.",
					"profile": {
						"name": "Competens",
						"url": "https://www.competens.net/formation-la-ludopedagogie-apprendre-par-le-jeu-f-MOD2237",
						"long_name": "competens.net",
						"img": "https://imgs.search.brave.com/ysSty5KH1S9xTS_19qf51dt3FSYBnK4bxeZNzwnDHNU/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNjM1YjI2YzQy/NzA0MDE3ZDI2MmQ0/ODU0OTFlZGFlMzgx/YTlkZGJmNmY3ZmFh/ODljYmE4ZDYyNzMw/MjE0ZDNkZi93d3cu/Y29tcGV0ZW5zLm5l/dC8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "competens.net",
						"hostname": "www.competens.net",
						"favicon": "https://imgs.search.brave.com/ysSty5KH1S9xTS_19qf51dt3FSYBnK4bxeZNzwnDHNU/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNjM1YjI2YzQy/NzA0MDE3ZDI2MmQ0/ODU0OTFlZGFlMzgx/YTlkZGJmNmY3ZmFh/ODljYmE4ZDYyNzMw/MjE0ZDNkZi93d3cu/Y29tcGV0ZW5zLm5l/dC8",
						"path": "› formation-la-ludopedagogie-apprendre-par-le-jeu-f-MOD2237"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/EddVYJRvhSnat_iDkoCwFUVl3t2O2uFMOGSsZuMCVgQ/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/Y29tcGV0ZW5zLm5l/dC9tZWRpYS9jYWNo/ZS9hdHRhY2htZW50/L2ZpbHRlci9wcm9k/dWN0X2dhbGxlcnlf/bWFpbi9iNmQzYjEy/YTIxOTRmMjc2Mzc2/ZDY4MmQyZTdlNmJk/MS84NTc3OC82Nzlh/NmNhNzczNTI2MTYy/ODYyMjExLnBuZw",
						"original": "https://www.competens.net/media/cache/attachment/filter/product_gallery_main/b6d3b12a2194f276376d682d2e7e6bd1/85778/679a6ca773526162862211.png",
						"logo": false
					},
					"extra_snippets": [
						"Comprendre les fondements théoriques de la ludopédagogie · Maîtriser les techniques de conception et d'adaptation de jeux pédagogiques",
						"Cette formation d'une journée vous initie aux principes et pratiques de la ludopédagogie. Découvrez comment intégrer efficacement le jeu dans vos formations pour stimuler l'engagement, favoriser l'apprentissage et améliorer la rétention des connaissances.",
						"Aucune connaissance préalable en ludopédagogie n'est requise.",
						"En cours de session : Evaluation formative des acquis du participant via les échanges, quiz et débriefing tout au long de la formation."
					]
				}
			]
		},
		{
			"query": "le quiz est-il un levier d'apprentissage sérieux ou simple divertissement",
			"results": [
				{
					"title": "Les quiz en e-learning : un vrai levier d’apprentissage 🎓 | Toolearn",
					"url": "https://www.toolearn.fr/blog/pedagogie/les-quiz-en-e-learning-un-vrai-levier-apprentissage/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Dans le e-learning, <strong>les quiz sont souvent considérés comme de simples tests de fin de module</strong>. Pourtant, ils renforcent la mémorisation, stimulent l’engagement et aident les apprenants à retenir durablement les informations.",
					"page_age": "2026-03-17T15:39:05",
					"profile": {
						"name": "Toolearn",
						"url": "https://www.toolearn.fr/blog/pedagogie/les-quiz-en-e-learning-un-vrai-levier-apprentissage/",
						"long_name": "toolearn.fr",
						"img": "https://imgs.search.brave.com/lNjle87cPxeOIDXSjoUY5UDiYOfgA1I1hyCC0Y15bN0/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMTJlNzNlMDgw/NWIyOGUwYjNkMmM2/OThhYjE5YTM0YWM4/MTgxNDBkOTcwNWYy/MWRlODQ1NzU5YjUy/YTU2MDdkOC93d3cu/dG9vbGVhcm4uZnIv"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "article",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "toolearn.fr",
						"hostname": "www.toolearn.fr",
						"favicon": "https://imgs.search.brave.com/lNjle87cPxeOIDXSjoUY5UDiYOfgA1I1hyCC0Y15bN0/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMTJlNzNlMDgw/NWIyOGUwYjNkMmM2/OThhYjE5YTM0YWM4/MTgxNDBkOTcwNWYy/MWRlODQ1NzU5YjUy/YTU2MDdkOC93d3cu/dG9vbGVhcm4uZnIv",
						"path": "  › pédagogie  › les quiz en e-learning : un vrai levier d’apprentissage 🎓 | toolearn"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/yPDxN-YYX0qZCS9XSwMp3TUe-6SBpOtwPzxsvYcWnRw/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/dG9vbGVhcm4uZnIv/d3AtY29udGVudC91/cGxvYWRzLzIwMjYv/MDMvcXVpei1lbGVh/cm5pbmcucG5n",
						"original": "https://www.toolearn.fr/wp-content/uploads/2026/03/quiz-elearning.png",
						"logo": false
					},
					"age": "March 17, 2026",
					"article": {
						"author": [
							{
								"type": "person",
								"name": "dclic-admin",
								"url": "https://www.toolearn.fr/author/dclic-admin/",
								"thumbnail": {
									"src": "https://imgs.search.brave.com/TnfaawTR0_D-Zz0O4vM_jjG3u6kNdnNloMrObmZEzDs/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9zZWN1/cmUuZ3JhdmF0YXIu/Y29tL2F2YXRhci85/YzVkNWY3OTkwZDUz/OGNiMTE3NDNkODZl/NTM2MjkzMGQzOTE3/NjM0MzEzY2VmYTAy/M2IxNTQ5M2Q4NWY3/MTAyP3M9OTYmZD1t/bSZyPWc",
									"original": "https://secure.gravatar.com/avatar/9c5d5f7990d538cb11743d86e5362930d3917634313cefa023b15493d85f7102?s=96&d=mm&r=g"
								}
							}
						],
						"date": "Mar 17, 2026",
						"publisher": {
							"type": "organization",
							"name": "Toolearn",
							"url": "https://www.toolearn.fr"
						}
					},
					"extra_snippets": [
						"Dans le e-learning, les quiz sont souvent considérés comme de simples tests de fin de module. Pourtant, ils renforcent la mémorisation, stimulent l’engagement et aident les apprenants à retenir durablement les informations. La recherche en psychologie cognitive l’a montré : se tester après avoir étudié une information améliore significativement la…",
						"Trop facile, l’apprenant s’ennuie 😴 ; trop difficile, il se décourage 😣. La zone proximale de développement décrite par Lev Vygotsky montre que l’apprentissage est optimal lorsque la tâche est légèrement au-dessus du niveau de compétence actuel mais reste accessible avec un effort 💪.",
						"Exemple concret : Certains modules utilisent des quiz adaptatifs 🔧 : si l’apprenant réussit, les questions deviennent plus complexes. S’il rencontre des difficultés, il reçoit des explications ou des ressources supplémentaires pour progresser.",
						"Les quiz deviennent efficaces lorsqu’ils incluent un retour sur les réponses."
					]
				},
				{
					"title": "Définition quizz : origine, usages et conseils pour bien utiliser le quiz",
					"url": "https://www.europe-etiquettes.fr/logiciel/definition-quiz-origines-usages-conseils-pratiques",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Retenez bien ceci : le quiz digital n’est plus seulement accessible, il est devenu incontournable – utilisé par tous les âges sur tous les supports (mobile inclus), <strong>il fait tomber les barrières entre apprentissage sérieux et plaisir coupable</strong>…...",
					"page_age": "2025-07-27T01:23:53",
					"profile": {
						"name": "Europe Etiquettes",
						"url": "https://www.europe-etiquettes.fr/logiciel/definition-quiz-origines-usages-conseils-pratiques",
						"long_name": "europe-etiquettes.fr",
						"img": "https://imgs.search.brave.com/S27q7Wv1XJVreMVmWSJ7eLbdS9faNx2B9nL-BpXRkFY/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYmFjZDNhYzNj/N2FiYTI2MDNhNjIz/MTdiYzdkMDFjOTI0/NDIzODEzNTYxMzBm/Njk4NTk0YzNmYmE4/NTAxODNmMS93d3cu/ZXVyb3BlLWV0aXF1/ZXR0ZXMuZnIv"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "article",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "europe-etiquettes.fr",
						"hostname": "www.europe-etiquettes.fr",
						"favicon": "https://imgs.search.brave.com/S27q7Wv1XJVreMVmWSJ7eLbdS9faNx2B9nL-BpXRkFY/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYmFjZDNhYzNj/N2FiYTI2MDNhNjIz/MTdiYzdkMDFjOTI0/NDIzODEzNTYxMzBm/Njk4NTk0YzNmYmE4/NTAxODNmMS93d3cu/ZXVyb3BlLWV0aXF1/ZXR0ZXMuZnIv",
						"path": "› logiciel  › definition-quiz-origines-usages-conseils-pratiques"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/aYcuaXq5EAUqCHoBu_VVAudJ0xdsJ5aPniR4i-GLo1g/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/ZXVyb3BlLWV0aXF1/ZXR0ZXMuZnIvZGF0/YS9zdHlsZXMvMTIw/MHg2NzUvcHVibGlj/L2RlZmluaXRpb25f/cXVpenpfdGh1bWJu/YWlsX2NvdmVyLmpw/Zy5qcGc_aXRvaz1E/ci1GaHNRbg",
						"original": "https://www.europe-etiquettes.fr/data/styles/1200x675/public/definition_quizz_thumbnail_cover.jpg.jpg?itok=Dr-FhsQn",
						"logo": false
					},
					"age": "July 27, 2025",
					"article": {
						"author": [
							{
								"type": "person",
								"name": "Ulysse Auriol"
							}
						]
					},
					"organization": {
						"type": "organization",
						"name": "Europe Etiquettes",
						"contact_points": []
					},
					"extra_snippets": [
						"Définition quizz : découvrez ce qu’est un quiz, ses origines, ses différents usages (jeu, e-learning, marketing) et nos conseils pratiques pour concevoir ou animer vos propres quiz.",
						"Un outil interactif dopé à l’IA qui personnalise questions et parcours selon vos lacunes (même celles dont vous n’aviez pas conscience…). Les entreprises découvrent un levier redoutable pour former leurs troupes sans anesthésier leur motivation. Retenez bien ceci : le quiz digital n’est plus seulement accessible, il est devenu incontournable – utilisé par tous les âges sur tous les supports (mobile inclus), il fait tomber les barrières entre apprentissage sérieux et plaisir coupable…",
						"Arrive ensuite la préhistoire digitale du quiz : la télévision. Des émissions telles que \"Le Jeu des 1000 francs\" ou encore \"Questions pour un champion\" transforment le salon moyen en ring intellectuel national. Les familles se challengent sur le canapé à coups de réponses plus ou moins inspirées (“capitale de la Mongolie ?”). Le phénomène transcende le simple divertissement : il devient rituel social et ascenseur culturel.",
						"Ses usages ? Multiples : apprendre, évaluer, qualifier… à condition de ne pas le saboter avec des questions mal fichues ou des objectifs flous. Arrêtez de voir le quiz comme un gadget pour apéros d’équipe : c’est un levier business aux effets mesurables."
					]
				},
				{
					"title": "Qu'est-ce qu'un quiz et comment le réaliser ?",
					"url": "https://kwiga.com/fr/blog/qu-est-ce-qu-un-quiz-et-comment-le-creer",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Ces quiz sont créés pour augmenter ... dans le cadre de campagnes publicitaires. <strong>Ils peuvent être légers et amusants ou plus sérieux et éducatifs, selon les objectifs et le contexte</strong>....",
					"page_age": "2025-12-04T18:07:44",
					"profile": {
						"name": "Kwiga",
						"url": "https://kwiga.com/fr/blog/qu-est-ce-qu-un-quiz-et-comment-le-creer",
						"long_name": "kwiga.com",
						"img": "https://imgs.search.brave.com/NmPrLQzBOX6c0xnJAYW7ewwJ0JKePHCh-6G6ncFDPHM/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMTc5ZjhjYTNh/ZDM3ZGQyM2RhNDc2/NDk1ODBkYzY0Njkz/OTBlMWJiODUyNjI5/ZWU2MzdmMDQ2NWU3/YzA5ZDQ0MS9rd2ln/YS5jb20v"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "kwiga.com",
						"hostname": "kwiga.com",
						"favicon": "https://imgs.search.brave.com/NmPrLQzBOX6c0xnJAYW7ewwJ0JKePHCh-6G6ncFDPHM/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMTc5ZjhjYTNh/ZDM3ZGQyM2RhNDc2/NDk1ODBkYzY0Njkz/OTBlMWJiODUyNjI5/ZWU2MzdmMDQ2NWU3/YzA5ZDQ0MS9rd2ln/YS5jb20v",
						"path": "  › principal  › blog  › qu'est-ce qu'un quiz et comment le créer?"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/0EYLjcB3Z0MQC3clby1ItIMe3g2-KoQ58rKNVic8z3I/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9jZG4x/LWFkbWluLmt3aWdh/Y2RuLmNvbS9wb3N0/cy9iaWctcHJldmll/dy9jcmVhdGUtcXVp/ei1wcmV2aWV3Lmpw/Zw",
						"original": "https://cdn1-admin.kwigacdn.com/posts/big-preview/create-quiz-preview.jpg",
						"logo": false
					},
					"age": "December 4, 2025",
					"extra_snippets": [
						"Des soirées trivia dans les pubs aux quizz en ligne partagés sur les réseaux sociaux, les quizz ont trouvé leur place dans le divertissement, offrant une expérience agréable et intellectuellement stimulante aux participants. Les quizz peuvent prendre de nombreuses formes, allant des évaluations traditionnelles sur papier aux plateformes en ligne de pointe qui utilisent des éléments multimédias et un score en temps réel. Quelle que soit leur forme, les quizz sont des outils précieux pour l'apprentissage, l'évaluation et l'engagement dans divers contextes.",
						"À son essence, il s'agit d'un ensemble de questions conçues pour évaluer les connaissances, compétences ou aptitudes d'une personne dans un sujet ou un domaine particulier. C'est un outil largement utilisé dans les contextes éducatifs, les lieux de travail et même à des fins de divertissement.",
						"Ces quiz sont créés pour augmenter l'interaction et maintenir l'attention de l'audience ; ils sont donc souvent utilisés lors d'événements, sur les réseaux sociaux ou dans le cadre de campagnes publicitaires. Ils peuvent être légers et amusants ou plus sérieux et éducatifs, selon les objectifs et le contexte.",
						"Les quiz éducatifs sont conçus pour enseigner et évaluer les connaissances. Ils peuvent être utilisés dans les écoles, les universités ou sur des plateformes en ligne pour l'auto-apprentissage. Ces quiz couvrent un large éventail de sujets, de la science et de l'histoire aux langues et aux mathématiques."
					]
				},
				{
					"title": "Le quiz en formation : un outil classique… qu’il faut savoir bien utiliser | Communotic",
					"url": "https://communotic.normandie.fr/actualites/le-quiz-en-formation-un-outil-classique-quil-faut-savoir-bien-utiliser",
					"is_source_local": false,
					"is_source_both": false,
					"description": "« Le quiz a ceci d’intéressant qu’<strong>il est à la fois un outil formatif et sommatif</strong> », analyse Samuëlle Dilé, experte en pédagogie multimodale. « Du point de vue formatif, il constitue une aide au processus d’apprentissage, que ce soit en termes de compréhension ou de mémorisation.",
					"profile": {
						"name": "Normandie",
						"url": "https://communotic.normandie.fr/actualites/le-quiz-en-formation-un-outil-classique-quil-faut-savoir-bien-utiliser",
						"long_name": "communotic.normandie.fr",
						"img": "https://imgs.search.brave.com/-oS7ByNSnXjz_I4nU0yYgY9LO2M_BQ6c19qY34_DVdM/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNDhjYzUwNjc1/MWY3MWM3MDhlZGIy/MjFjYWNkNzMyM2Q1/N2MyOTEwNTM3YWYx/NTMxYjZiOGRhYzk3/N2IzN2UwOC9jb21t/dW5vdGljLm5vcm1h/bmRpZS5mci8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "communotic.normandie.fr",
						"hostname": "communotic.normandie.fr",
						"favicon": "https://imgs.search.brave.com/-oS7ByNSnXjz_I4nU0yYgY9LO2M_BQ6c19qY34_DVdM/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNDhjYzUwNjc1/MWY3MWM3MDhlZGIy/MjFjYWNkNzMyM2Q1/N2MyOTEwNTM3YWYx/NTMxYjZiOGRhYzk3/N2IzN2UwOC9jb21t/dW5vdGljLm5vcm1h/bmRpZS5mci8",
						"path": "› actualites  › le-quiz-en-formation-un-outil-classique-quil-faut-savoir-bien-utiliser"
					},
					"extra_snippets": [
						"Il s’agit d’un levier fréquemment actionné en formation, et ce depuis longtemps : le quiz, à savoir le jeu par questions/réponses (ouvertes et fermées), constitue l’un des moyens les plus classiques à mobiliser dès lors qu’il s’agit de valider les acquis des apprenants.",
						"« Le quiz a ceci d’intéressant qu’il est à la fois un outil formatif et sommatif », analyse Samuëlle Dilé, experte en pédagogie multimodale. « Du point de vue formatif, il constitue une aide au processus d’apprentissage, que ce soit en termes de compréhension ou de mémorisation."
					]
				},
				{
					"title": "Les quiz en e-learning : un vrai levier d’apprentissage",
					"url": "https://digital-learning-academy.com/les-quiz-en-e-learning-un-vrai-levier-dapprentissage/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Trop facile, l’apprenant s’ennuie 😴 ; trop difficile, il se décourage 😣. La zone proximale de développement décrite par Lev Vygotsky montre que l’apprentissage est optimal lorsque la tâche est légèrement au-dessus du niveau de compétence actuel mais reste accessible avec un effort 💪.",
					"page_age": "2026-03-26T09:41:22",
					"profile": {
						"name": "Digital Learning Academy",
						"url": "https://digital-learning-academy.com/les-quiz-en-e-learning-un-vrai-levier-dapprentissage/",
						"long_name": "digital-learning-academy.com",
						"img": "https://imgs.search.brave.com/U60eV_zil1PgYF8O8xHm-pbdMdfYljlQDSbiItObW-E/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNmI3YTQ1NGNi/OWNmZjMyNGRmOWU2/NWUzMTZlMTM4MTRj/NzMzZDQyYTE3M2Uw/NGI0MjQ4N2Q4YWFj/ZTY2M2ViNy9kaWdp/dGFsLWxlYXJuaW5n/LWFjYWRlbXkuY29t/Lw"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "article",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "digital-learning-academy.com",
						"hostname": "digital-learning-academy.com",
						"favicon": "https://imgs.search.brave.com/U60eV_zil1PgYF8O8xHm-pbdMdfYljlQDSbiItObW-E/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNmI3YTQ1NGNi/OWNmZjMyNGRmOWU2/NWUzMTZlMTM4MTRj/NzMzZDQyYTE3M2Uw/NGI0MjQ4N2Q4YWFj/ZTY2M2ViNy9kaWdp/dGFsLWxlYXJuaW5n/LWFjYWRlbXkuY29t/Lw",
						"path": "  › accueil  › les quiz en e-learning : un vrai levier d’apprentissage"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/gsEYoyJUurivbvu76t1uzNkYCoOGZSsndPeG_jyiyaA/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9kaWdp/dGFsLWxlYXJuaW5n/LWFjYWRlbXkuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDI2/LzAzL3F1aXotZWxl/YXJuaW5nLnBuZy53/ZWJw",
						"original": "https://digital-learning-academy.com/wp-content/uploads/2026/03/quiz-elearning.png.webp",
						"logo": false
					},
					"age": "March 26, 2026",
					"article": {
						"author": [
							{
								"type": "person",
								"name": "Philippe LACROIX"
							}
						],
						"date": "Apr 01, 2026",
						"publisher": {
							"type": "organization",
							"name": "Digital Learning Academy",
							"url": "https://digital-learning-academy.com/",
							"thumbnail": {
								"src": "https://imgs.search.brave.com/Z3VWxzcLcGiiQE9kuxQ6zqDzUSqLOYC-VUNYcQNj4Jw/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9kaWdp/dGFsLWxlYXJuaW5n/LWFjYWRlbXkuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIz/LzAxL2lsZGkxLndl/YnA",
								"original": "https://digital-learning-academy.com/wp-content/uploads/2023/01/ildi1.webp"
							}
						}
					},
					"organization": {
						"type": "organization",
						"name": "Digital Learning Academy",
						"contact_points": []
					},
					"extra_snippets": [
						"La recherche en psychologie cognitive l’a montré : se tester après avoir étudié une information améliore significativement la mémorisation. 1. L’effet de test : apprendre en se testant ✏️ L’effet de test consiste à renforcer la mémoire en se souvenant activement d’une information.",
						"Trop facile, l’apprenant s’ennuie 😴 ; trop difficile, il se décourage 😣. La zone proximale de développement décrite par Lev Vygotsky montre que l’apprentissage est optimal lorsque la tâche est légèrement au-dessus du niveau de compétence actuel mais reste accessible avec un effort 💪.",
						"Les quiz deviennent efficaces lorsqu’ils incluent un retour sur les réponses.",
						"27bis boulevard Diderot Phone: +33 9 72 42 03 31 E-mail: contact@digital-learning-academy.com Web: ILDI"
					]
				},
				{
					"title": "Quels sont les atouts des quiz ? - Durabilis",
					"url": "https://www.magazine-durabilis.net/quels-sont-les-atouts-des-quiz/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Plusieurs types de questions peuvent être utilisées pour la création d’un quiz. C’est un puissant outil d’apprentissage, <strong>de divertissement</strong> et il est clairement à la mode. Il peut aussi être adapté en tant qu’activité principale ...",
					"page_age": "2023-12-02T00:36:05",
					"profile": {
						"name": "Durabilis",
						"url": "https://www.magazine-durabilis.net/quels-sont-les-atouts-des-quiz/",
						"long_name": "magazine-durabilis.net",
						"img": "https://imgs.search.brave.com/NOzrhAZUmj6cB7iuZKFKfgTSZxABVbEa0sQqmFUxac0/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMTM4ZWEyNGM1/MDY4ZmFkYTNkN2Jk/MjJjZTY1NDgwZmI2/OTFjOWZiMjlmZjI2/NDFiMTJiMTAzYWQx/NDNlZTQ3Mi93d3cu/bWFnYXppbmUtZHVy/YWJpbGlzLm5ldC8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "magazine-durabilis.net",
						"hostname": "www.magazine-durabilis.net",
						"favicon": "https://imgs.search.brave.com/NOzrhAZUmj6cB7iuZKFKfgTSZxABVbEa0sQqmFUxac0/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMTM4ZWEyNGM1/MDY4ZmFkYTNkN2Jk/MjJjZTY1NDgwZmI2/OTFjOWZiMjlmZjI2/NDFiMTJiMTAzYWQx/NDNlZTQ3Mi93d3cu/bWFnYXppbmUtZHVy/YWJpbGlzLm5ldC8",
						"path": "  › accueil  › loisirs  › quels sont les atouts des quiz ?"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/5N1u-48cDUBJRIoZkm6zGyDMK7d3nNXjbeHQC5rCUzE/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/bWFnYXppbmUtZHVy/YWJpbGlzLm5ldC93/cC1jb250ZW50L3Vw/bG9hZHMvNmM2Njgy/MWZkNDA0ZGJhZWNm/ODVmMjgyMGJmZDY4/ZGMuanBn",
						"original": "https://www.magazine-durabilis.net/wp-content/uploads/6c66821fd404dbaecf85f2820bfd68dc.jpg",
						"logo": false
					},
					"age": "December 2, 2023",
					"extra_snippets": [
						"Il peut s’identifier comme étant une sorte de jeu, de sport cérébral. Il permet notamment de tester ses connaissances. Le quiz s’avère être un excellent moyen de stimuler l’intérêt des participants. Souvent présenté sous la forme d’un test avec des questions simples, des images, un vrai ou faux, il est utilisé dans les écoles, les entreprises et les jeux télévisés.",
						"Plusieurs types de questions peuvent être utilisées pour la création d’un quiz. C’est un puissant outil d’apprentissage, de divertissement et il est clairement à la mode. Il peut aussi être adapté en tant qu’activité principale d’une formation.",
						"Il est clair que les quiz sont aujourd’hui un outil indispensable pour améliorer l’engagement et l’interaction avec ses utilisateurs tout en collectant efficacement des informations précieuses sur son audience. Que ce soit pour divertir ou informer, ces questionnaires ludiques restent indéniablement un moyen efficace de susciter l’intérêt du public !",
						"Les infographies, quant à elles, sont idéales pour présenter des données complexes de manière claire et visuelle. Elles permettent aussi de capter rapidement l’attention du lecteur tout en restant divertissantes."
					]
				},
				{
					"title": "Le QUIZ : quelle efficacité pour apprendre ? (école, SST, PSC1, loisirs...)",
					"url": "https://www.protegeralertersecourir.fr/blog/le-quiz-quelle-efficacite-pour-apprendre-ecole-sst-psc1-loisirs.html",
					"is_source_local": false,
					"is_source_both": false,
					"description": "On les retrouve pour se divertir ... Trivial Poursuit ?&quot;). Cependant, <strong>les quiz ont aussi toute leur place dans l&#x27;apprentissage de nouveaux savoirs, dans l&#x27;acquisition de nouvelles compétences</strong>....",
					"profile": {
						"name": "Protegeralertersecourir",
						"url": "https://www.protegeralertersecourir.fr/blog/le-quiz-quelle-efficacite-pour-apprendre-ecole-sst-psc1-loisirs.html",
						"long_name": "protegeralertersecourir.fr",
						"img": "https://imgs.search.brave.com/zN8aX3ckuUm8uuJIEfoVRSYtPPNlfwnIaWdjax5_V4A/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYmRhMjQwMGI2/NGIwOGQ5MGM3Mjhj/YjRmYTA5MGEzNTFh/OGFlNTdlMzUxZDBl/OTNiNGY3MDcxNGY5/NWFiMDJlNS93d3cu/cHJvdGVnZXJhbGVy/dGVyc2Vjb3VyaXIu/ZnIv"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "article",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "protegeralertersecourir.fr",
						"hostname": "www.protegeralertersecourir.fr",
						"favicon": "https://imgs.search.brave.com/zN8aX3ckuUm8uuJIEfoVRSYtPPNlfwnIaWdjax5_V4A/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYmRhMjQwMGI2/NGIwOGQ5MGM3Mjhj/YjRmYTA5MGEzNTFh/OGFlNTdlMzUxZDBl/OTNiNGY3MDcxNGY5/NWFiMDJlNS93d3cu/cHJvdGVnZXJhbGVy/dGVyc2Vjb3VyaXIu/ZnIv",
						"path": "› blog  › le-quiz-quelle-efficacite-pour-apprendre-ecole-sst-psc1-loisirs.html"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/IqotSR3k4gmsbWLVQhouF3HknxWLdIzOi9AyBd1Flwg/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/cHJvdGVnZXJhbGVy/dGVyc2Vjb3VyaXIu/ZnIvbWVkaWFzL2lt/YWdlcy9xdWl6LWJs/b2ctMS0ucG5n",
						"original": "https://www.protegeralertersecourir.fr/medias/images/quiz-blog-1-.png",
						"logo": false
					},
					"article": {
						"author": [
							{
								"type": "person",
								"name": "manon38",
								"url": "https://www.protegeralertersecourir.fr/blog/do/author/62b457bacc8b4edd9a59737e"
							}
						]
					},
					"extra_snippets": [
						"On les retrouve pour se divertir (\"quel animal sauvage êtes-vous ?\"), pour donner son avis sur un produit (\"qu'avez-vous pensé de votre dernier achat ?\"), dans les jeux télévisés (et même sur les plateformes de streaming), pour tester sa culture générale (\"quel est le plus grand pays du monde ?\") et bien entendu dans les jeux de société (\"Et si on jouait à Trivial Poursuit ?\"). Cependant, les quiz ont aussi toute leur place dans l'apprentissage de nouveaux savoirs, dans l'acquisition de nouvelles compétences.",
						"En somme, le quiz est un excellent moyen de tester ses connaissances rapidement, de manière plutôt ludique et efficace. Il nous donne facilement un aperçu des acquis et des éléments à retravailler. Il est modulable et peut intervenir à de nombreux moments dans l'apprentissage.",
						"En général, c'est celle qui met un terme à la séquence d'apprentissage.",
						"Cependant, il peut parfois être restrictif et ne permet pas vraiment de mettre en valeur le processus de réflexion de l'apprenant. Il n'est pas adapté à tous les types d'apprentissage."
					]
				},
				{
					"title": "Les quiz interactifs : un levier puissant pour engager les équipes - Evalandgo",
					"url": "https://www.evalandgo.com/blog/quiz-interactifs-levier-pour-engager-les-equipes/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Ce n’est pas un simple “jeu”, mais <strong>un levier cognitif</strong>. Des travaux montrent qu’un apprentissage actif (incluant des quiz live ou des exercices interactifs) améliore non seulement la mémorisation mais aussi la capacité d’application ...",
					"page_age": "2026-01-02T10:06:31",
					"profile": {
						"name": "Evalandgo",
						"url": "https://www.evalandgo.com/blog/quiz-interactifs-levier-pour-engager-les-equipes/",
						"long_name": "evalandgo.com",
						"img": "https://imgs.search.brave.com/7RN0CaomUchZ8cLwaOxw1Mk8Mx1H_eEynuk_fwzOjRc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMmYyYjIyNWM3/M2FlMjQxMGJmZTlj/MzQxZDkwYjY1M2Qy/YTExMGJmNDlmZDdi/ZGIwNWVjNTA4MjY2/NzcwNmZmNC93d3cu/ZXZhbGFuZGdvLmNv/bS8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "article",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "evalandgo.com",
						"hostname": "www.evalandgo.com",
						"favicon": "https://imgs.search.brave.com/7RN0CaomUchZ8cLwaOxw1Mk8Mx1H_eEynuk_fwzOjRc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMmYyYjIyNWM3/M2FlMjQxMGJmZTlj/MzQxZDkwYjY1M2Qy/YTExMGJmNDlmZDdi/ZGIwNWVjNTA4MjY2/NzcwNmZmNC93d3cu/ZXZhbGFuZGdvLmNv/bS8",
						"path": "  › questionnaire en ligne  › blog  › les quiz interactifs : un levier puissant pour engager les équipes"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/-l51VhBq-J1XP1vSYXC3LmMCJy-yOZYbg_-AfIIR9BM/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/ZXZhbGFuZGdvLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NS8xMS9JbGx1c3Ry/YXRpb25zLUFydGlj/bGUtTW9kZS1MaXZl/LTEyLTEud2VicA",
						"original": "https://www.evalandgo.com/wp-content/uploads/2025/11/Illustrations-Article-Mode-Live-12-1.webp",
						"logo": false
					},
					"age": "January 2, 2026",
					"article": {
						"author": [
							{
								"type": "person",
								"name": "Didier Grapeloup"
							}
						],
						"date": "Nov 03, 2025",
						"publisher": {
							"type": "organization",
							"name": "Evalandgo",
							"url": "https://www.evalandgo.com/",
							"thumbnail": {
								"src": "https://imgs.search.brave.com/orBv-N0-SgxRGE_bTDeDpQLYymrKOOhEGDsddrFV-Xg/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/ZXZhbGFuZGdvLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NC8wMS9sb2dvLTIw/MjUucG5n",
								"original": "https://www.evalandgo.com/wp-content/uploads/2024/01/logo-2025.png"
							}
						}
					},
					"extra_snippets": [
						"Ce n’est pas un simple “jeu”, mais un levier cognitif. Des travaux montrent qu’un apprentissage actif (incluant des quiz live ou des exercices interactifs) améliore non seulement la mémorisation mais aussi la capacité d’application dans un contexte pro. Par exemple : la méta-analyse de Scott Freeman et al., 2014 (225 études) indique un gain moyen de +0,47 écart-type (soit environ 6 %) sur les examens. Il souligne aussi un taux d’échec 1,5 fois moins élevé comparé à une formation magistrale.",
						"Ce sont de véritables leviers de transformation pédagogique et managériale. Ils s’appuient sur des principes neuroscientifiques (écoute active, rappel actif, feedback immédiat) et des études rigoureuses. Celles-ci démontrent leurs effets positifs sur l’apprentissage, la rétention de l’information et la motivation.",
						"C’est le mécanisme dit de “rappel actif ». Ce biais neuroscientifique explique que demander aux participants de répondre à une question, les fait passer d’une posture d’écoute passive à une posture active d’apprentissage. Dans le contexte de la formation et du management, cela signifie qu’un format purement magistral est moins performant que des formats où les participants sont activement sollicités. Une méta-analyse (225 études dans le milieu éducatif compilées) l’illustre.",
						"Passer à un apprentissage actif améliore les scores moyens de 6 %. En outre, cela réduit significativement le taux d’échec. Pour les managers et les formateurs cela signifie qu’il est fortement conseillé d’intégrer de l’interactivité, de la participation et de l’engagement lors de formations ou réunions."
					]
				},
				{
					"title": "Un Quiz est il un jeu pédagogique ? - Guilde des Ludopédagogues Francophones - Apprentissage avec le jeu - GUILDELUDO",
					"url": "https://apprendre-avec-le-jeu.com/un-quiz-est-il-un-jeu-pedagogique/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Le mot Quiz vient des US et du verbe To Quiz (questionner). Par extension, un Quiz est donc une &quot;interrogation&quot;, un &quot;passage d&#x27;oral à un candidat&quot; ou un test par questionnement. Un Quiz n&#x27;est pas un jeu en soit mais une activité ou un exercice, selon son contexte d&#x27;utilisation : contrôle ou test des connaissances, ancrage des connaissances, etc.",
					"page_age": "2023-12-21T16:52:18",
					"profile": {
						"name": "Apprendre-avec-le-jeu",
						"url": "https://apprendre-avec-le-jeu.com/un-quiz-est-il-un-jeu-pedagogique/",
						"long_name": "apprendre-avec-le-jeu.com",
						"img": "https://imgs.search.brave.com/QPPecFJYdhiRocrNiv_Zf21ptdv9cAEpWD9Z5MbTV9w/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZmI1M2U2ZTJi/NmM2NzA0MGY1MTA3/ZjJiMTEwMDAzZThm/MDc4N2U3MjJjMjdk/Zjk0MTMwZDM1NDAw/YjdiYzVkZi9hcHBy/ZW5kcmUtYXZlYy1s/ZS1qZXUuY29tLw"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "apprendre-avec-le-jeu.com",
						"hostname": "apprendre-avec-le-jeu.com",
						"favicon": "https://imgs.search.brave.com/QPPecFJYdhiRocrNiv_Zf21ptdv9cAEpWD9Z5MbTV9w/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZmI1M2U2ZTJi/NmM2NzA0MGY1MTA3/ZjJiMTEwMDAzZThm/MDc4N2U3MjJjMjdk/Zjk0MTMwZDM1NDAw/YjdiYzVkZi9hcHBy/ZW5kcmUtYXZlYy1s/ZS1qZXUuY29tLw",
						"path": "› un-quiz-est-il-un-jeu-pedagogique"
					},
					"age": "December 21, 2023",
					"extra_snippets": [
						"Le mot Quiz vient des US et du verbe To Quiz (questionner). Par extension, un Quiz est donc une \"interrogation\", un \"passage d'oral à un candidat\" ou un test par questionnement. Un Quiz n'est pas un jeu en soit mais une activité ou un exercice, selon son contexte d'utilisation : contrôle ou test des connaissances, ancrage des connaissances, etc.",
						"L’utilisation d’un tel système ludique utilitaire contenant de quizs peut être qualifié de jeux pédagogique ou jeu d’apprentissage.",
						"Voila, vous en savez un peu plus sur les systèmes de quiz et sur les solutions envisageables pour en faire des jeux pédagogiques ou d’apprentissage.",
						"Laissez tomber les exerciseurs et faites de vos quizs des jeux d’apprentissage."
					]
				},
				{
					"title": "Quiz de fin d’année : gadget ludique ou vrai levier pour atteindre ses objectifs ?",
					"url": "https://www.dynamique-mag.com/article/quiz-de-fin-dannee-gadget-ludique-ou-vrai-levier-pour-atteindre-ses-objectifs",
					"is_source_local": false,
					"is_source_both": false,
					"description": "À première vue, l’outil paraît léger. Presque trop. Mais sa force est justement là : il casse les codes traditionnels de la communication interne. Un quiz bien conçu ne demande pas une heure de concentration intense. Il sollicite l’attention, la mémoire, parfois l’esprit d’équipe.",
					"page_age": "2025-12-30T13:01:48",
					"profile": {
						"name": "Dynamique-Mag",
						"url": "https://www.dynamique-mag.com/article/quiz-de-fin-dannee-gadget-ludique-ou-vrai-levier-pour-atteindre-ses-objectifs",
						"long_name": "dynamique-mag.com",
						"img": "https://imgs.search.brave.com/D_mK8svQNi1xBQRIxP2zkKKWD13KfhKB72DiUo6JAIo/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMmYwY2JhMjI4/NzA0NTU1Zjk4MmRj/OGU5NTA4MjA2Yzg1/ODZhODkwMjY3ZTc5/MmY3ZTFhMzg2Mjdj/ZGI3MTM0Mi93d3cu/ZHluYW1pcXVlLW1h/Zy5jb20v"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "dynamique-mag.com",
						"hostname": "www.dynamique-mag.com",
						"favicon": "https://imgs.search.brave.com/D_mK8svQNi1xBQRIxP2zkKKWD13KfhKB72DiUo6JAIo/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMmYwY2JhMjI4/NzA0NTU1Zjk4MmRj/OGU5NTA4MjA2Yzg1/ODZhODkwMjY3ZTc5/MmY3ZTFhMzg2Mjdj/ZGI3MTM0Mi93d3cu/ZHluYW1pcXVlLW1h/Zy5jb20v",
						"path": "  › accueil  › quiz de fin d’année : gadget ludique ou vrai levier pour atteindre ses objectifs ?"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/YAPkv5YwxQXRFblNg9DpHThKJnMBaxiBNTx3Ex4-1zw/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/ZHluYW1pcXVlLW1h/Zy5jb20vd3AtY29u/dGVudC91cGxvYWRz/L1F1aXotZGUtZmlu/LWRhbm5lZS5qcGc",
						"original": "https://www.dynamique-mag.com/wp-content/uploads/Quiz-de-fin-dannee.jpg",
						"logo": false
					},
					"age": "December 30, 2025",
					"extra_snippets": [
						"Un quiz de fin d’année, l’expression fait sourire, elle évoque davantage un jeu d’afterwork qu’un outil de pilotage. Pourtant, de plus en plus de dirigeants et d’entrepreneurs y voient autre chose : un levier simple pour mobiliser, aligner et parfois même rattraper des objectifs avant la clôture.",
						"Mais il peut contribuer à créer les conditions nécessaires pour finir l’année correctement : compréhension partagée, énergie collective, priorisation. Dans certaines PME, le quiz est devenu un rituel de clôture. Un moment à la fois sérieux et convivial, où l’on regarde l’année écoulée sans faux-semblants, et où l’on prépare la suivante sans grand discours.",
						"Les agendas se vident à moitié, les boîtes mail se remplissent de bilans, et les équipes oscillent entre fatigue accumulée et excitation des fêtes à venir. Dans beaucoup d’entreprises, surtout les PME, c’est un moment paradoxal : il faut encore atteindre des objectifs, finaliser des dossiers, conclure des ventes…",
						"À première vue, l’outil paraît léger. Presque trop. Mais sa force est justement là : il casse les codes traditionnels de la communication interne. Un quiz bien conçu ne demande pas une heure de concentration intense. Il sollicite l’attention, la mémoire, parfois l’esprit d’équipe."
					]
				},
				{
					"title": "Test : Quel est ton style d'apprentissage ?",
					"url": "https://www.superprof.fr/blog/test-style-apprentissage/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "<strong>Se tester régulièrement (quiz, évaluation, explications orales) active le testing effect, bien plus efficace que la simple relecture</strong>.",
					"profile": {
						"name": "Superprof",
						"url": "https://www.superprof.fr/blog/test-style-apprentissage/",
						"long_name": "superprof.fr",
						"img": "https://imgs.search.brave.com/D6eNEzRJoLv2BPIoeQ2oqmm6uTEIo1CO-33Q_PAW2So/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZjk5ZDA1Mzk5/ODcyOWM4NDJkYTVj/YzMwZGUzMzEzZmEy/ODJlZmU2ZWViMzE3/MzkxZWVjYzUzMWYz/MGQxMzFhMy93d3cu/c3VwZXJwcm9mLmZy/Lw"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "superprof.fr",
						"hostname": "www.superprof.fr",
						"favicon": "https://imgs.search.brave.com/D6eNEzRJoLv2BPIoeQ2oqmm6uTEIo1CO-33Q_PAW2So/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZjk5ZDA1Mzk5/ODcyOWM4NDJkYTVj/YzMwZGUzMzEzZmEy/ODJlZmU2ZWViMzE3/MzkxZWVjYzUzMWYz/MGQxMzFhMy93d3cu/c3VwZXJwcm9mLmZy/Lw",
						"path": "  › blog  › cours particuliers  › soutien scolaire  › test : quel est ton style d’apprentissage ?"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/DdFeSVI9JaB27fcDWs1aMlVMo63_DPT8y-Wwq2NVmD8/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/c3VwZXJwcm9mLmZy/L2Jsb2cvd3AtY29u/dGVudC91cGxvYWRz/LzIwMjIvMDkvaWxs/dXN0cmF0aW9uLXN1/cGVycHJvZi1leHBs/b3Jlci1tdXNpY2lh/bi1waG90b2dyYXBo/ZXItOTgweDY1My5w/bmc",
						"original": "https://www.superprof.fr/blog/wp-content/uploads/2022/09/illustration-superprof-explorer-musician-photographer-980x653.png",
						"logo": false
					},
					"extra_snippets": [
						"Chacun apprend selon son profil, mais on peut tous tirer profit de stratégies répandues comme la répétition espacée ou l’encodage élaboratif. Le vrai levier d’efficacité réside dans la connaissance de soi : tester les méthodes, adapter, ajuster et combiner celles qui produisent des résultats.",
						"Ces mémoires n’ont pas toutes les mêmes règles de fonctionnement. C’est pourquoi un bon apprentissage repose sur plusieurs leviers, et non une seule méthode magique.",
						"Se tester régulièrement (quiz, évaluation, explications orales) active le testing effect, bien plus efficace que la simple relecture."
					]
				},
				{
					"title": "Les quiz en e-learning : un vrai levier d’apprentissage 🎓",
					"url": "https://www.formapro.com/articles/ext/les-quiz-en-e-learning-un-vrai-levier-dapprentissage",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Dans le domaine du e-learning, <strong>les quiz dépassent leur rôle traditionnel de simples évaluations finales</strong>. Ils jouent un rôle crucial dans la mémorisation, l’engagement des apprenants et la rétention des connaissances.",
					"profile": {
						"name": "Formapro",
						"url": "https://www.formapro.com/articles/ext/les-quiz-en-e-learning-un-vrai-levier-dapprentissage",
						"long_name": "formapro.com",
						"img": "https://imgs.search.brave.com/jE_BPLd65uwO1Kmbq0kVKHd0m1U891Zwix04n2o-80w/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNmVjZWExZWQz/OTMyYWQwODRjNzk0/ZmRiYjk4MWI5NjM5/YzNjOWUzMWFhMzg5/ODg4OTE5NWE0NmQ0/Mjc1MTZlZS93d3cu/Zm9ybWFwcm8uY29t/Lw"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "formapro.com",
						"hostname": "www.formapro.com",
						"favicon": "https://imgs.search.brave.com/jE_BPLd65uwO1Kmbq0kVKHd0m1U891Zwix04n2o-80w/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNmVjZWExZWQz/OTMyYWQwODRjNzk0/ZmRiYjk4MWI5NjM5/YzNjOWUzMWFhMzg5/ODg4OTE5NWE0NmQ0/Mjc1MTZlZS93d3cu/Zm9ybWFwcm8uY29t/Lw",
						"path": "› articles  › ext  › les-quiz-en-e-learning-un-vrai-levier-dapprentissage"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/a8Q2wL2qRih1w8EUtJfQSXpAZwWBRZa2V__AyxCkMuw/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5mb3JtYXByby5j/b20vMzc5OS9jb252/ZXJzaW9ucy96WklK/TlI0dFJXV2NNbldq/UmxKa19xdWl6LWVs/ZWFybmluZy1tZWRp/dW0uanBn",
						"original": "https://media.formapro.com/3799/conversions/zZIJNR4tRWWcMnWjRlJk_quiz-elearning-medium.jpg",
						"logo": false
					},
					"extra_snippets": [
						"Dans le domaine du e-learning, les quiz dépassent leur rôle traditionnel de simples évaluations finales. Ils jouent un rôle crucial dans la mémorisation, l’engagement des apprenants et la rétention des connaissances.",
						"Enfin, il est crucial d’adapter la difficulté des quiz. Des questions trop faciles ou trop difficiles peuvent engendrer ennui ou découragement.",
						"Marc R. · il y a 5 mois",
						"Sylvie M. · il y a 3 semaines"
					]
				},
				{
					"title": "Définition Quiz - Digiforma",
					"url": "https://www.digiforma.com/definition/quiz/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Cependant, c’est moins stressant qu’une évaluation traditionnelle. <strong>Le quiz peut donc être réalisé avec moins de sérieux</strong>. Par ailleurs, ce format ne permet pas d’analyser les connaissances en toute objectivité.",
					"page_age": "2024-02-22T14:21:57",
					"profile": {
						"name": "Digiforma",
						"url": "https://www.digiforma.com/definition/quiz/",
						"long_name": "digiforma.com",
						"img": "https://imgs.search.brave.com/KLNJi7jd3gLi14d4mWhJuIRrkMN4KXZK06psUYLtEi8/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMzczNjRiZGI5/YjU4MjU1ZTdkNjBh/YWMxYzJmZjZkMmE4/OWUyMTRkNGFkNDVj/MWNiZGY0YzE1YTI2/MDBkN2YwZC93d3cu/ZGlnaWZvcm1hLmNv/bS8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "digiforma.com",
						"hostname": "www.digiforma.com",
						"favicon": "https://imgs.search.brave.com/KLNJi7jd3gLi14d4mWhJuIRrkMN4KXZK06psUYLtEi8/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMzczNjRiZGI5/YjU4MjU1ZTdkNjBh/YWMxYzJmZjZkMmE4/OWUyMTRkNGFkNDVj/MWNiZGY0YzE1YTI2/MDBkN2YwZC93d3cu/ZGlnaWZvcm1hLmNv/bS8",
						"path": "  › accueil  › définitions  › quiz"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/NWb5Skyh-qiusL70caOEwpeUHVXhj2oZdotKbzw-Dn8/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/ZGlnaWZvcm1hLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NC8wNS9Mb2dvLTEu/cG5n",
						"original": "https://www.digiforma.com/wp-content/uploads/2024/05/Logo-1.png",
						"logo": true
					},
					"age": "February 22, 2024",
					"organization": {
						"type": "organization",
						"name": "Logiciel gestion de formation pour organisme et centre de formation",
						"contact_points": []
					},
					"extra_snippets": [
						"Qu'est-ce que signifie Quiz ? Tout savoir sur Quiz avec Digiforma. Le glossaire de la formation professionnelle.",
						"Il y a également le quiz ludique, qui ne sert pas à évaluer, mais à se divertir. Les formations et les blogs y ont souvent recours. Cela permet d’offrir un contenu personnalisé à la cible et d’introduire une gamification dans le processus d’apprentissage.",
						"Cependant, c’est moins stressant qu’une évaluation traditionnelle. Le quiz peut donc être réalisé avec moins de sérieux. Par ailleurs, ce format ne permet pas d’analyser les connaissances en toute objectivité."
					]
				},
				{
					"title": "Comment Les Quiz Interactifs Facilitent L’apprentissage Et La Réussite Scolaire ?",
					"url": "https://stewdy.com/strategies-dapprentissage/quiz-interactifs-apprentissage/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Les quiz interactifs ne sont pas juste un divertissement dans l’apprentissage. <strong>Ils sont devenus cruciaux dans les sciences cognitives et les méthodes pédagogiques actuelles</strong>.",
					"page_age": "2025-07-15T08:16:57",
					"profile": {
						"name": "Stewdy",
						"url": "https://stewdy.com/strategies-dapprentissage/quiz-interactifs-apprentissage/",
						"long_name": "stewdy.com",
						"img": "https://imgs.search.brave.com/2PsJyjpp4xTpdSkrVYOEhC5AWwBZILml9mdfLX_myfw/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvY2M2NzFmZDlk/MTJlNTcyNzJlMGM4/NTc2NTRiNWQ3NmY2/NTZhMDRlMWIyZmRi/NzVkOGY3NWE3MzVl/NWMzZGU4Mi9zdGV3/ZHkuY29tLw"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "stewdy.com",
						"hostname": "stewdy.com",
						"favicon": "https://imgs.search.brave.com/2PsJyjpp4xTpdSkrVYOEhC5AWwBZILml9mdfLX_myfw/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvY2M2NzFmZDlk/MTJlNTcyNzJlMGM4/NTc2NTRiNWQ3NmY2/NTZhMDRlMWIyZmRi/NzVkOGY3NWE3MzVl/NWMzZGU4Mi9zdGV3/ZHkuY29tLw",
						"path": "  › accueil  › stratégies d'apprentissage  › comment les quiz interactifs facilitent l’apprentissage et la réussite scolaire ?"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/eNJYta1nw_umghnaU68Ot10_ZFly61igCnZmIt6WpTw/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9lbWpw/djM2eGR4NC5leGFj/dGRuLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNS8wNy9x/dWl6LWludGVyYWN0/aWZzLWFwcHJlbnRp/c3NhZ2UuanBlZz9z/dHJpcD1hbGwmYW1w/O2xvc3N5PTEmYW1w/O3F1YWxpdHk9ODMm/YW1wO3NoYXJwPTEm/YW1wO3NzbD0x",
						"original": "https://emjpv36xdx4.exactdn.com/wp-content/uploads/2025/07/quiz-interactifs-apprentissage.jpeg?strip=all&amp;lossy=1&amp;quality=83&amp;sharp=1&amp;ssl=1",
						"logo": false
					},
					"age": "July 15, 2025",
					"extra_snippets": [
						"Les quiz interactifs ne sont pas juste un divertissement dans l’apprentissage. Ils sont devenus cruciaux dans les sciences cognitives et les méthodes pédagogiques actuelles."
					]
				},
				{
					"title": "Quel est mon style d'apprentissage ? Quiz - wikiHow",
					"url": "https://fr.wikihow.com/quel-est-mon-style-d'apprentissage-quiz",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Répondez à ces questions pour déterminer si votre style d&#x27;apprentissage est visuel, auditif, kinesthésique, oral, logique, social, solitaire ou naturel.",
					"page_age": "2024-06-07T00:00:00",
					"profile": {
						"name": "Wikihow",
						"url": "https://fr.wikihow.com/quel-est-mon-style-d'apprentissage-quiz",
						"long_name": "fr.wikihow.com",
						"img": "https://imgs.search.brave.com/DgTRbvXDrInB66-loMHXIYkKT1V44Ji5TuhaYocrQf4/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYTcwODhhOWY4/NzY2NjE1NTRiYjc2/MjA2ODZjNjJkZTg2/ZDBhMGFhNDQwMDIz/ZDg3NmFjYTA4NDBi/ZjFlMDU0NC9mci53/aWtpaG93LmNvbS8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "article",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "fr.wikihow.com",
						"hostname": "fr.wikihow.com",
						"favicon": "https://imgs.search.brave.com/DgTRbvXDrInB66-loMHXIYkKT1V44Ji5TuhaYocrQf4/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYTcwODhhOWY4/NzY2NjE1NTRiYjc2/MjA2ODZjNjJkZTg2/ZDBhMGFhNDQwMDIz/ZDg3NmFjYTA4NDBi/ZjFlMDU0NC9mci53/aWtpaG93LmNvbS8",
						"path": "  › jeunesse  › école et université  › quel est mon style d'apprentissage ? quiz - wikihow"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/1LDcRouynUP_EJTSkfpitU_eJS_NIkKLSDlLr7Gw4jw/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/d2lraWhvdy5jb20v/aW1hZ2VzX2VuL3Ro/dW1iLzkvOTcvTGVh/cm5pbmdfc3R5bGVf/cXVpei5wbmcvMTIw/MHB4LUxlYXJuaW5n/X3N0eWxlX3F1aXou/cG5n",
						"original": "https://www.wikihow.com/images_en/thumb/9/97/Learning_style_quiz.png/1200px-Learning_style_quiz.png",
						"logo": false
					},
					"age": "June 7, 2024",
					"article": {
						"author": [
							{
								"type": "person",
								"name": "Allison Broennimann, PhD",
								"url": "http://www.allisontherapy.com/"
							}
						],
						"date": "Jun 02, 2024",
						"publisher": {
							"type": "organization",
							"name": "wikiHow",
							"url": "https://fr.wikihow.com",
							"thumbnail": {
								"src": "https://imgs.search.brave.com/hJ6zQZ0yfcwSogGktH11quf3_dJsHIYK4uKh8sqjzpk/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/d2lraWhvdy5jb20v/c2tpbnMvb3dsL2lt/YWdlcy93aWtpaG93/X2xvZ29fbm9iZ182/MC5wbmc",
								"original": "https://www.wikihow.com/skins/owl/images/wikihow_logo_nobg_60.png"
							}
						}
					},
					"extra_snippets": [
						"Répondez à ces questions pour déterminer si votre style d'apprentissage est visuel, auditif, kinesthésique, oral, logique, social, solitaire ou naturel.",
						"Le style d'apprentissage visuel. Les apprenants visuels ont une préférence pour les graphiques, les cartes, les schémas et les images. Ils assimilent plus aisément les informations lorsqu'elles leur sont présentées sous une forme visuelle.",
						"Le style d'apprentissage auditif. Les apprenants auditifs préfèrent entendre les informations présentées à haute voix. Ils les assimilent mieux lors de discussions, d'exposés oraux et de sessions de questions-réponses.",
						"Le style d'apprentissage kinesthésique. Les apprenants kinesthésiques privilégient l'expérience pratique. Ils assimilent mieux lorsqu'ils peuvent réaliser une tâche ou une activité, plutôt que de simplement l'observer, l'entendre ou la lire."
					]
				},
				{
					"title": "Le QUIZ : et si vous le mettiez au centre de votre design de formation ? - e-teach",
					"url": "https://e-teach.ch/blog/utiliser-le-quiz-comme-activite-principale-de-la-formation/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Le quiz est généralement confiné à un rôle d’évaluation, placé en aval ou en amont de la matière. Il sert à obtenir une mesure des connaissances, mais n’intervient pas dans l’apprentissage lui-même. Et pourtant : il est également (surtout ?) un puissant outil d’apprentissage !",
					"page_age": "2020-01-09T08:08:15",
					"profile": {
						"name": "e-teach",
						"url": "https://e-teach.ch/blog/utiliser-le-quiz-comme-activite-principale-de-la-formation/",
						"long_name": "e-teach.ch",
						"img": "https://imgs.search.brave.com/hD2GJmuZq6l6pzLgNqfZ6QldYhwtfuYJZ3fImdqlQFQ/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMTc4Y2YyNTUz/YmM5ODMyYjMxNDZm/YjVkOTU0MWUzMzJl/OWE4NWFlYzIyNDAw/ZDQyYTg1N2Y5YWMy/MjgwNDNiMS9lLXRl/YWNoLmNoLw"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "e-teach.ch",
						"hostname": "e-teach.ch",
						"favicon": "https://imgs.search.brave.com/hD2GJmuZq6l6pzLgNqfZ6QldYhwtfuYJZ3fImdqlQFQ/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMTc4Y2YyNTUz/YmM5ODMyYjMxNDZm/YjVkOTU0MWUzMzJl/OWE4NWFlYzIyNDAw/ZDQyYTg1N2Y5YWMy/MjgwNDNiMS9lLXRl/YWNoLmNoLw",
						"path": "  › home  › blog  › le quiz : et si vous le mettiez au centre de votre design de formation ?"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/N2tdYV-BQ8xCF5NtctRcxrno_HLTTS5UvdHO9JDParQ/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9lLXRl/YWNoLmNoL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE1LzAzL3F1/aXotb3V0aWwtYXBw/cmVudGlzc2FnZS5w/bmc",
						"original": "https://e-teach.ch/wp-content/uploads/2015/03/quiz-outil-apprentissage.png",
						"logo": false
					},
					"age": "January 9, 2020",
					"extra_snippets": [
						"Vous souhaitez créer facilement une expérience de formation en ligne stimulante, adaptée à différents niveaux et facile à maintenir à jour ? Avez-vous pensé à former par le questionnement ? Le quiz est généralement confiné à un rôle d’évaluation, placé en aval ou en amont de la matière.",
						"Le quiz est généralement confiné à un rôle d’évaluation, placé en aval ou en amont de la matière. Il sert à obtenir une mesure des connaissances, mais n’intervient pas dans l’apprentissage lui-même. Et pourtant : il est également (surtout ?) un puissant outil d’apprentissage !",
						"Il remplit ainsi pleinement son rôle de renforcement, en confirmant qu’une connaissance est acquise et en rendant l’apprentissage directement perceptible, et de guide, en apportant la connaissance manquante.",
						"En plus d’éviter aux apprenants de parcourir de la matière qu’ils maitrisent déjà, la formation par le quiz permet également d’adapter sa durée aux besoins de chaque participant. L’apprentissage et l’évaluation étant faits simultanément par le questionnement, le participant sait immédiatement s’il a atteint le degré de connaissance attendu."
					]
				},
				{
					"title": "Diversifier les types de questions dans les évaluations : un levier pour l’apprentissage",
					"url": "https://www.experquiz.com/articles/diversifier-les-types-de-questions-dans-les-evaluations-un-levier-pour-lapprentissage",
					"is_source_local": false,
					"is_source_both": false,
					"description": "L’évaluation est un outil central dans le processus pédagogique, qu’elle soit formative, visant à accompagner l’apprentissage, ou sommative, destinée à mesurer des compétences acquises. Au-delà de la simple mesure des connaissances, le choix des types de questions joue un rôle essentiel dans l’engagement, la compréhension et le développement des compétences des apprenants. Trop souvent, les quiz formatifs proposés aux apprenants se limitent aux questions à choix multiple, alors que peu d’outils modernes offrent un véritable éventail de typologies de questions.",
					"page_age": "2026-02-12T08:48:21",
					"profile": {
						"name": "Experquiz",
						"url": "https://www.experquiz.com/articles/diversifier-les-types-de-questions-dans-les-evaluations-un-levier-pour-lapprentissage",
						"long_name": "experquiz.com",
						"img": "https://imgs.search.brave.com/XfxwnqbyqCFIURwcBtNoOmW9s6P2ZigU_g16wur3vv8/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNGFlYTY2NGRm/ZWM0MzMyMzViYTlk/Nzg3MzQ4NDg5N2Ri/ZGVhYzgzZmQ1OTU5/NDcwZTM0N2JiM2Y1/ZWNjODA3My93d3cu/ZXhwZXJxdWl6LmNv/bS8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "article",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "experquiz.com",
						"hostname": "www.experquiz.com",
						"favicon": "https://imgs.search.brave.com/XfxwnqbyqCFIURwcBtNoOmW9s6P2ZigU_g16wur3vv8/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNGFlYTY2NGRm/ZWM0MzMyMzViYTlk/Nzg3MzQ4NDg5N2Ri/ZGVhYzgzZmQ1OTU5/NDcwZTM0N2JiM2Y1/ZWNjODA3My93d3cu/ZXhwZXJxdWl6LmNv/bS8",
						"path": "› articles  › diversifier-les-types-de-questions-dans-les-evaluations-un-levier-pour-lapprentissage"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/osixRFSisgUxq7Rt5mX8UDthoMoBg3GYdQR0S5qRWow/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/N2IzNDcwNjcyNTM1/MDExMmRiMjJmODUv/Njk2N2EwY2Y2MzMy/NDM3OTE0NTdlNWQy/X2RpdmVyc2lmaWVy/LWxlcy10eXBlcy1k/ZS1xdWVzdGlvbnMt/ZGFucy1sZXMtZXZh/bHVhdGlvbnMtdW4t/bGV2aWVyLXBvdXIt/bGFwcHJlbnRpc3Nh/Z2UuYXZpZg",
						"original": "https://cdn.prod.website-files.com/67b34706725350112db22f85/6967a0cf633243791457e5d2_diversifier-les-types-de-questions-dans-les-evaluations-un-levier-pour-lapprentissage.avif",
						"logo": false
					},
					"age": "February 12, 2026",
					"article": {
						"author": [
							{
								"type": "person",
								"name": "Alexander Torbet"
							}
						],
						"date": "Feb 12, 2026",
						"publisher": {
							"type": "organization",
							"name": "Experquiz",
							"thumbnail": {
								"src": "https://imgs.search.brave.com/vwlISrqeAwdTeMKjvAGvXXWZv3ZGsc45GXU8KSKNngU/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/N2IzNDcwNjcyNTM1/MDExMmRiMjJmNTYv/NjdmNjY3YTBjNjNh/MzlkODQ1OGJhZDBh/X0xvZ28lMjBzZXVs/LnN2Zw",
								"original": "https://cdn.prod.website-files.com/67b34706725350112db22f56/67f667a0c63a39d8458bad0a_Logo%20seul.svg"
							}
						}
					},
					"organization": {
						"type": "organization",
						"name": "Experquiz",
						"contact_points": []
					},
					"extra_snippets": [
						"L’évaluation est un outil central dans le processus pédagogique, qu’elle soit formative, visant à accompagner l’apprentissage, ou sommative, destinée à mesurer des compétences acquises. Au-delà de la simple mesure des connaissances, le choix des types de questions joue un rôle essentiel dans l’engagement, la compréhension et le développement des compétences des apprenants. Trop souvent, les quiz formatifs proposés aux apprenants se limitent aux questions à choix multiple, alors que peu d’outils modernes offrent un véritable éventail de typologies de questions.",
						"Google Forms vs outil de quiz professionnel : limites, analyse et alternatives pour évaluer efficacement les compétences et formations. ... Comparatif des outils d’évaluation des compétences : découvrez les meilleures plateformes, leurs fonctionnalités et notre classement 2026. ... L’évaluation conversationnelle transforme l’apprentissage grâce à l’IA : génération de questions, analyse des réponses et dialogue adaptatif.",
						"La digitalisation des évaluations permet aujourd’hui de transformer en profondeur l’apprentissage. ... Dans le paysage actuel du recrutement compétitif, il est crucial d'optimiser chaque étape du processus pour faire ressortir rapidement et précisément les meilleurs talents. Comment identifier rapidement les bons candidats sans multiplier les entretiens ? L'intégration d'un quiz de recrutement efficace est une stratégie puissante pour évaluer les compétences techniques (hard skills) et comportementales (soft skills) des candidats avant l'entretien.",
						"Différents types d’outils existent, plus ou moins complets et plus ou moins spécialisés : par exemple, certains ne font que des quiz ludiques, d’autres intègrent des fonctionnalités d’évaluation à une solution plus globale de formation en ligne. ... Venez découvrir une nouvelle génération de plateforme pour l’évaluation et la gestion de vos certifications professionnelles ! ... L’intelligence artificielle générative a été intégrée dans presque toutes les plateformes d'apprentissage numérique pour offrir de nouveaux services, tels que la création de cours en ligne, de vidéos, ou encore la synthèse vocale."
					]
				},
				{
					"title": "Les meilleurs outils de quiz interactifs pour l'enseignement supérieur",
					"url": "https://www.tenors.fr/post/les-meilleurs-outils-de-quiz-interactifs-pour-l-enseignement-superieur",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Favoriser un climat bienveillant où l’erreur est perçue comme une opportunité d’apprentissage · Impliquer les étudiants en les laissant parfois concevoir eux-mêmes des questions · Utiliser les résultats pour adapter les cours et cibler les difficultés · Les quiz interactifs représentent aujourd’hui un levier essentiel pour renouveler les méthodes d’évaluation dans l’enseignement supérieur.",
					"page_age": "2026-03-20T00:00:00",
					"profile": {
						"name": "Tenors",
						"url": "https://www.tenors.fr/post/les-meilleurs-outils-de-quiz-interactifs-pour-l-enseignement-superieur",
						"long_name": "tenors.fr",
						"img": "https://imgs.search.brave.com/xiX4Z6M5RQ7APd0avLKcnXGKGt6tMzIQCeLjWatdB10/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYWIzNzAwMmMy/MGU3OTE3ZTIyYTM4/YWY4ZjlhYjBjYTlj/MmVmYjA1ZTVjNzg1/NTY4YjMwNmIxMzJj/ZjgxMmUwNy93d3cu/dGVub3JzLmZyLw"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "tenors.fr",
						"hostname": "www.tenors.fr",
						"favicon": "https://imgs.search.brave.com/xiX4Z6M5RQ7APd0avLKcnXGKGt6tMzIQCeLjWatdB10/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYWIzNzAwMmMy/MGU3OTE3ZTIyYTM4/YWY4ZjlhYjBjYTlj/MmVmYjA1ZTVjNzg1/NTY4YjMwNmIxMzJj/ZjgxMmUwNy93d3cu/dGVub3JzLmZyLw",
						"path": "› post  › les-meilleurs-outils-de-quiz-interactifs-pour-l-enseignement-superieur"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/DXcYxQ4JlK5u5DxQb9GuZ-wEQrsPM34NUJrcxZRTj7s/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/NDI2N2NkMjZhZjcx/NTkxMTdmNWJiYmUv/NjliZDNhZWI1ZGZh/MzVhYTkxMDMzYjRi/X2ltZy1BcFNRdEpY/NFJFZjVFQ2tuTTRu/NlhoSjkucG5n",
						"original": "https://cdn.prod.website-files.com/64267cd26af7159117f5bbbe/69bd3aeb5dfa35aa91033b4b_img-ApSQtJX4REf5ECknM4n6XhJ9.png",
						"logo": false
					},
					"age": "March 20, 2026",
					"extra_snippets": [
						"Favoriser un climat bienveillant où l’erreur est perçue comme une opportunité d’apprentissage · Impliquer les étudiants en les laissant parfois concevoir eux-mêmes des questions · Utiliser les résultats pour adapter les cours et cibler les difficultés · Les quiz interactifs représentent aujourd’hui un levier essentiel pour renouveler les méthodes d’évaluation dans l’enseignement supérieur.",
						"Les quiz interactifs jouent un rôle clé dans cet engagement pédagogique en proposant des formats variés et adaptés au rythme des étudiants. L’avantage principal réside dans la possibilité d’offrir en temps réel un feedback personnalisé, essentiel pour ajuster l’apprentissage et stimuler la motivation.",
						"S’adapter aux différents profils d’apprentissage grâce à des formats variés (QCM, questions ouvertes, sondages…)"
					]
				},
				{
					"title": "Enquête au cœur du quiz (opus 1) - TIPS n' LEARN",
					"url": "https://tipsnlearn.fr/blog/enquete-au-coeur-du-quiz/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Pour certains ce sera un scoop, pour d’autres une évidence : le quiz ne sert pas qu’à évaluer. Il a de multiples vertus en termes d’apprentissage et d’engagement des apprenants. Nous en avons identifié 7, nos préférées.",
					"page_age": "2025-05-13T07:19:08",
					"profile": {
						"name": "TIPS n' LEARN",
						"url": "https://tipsnlearn.fr/blog/enquete-au-coeur-du-quiz/",
						"long_name": "tipsnlearn.fr",
						"img": "https://imgs.search.brave.com/XKUmFKgYmzsTPoAsQT0N2jUDj3hpzjP0-ZWm9P-5uhg/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYjY3NmFiMDBk/ZDQ5MmVhNmQwZTk1/NjM3OWU2MmE5Y2Y1/YzEyN2IxMjEwMWIx/MWY3OGFhZTM0ZjE4/MDdjMTE5Zi90aXBz/bmxlYXJuLmZyLw"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "tipsnlearn.fr",
						"hostname": "tipsnlearn.fr",
						"favicon": "https://imgs.search.brave.com/XKUmFKgYmzsTPoAsQT0N2jUDj3hpzjP0-ZWm9P-5uhg/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYjY3NmFiMDBk/ZDQ5MmVhNmQwZTk1/NjM3OWU2MmE5Y2Y1/YzEyN2IxMjEwMWIx/MWY3OGFhZTM0ZjE4/MDdjMTE5Zi90aXBz/bmxlYXJuLmZyLw",
						"path": "› blog  › enquete-au-coeur-du-quiz"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/qR_LW4ir_uf3tYODqA21atPRBV5owpanLD-LaHKjOEM/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly90aXBz/bmxlYXJuLmZyL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI0LzAz/L3F1aXotZW4tZm9y/bWF0aW9uLTEuanBn",
						"original": "https://tipsnlearn.fr/wp-content/uploads/2024/03/quiz-en-formation-1.jpg",
						"logo": false
					},
					"age": "May 13, 2025",
					"extra_snippets": [
						"Pour certains ce sera un scoop, pour d’autres une évidence : le quiz ne sert pas qu’à évaluer. Il a de multiples vertus en termes d’apprentissage et d’engagement des apprenants. Nous en avons identifié 7, nos préférées.",
						"En proposant des quiz composés de quelques embranchements afin de challenger les apprenants ayant déjà une certaine maîtrise du sujet (les quiz adaptifs sont en cela idéals). Et, à l’inverse, en proposant des questions plus simples afin de valoriser chez les apprenants novices sur le sujet des connaissances connexes ou complémentaires qui pourront venir servir leur futur apprentissage.",
						"Outil d’évaluation, d’apprentissage, de motivation, de positionnement, etc., le quiz a plus d’un tour dans son sac.",
						"Donnez du sens à l’apprentissage à venir (en intégrant des références à celui-ci dans les feedbacks)."
					]
				},
				{
					"title": "Un Quiz ? pour quoi faire ? – ePortFolio | JN SAINTRAPT",
					"url": "https://www.saintrapt.com/un-quiz-pour-quoi-faire/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "C’est vrai ! Mais, heureusement, il y a d’autres outils d’apprentissage et d’évaluation possibles. J’aime assez l’idée du quiz comme repérage de l’assiduité. Mais alors une simple vérification des taux, temps de connexion à la plateforme, nombre de pages lues et de liens suivis serait suffisante…",
					"profile": {
						"name": "Saintrapt",
						"url": "https://www.saintrapt.com/un-quiz-pour-quoi-faire/",
						"long_name": "saintrapt.com",
						"img": "https://imgs.search.brave.com/hU0HU9krbiKvJ2UoYKiQDlPgx7fillV2WYFuifh62Tw/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMDljZTEyZmQ5/Njk4ODg2OGJiNTY5/Mjk3MDg4MDQ4ZDA2/MjFiZGI1ODBhZmY3/MmY4Y2YwNTgzOTYx/ZTQ3ZjJhNy93d3cu/c2FpbnRyYXB0LmNv/bS8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "saintrapt.com",
						"hostname": "www.saintrapt.com",
						"favicon": "https://imgs.search.brave.com/hU0HU9krbiKvJ2UoYKiQDlPgx7fillV2WYFuifh62Tw/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMDljZTEyZmQ5/Njk4ODg2OGJiNTY5/Mjk3MDg4MDQ4ZDA2/MjFiZGI1ODBhZmY3/MmY4Y2YwNTgzOTYx/ZTQ3ZjJhNy93d3cu/c2FpbnRyYXB0LmNv/bS8",
						"path": "› un-quiz-pour-quoi-faire"
					},
					"extra_snippets": [
						"Si l’on considère l’échelle de KirkPatrick, définissant les niveaux d’évaluation d’un apprenant, le quiz se situerait plutôt au niveau 2 (apprentissage – évaluation des acquis de la formation) qu’au niveau 3 (comportements – évaluation des transferts en situation de travail).",
						"C’est vrai ! Mais, heureusement, il y a d’autres outils d’apprentissage et d’évaluation possibles. J’aime assez l’idée du quiz comme repérage de l’assiduité. Mais alors une simple vérification des taux, temps de connexion à la plateforme, nombre de pages lues et de liens suivis serait suffisante…",
						"Des exercices de systématisation : Répéter, refaire, recommencer, dupliquer, reproduire, c’est un moyen d’automatiser et donc de mémoriser un apprentissage.",
						"” il y a d’autres outils d’apprentissage et d’évaluation possibles” Evidemment !"
					]
				}
			]
		},
		{
			"query": "ingénierie pédagogique des dispositifs interactifs de questionnement",
			"results": [
				{
					"title": "Ingénierie pédagogique et e-learning : définitions, méthode",
					"url": "https://www.babylon.fr/ingenierie-pedagogique-avancee/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Lors de la phase de conception, il fait le tri et repère, explore, départage, choisit, lie, croise, analyse et traite le foisonnement des sources de contenus de natures diverses et parfois en surabondance pour construire un scénario pédagogique utilisant la ou les méthodes adaptées. Voici quelques-unes des méthodes et stratégies utilisables en E-learning : questionnement, présentation, démonstration, exercices pratiques, travaux dirigés, jeux, simulations, jeux de rôle, discussions, interaction, études de cas, évaluations sommatives, évaluations formatives.",
					"page_age": "2023-11-15T15:06:40",
					"profile": {
						"name": "Babylon",
						"url": "https://www.babylon.fr/ingenierie-pedagogique-avancee/",
						"long_name": "babylon.fr",
						"img": "https://imgs.search.brave.com/8LU-xhdyPla4pAHl-qiDlPQj5LPpAbODHF9--fXwQxE/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNTRhZDM4NzEy/N2ZiOThlYTRhNTAx/MTY5ZGRjNjI3YTA3/ZmE5NjhiNjBjZDlj/YjE4MWYzNTliMGMy/MDBkZDFhZC93d3cu/YmFieWxvbi5mci8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "babylon.fr",
						"hostname": "www.babylon.fr",
						"favicon": "https://imgs.search.brave.com/8LU-xhdyPla4pAHl-qiDlPQj5LPpAbODHF9--fXwQxE/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNTRhZDM4NzEy/N2ZiOThlYTRhNTAx/MTY5ZGRjNjI3YTA3/ZmE5NjhiNjBjZDlj/YjE4MWYzNTliMGMy/MDBkZDFhZC93d3cu/YmFieWxvbi5mci8",
						"path": "  › accueil  › ingénierie pédagogique avancée"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/l75e4wuslsqKTqyzLHTQGvNa6xptZipLzVZcaQG660g/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/YmFieWxvbi5mci93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMS8w/OC9pbmdlbmllcmll/X3Bob3RvMS5wbmc",
						"original": "https://www.babylon.fr/wp-content/uploads/2021/08/ingenierie_photo1.png",
						"logo": false
					},
					"age": "November 15, 2023",
					"extra_snippets": [
						"Dans la formation à distance, comme dans toutes les formations, l’ingénierie pédagogique est une préoccupation constante et essentielle de la conception et de l’articulation des dispositifs d’apprentissages.",
						"Une bonne ingénierie pédagogique peut permettre de minimiser les coûts et le temps de production. C’est là l’un des rôles de l’ingénieur pédagogique qui est au cœur du processus de conception pour élaborer un dispositif efficace et efficient.",
						"Lors de la phase de conception, il fait le tri et repère, explore, départage, choisit, lie, croise, analyse et traite le foisonnement des sources de contenus de natures diverses et parfois en surabondance pour construire un scénario pédagogique utilisant la ou les méthodes adaptées. Voici quelques-unes des méthodes et stratégies utilisables en E-learning : questionnement, présentation, démonstration, exercices pratiques, travaux dirigés, jeux, simulations, jeux de rôle, discussions, interaction, études de cas, évaluations sommatives, évaluations formatives.",
						"Il ancre ses connaissances par le biais d’exercices interactifs : glisser-déposer, appariement, phrases à trou, calculs à faire, problèmes à résoudre… · Compte tenu de la complexité grandissante des systèmes d’apprentissage intégrant les technologies digitales, on ne peut plus compter uniquement sur des méthodes intuitives et artisanales pour les développer. Notre studio graphique est spécialisé dans le motion design et conçoit des dispositifs E-learning en prenant soin de trouver le point d’équilibre nécessaire pour présenter l’information utile à l’apprenant, de la manière la plus logique et efficace en vue de faciliter l’apprentissage."
					]
				},
				{
					"title": "Qu’est-ce que l’ingénierie pédagogique dans la formation professionnelle ? - Digiforma",
					"url": "https://www.digiforma.com/guide-of/ingenierie-pedagogique/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Ainsi, dans un premier temps, une phase de montage va vous permettre de transformer un storyboard en module e-learning ou en formation présentielle. Concrètement, vous allez ajouter des éléments multimédias, réaliser une mise en page de vos documents, créer des animations pédagogiques et imaginer des interactions avec vos apprenants (création de quiz, questionnaires, etc.).",
					"page_age": "2026-03-13T09:54:51",
					"profile": {
						"name": "Digiforma",
						"url": "https://www.digiforma.com/guide-of/ingenierie-pedagogique/",
						"long_name": "digiforma.com",
						"img": "https://imgs.search.brave.com/KLNJi7jd3gLi14d4mWhJuIRrkMN4KXZK06psUYLtEi8/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMzczNjRiZGI5/YjU4MjU1ZTdkNjBh/YWMxYzJmZjZkMmE4/OWUyMTRkNGFkNDVj/MWNiZGY0YzE1YTI2/MDBkN2YwZC93d3cu/ZGlnaWZvcm1hLmNv/bS8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "digiforma.com",
						"hostname": "www.digiforma.com",
						"favicon": "https://imgs.search.brave.com/KLNJi7jd3gLi14d4mWhJuIRrkMN4KXZK06psUYLtEi8/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMzczNjRiZGI5/YjU4MjU1ZTdkNjBh/YWMxYzJmZjZkMmE4/OWUyMTRkNGFkNDVj/MWNiZGY0YzE1YTI2/MDBkN2YwZC93d3cu/ZGlnaWZvcm1hLmNv/bS8",
						"path": "  › accueil  › le guide complet des organismes de formation (of)  › qu’est-ce que l’ingénierie pédagogique dans la formation professionnelle ?"
					},
					"age": "March 13, 2026",
					"organization": {
						"type": "organization",
						"name": "Logiciel gestion de formation pour organisme et centre de formation",
						"contact_points": []
					},
					"extra_snippets": [
						"Issues des sciences de l’ingénieur et de la méthode scientifique, l’ingénierie pédagogique est une approche méthodique rationnelle et progressive qui vise à étudier, analyser, réaliser et adapter des dispositifs de formation, cours ou enseignements en fonction de nombreux paramètres : ressources disponibles, nombre et profils des apprenants, personnalité du formateur, etc.",
						"L’ingénierie pédagogique est une composante de l’ingénierie de la formation et porte spécifiquement sur la création et la mise en place de dispositifs de formation adaptés à un public d’apprenants et répondant à des objectifs pédagogiques.",
						"Enfin, l’ingénierie pédagogique permet de gérer différents dispositifs spécifiques à un acte d’apprentissage : utilisation des technologies, formation informelle ou accompagnement.",
						"Ainsi, dans un premier temps, une phase de montage va vous permettre de transformer un storyboard en module e-learning ou en formation présentielle. Concrètement, vous allez ajouter des éléments multimédias, réaliser une mise en page de vos documents, créer des animations pédagogiques et imaginer des interactions avec vos apprenants (création de quiz, questionnaires, etc.)."
					]
				},
				{
					"title": "Ingénierie pédagogique : le guide complet en 2026",
					"url": "https://lemonlearning.com/fr/blog/ingenierie-pedagogique-le-guide-complet-en-2024",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Ces dispositifs fonctionnent à partir de la réalité virtuelle et favorisent l’entraînement dans des environnements fictifs avant de passer à des situations réelles. Les outils numériques (quiz interactifs, feedbacks automatiques et évaluations adaptatives) aident à mesurer l’acquisition des compétences. L’ingénierie pédagogique est un pilier fondamental pour l’avenir de la formation, en particulier dans un monde de plus en plus digitalisé.",
					"page_age": "2026-03-09T14:53:21",
					"profile": {
						"name": "Lemon Learning",
						"url": "https://lemonlearning.com/fr/blog/ingenierie-pedagogique-le-guide-complet-en-2024",
						"long_name": "lemonlearning.com",
						"img": "https://imgs.search.brave.com/X7RSzKBFyv83DHKN27SKyYe2xjztkQoif_aX3nakkjw/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNGE2ZWE4ZmI5/NzhiYWMwM2NiMTRi/NWFjMGNhMDQxM2Jm/NjIxZjljODIwMDIx/MGQ0YzBkMTJlY2U1/NDBlMjUzMi9sZW1v/bmxlYXJuaW5nLmNv/bS8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "lemonlearning.com",
						"hostname": "lemonlearning.com",
						"favicon": "https://imgs.search.brave.com/X7RSzKBFyv83DHKN27SKyYe2xjztkQoif_aX3nakkjw/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNGE2ZWE4ZmI5/NzhiYWMwM2NiMTRi/NWFjMGNhMDQxM2Jm/NjIxZjljODIwMDIx/MGQ0YzBkMTJlY2U1/NDBlMjUzMi9sZW1v/bmxlYXJuaW5nLmNv/bS8",
						"path": "› fr  › blog  › ingenierie-pedagogique-le-guide-complet-en-2024"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/jH0qG_fWELDZBJo9alBZKHx-R8kPLeNEDICQ1qaRado/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9sZW1v/bmxlYXJuaW5nLmNv/bS9odWJmcy9JbXBv/cnRlZF9CbG9nX01l/ZGlhL0luZ2VuaWVy/ZS1wZWRhZ29naXF1/ZS1KdW4tMTMtMjAy/NS0wNy00OS0wNy0w/MDAxLVBNLnBuZw",
						"original": "https://lemonlearning.com/hubfs/Imported_Blog_Media/Ingeniere-pedagogique-Jun-13-2025-07-49-07-0001-PM.png",
						"logo": false
					},
					"age": "March 9, 2026",
					"extra_snippets": [
						"En 2026, l’ingénierie pédagogique s’appuie sur des outils numériques et des technologies avancées pour offrir des expériences d’apprentissage interactives et immersives. Parmi les principaux dispositifs, les plateformes LMS occupent une place de choix.",
						"Ces dispositifs fonctionnent à partir de la réalité virtuelle et favorisent l’entraînement dans des environnements fictifs avant de passer à des situations réelles. Les outils numériques (quiz interactifs, feedbacks automatiques et évaluations adaptatives) aident à mesurer l’acquisition des compétences. L’ingénierie pédagogique est un pilier fondamental pour l’avenir de la formation, en particulier dans un monde de plus en plus digitalisé.",
						"L’ingénierie pédagogique est aujourd’hui au centre de la réussite de tout projet de formation présentielle ou à distance. Cette approche permet aux acteurs de créer des expériences d’apprentissage engageantes et efficaces. Grâce à ce dispositif, vous pouvez vous rassurer que les formations sont conçues de manière à maximiser l’acquisition des compétences et à garantir que les objectifs pédagogiques sont atteints.",
						"Le parcours de formation doivent favoriser la transmission des connaissances et encourager aussi l’implication active des participants, leur collaboration et leur autonomie. Les professionnels conçoivent donc des parcours d’ingénierie pédagogique qui utilisent les outils numériques pour enrichir l’expérience d’apprentissage. Il s’agit de plusieurs dispositifs adaptés aux besoins de chaque public :"
					]
				},
				{
					"title": "DU Numérique pour l'ingénierie pédagogique - Formation Continue Sorbonne Université",
					"url": "https://fc.sorbonne-universite.fr/nos-offres/du-numerique-pour-ingenierie-pedagogique/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Appliquer des méthodes de production de ressources pédagogiques interactives (en intégrant des déclenchements conditionnels et des variables dans une structure ramifiée) Analyser les usages (potentialités et limites) d’un outil EdTech · Utiliser les grands principes de théories SHS (Sciences Humaines et Sociales), pour concevoir un scénario et des ressources d’apprentissage. Réaliser un projet pratique tutoré sur un dispositif EdTech innovant et interactif",
					"page_age": "2026-06-12T00:00:00",
					"profile": {
						"name": "Sorbonne Université",
						"url": "https://fc.sorbonne-universite.fr/nos-offres/du-numerique-pour-ingenierie-pedagogique/",
						"long_name": "fc.sorbonne-universite.fr",
						"img": "https://imgs.search.brave.com/fsHrfzH5uCCtpU-aXuij0PUszoFoxJaAJvy9FAjtIag/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMmYwNzQ4Y2Iz/YjA3ODViMGE2NDMy/ZTE4ZTQ1NGQ1ODAw/MGY4YjczOWE4MDkx/YTg2N2FmZjc5Mzdi/OGU4MGExMi9mYy5z/b3Jib25uZS11bml2/ZXJzaXRlLmZyLw"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "article",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "fc.sorbonne-universite.fr",
						"hostname": "fc.sorbonne-universite.fr",
						"favicon": "https://imgs.search.brave.com/fsHrfzH5uCCtpU-aXuij0PUszoFoxJaAJvy9FAjtIag/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMmYwNzQ4Y2Iz/YjA3ODViMGE2NDMy/ZTE4ZTQ1NGQ1ODAw/MGY4YjczOWE4MDkx/YTg2N2FmZjc5Mzdi/OGU4MGExMi9mYy5z/b3Jib25uZS11bml2/ZXJzaXRlLmZyLw",
						"path": "  › accueil  › nos offres  › faculté des sciences et ingénierie  › du numérique pour l’ingénierie pédagogique"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/jtssE4yCb66xbA6S0ouPrUNGrIT6TOZ8ahAt5BRbyi8/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9mYy5z/b3Jib25uZS11bml2/ZXJzaXRlLmZyL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzAz/L2JpZW52ZW51ZS1s/ZXR0cmVzLmpwZw",
						"original": "https://fc.sorbonne-universite.fr/wp-content/uploads/2021/03/bienvenue-lettres.jpg",
						"logo": false
					},
					"age": "2 weeks ago",
					"article": {
						"author": [
							{
								"type": "person",
								"name": "susciences",
								"url": "https://fc.sorbonne-universite.fr/author/susciences/"
							}
						],
						"date": "Jul 15, 2021",
						"publisher": {
							"type": "organization",
							"name": "Sorbonne Université",
							"url": "https://fc.sorbonne-universite.fr/",
							"thumbnail": {
								"src": "https://imgs.search.brave.com/6H89x8XWbwq-0Q5LXdLAombUmHTaQvvhMeOm3-Zns_0/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9mYy5z/b3Jib25uZS11bml2/ZXJzaXRlLmZyL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzAy/L0xPR09fU1VfSE9S/SVpfU0VVTF9QQU5U/T05FLTEuc3Zn",
								"original": "https://fc.sorbonne-universite.fr/wp-content/uploads/2021/02/LOGO_SU_HORIZ_SEUL_PANTONE-1.svg"
							}
						}
					},
					"organization": {
						"type": "organization",
						"name": "Sorbonne Université",
						"contact_points": []
					},
					"extra_snippets": [
						"Appliquer des méthodes de production de ressources pédagogiques interactives (en intégrant des déclenchements conditionnels et des variables dans une structure ramifiée) Analyser les usages (potentialités et limites) d’un outil EdTech · Utiliser les grands principes de théories SHS (Sciences Humaines et Sociales), pour concevoir un scénario et des ressources d’apprentissage. Réaliser un projet pratique tutoré sur un dispositif EdTech innovant et interactif",
						"Module 5 : Projet tutoré sur un dispositif EdTech innovant et interactif, L’objectif est de mettre en œuvre dans le contexte professionnel les compétences acquises dans les 4 modules précédents. Pédagogie active : Projets personnels et collaboratifs tutorés favorisant les intéractions et la prise d’initiatives.",
						"M. Guinebert, A. Yessad, M. Muratet, V. Luengo : “Automatic Detection of Peer Interactions in Multi-player Learning Games”, European Conference on Technology Enhanced Learning 2019, Delft, Netherlands (2019) F. Harrak, F. Bouchet, V. Luengo, R. Bachelet : “Automatic Identification of Questions in MOOC Forums and Association with Self-Regulated Learning”, Proc.",
						"Le DU Numérique pour l’ingénierie pédagogique forme à la conception, l’évaluation, et l’utilisation de technologies innovantes dans le domaine du numérique au service de l’éducation et de la formation."
					]
				},
				{
					"title": "Ingénierie didactique — EduTech Wiki",
					"url": "https://edutechwiki.unige.ch/fr/Ing%C3%A9nierie_didactique",
					"is_source_local": false,
					"is_source_both": false,
					"description": "2. Conception et analyse a priori : co-conception par les chercheurs et les praticiens des dispositifs de formation hybrides qui permettront d&#x27;explorer la thématique de manière pertinente et qui permettront de collecter des données en plein cœur de l&#x27;action pédagogique ; 3. Expérimentation : mise en œuvre des dispositifs hybrides en contexte écologique ; 4. Analyse a posteriori et évaluation : analyse des données recueillies au cours de l&#x27;expérimentation - enregistrements vidéo, entretiens d&#x27;autoconfrontation avec les participants, traces des interactions multimodales sous forme d&#x27;analyse de l&#x27;apprentissage et questionnaires en ligne - afin de formuler des conclusions et recommandations pour améliorer l’expérience de téléprésence tout en révisant si besoin le cadre théorique initial.",
					"page_age": "2022-03-01T00:00:00",
					"profile": {
						"name": "EduTech Wiki",
						"url": "https://edutechwiki.unige.ch/fr/Ing%C3%A9nierie_didactique",
						"long_name": "edutechwiki.unige.ch",
						"img": "https://imgs.search.brave.com/oILnIkF-ZAXHAIugYCugi92IFQxfaXi5IEWgelrSVvw/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvM2UwZjZkYTY5/ZTBhODc0ZDAzY2Q1/ZmJhNWU3MzNjZTA3/YmVkZTQwYjBhODE5/ODhhYmY2YTY4YmRm/M2Q4ZGQzOC9lZHV0/ZWNod2lraS51bmln/ZS5jaC8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "edutechwiki.unige.ch",
						"hostname": "edutechwiki.unige.ch",
						"favicon": "https://imgs.search.brave.com/oILnIkF-ZAXHAIugYCugi92IFQxfaXi5IEWgelrSVvw/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvM2UwZjZkYTY5/ZTBhODc0ZDAzY2Q1/ZmJhNWU3MzNjZTA3/YmVkZTQwYjBhODE5/ODhhYmY2YTY4YmRm/M2Q4ZGQzOC9lZHV0/ZWNod2lraS51bmln/ZS5jaC8",
						"path": "› fr  › Ingénierie_didactique"
					},
					"age": "March 1, 2022",
					"extra_snippets": [
						"2. Conception et analyse a priori : co-conception par les chercheurs et les praticiens des dispositifs de formation hybrides qui permettront d'explorer la thématique de manière pertinente et qui permettront de collecter des données en plein cœur de l'action pédagogique ; 3. Expérimentation : mise en œuvre des dispositifs hybrides en contexte écologique ; 4. Analyse a posteriori et évaluation : analyse des données recueillies au cours de l'expérimentation - enregistrements vidéo, entretiens d'autoconfrontation avec les participants, traces des interactions multimodales sous forme d'analyse de l'apprentissage et questionnaires en ligne - afin de formuler des conclusions et recommandations pour améliorer l’expérience de téléprésence tout en révisant si besoin le cadre théorique initial.",
						"Le chercheur doit trouver des moyens de surmonter ces difficultés car, comme le soulignent Musial, Pradere & Tricot (2012), « l’ingénierie didactique consiste [justement] à déterminer des dispositifs d’enseignement communicables et reproductibles » (p.",
						"L’ingénierie didactique consiste donc à concevoir des situations d’enseignement rationnelles et argumentées sur la base d’études et d’analyses (Musial, Pradere & Tricot, 2012). Autrement dit, ce sont des propositions d'enseignement découlant d’un questionnement, puis de choix didactiques justifiés par la recherche (Douady, 1994), élaborées par le biais d'une méthodologie qui devient à la fois un produit et un processus itératif.",
						"La recherche orientée par la conception (ROC), apparue au début des années 2000, correspond en grande partie à l’ingénierie didactique en l’agrémentant de la dimension de collaboration et de relation partenariale entre le chercheur et le praticien."
					]
				},
				{
					"title": "Concepteur pédagogique multimodal / Conceptrice pédagogique multimodale - Fiche métier - Onisep",
					"url": "https://www.onisep.fr/ressources/univers-metier/metiers/concepteur-pedagogique-multimodal-conceptrice-pedagogique-multimodale",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Esprit créatif, attentif/ve à son environnement et en veille constante, le concepteur ou la conceptrice pédagogique multimodal/e n&#x27;hésite pas à sortir des sentiers battus pour proposer des supports de formation innovants et parfois même ludiques. Par exemple, en utilisant des quiz, des QCM (questionnaires à choix multiples) pour susciter l&#x27;intérêt et l&#x27;engagement des apprenants, tout en rendant compréhensibles des notions, parfois complexes. Des connaissances en ingénierie de formation et en ingénierie pédagogique sont nécessaires pour avoir une vision d&#x27;ensemble de la mise en oeuvre de la formation.",
					"page_age": "2026-04-17T17:49:33",
					"profile": {
						"name": "Onisep",
						"url": "https://www.onisep.fr/ressources/univers-metier/metiers/concepteur-pedagogique-multimodal-conceptrice-pedagogique-multimodale",
						"long_name": "onisep.fr",
						"img": "https://imgs.search.brave.com/OJdz6N8wUaeboXtKlArutlJEXms2FP--Kc1cLshRgFU/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNzgzNDFlOTZm/MzU1YzI1NDU2MDQw/OTcwNjVkZTFlNTdj/NjczYmM2ZDkwMDY1/MTQwZjExNGU1ZWVm/NmUzYjVjYi93d3cu/b25pc2VwLmZyLw"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "article",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "onisep.fr",
						"hostname": "www.onisep.fr",
						"favicon": "https://imgs.search.brave.com/OJdz6N8wUaeboXtKlArutlJEXms2FP--Kc1cLshRgFU/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNzgzNDFlOTZm/MzU1YzI1NDU2MDQw/OTcwNjVkZTFlNTdj/NjczYmM2ZDkwMDY1/MTQwZjExNGU1ZWVm/NmUzYjVjYi93d3cu/b25pc2VwLmZyLw",
						"path": "› ressources  › univers-metier  › metiers  › concepteur-pedagogique-multimodal-conceptrice-pedagogique-multimodale"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/4rVuln7eNWyO5k2p7Jw25vmV39Utxb8NRvcIju7a7v8/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/b25pc2VwLmZyL3Zh/ci9vbmlzZXAvc3Rv/cmFnZS9pbWFnZXMv/OS84LzYvMC8zNjM2/MDY4OS0xLWZyZS1G/Ui8zYjRiYWFjZTc2/ZTgtY29uY2VwdGV1/ci1wZWRhZ29naXF1/ZS1tdWx0aW1vZGFs/LmpwZw",
						"original": "https://www.onisep.fr/var/onisep/storage/images/9/8/6/0/36360689-1-fre-FR/3b4baace76e8-concepteur-pedagogique-multimodal.jpg",
						"logo": false
					},
					"age": "April 17, 2026",
					"article": {
						"author": [],
						"date": "Apr 17, 2026"
					},
					"extra_snippets": [
						"Le concepteur pédagogique multimodal ou la conceptrice pédagogique multimodale crée des dispositifs de formation afin de dynamiser l'enseignement dispensé. Il ou elle conçoit des supports pédagogiques numériques permettant de suivre des parcours d'apprentissage selon diverses modalités : en présentiel, à distance, en mode hybride, en classe virtuelle… ... Synonymes : Chef / cheffe de projet en ingénierie pédagogique multimodale, Concepteur / conceptrice e-learning (cyberformation), Concepteur /conceptrice pédagogique multimédia de la formation digitale, Ingénieur / ingénieure pédagogique, Learning experience designer (concepteur / conceptrice d'expériences d'apprentissage)",
						"Esprit créatif, attentif/ve à son environnement et en veille constante, le concepteur ou la conceptrice pédagogique multimodal/e n'hésite pas à sortir des sentiers battus pour proposer des supports de formation innovants et parfois même ludiques. Par exemple, en utilisant des quiz, des QCM (questionnaires à choix multiples) pour susciter l'intérêt et l'engagement des apprenants, tout en rendant compréhensibles des notions, parfois complexes. Des connaissances en ingénierie de formation et en ingénierie pédagogique sont nécessaires pour avoir une vision d'ensemble de la mise en oeuvre de la formation.",
						"En collaboration avec son client, selon un cahier des charges, des délais et un budget définis, le concepteur ou la conceptrice pédagogique multimodal/e conçoit des modules pour la formation de différents publics (adultes, élèves, apprentis...), diffusés selon différents canaux : en présentiel, à distance, en classe virtuelle, en e-learning (formation en ligne), en hybride (mixant plusieurs modalités au sein d'un même dispositif).",
						"Licence pro mention gestion et accompagnement de projets pédagogiques · Master mention métiers de l'enseignement, de l'éducation et de la formation - pratiques et ingénierie de la formation"
					]
				},
				{
					"title": "Comment mettre en place une démarche d’ingénierie pédagogique et de formation ?",
					"url": "https://www.digiforma.com/guide-of/mettre-place-demarche-dingenierie-pedagogique-de-formation-aupres-dun-public-dapprenants/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Il s’agit donc de tester en amont le dispositif de formation. Le D de développement. C’est lors de cette 4e étape que vous allez choisir les outils pédagogiques à mettre en œuvre dans votre session de formation et « scénariser » votre session de formation en imaginant vos interactions avec vos stagiaires (quizz, questionnaires en ligne, etc.).",
					"page_age": "2026-03-13T09:13:33",
					"profile": {
						"name": "Digiforma",
						"url": "https://www.digiforma.com/guide-of/mettre-place-demarche-dingenierie-pedagogique-de-formation-aupres-dun-public-dapprenants/",
						"long_name": "digiforma.com",
						"img": "https://imgs.search.brave.com/KLNJi7jd3gLi14d4mWhJuIRrkMN4KXZK06psUYLtEi8/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMzczNjRiZGI5/YjU4MjU1ZTdkNjBh/YWMxYzJmZjZkMmE4/OWUyMTRkNGFkNDVj/MWNiZGY0YzE1YTI2/MDBkN2YwZC93d3cu/ZGlnaWZvcm1hLmNv/bS8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "digiforma.com",
						"hostname": "www.digiforma.com",
						"favicon": "https://imgs.search.brave.com/KLNJi7jd3gLi14d4mWhJuIRrkMN4KXZK06psUYLtEi8/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMzczNjRiZGI5/YjU4MjU1ZTdkNjBh/YWMxYzJmZjZkMmE4/OWUyMTRkNGFkNDVj/MWNiZGY0YzE1YTI2/MDBkN2YwZC93d3cu/ZGlnaWZvcm1hLmNv/bS8",
						"path": "  › accueil  › le guide complet des organismes de formation (of)  › comment mettre en place une démarche d’ingénierie pédagogique et de formation auprès d’un public d’apprenants ?"
					},
					"age": "March 13, 2026",
					"extra_snippets": [
						"Il s’agit donc de tester en amont le dispositif de formation. Le D de développement. C’est lors de cette 4e étape que vous allez choisir les outils pédagogiques à mettre en œuvre dans votre session de formation et « scénariser » votre session de formation en imaginant vos interactions avec vos stagiaires (quizz, questionnaires en ligne, etc.).",
						"Un deuxième volet portant sur l’ingénierie de formation et ses 3 niveaux d’intervention · Une troisième partie dédiée aux méthodes et outils pédagogiques · Il existe de nombreuses méthodes pédagogiques pour concevoir des dispositifs de formation.",
						"L’ingénierie pédagogique : ce dernier niveau concerne le choix de dispositifs pédagogiques et leur scénarisation. Durant cette étape, l’ingénieur pédagogique veille à adapter les méthodes pédagogiques à un public d’apprenants.",
						"Un premier article dédié à l’ingénierie pédagogique et à la méthode ADDIE pour la conception de dispositifs pédagogiques"
					]
				},
				{
					"title": "L’hybride : Nouvelle ère de l’apprentissage en santé",
					"url": "https://www.e-vitalite.fr/hybride-apprentissage-sante/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "<strong>La matrice synchrone-asynchrone structure les apprentissages</strong>. Les temps synchrones servent au questionnement, à la clinique du raisonnement et aux debriefings. Les temps asynchrones traitent la préparation (capsules, quiz, lectures guidées) ...",
					"page_age": "2026-06-15T09:46:00",
					"profile": {
						"name": "E-vitalite",
						"url": "https://www.e-vitalite.fr/hybride-apprentissage-sante/",
						"long_name": "e-vitalite.fr",
						"img": "https://imgs.search.brave.com/mr21Jp1_a3jW1unGbfHH-RWFJvJvd3HQY_fKAtZ5_wM/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMzZkMzRhZjE1/YzI5MzJiN2JmZmIz/MTI5YTA5Y2E4Mjlh/NjhjOTQxY2NhOTMw/OWYwYTM5Yjg4YjVm/NzdhZmY1OS93d3cu/ZS12aXRhbGl0ZS5m/ci8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "e-vitalite.fr",
						"hostname": "www.e-vitalite.fr",
						"favicon": "https://imgs.search.brave.com/mr21Jp1_a3jW1unGbfHH-RWFJvJvd3HQY_fKAtZ5_wM/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMzZkMzRhZjE1/YzI5MzJiN2JmZmIz/MTI5YTA5Y2E4Mjlh/NjhjOTQxY2NhOTMw/OWYwYTM5Yjg4YjVm/NzdhZmY1OS93d3cu/ZS12aXRhbGl0ZS5m/ci8",
						"path": "  › accueil  › education et formation  › comment l’hybride transforme l’apprentissage en santé"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/TzO0u5xDpZFjbF4_Sef4HJkF3lqGep1zNBLK5H8mMZM/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/ZS12aXRhbGl0ZS5m/ci93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NS8xMS9Db21tZW50/LWxoeWJyaWRlLXRy/YW5zZm9ybWUtbGFw/cHJlbnRpc3NhZ2Ut/ZW4tc2FudGUuanBn",
						"original": "https://www.e-vitalite.fr/wp-content/uploads/2025/11/Comment-lhybride-transforme-lapprentissage-en-sante.jpg",
						"logo": false
					},
					"age": "2 weeks ago",
					"extra_snippets": [
						"En 2025, selon l’OCDE, 78 % des établissements ont intégré des dispositifs hybrides, et la DREES relevait déjà en 2024 que 82 % des étudiants infirmiers plébiscitaient ce format. La tendance s’explique par un double levier : la capacité à multiplier les mises en situation sans saturer les calendriers cliniques, et l’alignement progressif des contenus avec les besoins du terrain. Les écoles, CHU et instituts s’appuient sur l’ingénierie pédagogique pour articuler modules courts, évaluation par compétences et outils de suivi.",
						"Ce témoignage fait écho à la montée des LMS et des médias pédagogiques diversifiés. Dans cet environnement, l’alignement entre objectifs, activités et évaluation devient non négociable. La section suivante aborde précisément la manière d’orchestrer synchrone et asynchrone pour soutenir l’engagement sans surcharge. L’ingénierie pédagogique en santé gagne en granularité.",
						"Des dispositifs de mutualisation, comme Hybridium Santé (UNESS), facilitent l’accès aux contenus à forte valeur, tout en nivelant par le haut les standards. L’accompagnement technique et humain reste décisif pour éviter un « solutionnisme » centré sur l’outil. Infra et équipements : garantir la connectivité, surtout pour le synchrone. Compétences pédagogiques : former au design de parcours et à l’évaluation formative.",
						"La matrice synchrone-asynchrone structure les apprentissages. Les temps synchrones servent au questionnement, à la clinique du raisonnement et aux debriefings. Les temps asynchrones traitent la préparation (capsules, quiz, lectures guidées) et la consolidation (cas interactifs, journaux réflexifs)."
					]
				},
				{
					"title": "Ingénierie pédagogique — Wikipédia",
					"url": "https://fr.wikipedia.org/wiki/Ing%C3%A9nierie_p%C3%A9dagogique",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Enlart, S., Formation : les <strong>dispositifs</strong> <strong>en</strong> <strong>question</strong>, 2008 · Gagné, R. M., Golas, K., et Keller, J. M., Principles Of Instructional Design, 2004 (1e ed : 1974) Gustafson, K. L., et Branch, Survey of Instructional Development Models, 1997 · Knowles, M., L&#x27;apprenant adulte : vers un nouvel art de la formation, 1990 (1e ed. 1973) Lanarès, J., Laperrouza, M., &amp; Sylvestre, <strong>E</strong>. (2023). Design <strong>pédagogique</strong>...",
					"page_age": "2026-05-13T18:25:16",
					"profile": {
						"name": "Wikipedia",
						"url": "https://fr.wikipedia.org/wiki/Ing%C3%A9nierie_p%C3%A9dagogique",
						"long_name": "fr.wikipedia.org",
						"img": "https://imgs.search.brave.com/9hcXszQtxFqKhmv5bxBm9G2EFNIcGvLx34pvPEqARmw/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZTMzMDhhNDdi/YjBhOTk2ZTM1MTBm/ODZlNjc3Y2Q5ZjBj/MTFmOTQ5ZWIzNmRh/NjI4ZTI0NGRhZDgx/MmE4ZTJjNi9mci53/aWtpcGVkaWEub3Jn/Lw"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"deep_results": {
						"buttons": [
							{
								"type": "button_result",
								"title": "Définition",
								"url": "https://fr.wikipedia.org/wiki/Ing%C3%A9nierie_p%C3%A9dagogique#Définition"
							},
							{
								"type": "button_result",
								"title": "Modèles",
								"url": "https://fr.wikipedia.org/wiki/Ing%C3%A9nierie_p%C3%A9dagogique#Modèles"
							},
							{
								"type": "button_result",
								"title": "Phases",
								"url": "https://fr.wikipedia.org/wiki/Ing%C3%A9nierie_p%C3%A9dagogique#Phases"
							},
							{
								"type": "button_result",
								"title": "Outils et méthodes",
								"url": "https://fr.wikipedia.org/wiki/Ing%C3%A9nierie_p%C3%A9dagogique#Outils_et_méthodes"
							},
							{
								"type": "button_result",
								"title": "Bibliographie",
								"url": "https://fr.wikipedia.org/wiki/Ing%C3%A9nierie_p%C3%A9dagogique#Bibliographie"
							},
							{
								"type": "button_result",
								"title": "Notes et références",
								"url": "https://fr.wikipedia.org/wiki/Ing%C3%A9nierie_p%C3%A9dagogique#Notes_et_références"
							},
							{
								"type": "button_result",
								"title": "Articles connexes",
								"url": "https://fr.wikipedia.org/wiki/Ing%C3%A9nierie_p%C3%A9dagogique#Articles_connexes"
							}
						]
					},
					"meta_url": {
						"scheme": "https",
						"netloc": "fr.wikipedia.org",
						"hostname": "fr.wikipedia.org",
						"favicon": "https://imgs.search.brave.com/9hcXszQtxFqKhmv5bxBm9G2EFNIcGvLx34pvPEqARmw/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZTMzMDhhNDdi/YjBhOTk2ZTM1MTBm/ODZlNjc3Y2Q5ZjBj/MTFmOTQ5ZWIzNmRh/NjI4ZTI0NGRhZDgx/MmE4ZTJjNi9mci53/aWtpcGVkaWEub3Jn/Lw",
						"path": "› wiki  › Ingénierie_pédagogique"
					},
					"age": "May 13, 2026",
					"extra_snippets": [
						"L’ingénierie pédagogique est une démarche structurée composée d’un ensemble d’étapes dont le but est de concevoir, d’aménager ou de transformer un dispositif de formation en vue de favoriser l’apprentissage.",
						"Gestion des dispositions à l'acte d'apprendre (utilisation des technologies ou non, formation informelle ou formelle, accompagnement ou remédiation, etc.) Différents termes sont utilisés, tant en français (ingénierie pédagogique, design pédagogique, plan pédagogique, conception de séquences d’enseignement, conception de systèmes de formation) qu'en anglais (Instructional Design, Instructional Systems Design, Instructional Development, Instructional Design and Development, Learning Design, Training Design, Instructional Technology).",
						"Cette phase permet d'évaluer le dispositif pédagogique, ce qui permet de le réguler. Des évaluations peuvent être faites à différentes phases du processus de design pédagogique et/ou à la fin du processus. Rappelons-le, l'ingénierie pédagogique vise, entre autres, à l'optimisation du rapport résultats attendus / coûts de la formation.",
						"L'ingénierie pédagogique consiste à étudier, concevoir, réaliser et adapter des dispositifs d'enseignement, des formations, ou des cours. L’ingénierie pédagogique est une démarche structurée composée d’un ensemble d’étapes dont le but est de concevoir, d’aménager ou de ..."
					]
				},
				{
					"title": "Ingénierie de formation et ingénierie pédagogique : les clés du succès - Groupe Kwark",
					"url": "https://kwark.education/blog/ingenierie-de-formation-et-ingenierie-pedagogique-guide-complet-pour-le-digital-learning",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Aujourd’hui, cette ingénierie intègre systématiquement le numérique : LMS, mobile learning, réalité virtuelle et IA font désormais partie de la boîte à outils du responsable formation, avec une digitalisation de formations en constante évolution vers des parcours immersifs et interactifs. Si l’ingénierie de formation répond au « quoi » et au « pourquoi », l’ingénierie pédagogique s’attache au « comment ». Elle constitue l’art de concevoir des parcours d’apprentissage efficaces et engageants. L’ingénieur pédagogique est l’architecte du dispositif au niveau micro.",
					"profile": {
						"name": "Kwark",
						"url": "https://kwark.education/blog/ingenierie-de-formation-et-ingenierie-pedagogique-guide-complet-pour-le-digital-learning",
						"long_name": "kwark.education",
						"img": "https://imgs.search.brave.com/5LfY25Hrel4-ttAzSbfjIZSRVxkjieVbTDm_Q3kyIUY/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvM2ZlZDkwNzY0/MzYzYmE3NTRhZGM1/NWMyMDg4NzRiNDU2/ZTJkODk2Y2ZmODFi/MDg3Y2EzNTBkY2I0/YzA5ZTczYi9rd2Fy/ay5lZHVjYXRpb24v"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "kwark.education",
						"hostname": "kwark.education",
						"favicon": "https://imgs.search.brave.com/5LfY25Hrel4-ttAzSbfjIZSRVxkjieVbTDm_Q3kyIUY/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvM2ZlZDkwNzY0/MzYzYmE3NTRhZGM1/NWMyMDg4NzRiNDU2/ZTJkODk2Y2ZmODFi/MDg3Y2EzNTBkY2I0/YzA5ZTczYi9rd2Fy/ay5lZHVjYXRpb24v",
						"path": "› blog  › ingenierie-de-formation-et-ingenierie-pedagogique-guide-complet-pour-le-digital-learning"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/jExfCnFN-jUaWOzlwBMwDBnlhOhXxRhI2bCdl-sVUE4/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9mcmFt/ZXJ1c2VyY29udGVu/dC5jb20vaW1hZ2Vz/LzFnTE8wT1NydEhj/TkpkWVlZQWpuVDhY/OGlFSS5qcGc_d2lk/dGg9MTI4MCZhbXA7/aGVpZ2h0PTcyMA",
						"original": "https://framerusercontent.com/images/1gLO0OSrtHcNJdYYYAjnT8X8iEI.jpg?width=1280&amp;height=720",
						"logo": false
					},
					"extra_snippets": [
						"Aujourd’hui, cette ingénierie intègre systématiquement le numérique : LMS, mobile learning, réalité virtuelle et IA font désormais partie de la boîte à outils du responsable formation, avec une digitalisation de formations en constante évolution vers des parcours immersifs et interactifs. Si l’ingénierie de formation répond au « quoi » et au « pourquoi », l’ingénierie pédagogique s’attache au « comment ». Elle constitue l’art de concevoir des parcours d’apprentissage efficaces et engageants. L’ingénieur pédagogique est l’architecte du dispositif au niveau micro.",
						"Le niveau des systèmes d’information et de l’organisation englobe le choix du LMS, la gestion des inscriptions, les connexions avec le SIRH, le suivi des données de formation et la communication auprès des managers et des apprenants. Ce niveau assure la fluidité opérationnelle du dispositif. Le niveau de l’ingénierie pédagogique porte sur la conception des parcours, le choix des modalités, la production de contenus et l’accompagnement des formateurs.",
						"Le contrôle de la cohérence pédagogique est essentiel : alignement entre objectifs, activités, évaluation et transfert sur le poste de travail. Sans cette cohérence, le parcours risque de manquer sa cible. L’ingénierie de formation peut se synthétiser en quatre étapes classiques, qui structurent tout projet de développement des compétences : analyse, conception des dispositifs, mise en œuvre et pilotage, évaluation et amélioration continue.",
						"Les outils d’IA comme GoodGrades automatisent et fiabilisent la correction des travaux ouverts, libérant du temps pour l’analyse pédagogique et le coaching individualisé. L’ingénierie de formation s’inscrit dans un cycle itératif : les résultats de cette évaluation nourrissent la refonte des parcours pour l’année suivante. C’est ce processus d’amélioration continue qui garantit la pertinence du dispositif dans la durée."
					]
				},
				{
					"title": "Parcours Didactique des langues et ingénierie pédagogique numérique - UGA - Catalogue des formations - Université Grenoble Alpes",
					"url": "https://formations.univ-grenoble-alpes.fr/fr/catalogue-2021/master-XB/master-didactique-des-langues-IBC8AWN0/parcours-didactique-des-langues-et-ingenierie-pedagogique-numerique-IBC8IPVM.html",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Conception, mise en oeuvre et suivi de dispositifs de formation innovants exploitant les technologies · Scénarisation et accompagnement de formations en ligne, hybrides ou totalement à distance, ainsi que conception et adaptation didactique de contenu en vue de la production d&#x27;activités numériques interactives d&#x27;apprentissage · Ingénierie à la fois pédagogique ...",
					"profile": {
						"name": "Université Grenoble Alpes",
						"url": "https://formations.univ-grenoble-alpes.fr/fr/catalogue-2021/master-XB/master-didactique-des-langues-IBC8AWN0/parcours-didactique-des-langues-et-ingenierie-pedagogique-numerique-IBC8IPVM.html",
						"long_name": "formations.univ-grenoble-alpes.fr",
						"img": "https://imgs.search.brave.com/1b0VCsR4R1dNRqHDQObF2SVlAldo7MWPA_LKiu2Y5mc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMDhlNjk0YTI2/MDNlZmIxYjgxNzM2/ZTU4ZGNhMzMzYmRj/Y2VlMzUxNDI5YTRh/YjQ0NDAzYzMwYjNk/Yzc3YjM1NC9mb3Jt/YXRpb25zLnVuaXYt/Z3Jlbm9ibGUtYWxw/ZXMuZnIv"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "formations.univ-grenoble-alpes.fr",
						"hostname": "formations.univ-grenoble-alpes.fr",
						"favicon": "https://imgs.search.brave.com/1b0VCsR4R1dNRqHDQObF2SVlAldo7MWPA_LKiu2Y5mc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMDhlNjk0YTI2/MDNlZmIxYjgxNzM2/ZTU4ZGNhMzMzYmRj/Y2VlMzUxNDI5YTRh/YjQ0NDAzYzMwYjNk/Yzc3YjM1NC9mb3Jt/YXRpb25zLnVuaXYt/Z3Jlbm9ibGUtYWxw/ZXMuZnIv",
						"path": "› fr  › catalogue-2021  › master-XB  › master-didactique-des-langues-IBC8AWN0  › parcours-didactique-des-langues-et-ingenierie-pedagogique-numerique-IBC8IPVM.html"
					},
					"extra_snippets": [
						"Conception, mise en oeuvre et suivi de dispositifs de formation innovants exploitant les technologies · Scénarisation et accompagnement de formations en ligne, hybrides ou totalement à distance, ainsi que conception et adaptation didactique de contenu en vue de la production d'activités numériques interactives d'apprentissage · Ingénierie à la fois pédagogique et numérique, et gestion de projet pour que soient produites, dans le domaine des langues notamment, des solutions de formation cohérentes répondant aux besoins identifiés",
						"- Élaborer une problématique autour de questions liées à l'enseignement/apprentissage des langues - Planifier et mener à bien un projet de recherche dans ce domaine - Situer les principales interrogations qui traversent la didactique des langues et l'utilisation des TICE aujourd'hui - Caractériser une situation d'enseignement/apprentissage, un programme, un plan curriculaire, un dispositif (ayant ou non une dimension technologique) par rapport à des documents-cadre tels que le Cadre européen commun de référence pour les langues, le Cadre de référence des apprentissages pluriels ...",
						"Il forme des spécialistes dans les domaines de la didactique des langues, de l'ingénierie de formation ouverte et à distance et de l'ingénierie pédagogique numérique, capables de concevoir et de mettre en place des formations innovantes avec les technologies.",
						"En mettant l'accent sur l'ingénierie pédagogique et les technologies du numérique pour l'enseignement-apprentissage des langues, le parcours DILIPEM (DIdactique des Langues et Ingénierie PEdagogique nuMérique) ouvre aux étudiants le secteur des TICE et du e-learning , dans le domaine de la formation en langues et, plus largement, dans tout le domaine demandeur de formation par le numérique."
					]
				},
				{
					"title": "Avec le soutien de GUIDE METHODOLOGIQUE SUR L’EVEIL AUX SCIENCES ET AUX",
					"url": "https://www.ibe.unesco.org/sites/default/files/medias/fichiers/2024/03/UNESCO%20IBE_FR_050324_FINALGuideMethodo_Sciences%20and%20Technologies_ECCE%20Curricula_0.pdf?hub=41",
					"is_source_local": false,
					"is_source_both": false,
					"description": "conception des outils de l’étude (incluant par exemple les questionnaires, entretiens semi-directifs et grille · d’observation et d’analyse des pratiques de classe), (3) une lecture critique de différents documents (textes · officiels, Cadre d’Orientation Curriculaire (si disponible), programmes (spécifique EST ou général), échantillon · d’outils didactiques et de guides d’enseignement, modules de formation initiale et continue des · enseignants/éducateurs), dispositif d’évaluation du système éducatif, et (4) d’une étude et/ou de consultations",
					"profile": {
						"name": "UNESCO",
						"url": "https://www.ibe.unesco.org/sites/default/files/medias/fichiers/2024/03/UNESCO%20IBE_FR_050324_FINALGuideMethodo_Sciences%20and%20Technologies_ECCE%20Curricula_0.pdf?hub=41",
						"long_name": "ibe.unesco.org",
						"img": "https://imgs.search.brave.com/clWak5FH5--meB4D3Uj2guKIdI8-hZdh4_kjHChyGT4/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOTQzZTE2NjIy/ZDAzYTk1YmVlNTk1/MmFkYWI1NTIwMmEy/NWYxOGNlMzgzOTIw/MWI4ZjQ3MzQxODdl/OTE3NjZiMS93d3cu/aWJlLnVuZXNjby5v/cmcv"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "ibe.unesco.org",
						"hostname": "www.ibe.unesco.org",
						"favicon": "https://imgs.search.brave.com/clWak5FH5--meB4D3Uj2guKIdI8-hZdh4_kjHChyGT4/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOTQzZTE2NjIy/ZDAzYTk1YmVlNTk1/MmFkYWI1NTIwMmEy/NWYxOGNlMzgzOTIw/MWI4ZjQ3MzQxODdl/OTE3NjZiMS93d3cu/aWJlLnVuZXNjby5v/cmcv",
						"path": "› sites  › default  › files  › medias  › fichiers  › 2024  › 03  › UNESCO IBE_FR_050324_FINALGuideMethodo_Sciences and Technologies_ECCE Curricula_0.pdf"
					},
					"content_type": "pdf",
					"extra_snippets": [
						"l’éducation, orienté notamment sur le curriculum et la pédagogie en Education et Protection de la Petite Enfance · (EPPE). Ce guide n'aurait pas été possible sans la précieuse contribution de nombreuses personnes et institutions. Il est le résultat d'une collaboration fructueuse entre le Bureau international d'éducation de l'UNESCO (UNESCO- BIE) et les experts M. Martin Compaoré, expert en ingénierie pédagogique et consultant indépendant en",
						"conception des outils de l’étude (incluant par exemple les questionnaires, entretiens semi-directifs et grille · d’observation et d’analyse des pratiques de classe), (3) une lecture critique de différents documents (textes · officiels, Cadre d’Orientation Curriculaire (si disponible), programmes (spécifique EST ou général), échantillon · d’outils didactiques et de guides d’enseignement, modules de formation initiale et continue des · enseignants/éducateurs), dispositif d’évaluation du système éducatif, et (4) d’une étude et/ou de consultations",
						"respectueuses de l’environnement et qui tiennent compte des questions de genre. L’EPPE constitue · ainsi une fenêtre d’opportunités pour réinventer une pédagogie véritablement active, pour motiver et",
						"le questionnement, la pensée critique et la résolution de problèmes, avec une même approche pédagogique"
					]
				},
				{
					"title": "Ingénieur pédagogique & digital learning - Toulouse - Offre d'emploi Avril 2026 - Jobijoba",
					"url": "https://www.jobijoba.com/fr/annonce/54/ec768ba08db8604ee92c293eaea00d2a",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Produire des ressources pédagogiques : supports PowerPoint, modules e‑learning interactifs, quiz, vidéos, voix‑off, Serious Games. Piloter les projets de formation : relation client, animation d&#x27;ateliers et validation des livrables. Être force de proposition sur les approches pédagogiques et digitales. Profil : Expérience significative en ingénierie pédagogique et digitale.",
					"profile": {
						"name": "Jobijoba",
						"url": "https://www.jobijoba.com/fr/annonce/54/ec768ba08db8604ee92c293eaea00d2a",
						"long_name": "jobijoba.com",
						"img": "https://imgs.search.brave.com/47oCPKTE0zh5fBckPJQfZGvogjjgkAJkGob_xQR1-9s/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNWE2Y2I4Mzg5/MDhhZmU1NTk3NDk3/MmFjODQ5NGZjYzgw/ZmYyMzU5Y2MwYTcw/ZDUxZTgzMDJjOWQ1/NzlhY2ZjZC93d3cu/am9iaWpvYmEuY29t/Lw"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "jobijoba.com",
						"hostname": "www.jobijoba.com",
						"favicon": "https://imgs.search.brave.com/47oCPKTE0zh5fBckPJQfZGvogjjgkAJkGob_xQR1-9s/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNWE2Y2I4Mzg5/MDhhZmU1NTk3NDk3/MmFjODQ5NGZjYzgw/ZmYyMzU5Y2MwYTcw/ZDUxZTgzMDJjOWQ1/NzlhY2ZjZC93d3cu/am9iaWpvYmEuY29t/Lw",
						"path": "  › accueil  › emploi  › emploi enseignement  › emploi ingénieur pédagogique  › emploi ingénieur pédagogique à toulouse  › ingénieur pédagogique & digital learning"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/p-_RyPk7CR4v1MgNZSx1hI_OJk4TwMiGwoiNLkW97rM/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/am9iaWpvYmEuY29t/L2ZyL2J1aWxkL2lt/YWdlcy9sb2dvLWpv/Ymlqb2JhLTIwMHgy/MDAuanBn",
						"original": "https://www.jobijoba.com/fr/build/images/logo-jobijoba-200x200.jpg",
						"logo": true
					},
					"organization": {
						"type": "organization",
						"name": "Step Up",
						"contact_points": []
					},
					"extra_snippets": [
						"Produire des ressources pédagogiques : supports PowerPoint, modules e‑learning interactifs, quiz, vidéos, voix‑off, Serious Games. Piloter les projets de formation : relation client, animation d'ateliers et validation des livrables. Être force de proposition sur les approches pédagogiques et digitales. Profil : Expérience significative en ingénierie pédagogique et digitale."
					]
				},
				{
					"title": "L'ingénierie pédagogique : principes, méthodes et innovations | SPARTED",
					"url": "https://www.sparted.com/fr-blog/ingenierie-pedagogique",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Exemple : Utilisation de questionnaires de satisfaction après chaque module (Niveau 1) et de tests de connaissances (Niveau 2). ... Les outils technologiques jouent un rôle crucial dans l&#x27;ingénierie pédagogique moderne, facilitant la conception, la distribution et l&#x27;évaluation des programmes de formation. Parmi les outils couramment utilisés, on trouve les plateformes de gestion de l&#x27;apprentissage (LMS), les outils d&#x27;auteur (pour créer des contenus interactifs), et les systèmes de gestion de la performance.",
					"profile": {
						"name": "Sparted",
						"url": "https://www.sparted.com/fr-blog/ingenierie-pedagogique",
						"long_name": "sparted.com",
						"img": "https://imgs.search.brave.com/sbKWC7MsZ55ykbliFB8PrNd8GWdm3OSu_SjPtzOrPYs/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYjA4MzRkMjRh/ZGIwODFlMjUzYzdm/MTE5ZTQxODNiN2E1/MzgyNDAyODlhZDJj/ZDY0ZmZjNWQ2YTk2/YTU5Y2ZlZS93d3cu/c3BhcnRlZC5jb20v"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "sparted.com",
						"hostname": "www.sparted.com",
						"favicon": "https://imgs.search.brave.com/sbKWC7MsZ55ykbliFB8PrNd8GWdm3OSu_SjPtzOrPYs/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYjA4MzRkMjRh/ZGIwODFlMjUzYzdm/MTE5ZTQxODNiN2E1/MzgyNDAyODlhZDJj/ZDY0ZmZjNWQ2YTk2/YTU5Y2ZlZS93d3cu/c3BhcnRlZC5jb20v",
						"path": "› fr-blog  › ingenierie-pedagogique"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/ptwzYl5PkQfVUIyXZ7oQGjRDS52Joik-MxfFeGb8ckQ/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/MTk3YmJhMDgzMjYw/NDc2MDk4ZGViZDMv/NjZhODk4ZmY3NGM3/ZDI1MDZlZTU0OGFj/X0luZ2UlQ0MlODFu/aWVyaWUlMjBQZSVD/QyU4MWRhZ29naXF1/ZSUyMC0lMjBDb3Zl/ciUyMGxpdHRsZS5w/bmc",
						"original": "https://cdn.prod.website-files.com/6197bba083260476098debd3/66a898ff74c7d2506ee548ac_Inge%CC%81nierie%20Pe%CC%81dagogique%20-%20Cover%20little.png",
						"logo": false
					},
					"extra_snippets": [
						"Exemple : Utilisation de questionnaires de satisfaction après chaque module (Niveau 1) et de tests de connaissances (Niveau 2). ... Les outils technologiques jouent un rôle crucial dans l'ingénierie pédagogique moderne, facilitant la conception, la distribution et l'évaluation des programmes de formation. Parmi les outils couramment utilisés, on trouve les plateformes de gestion de l'apprentissage (LMS), les outils d'auteur (pour créer des contenus interactifs), et les systèmes de gestion de la performance.",
						"Dans les années 2000, la généralisation de l'Internet a transformé le paysage éducatif, permettant l'accès à des modules de formation en ligne et la diffusion de contenus interactifs. Plus récemment, l'apparition de l'intelligence artificielle et des outils d'analyse de données a encore enrichi les approches pédagogiques, permettant une personnalisation accrue des parcours de formation. ... L'ingénierie pédagogique se distingue des autres formes d'ingénierie par son focus sur l'apprentissage humain plutôt que sur des produits ou systèmes techniques.",
						"Les stratégies d'apprentissage en ingénierie pédagogique visent à adapter les méthodes d'enseignement aux besoins spécifiques des apprenants. Cela inclut l'analyse des styles d'apprentissage (visuel, auditif, kinesthésique), ainsi que la personnalisation des contenus et des activités pour maximiser l'engagement et la rétention des connaissances. Exemple : Utilisation de simulations interactives pour les apprenants kinesthésiques.",
						"Exemple : Utilisation d'applications mobiles tel que SPARTED pour des sessions de formation courtes et interactives, adaptées à une consommation en déplacement. ... Les nouvelles technologies révolutionnent l'ingénierie pédagogique, en particulier à travers le microlearning et le mobile learning."
					]
				},
				{
					"title": "Des ressources numériques innovantes et adaptées grâce au dispositif Édu-Up | éduscol | Ministère de l'Éducation nationale | Direction générale de l'enseignement scolaire",
					"url": "https://eduscol.education.gouv.fr/6753/des-ressources-numeriques-innovantes-et-adaptees-grace-au-dispositif-edu",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Site à consulter : https://edu.novelclass.com/ Mots-clés : co-pilotage pédagogique, personnalisation des apprentissages, remédiation, analyse IA des niveaux élèves, supports pédagogiques variés. NatBraille 3 est un éditeur Web collaboratif destinés aux voyants et DV, accessible sur ordinateur/tablette/smartphone. Il permet la collaboration temps réel sur des documents textuels/scientifiques ; une interaction multimodale (graphique, vocale, tactile) ; l’apprentissage progressif du Braille ; la gestion des tableaux/mathématiques/formules de chimie ; l’embossage. C’est un dispositif d’inclusion en milieu ordinaire, où voyants et DV collaborent pour apprendre/produire des documents en commun.",
					"page_age": "2026-06-08T00:00:00",
					"profile": {
						"name": "Education",
						"url": "https://eduscol.education.gouv.fr/6753/des-ressources-numeriques-innovantes-et-adaptees-grace-au-dispositif-edu",
						"long_name": "eduscol.education.gouv.fr",
						"img": "https://imgs.search.brave.com/8U2Q_SrJrj8lAYYBWSZHqhoLFq5v4Yq_kQbxIkNeU90/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYzVkOGMxYTVk/MzMyZTQ3NjVkMzA5/YmVlZTY2MzlkYzE4/ZmQyYTllNzUyM2E3/NGQwMTlmMjlhN2Q4/YmI3MWJmMC9lZHVz/Y29sLmVkdWNhdGlv/bi5nb3V2LmZyLw"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "eduscol.education.gouv.fr",
						"hostname": "eduscol.education.gouv.fr",
						"favicon": "https://imgs.search.brave.com/8U2Q_SrJrj8lAYYBWSZHqhoLFq5v4Yq_kQbxIkNeU90/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYzVkOGMxYTVk/MzMyZTQ3NjVkMzA5/YmVlZTY2MzlkYzE4/ZmQyYTllNzUyM2E3/NGQwMTlmMjlhN2Q4/YmI3MWJmMC9lZHVz/Y29sLmVkdWNhdGlv/bi5nb3V2LmZyLw",
						"path": "› 6753  › des-ressources-numeriques-innovantes-et-adaptees-grace-au-dispositif-edu"
					},
					"age": "3 weeks ago",
					"extra_snippets": [
						"Elles sont mises à disposition des enseignants et de leurs élèves le plus souvent en accès direct et gratuit ou bien après inscription libre et volontaire, à tout ou partie de la ressource. ... Dinobot est une IA pédagogique « socratique » : plutôt que de livrer la réponse, elle guide l'élève par le questionnement afin de préserver l'effort et de replacer l'enseignant au centre.",
						"Site à consulter : https://edu.novelclass.com/ Mots-clés : co-pilotage pédagogique, personnalisation des apprentissages, remédiation, analyse IA des niveaux élèves, supports pédagogiques variés. NatBraille 3 est un éditeur Web collaboratif destinés aux voyants et DV, accessible sur ordinateur/tablette/smartphone. Il permet la collaboration temps réel sur des documents textuels/scientifiques ; une interaction multimodale (graphique, vocale, tactile) ; l’apprentissage progressif du Braille ; la gestion des tableaux/mathématiques/formules de chimie ; l’embossage. C’est un dispositif d’inclusion en milieu ordinaire, où voyants et DV collaborent pour apprendre/produire des documents en commun.",
						"Elle s’appuie sur un clavier hexagonal innovant et intuitif, une nouvelle disposition des notes dans l’espace qui offre un accès visuel et ergonomique aux concepts harmoniques. Grâce à un système de guide lumineux sous les touches servant de guide, un algorithme d’évaluation du suivi d’une partition interactive, et un répertoire de contenus numériques musicaux et pédagogiques (fiches projet), Music’S’Cool permet de réaliser des projets musicaux d’interprétation ou de création et d’écouter, comparer et construire une culture musicale, de façon individuelle ou par petits groupes d’élèves.",
						"Lilémo est un jeu pédagogique numérique sans écran destiné à l’apprentissage de la lecture pour les enfants entre 3 et 7 ans (et plus) basé sur la manipulation et les interactions multisensorielles (l’ouïe, la vue, le toucher par la manipulation) pour apprendre en autonomie. Financé par le dispositif Édu-Up, LiEnBraille est la version adaptée de Lilémo pour les non ou malvoyants."
					]
				},
				{
					"title": "Ingénierie pédagogique et technologies émergentes : défis et leviers d’action identifiés dans la conception de jumeaux d’enseignement numériques immersifs et interactifs | Médiations et médiatisations",
					"url": "https://revue-mediations.teluq.ca/index.php/Distances/article/view/439",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Virtual Reality and OPCUA-based architecture for pedagogical scenarios in Manufacturing and Computer Sciences curriculum. The 13th Conference on Learning Factories (CLF 2023). DOI: https://doi.org/10.2139/ssrn.4457032 · Henri, F. (2019). Quel changement à l’ère numérique? Quelle ingénierie pédagogique pour y répondre?",
					"page_age": "2025-04-16T00:00:00",
					"profile": {
						"name": "Teluq",
						"url": "https://revue-mediations.teluq.ca/index.php/Distances/article/view/439",
						"long_name": "revue-mediations.teluq.ca",
						"img": "https://imgs.search.brave.com/geD0Jrw0ZjALtiqXzxKGoRLbi-Mvq3lYXn0HXXGhUR0/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNTdlNWNkZjY4/NThiNDc1ZjFmNDhm/ZjEzZjViZTY2MTYy/M2JiYmQ0MWIzNTRm/MmQzY2EzOWJjNDg1/NWRmZDVmOC9yZXZ1/ZS1tZWRpYXRpb25z/LnRlbHVxLmNhLw"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "revue-mediations.teluq.ca",
						"hostname": "revue-mediations.teluq.ca",
						"favicon": "https://imgs.search.brave.com/geD0Jrw0ZjALtiqXzxKGoRLbi-Mvq3lYXn0HXXGhUR0/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNTdlNWNkZjY4/NThiNDc1ZjFmNDhm/ZjEzZjViZTY2MTYy/M2JiYmQ0MWIzNTRm/MmQzY2EzOWJjNDg1/NWRmZDVmOC9yZXZ1/ZS1tZWRpYXRpb25z/LnRlbHVxLmNhLw",
						"path": "› index.php  › Distances  › article  › view  › 439"
					},
					"age": "April 16, 2025",
					"extra_snippets": [
						"Les résultats permettent de mieux comprendre la conception collaborative de dispositifs pédagogiques, d’identifier les nouveaux acteurs autour de la technologie émergente des JNE et de mettre en lumière les leviers d’action pour optimiser l’ingénierie pédagogique avec des technologies émergentes.",
						"Dangouloff, N., Cuvelier , L., & Fernagu, S. (2025). Ingénierie pédagogique et technologies émergentes : défis et leviers d’action identifiés dans la conception de jumeaux d’enseignement numériques immersifs et interactifs. Médiations Et médiatisations, (20), 54–71.",
						"Blandin, B. (2011, juin 8). Professionnalisation des ingénieurs : quelques réflexions à partir de nos travaux de recherche sur l’apprentissage. VIe colloque Questions de pédagogie dans l’enseignement supérieur.",
						"Virtual Reality and OPCUA-based architecture for pedagogical scenarios in Manufacturing and Computer Sciences curriculum. The 13th Conference on Learning Factories (CLF 2023). DOI: https://doi.org/10.2139/ssrn.4457032 · Henri, F. (2019). Quel changement à l’ère numérique? Quelle ingénierie pédagogique pour y répondre?"
					]
				},
				{
					"title": "Formation ingénierie pédagogique - Intégrez la gamification efficace",
					"url": "https://www.newtonagence.com/formations/formation-ingenierie-pedagogique/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "L’utilisation de plateformes, d’applications et de dispositifs innovants permet de concevoir des contenus interactifs et engageants, adaptés aux pratiques professionnelles. Nos formations en ingénierie pédagogique sont spécialement conçues pour s’adapter aux contraintes des professionnels.",
					"page_age": "2025-07-04T12:13:55",
					"profile": {
						"name": "Newton Agence",
						"url": "https://www.newtonagence.com/formations/formation-ingenierie-pedagogique/",
						"long_name": "newtonagence.com",
						"img": "https://imgs.search.brave.com/ybX3gi8Flavjy9W1o2-LtBMliTVW9NmXPQJGuUkjzFs/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYWQ3YmFkOTVi/ZGI0ZjRlMTI0YmYz/ZTkxNmVmNGRiOWNl/NDFiMzVlYjg4YmRm/Y2EyYWE1MDQzYzhk/MTUyMDI5MS93d3cu/bmV3dG9uYWdlbmNl/LmNvbS8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "newtonagence.com",
						"hostname": "www.newtonagence.com",
						"favicon": "https://imgs.search.brave.com/ybX3gi8Flavjy9W1o2-LtBMliTVW9NmXPQJGuUkjzFs/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYWQ3YmFkOTVi/ZGI0ZjRlMTI0YmYz/ZTkxNmVmNGRiOWNl/NDFiMzVlYjg4YmRm/Y2EyYWE1MDQzYzhk/MTUyMDI5MS93d3cu/bmV3dG9uYWdlbmNl/LmNvbS8",
						"path": "  › accueil  › formations  › formation en ingénierie pédagogique : concevez des formations impactantes"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/hdXtyjm_Pu9W8faEsxA7hXuUbLdMHWWlpoxQ-NHQv4Y/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/bmV3dG9uYWdlbmNl/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMi8wMy9BRkVT/VC0yLnN2Zw",
						"original": "https://www.newtonagence.com/wp-content/uploads/2022/03/AFEST-2.svg",
						"logo": true
					},
					"age": "July 4, 2025",
					"extra_snippets": [
						"L’utilisation de plateformes, d’applications et de dispositifs innovants permet de concevoir des contenus interactifs et engageants, adaptés aux pratiques professionnelles. Nos formations en ingénierie pédagogique sont spécialement conçues pour s’adapter aux contraintes des professionnels.",
						"L’ingénierie pédagogique désigne la conception méthodique de parcours d’apprentissage en fonction de besoins spécifiques. Elle s’appuie sur des modèles et des méthodes permettant de structurer les contenus, les ressources et les dispositifs.",
						"L’ingénierie pédagogique est un véritable levier stratégique pour transformer vos dispositifs de formation et maximiser leur impact.",
						"L’ingénierie pédagogique repose sur un processus structuré pour garantir la qualité et l’efficacité des dispositifs de formation."
					]
				},
				{
					"title": "Ingénierie pédagogique : les clés d'une formation efficace",
					"url": "https://www.didask.com/post/ingenierie-pedagogique-ere-digital",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Cette évolution marque un tournant ... véritablement individualisées. <strong>L&#x27;IA pédagogique analyse en temps réel les interactions de l&#x27;apprenant, son rythme de progression et ses points de blocage</strong>....",
					"page_age": "2025-01-27T00:00:00",
					"profile": {
						"name": "Didask",
						"url": "https://www.didask.com/post/ingenierie-pedagogique-ere-digital",
						"long_name": "didask.com",
						"img": "https://imgs.search.brave.com/m2Z7xRZgZm0yir4LbI_y75B0PXiOwwYXiEsDq14NUkc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMmVhYjQxZDgw/YzM2MGU5Y2IzOWYy/MWNmMTlkMDU0YWQy/M2M1NGU1YjExODNk/ZTEyODE5MjliMDQ4/MmJkYTdhMC93d3cu/ZGlkYXNrLmNvbS8"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "didask.com",
						"hostname": "www.didask.com",
						"favicon": "https://imgs.search.brave.com/m2Z7xRZgZm0yir4LbI_y75B0PXiOwwYXiEsDq14NUkc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMmVhYjQxZDgw/YzM2MGU5Y2IzOWYy/MWNmMTlkMDU0YWQy/M2M1NGU1YjExODNk/ZTEyODE5MjliMDQ4/MmJkYTdhMC93d3cu/ZGlkYXNrLmNvbS8",
						"path": "› post  › ingenierie-pedagogique-ere-digital"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/tHSckWg5pc63-RXnzyHuNpeqMTqGP68ZBU8aKiwjrP4/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/NjIwMWE3NTNhZTI3/NTVhMGE0M2RhNmEv/Njc5NzkyMWI4Zjk1/YTQyYzhlZWJhY2Ex/XzE0LWRpZGFzay1s/bXMtZWxlYXJuaW5n/LWZvcm1hdGlvbi1p/bmVnZW5pZXJpZS1w/ZWRhZ29naXF1ZS1k/aWdpdGFsLndlYnA",
						"original": "https://cdn.prod.website-files.com/66201a753ae2755a0a43da6a/6797921b8f95a42c8eebaca1_14-didask-lms-elearning-formation-inegenierie-pedagogique-digital.webp",
						"logo": false
					},
					"age": "January 27, 2025",
					"extra_snippets": [
						"L'ingénierie pédagogique à l'ère digitale ne se résume pas à une simple question d'outils ou de technologies.",
						"Bien au-delà de la simple numérisation des contenus, l'ingénierie pédagogique redéfinit la relation entre l'apprenant et le savoir, plaçant l'interaction et l'engagement au cœur du processus d'apprentissage.",
						"Créer des parcours qui stimulent l’engagement active des apprenants tout en maintenant une progression pédagogique cohérente. Ce nouveau paradigme exige une maîtrise fine des formats interactifs - exercices pratiques, simulations, évaluations dynamiques - qui permettent de transformer chaque session d'apprentissage en une opportunité de développement concret des compétences. Cette approche renouvelée de l'ingénierie pédagogique s'appuie sur un constat simple mais fondamental : l'efficacité d'une formation repose en partie sur l'engagement actif de l'apprenant.",
						"La personnalisation représente aujourd'hui l'horizon le plus prometteur de l'ingénierie pédagogique digitale. Grâce à l'intelligence artificielle, nous entrons dans une ère où chaque parcours peut s'adapter dynamiquement aux besoins spécifiques de l'apprenant. Cette évolution marque un tournant décisif : la fin des formations standardisées au profit d'expériences d'apprentissage véritablement individualisées. L'IA pédagogique analyse en temps réel les interactions de l'apprenant, son rythme de progression et ses points de blocage."
					]
				},
				{
					"title": "Ingénierie pédagogique : Stratégies et pratiques efficaces pour 2026 - Groupe Kwark",
					"url": "https://kwark.education/blog/ingenierie-pedagogique-guide-2026-pour-revolutionner-votre-digital-learning",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Ce guide vous montre comment appliquer rapidement les grands principes de l’ingénierie pédagogique pour concevoir ou refondre un dispositif concret : onboarding, conformité, soft skills, montée en compétences techniques.",
					"profile": {
						"name": "Kwark",
						"url": "https://kwark.education/blog/ingenierie-pedagogique-guide-2026-pour-revolutionner-votre-digital-learning",
						"long_name": "kwark.education",
						"img": "https://imgs.search.brave.com/5LfY25Hrel4-ttAzSbfjIZSRVxkjieVbTDm_Q3kyIUY/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvM2ZlZDkwNzY0/MzYzYmE3NTRhZGM1/NWMyMDg4NzRiNDU2/ZTJkODk2Y2ZmODFi/MDg3Y2EzNTBkY2I0/YzA5ZTczYi9rd2Fy/ay5lZHVjYXRpb24v"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "kwark.education",
						"hostname": "kwark.education",
						"favicon": "https://imgs.search.brave.com/5LfY25Hrel4-ttAzSbfjIZSRVxkjieVbTDm_Q3kyIUY/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvM2ZlZDkwNzY0/MzYzYmE3NTRhZGM1/NWMyMDg4NzRiNDU2/ZTJkODk2Y2ZmODFi/MDg3Y2EzNTBkY2I0/YzA5ZTczYi9rd2Fy/ay5lZHVjYXRpb24v",
						"path": "› blog  › ingenierie-pedagogique-guide-2026-pour-revolutionner-votre-digital-learning"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/2uP-GSWH6Yqodue2SujAvDh3WgxCP-ksC2b9VqxyxaY/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9mcmFt/ZXJ1c2VyY29udGVu/dC5jb20vaW1hZ2Vz/L1dxRThSeUp5SGRu/WHRDNTh2S2xubDcx/RFp2QS5qcGc_d2lk/dGg9MjU2MCZhbXA7/aGVpZ2h0PTE0NDA",
						"original": "https://framerusercontent.com/images/WqE8RyJyHdnXtC58vKlnl71DZvA.jpg?width=2560&amp;height=1440",
						"logo": false
					},
					"extra_snippets": [
						"Pourtant, en 2026, un constat s’impose : sans ingénierie pédagogique structurée, un parcours de formation digitale reste artisanal, difficile à évaluer et rarement aligné sur les objectifs métiers. Les responsables formation, DRH et dirigeants de centres de formation cherchent désormais des méthodes rigoureuses pour concevoir, déployer et mesurer l’impact de leurs dispositifs.",
						"Ce guide vous montre comment appliquer rapidement les grands principes de l’ingénierie pédagogique pour concevoir ou refondre un dispositif concret : onboarding, conformité, soft skills, montée en compétences techniques.",
						"Pourtant, sa définition est simple : c’est l’application de méthodes d’ingénierie à la pédagogie. Cette discipline structure l’analyse, la conception, le développement, le déploiement et l’évaluation d’un dispositif de formation.",
						"L’ingénierie pédagogique définit la colonne vertébrale du parcours : rythme, articulation des temps, modalités d’évaluation intermédiaire. Kwark accompagne régulièrement des organismes historiquement présentiels à passer à des dispositifs hybrides conformes aux exigences Qualiopi."
					]
				},
				{
					"title": "Tout sur l'ingénierie pédagogique : Guide complet 2025",
					"url": "https://www.teachizy.fr/blog/ingenierie-pedagogique-guide-complet/",
					"is_source_local": false,
					"is_source_both": false,
					"description": "Utilisés pour créer des contenus de formation toujours plus efficaces, ils permettent d’offrir des expériences d’apprentissage immersives, interactives et personnalisées, répondant ainsi les objectifs pédagogiques atteignables. En entreprise, intégrer l’ingénierie pédagogique va permettre de développer des dispositifs de formation adaptés d’améliorer la compétitivité et de répondre efficacement aux besoins en compétences.",
					"page_age": "2025-06-24T12:56:19",
					"profile": {
						"name": "Teachizy",
						"url": "https://www.teachizy.fr/blog/ingenierie-pedagogique-guide-complet/",
						"long_name": "teachizy.fr",
						"img": "https://imgs.search.brave.com/jbUvnb6ASAPlWjNy8CJ-tiQrm53qQsW1n1nLdVXcip8/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYTlmYjQzYTY4/MDEyOTMyM2JkNjc4/MTM3YzEyMmQyNzgx/NzBmZjUwMmM2NTdh/NjBiYmU3MDVmOGNh/YjhhZjkyOC93d3cu/dGVhY2hpenkuZnIv"
					},
					"language": "fr",
					"family_friendly": true,
					"type": "search_result",
					"subtype": "generic",
					"is_live": false,
					"meta_url": {
						"scheme": "https",
						"netloc": "teachizy.fr",
						"hostname": "www.teachizy.fr",
						"favicon": "https://imgs.search.brave.com/jbUvnb6ASAPlWjNy8CJ-tiQrm53qQsW1n1nLdVXcip8/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYTlmYjQzYTY4/MDEyOTMyM2JkNjc4/MTM3YzEyMmQyNzgx/NzBmZjUwMmM2NTdh/NjBiYmU3MDVmOGNh/YjhhZjkyOC93d3cu/dGVhY2hpenkuZnIv",
						"path": "› blog  › ingenierie-pedagogique-guide-complet"
					},
					"thumbnail": {
						"src": "https://imgs.search.brave.com/A6tN3BsYniAtYc_i19zqo-E4j0jyO47WB3X03Lcsixs/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/dGVhY2hpenkuZnIv/d3AtY29udGVudC91/cGxvYWRzLzIwMjQv/MDUvMDExNTNlOWU5/YjMyMDBjNjQ5ZDcy/Nzg0ZTEwNDIwNTE1/Nzc1NmQzYzQ1OGU4/MTlkOTFlZWQ5YjFh/MzcxNjg5MS5wbmc",
						"original": "https://www.teachizy.fr/wp-content/uploads/2024/05/01153e9e9b3200c649d72784e104205157756d3c458e819d91eed9b1a3716891.png",
						"logo": false
					},
					"age": "June 24, 2025",
					"organization": {
						"type": "organization",
						"name": "Teachizy",
						"contact_points": []
					},
					"extra_snippets": [
						"Utilisés pour créer des contenus de formation toujours plus efficaces, ils permettent d’offrir des expériences d’apprentissage immersives, interactives et personnalisées, répondant ainsi les objectifs pédagogiques atteignables. En entreprise, intégrer l’ingénierie pédagogique va permettre de développer des dispositifs de formation adaptés d’améliorer la compétitivité et de répondre efficacement aux besoins en compétences.",
						"La méthode ADDIE, clé en ingénierie pédagogique, se divise en 5 étapes : Analyse des besoins, Design du dispositif pédagogique, Développement du contenu, Implémentation de la formation, et Évaluation des résultats.",
						"C’est le fait d’examiner si les objectifs de formation sont atteints et comment le dispositif pédagogique peut être amélioré. Cette phase assure la qualité et l’efficacité de la formation auprès des apprenants. Les modèles d’ingénierie pédagogique les plus utilisés incluent, comme vu précédemment, ADDIE (Analyse, Design, Développement, Implémentation, Évaluation) et SAM (Successive Approximation Model).",
						"L’ingénierie pédagogique est le fait de concevoir, mettre en œuvre et évaluer des dispositifs pédagogiques efficaces."
					]
				}
			]
		}
	]
	
	return output 
}

//lancer une requete
function searchQuery(query) {
	const url = new URL(settings.models.search_engine.brave.url)
	url.searchParams.append("q", query)
	url.searchParams.append("search_lang", settings.context.language.code)

	return fetch(url, {
		headers: {
			Accept: "application/json",
			"Accept-Encoding": "gzip",
			"X-Subscription-Token": process.env.BRAVE_KEY
		},
	})
	.then(response => response.json() )
	.then(results => {
		return {
			query : query,
			results : results.web.results
		}
	})
	.catch(error => {
		console.log('error on parsing response')
		return error
	})
}