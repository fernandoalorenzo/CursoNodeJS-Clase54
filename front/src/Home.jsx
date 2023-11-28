import { useState } from "react";
import "./App.css";
import Menu from "./menu/Menu";
import Option from "./menu/Option";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const App = () => {
	const [objectOption, setObjectOption] = useState({
		header: "Encabezado Home",
		title: "Titulo Home",
		content: "Contenido Home",
	});
	return (
		<div>
			<div className="row app-header">
				<div className="col-12"><Header /></div>
			</div>
			<div className="row app-menu">
				<div className="col-3 nav">
					<Menu  setObjectOption={setObjectOption} />
				</div>
				<div className="col-9 content">
					<Option
						header={objectOption.header}
						title={objectOption.title}
						content={objectOption.content}
					/>
				</div>
			</div>
			<div className="row app-footer">
				<div className="col-12"><Footer /></div>
			</div>
		</div>
	);
};

export default App;
