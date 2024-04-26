const Message = ({ children, tipo }) => {
	return (
		<div className="relative mb-4 pt-4">
			<div className={`__alert __alert-${tipo}`}>
				<p className="font-medium">{children}</p>
			</div>
		</div>
	)
}

export default Message
