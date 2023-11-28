/* eslint-disable react/prop-types */
const Option = (props) => {
	return (
		<div className="card ">
			<div className="card-header">
				<h3>{props.header}</h3>
			</div>
			<div className="card-body">
				<div className="card-title">
					<h4>{props.title}</h4>
				</div>
				<div className="card-text">
					<p>{props.content}</p>
				</div>
			</div>
		</div>
	);
};

export default Option