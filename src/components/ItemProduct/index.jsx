import styles from "./styles.module.scss";

const ItemProduct = ({ title, price, image }) => {
    var priceBRL = price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    return (
        <div className={`${styles.itemProduct}`}>
            <div className={`${styles.imageContainer} border flex justify-center`}>
                <img src={image} className={`${styles.productImage}`} alt="" />
            </div>
            <div className={`${styles.itemInfo} py-1`}>
                <a href="" className={`${styles.itemName} text-xs mb-1`}>{title}</a>
                <div className={``}>
                    <span className="font-bold">{priceBRL}</span>
                </div>
            </div>
            <div className="flex justify-center">
                <a href="#" className={`${styles.addToCart} w-full rounded text-center text-xs font-bold my-2 py-1`}>Comprar</a>
            </div>
        </div>
    );
};

export default ItemProduct;
