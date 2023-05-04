import App from "../../App"
import CardWidget from "../CardWidget/CardWidget";
const NavBar = () => {
    return (
        
        <nav className="tituloNav">
            <h3>YPF LUBRICANTES</h3>
            <div>
                <button className="btn btn-primary">Lubricantes</button>
                <button className="btn btn-danger">Filtros</button>
                <button className="btn btn-success">Accesorios</button>
            </div>
            <CardWidget/>
        </nav>
      
    )
}

export default NavBar;