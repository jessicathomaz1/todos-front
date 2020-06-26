import React, { useState } from 'react'

import Header from './components/Header'

export default function App() {
	const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

	//useState retorna um array com duas posições
	//
	// 1. Variável com o seu valor inicial
	// 2. Função para atualizarmos o valor

	function handleAddProject() {
		//projects.push(`Novo Projeto ${Date.now()}`)

		//conceito de imutabilidade aplicado
		// ...projects traz todos os elementos que já existe no array e
		// `Novo Projeto ${Date.now()}` adiciona o novo elementos
		setProjects([...projects, `Novo Projeto ${Date.now()}`]);
	}

	return (
		<>
			<Header title="Projects"/>

			<ul>
				{projects.map(project => <li key={project}>{project}</li>)}
			</ul>

			<button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
		</>
	);
}
