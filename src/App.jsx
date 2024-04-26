import { useState, useEffect } from "react"
import data from "./assets/data/api.json"
import Card from "./assets/components/Card"
import Modal from "./assets/components/Modal"

function App() {
	const [articles, setArticles] = useState(
		localStorage.getItem("articles")
			? JSON.parse(localStorage.getItem("articles"))
			: data
	)
	const [modal, setModal] = useState(false)
	const [editArticle, setEditArticle] = useState({})

	useEffect(() => {
		if (Object.keys(editArticle).length > 0) {
			setModal(true)
		}
	}, [editArticle])

	useEffect(() => {
		localStorage.setItem("articles", JSON.stringify(articles))
	}, [articles])

	const deleteArticle = (id) => {
		const newArticles = articles.filter((article) => article.id !== id)

		window.confirm("¿Deseas eliminar el articulo?") && setArticles(newArticles)
	}

	const addArticle = (article) => {
		if (article.id) {
			const updateArticles = articles.map((art) =>
				art.id === article.id ? article : art
			)
			setArticles(updateArticles)
			setEditArticle({})
		} else {
			article.id = articles.length + 1
			const newArticles = [...articles, article]
			setArticles(newArticles)
		}
		setModal(false)
	}

	const handleAddArticle = () => {
		setModal(true)
	}

	return (
		<div className={modal ? "h-screen overflow-hidden" : ""}>
			<header className="__nav">
				<div className="container py-1">
					<div className="flex justify-between gap-3">
						<h1 className="text-2xl font-bold">CRUD</h1>
						<button className="__btn __btn-add" onClick={handleAddArticle}>
							Agregar articulo
						</button>
					</div>
				</div>
			</header>
			<div className="container">
				<div className="__cont-articles mt-16 py-12">
					{articles
						.sort((a, b) => b.id - a.id)
						.map((dataJson) => (
							<Card
								key={dataJson.id}
								dataJson={dataJson}
								deleteArticle={deleteArticle}
								setEditArticle={setEditArticle}
							/>
						))}
				</div>
			</div>
			{modal && (
				<Modal
					setModal={setModal}
					addArticle={addArticle}
					editArticle={editArticle}
					setEditArticle={setEditArticle}
				/>
			)}
		</div>
	)
}

export default App
