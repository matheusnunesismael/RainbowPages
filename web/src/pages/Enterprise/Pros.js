// eslint-disable-next-line no-unused-vars
import React , { useState } from 'react';
import Star from '../../assets/images/estrelas.png';
import Foto from '../../assets/images/O-pão-que-o-Viado-Amassou.jpg';
import Footer from '../../components/Footer';
import EnterpriseContent from '../../components/Enterprise-content';
import './styles.css';

export default function Enterprise(){
    return(
        <div id="enterprise" className="enterprise">
            <div id="enterprise-box">
                <div className="enterprise-bar"> 
                    <div className="box-image-enterprise">
                    <a href="http://localhost:3000/search"><img src={Foto} alt="RainbowPages" className="image-enterprise" /></a>
                    </div>

                    <div className="Enterprise-texto-NomeBar ">
                        O Pão que o Viado Amassou
                        </div>
                        <div className="Enterprise-texto-AvaliacaoBar">
                        4.0
                        </div>
                        <div className="Enterprise-Estrelas-AvaliacaoBar">
                        <img src={Star} alt="stars" className="Enterprise-Stars-image"/>
                        </div>
                        <div className="Enterprise-textoBar">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                         exercitation ullamco laboris nisi ut aliquip commodo consequat commod.
                         quis nostrud
                         exercitation ullamco laboris nisi ut.
                        </div>
                </div>

                <div className="enterprise-buttons">
                    <button className="enterprise-filter"><a href='http://localhost:3000/enterprise'>Comentários</a></button>
                    <button className="enterprise-filterhover"><a href='http://localhost:3000/pros'>Prós</a></button>
                    <button className="enterprise-filter"><a href='http://localhost:3000/contras'>Contras</a></button>
                    <button className="enterprise-filter"><a href='http://localhost:3000/fotos'>Fotos</a></button>
                    <button className="enterprise-filter"><a href='http://localhost:3000/comentar'>Avaliar Empresa</a></button>
                </div>
                <EnterpriseContent/>
                <div className="footer "><Footer/></div>
            </div>
        </div>
    )
}