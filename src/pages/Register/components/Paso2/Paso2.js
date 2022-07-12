import React from 'react';
import { Link } from 'react-router-dom';
import md5 from 'md5';
  
import './Paso2.scss';

import randomString from '../../../../utils/randomString';

const Paso2 = props =>{
  let siguienteClick = () => {
    var code = randomString(6);
    sessionStorage.setItem("code", md5(code));
    props.siguientePaso()
    console.log('Codigo: ' + code) /* Sacar al terminar xd */
    console.log('Encriptado: ' + sessionStorage.getItem("code")) /* Sacar al terminar xd */
  }
  return (
    <div className="pasos" onKeyDown={props.handleEnterKey}>
      <label>Teléfono:</label> {/* Teléfono */}
      <div className="input">
          <input type="text" name="phoneNumber" value={props.values.phoneNumber} required  onChange={props.handleInputChange}/>
          <span className="material-icons-outlined">person_outline</span>
      </div>
      
      <label>Email:</label> {/* Email */}
      <div className="input">
          <input type="email" name="email" value={props.values.email} required onChange={props.handleInputChange}/>
          <span className="material-icons-outlined">person_outline</span>
      </div>
      
      <label>Contraseña:</label> {/* Contraseña */}
      <div className="input">
          <input type="text" name="password" value={props.values.password} required onChange={props.handleInputChange}/>
          <span className="material-icons-outlined">person_outline</span>
      </div>
        <small>Si ya tienes una cuenta, ingresa haciendo <Link to='/Login'>click aquí</Link></small>
      <button id='Next' onClick={siguienteClick}>Siguiente</button>
    </div>
  );
}

export default Paso2;