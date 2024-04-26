import { useState, useEffect } from "react"
import Message from "./Message"
import { CloseIcon } from "../icons/CloseIcon"

const Modal = ({ setModal, addArticle, editArticle, setEditArticle }) => {
	const [mensaje, setMensaje] = useState("")
	const [title, setTitle] = useState("")
	const [price, setPrice] = useState("")
	const [description, setDescription] = useState("")
	const [category, setCategory] = useState("")
	const [image, setImage] = useState("")
	const [id, setId] = useState("")

	useEffect(() => {
		if (Object.keys(editArticle).length > 0) {
			setTitle(editArticle.title)
			setPrice(editArticle.price)
			setDescription(editArticle.description)
			setCategory(editArticle.category)
			setImage(editArticle.image)
			setId(editArticle.id)
		}
	}, [])

	const hiddenModal = () => {
		setModal(false)
		setEditArticle({})
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		if ([title, price, description, category, image].includes("")) {
			setMensaje("Todos los campos son obligatorios")
			return
		}

		const article = {
			title,
			price,
			description,
			category,
			image,
			id,
		}

		addArticle(article)
	}

	return (
		<>
			<div className="absolute bottom-0 left-0 right-0 top-0 z-20 overflow-y-scroll bg-zinc-900">
				<div className="container py-8">
					<div className="__row">
						<div className="__col mb-8 text-right">
							<button
								className="transform rounded-full bg-white p-3 transition-all hover:scale-110"
								onClick={hiddenModal}>
								{CloseIcon}
							</button>
						</div>
					</div>
					<div className="__row">
						<div className="__col">
							<div className="__card">
								<div className="__card-body">
									<form onSubmit={handleSubmit}>
										<legend className="mb-3 border-b pb-3 text-center text-3xl font-bold text-slate-900">
											{editArticle.id ? "Editar articulo" : "Agregar articulo"}
										</legend>
										{mensaje && <Message tipo="error">{mensaje}</Message>}
										<div className="relative mb-4 pt-7">
											<label className="__label" htmlFor="title">
												Titulo del articulo
											</label>
											<input
												className="__input"
												id="title"
												type="text"
												placeholder="Escribe el titulo del articulo"
												value={title}
												onChange={(e) => setTitle(e.target.value)}
											/>
										</div>
										<div className="relative mb-4 pt-7">
											<label className="__label" htmlFor="price">
												Precio del articulo
											</label>
											<input
												className="__input"
												id="price"
												type="number"
												placeholder="Escribe el precio del articulo"
												value={price}
												onChange={(e) => setPrice(e.target.value)}
											/>
										</div>
										<div className="relative mb-4 pt-7">
											<label className="__label" htmlFor="description">
												Descripcion del articulo
											</label>
											<input
												className="__input"
												id="description"
												type="text"
												placeholder="Escribe la descripcion del articulo"
												value={description}
												onChange={(e) => setDescription(e.target.value)}
											/>
										</div>
										<div className="relative mb-4 pt-7">
											<label className="__label" htmlFor="category">
												Descripcion del articulo
											</label>
											<select
												className="__input"
												id="category"
												value={category}
												onChange={(e) => setCategory(e.target.value)}>
												<option value="" hidden>
													Selecciona una opción
												</option>
												<option value="men's clothing">
													Men&lsquo;s clothing
												</option>
												<option value="jewelery">Jewelery</option>
												<option value="electronics">Electronics</option>
												<option value="women's clothing">
													Women&lsquo;s clothing
												</option>
											</select>
										</div>
										<div className="relative mb-4 pt-7">
											<label className="__label" htmlFor="image">
												Url de la imagen del articulo
											</label>
											<input
												className="__input"
												id="image"
												type="url"
												placeholder="Escribe la Url de la imagen del articulo"
												value={image}
												onChange={(e) => setImage(e.target.value)}
											/>
										</div>
										<div className="relative mb-4 pt-7 text-right">
											<input
												className="cursor-pointer rounded bg-zinc-800 px-3 py-2 font-semibold text-white transition-all duration-300 ease-in-out hover:bg-zinc-900 hover:shadow-lg hover:shadow-zinc-500/50"
												type="submit"
												value={
													editArticle.id
														? "Guardar cambios"
														: "Agregar articulo"
												}
											/>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Modal
