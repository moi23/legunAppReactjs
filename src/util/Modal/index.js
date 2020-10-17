import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import {Container} from './styles'


export default class Examples extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {
        return (
          <Container>
            <section id="alignBox">
                <input  type="button" value="Acessar Página" onClick={() => this.openModal()} />
                <Modal visible={this.state.visible} width="70%" height="70%" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div>
                        <h1>{this.props.cidade}</h1>
                        <p>Some Contents</p>
                        <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                    </div>
                </Modal>
            </section>
          </Container>
        );
    }
}