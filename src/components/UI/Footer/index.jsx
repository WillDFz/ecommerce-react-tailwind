import styles from "./styles.module.scss";
import ContactLinks from "./../ContactLinks/index";
import SocialLinks from "../SocialLinks";
import FooterLegal from './FooterLegal/FooterLegal';
import PaymentsFlags from "../../Payments/PaymentsFlags";
import ShippingFlags from "../../Shipping/ShippingFlags";

const Footer = () => {
    return (
        <div className={`${styles.footer} grid grid-cols-12 px-3 py-5`}>
            <div className="col-span-12 mb-3">
                <h1 className="text-secondary font-bold mb-3">Sobre</h1>
                <ul>
                    <li>
                        <a href="" className="text-primary text-sm opacity-70">
                            A Marca
                        </a>
                    </li>
                    <li>
                        <a href="" className="text-primary text-sm opacity-70">
                            Política de Privacidade
                        </a>
                    </li>
                    <li>
                        <a href="" className="text-primary text-sm opacity-70">
                            Política de Cookies
                        </a>
                    </li>
                    <li>
                        <a href="" className="text-primary text-sm opacity-70">
                            Segurança
                        </a>
                    </li>
                </ul>
            </div>

            <div className="col-span-12 mb-3">
                <h1 className="text-secondary font-bold mb-3">Institucional</h1>
                <ul>
                    <li>
                        <a href="" className="text-primary text-sm opacity-70">
                            Minha Conta
                        </a>
                    </li>
                    <li>
                        <a href="" className="text-primary text-sm opacity-70">
                            Como comprar
                        </a>
                    </li>
                </ul>
            </div>

            <div className="col-span-12 mb-3">
                <h1 className="text-secondary font-bold mb-3">Ajuda</h1>
                <ul>
                    <li>
                        <a href="" className="text-primary text-sm opacity-70">
                            Atendimento
                        </a>
                    </li>
                    <li>
                        <a href="" className="text-primary text-sm opacity-70">
                            Trocas e Devoluções
                        </a>
                    </li>
                    <li>
                        <a href="" className="text-primary text-sm opacity-70">
                            Contato
                        </a>
                    </li>
                </ul>
            </div>

            <div className="col-span-12 mb-5">
                <ContactLinks />
            </div>

            <div className="col-span-12 mb-5">
                <SocialLinks />
            </div>

            <div className="col-span-12 mb-5">
                <PaymentsFlags/>
            </div>
  
            <div className="col-span-12 mb-5">
                <ShippingFlags/>
            </div>
            
            <div className="col-span-12 border-t border-gray-600 pt-3">
                <FooterLegal/>
            </div>
        </div>
    );
};

export default Footer;
