import React, {Component} from 'react';
import {connect} from 'react-redux';
import {showModal} from '../../actions/modal';
import logo from '../../images/avtostaff.png';
import defaultAvatar from '../../images/default_avatar.png';
import {Link} from 'react-router';
import './style.css';

class Header extends Component {

    render() {

        function login(data) {
            this.props.modal({mode: data, isShowingModal: true});
        }

        function clearStorage() {
            localStorage.clear();
            window.location.reload();
        }

        return (
            <div>
                <div className="header">

                    <div className="header__top">
                        <div className="header__container">
                            <Link to={`/manual?customer`} className="header__hint">Как заказать ремонт</Link>
                            <Link to={`/manual?performer`} className="header__hint">Как стать исполнителем</Link>

                            {this.props.state.startData.registered ?
                                <div className="header__panel">
                                    <div className="header__user">
                                        <div className="header__user-pic">
                                            <img src={defaultAvatar}/>
                                        </div>
                                        {this.props.state.startData.autorisation.name}
                                        {this.props.state.startData.autorisation.type === 'executor' ?
                                            <Link to={`/cabinetExecutor`} className="btn btn--link">Мой кабинет</Link>
                                            :
                                            <Link to={`/cabinet`} className="btn btn--link">Мой кабинет</Link>
                                        } /
                                        <a href="#" onClick={clearStorage} className="btn btn--link">Выйти</a>
                                    </div>
                                </div> :
                                <div className="header__social">
                                    <a href="#" className="fa fa-facebook"></a>
                                    <a href="#" className="fa fa-twitter"></a>
                                    <a href="#" className="fa fa-google-plus"></a>
                                </div>
                            }

                        </div>
                    </div>

                    <div className="header__container">

                        {/* logo */}
                        <a href="/" className="header__logo">
                            <img src={logo} alt="logo"/>
                        </a>

                        {/* buttons */}
                        {this.props.state.startData.registered ?
                            <div className="header__buttons">
                                <Link to={`/order`} className="btn btn--primary">Подать заявку</Link>
                            </div> :
                            <div className="header__buttons">
                                <a href="#" onClick={login.bind(this, 'Registration')} className="btn btn--primary">Регистрация</a>
                                <a href="#" onClick={login.bind(this, 'Login')} className="btn btn--primary">Войти</a>
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        state: state
    }),
    dispatch => ({
        modal: (data) => {
            dispatch(showModal(data));
        }
    })
)(Header);
