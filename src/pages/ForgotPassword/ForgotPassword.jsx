import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import Nav from '../../components/navbar/Nav';
import '../../components/generalStyles/form.scss';

import Paso1 from './components/Paso1';
import Paso2 from './components/Paso2';
import Paso3 from './components/Paso3';

import formFunctions from '../../utils/formFunctions';

export default class Forget extends Component {
    state = {
        paso: 1,
        email: '',
        password: '',
        confirmPassword: '',
        codeEmail: '',
        estado: ""
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    siguientePaso = (event) => {
        if(formFunctions.checkNext()){
            const {paso} = this.state
            this.setState({
                paso: paso + 1
            })
        }else alert('no')
    }
    anteriorPaso = (event) => {
        const {paso} = this.state
        this.setState({
            paso: paso - 1
        })
    }
    handleEnterKey = (event) => {
        if (event.keyCode === 13) {
            this.siguientePaso()
        }
    }

    render(){
        let values = this.state

        switch (this.state.paso) {
            case 1:
                return(
                    <main className='regSec'>
                        <Nav/>
                        <div className="progressBar">
                            <div className="line"></div>
                            <span className="points active" id="1">1</span>
                            <span className="points" id="2">2</span>
                            <span className="points" id="3">3</span>
                        </div>
                        <section>
                            <h1>Cambiar Contraseña</h1>
                            <Paso1 handleInputChange={this.handleInputChange} siguientePaso={this.siguientePaso} handleEnterKey={this.handleEnterKey} values={values}/>
                        </section>
                    </main>
                    )
            case 2:
                return(
                    <main className='regSec'>
                        <Nav/>
                        <div className="progressBar">
                            <div className="line"></div>
                            <span className="points pass" id="1">1</span>
                            <span className="points active" id="2">2</span>
                            <span className="points" id="3">3</span>
                        </div>
                        <section>
                            <button id='backBTN' className="material-icons-outlined" title='Anterior' onClick={this.anteriorPaso}>arrow_back</button>
                            <h1>Cambiar Contraseña</h1>
                            <Paso2 handleInputChange={this.handleInputChange} siguientePaso={this.siguientePaso} handleEnterKey={this.handleEnterKey} values={values}/>
                        </section>
                    </main>
                    )
            case 3:
                return(
                    <main className='regSec'>
                        <Nav/>
                        <div className="progressBar">
                            <div className="line"></div>
                            <span className="points pass" id="1">1</span>
                            <span className="points pass" id="2">2</span>
                            <span className="points active" id="3">3</span>
                        </div>
                        <section>
                            <h1>Cambiar Contraseña</h1>
                            <Paso3 handleInputChange={this.handleInputChange} siguientePaso={this.siguientePaso} values={values}/>
                        </section>
                    </main>
                    )
            default:
                return(
                    <main className='regSec'>
                        <Nav/>
                        <div className="progressBar">
                            <div className="line"></div>
                            <span className="points active" id="1">1</span>
                            <span className="points" id="2">2</span>
                            <span className="points" id="3">3</span>
                        </div>
                        <Link to={'/lol'}>Error!</Link>
                    </main>
                    )
        }
    }
}