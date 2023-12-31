/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

const Menu = (props) => {
	const lorem =
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eius ullam consequatur odit aspernatur omnis nemo incidunt repudiandae nam accusantium natus quaerat, possimus totam quam quia magnam non dolores, voluptatem numquam odio maxime sequi! Culpa, suscipit dolorum corrupti maxime asperiores placeat ratione explicabo odio veritatis pariatur est sed voluptas quam repudiandae nostrum hic voluptatum libero aliquid officia laudantium at labore ipsa eveniet illo. Hic ipsum, a dolorum, iusto iure, voluptas atque architecto ab tempore vitae maiores distinctio! Neque, harum. Qui culpa deleniti numquam. Unde architecto asperiores fugit? Optio ipsam tenetur maiores, soluta temporibus sed aut non blanditiis ad iure ea.";

	const paginas = [
		{
			header: "Encabezado Home",
			linktext: "Home",
			title: "Título Home",
			content: "Contenido Home",
		},
		{
			header: "Encabezado Página 1",
			linktext: "Pagina 1",
			title: "Título Página 1",
			content: lorem,
		},
		{
			header: "Encabezado Página 2",
			linktext: "Pagina 2",
			title: "Título Página 2",
			content: lorem,
		},
		{
			header: "Encabezado Página 3",
			linktext: "Pagina 3",
			title: "Título Página 3",
			content: lorem,
		},
	];

	const handleOption = (pagina) => props.setObjectOption(pagina);

	return (
		<>
			<ul>
				{paginas.map((pagina) => (
					<div className="row" key={pagina.header}>
						<div
							className="col"
							onClick={() => handleOption(pagina)}>
							<li className="nav-item">{pagina.linktext}</li>
						</div>
					</div>
				))}
			</ul>
		</>
	);
};

export default Menu;
