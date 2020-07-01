import React, { useState, useEffect } from 'react'
import api from './services/api';

import './App.css';
import backgroundImage from './assets/background.jpg'

import Header from './components/Header'

export default function App() {
	const [projects, setProjects] = useState([]);

	//dispara funções assim que o componente é exibido em tela
	// useEffect recebe dois parâmetros:
	// 1 = Qual função quer disparar
	// 2 = quando
	//não pode ser async a função de dentro
	useEffect(() => {
		api.get('projects').then(response => {
			setProjects(response.data);
		})
	}, []);


	//useState retorna um array com duas posições
	//
	// 1. Variável com o seu valor inicial
	// 2. Função para atualizarmos o valor

	async function handleAddProject() {
		//projects.push(`Novo Projeto ${Date.now()}`)

		//conceito de imutabilidade aplicado
		// ...projects traz todos os elementos que já existe no array e
		// `Novo Projeto ${Date.now()}` adiciona o novo elementos
		// setProjects([...projects, `Novo Projeto ${Date.now()}`]);
		const response = await api.post('projects',{
			//mesmo do método POST do insomnia
			title: `Novo Projeto ${Date.now()}`,
			owner: "Jessica Thomaz"
		});
		const project = response.data;

		setProjects ([...projects, project]);
	}

	return (
		<>
			<Header title="Projects"/>

			{/* <img width={300} src={backgroundImage} /> */}

			<ul>
				{projects.map(project => <li key={project.id}>{project.title}</li>)}
			</ul>

			<button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
		</>
	);
}
