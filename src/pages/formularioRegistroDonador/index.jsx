export default function RegistroDonador() {
  return (
    <div className="container">
      <section class="d-flex justify-content-center align-items-center">
        <div class="card shadow col-xs-12 col-sm-6 col-md-6 col-lg-4  p-4 w-100">
          <div class="mb-4 d-flex justify-content-start align-items-center">
            <h2 class="text-success text-center mt-4">
              Registrate con Nosotros
            </h2>
          </div>
          <div class="mb-1">
            <form id="contacto">
              <div class="mb-4 d-flex justify-content-between">
                <div>
                  <label for="nombre">
                    {" "}
                    <i class="bi bi-person-fill"></i> Nombre
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="nombre"
                    id="nombre"
                    placeholder="ej: Aaron"
                    required
                  ></input>
                  <div class="nombre text "></div>
                </div>
                <div>
                  <label for="apellido">
                    {" "}
                    <i class="bi bi-person-fill"></i> Apellido
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="apellido"
                    id="apellido"
                    placeholder="ej: Enciso"
                    required
                  ></input>
                  <div class="apellido text"></div>
                </div>
              </div>
              <div>
                <label for="direccion">
                  {" "}
                  <i class="bi bi-house-door-fill"></i> Direccion
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="direccion"
                  id="direccion"
                  placeholder="ej: Av.Antonio toledo coro"
                  required
                ></input>
                <div class="direccion text"></div>
              </div>
              <div class="mb-4 d-flex justify-content-between">
                <div>
                  <label for="colonia">
                    {" "}
                    <i class="bi bi-house-door-fill"></i> Colonia
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="colonia"
                    id="colonia"
                    placeholder="ej: Los Sauces"
                    required
                  ></input>
                  <div class="colonia text "></div>
                </div>
                <div>
                  <label for="numero">
                    {" "}
                    <i class="bi bi-house-door-fill"></i> Numero
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    name="numero"
                    id="numero"
                    placeholder="ej: 3410"
                    required
                  ></input>
                  <div class="numero text"></div>
                </div>
              </div>
              <div class="mb-4 d-flex justify-content-between">
                <div>
                  <label for="estado">
                    {" "}
                    <i class="bi bi-building"></i> Estado
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="estado"
                    id="estado"
                    placeholder="ej: Sinaloa"
                    required
                  ></input>
                  <div class="estado text "></div>
                </div>
                <div>
                  <label for="ciudad">
                    {" "}
                    <i class="bi bi-building"></i> Ciudad
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="ciudad"
                    id="ciudad"
                    placeholder="ej: Mazatlan"
                    required
                  ></input>
                  <div class="ciudad text"></div>
                </div>
              </div>
              <div class="mb-4">
                <label for="correo">
                  <i class="bi bi-envelope-fill"></i> Correo
                </label>
                <input
                  type="email"
                  class="form-control"
                  name="correo"
                  id="correo"
                  placeholder="ej: aaronenciso@gmail.com"
                  required
                ></input>
                <div class="correo text"></div>
              </div>
              <div>
                <label for="Password">
                  {" "}
                  <i class="bi bi-person-fill"></i> Contraseña
                </label>
                <input type="password" class="form-control" required></input>
                <div class="nombre text "></div>
              </div>
              <div class="mb-4">
                <label for="telefono">
                  <i class="bi bi-phone-fill"></i> Telefono
                </label>
                <input
                  type="cel"
                  class="form-control"
                  name="telefono"
                  id="telefono"
                  placeholder="ej: 6691008819"
                  required
                ></input>
                <div class="telefono text"></div>
              </div>

              <div class="mb-4  ">
                <label for="genero">
                  <i class="bi bi-gender-ambiguous"></i> Genero:
                </label>
                <input
                  type="radio"
                  class="form-check-input "
                  name="genero"
                  value="masculino"
                ></input>{" "}
                Masculino
                <input
                  type="radio"
                  class="form-check-input"
                  name="genero"
                  value="femenino"
                ></input>{" "}
                Femenino
                <div class="genero text"></div>
              </div>
              <div>
                <label for="nombre">
                  {" "}
                  <i class="bi bi-person-fill"></i> Nombre de Usuario
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="nombre"
                  id="nombre"
                  placeholder="ej: AaronKing21"
                  required
                ></input>
                <div class="nombre text "></div>
              </div>
              <br></br>

              <div class="mb-2">
                <button
                  id="botton"
                  class="col-12 btn btn-success d-flex justify-content-between  "
                >
                  <p class="text-center ">Registrarse </p>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
