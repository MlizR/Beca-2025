import { LitElement, html, css } from "lit";
import { map } from "lit/directives/map.js";
import { when } from "lit/directives/when.js";
import { repeat } from "lit/directives/repeat.js";
import { choose } from 'lit/directives/choose.js';
import { join } from "lit/directives/join.js";
import {range} from 'lit/directives/range.js';

export class MyForm extends LitElement {
  static properties = {
    nombre: { type: String },
    correo: { type: String },
    edad: { type: Number },
    aceptarTerminos: { type: Boolean },
    errores: { type: Array },
    enviado: { type: Boolean },
    frutas: { type: Array },
    tipo: { type: String },
    mensaje: { type: String },
    nombres: { type: Array },
  };

  constructor() {
    super();
    this.nombre = "";
    this.correo = "";
    this.edad = 0;
    this.aceptarTerminos = false;
    this.errores = [];
    this.enviado = false;
    this.profesiones = ["Pintora", "Médico", "Bombero", "Profesor"];
    this.tipo = 'exito';
    this.mensaje = '¡Operación exitosa!';
    this.nombres = ['Ana', 'Juan', 'María', 'Pedro'];
  }

  static styles = css`
    form {
      border: 2px solid #3b83bd;
      width: 30rem;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      border-radius: 0.5rem;
    }
    .error {
      color: #c81d11;
    }
    .enviado {
      color: #3b83bd;
      font-weight: bold;
    }

    button {
      width: 10rem;
      align-self: center;
      background-color: #3b83bd;
      border: none;
      color: #fff;
      border-radius: 0.5rem;
      padding: 0.7rem;
      cursor: pointer;
      margin-top: 1rem;
    }
    .exito {
        color: green;
      }
  
      .error {
        color: red;
      }
  
      .advertencia {
        color: orange;
      }
  `;

  obtenerValor(e) {
    this[e.target.name] =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
  }

  validarFormulario() {
    this.errores = [];

    if (this.nombre.trim() === "") {
      this.errores.push("El nombre es obligatorio");
    }

    if (!this.correo.includes("@")) {
      this.errores.push("El correo debe ser válido");
    }

    if (this.edad < 18) {
      this.errores.push("Debes ser mayor de edad");
    }

    if (!this.aceptarTerminos) {
      this.errores.push("Debes aceptar los términos");
    }

    return this.errores.length === 0;
  }

  enviarFormulario(e) {
    e.preventDefault();
    this.enviado = false;

    if (this.validarFormulario()) {
      this.enviado = true;
      this.errores = [];
    }
  }

  render() {
    return html`
      <h2>Registro de Usuario</h2>

      <form @submit=${this.enviarFormulario}>
        <!-- when -->
        ${when(
          this.enviado,
          () => html`<p class="enviado">Formulario enviado exitosamente</p>`
        )}

        <label for="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="nombre"
          .value=${this.nombre}
          @input=${this.obtenerValor}
        />
        <label for="email">Correo</label>
        <input
          type="email"
          id="email"
          name="correo"
          .value=${this.correo}
          @input=${this.obtenerValor}
        />
        <label for="edad">Edad</label>
        <input
          type="number"
          id="edad"
          name="edad"
          .value=${this.edad}
          @input=${this.obtenerValor}
        />

        <label for="check">
          <input
            type="checkbox"
            id="check"
            name="aceptarTerminos"
            ?checked=${this.aceptarTerminos}
            @input=${this.obtenerValor}
          />
          Acepto terminos y condiciones</label
        >

        <section>
            <!-- map -->
          ${map(this.errores, (error) => html`<p class="error">${error}</p>`)}
        </section>
        <button type="submit">Registrar</button>
      </form>

      <!-- repeat -->
      <h2>Lista de profesiones</h2>
      <ul>
        ${repeat(this.profesiones, (profesion) => html`<li>${profesion}</li>`)}
      </ul>

      <!-- choose -->
      <div class=${this.tipo}>
        ${choose(this.tipo, [
          ['exito', () => html`<strong>Éxito:</strong> ${this.mensaje}`],
          ['error', () => html`<strong>Error:</strong> ${this.mensaje}`],
          ['advertencia', () => html`<strong>Advertencia:</strong> ${this.mensaje}`],
        ])}
      </div>

      <button @click=${() => this.tipo = 'exito'}>Éxito</button>
      <button @click=${() => this.tipo = 'error'}>Error</button>
      <button @click=${() => this.tipo = 'advertencia'}>Advertencia</button>
      

       <!-- join -->
      <p>Nombres: ${join(this.nombres, ', ')}</p>

      <!-- range -->
      <ul>
        ${range(1, 11).map((numero) => html`<li>Elemento ${numero}</li>`)}
    </ul>

    <!-- range -->

    `;
  }
}
