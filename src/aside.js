
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Formulario() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="email" placeholder="correo123@tucorreo.com" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="contraseña123" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Verificar" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
}

export default Formulario;
// const Aside = () => {
//     return (
//         <aside>
//             <div className="container mt-4">
//                 <h2>Registrate</h2>
//             </div>
//             <form>
//                 <div className="mb-3">
//                     <label htmlFor="nombre" className="form-label">Nombre</label>
//                     <input type="text" className="form-control" id="nombre" placeholder="Jose" required />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="email" className="form-label">Email</label>
//                     <input type="email" className="form-control" id="email" placeholder="ejemplo@dominio.com" required />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="password" className="form-label">Contraseña</label>
//                     <input type="password" className="form-control" id="password" placeholder="contraseña123" required />
//                 </div>
//                 <button type="submit" className="btn btn-primary">Registrarse</button>
//             </form>
//         </aside>
//     );
// }
// export default Aside;