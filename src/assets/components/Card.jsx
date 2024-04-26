import { DeleteIcon } from "../icons/DeleteIcon"
import { EditIcon } from "../icons/EditIcon"

const Card = ({ dataJson, deleteArticle, setEditArticle }) => {
	const { id, title, price, description, category, image } = dataJson
	return (
		<>
			<div className="__item_article">
				<article className="__card">
					<div className="__card-body">
						<h3 className="__card-title">{title}</h3>
						<figure>
							<img src={image} alt={title} />
						</figure>
						<p className="mb-4 text-sm">{description}</p>
						<p className="text-right text-xl font-extrabold">${price}</p>
						<span className="__badge">{category}</span>
						<div className="mt-4 flex justify-end gap-3">
							<button
								className="__btn __btn-delete"
								onClick={() => deleteArticle(id)}>
								{DeleteIcon}
							</button>
							<button
								className="__btn __btn-edit"
								onClick={() => setEditArticle(dataJson)}>
								{EditIcon}
							</button>
						</div>
					</div>
				</article>
			</div>
		</>
	)
}

export default Card
