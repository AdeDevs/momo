import { NavLink } from "react-router-dom"

function MoMo() {
    return (
        <div className="mo-home">
            <header>
                <nav>
                    <h1><NavLink to="/"> Happy Birthday MoMo </NavLink></h1>
                    <ul>
                        <li><NavLink to="/message"> A Little Message </NavLink></li>
                    </ul>
                </nav>
            </header>
            <main>
                <div>
                    <h1>Happy Birthday MoMo</h1>
                </div>
            </main>
        </div>
    )
}

export default MoMo