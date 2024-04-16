import React from 'react';

const Aside = () => {
    return (
        <aside>
            <div className="container mt-4">
                <h2>Registrate</h2>
            </div>
            <form>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" placeholder="Jose" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="ejemplo@dominio.com" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="password" placeholder="contraseña123" required />
                </div>
                <button type="submit" className="btn btn-primary">Registrarse</button>
            </form>
        </aside>
    );
}

export default Aside;