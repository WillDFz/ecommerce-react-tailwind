import styles from "./styles.module.scss";

const ItemProduct = ({ title, price, image }) => {
    return (
        <div className={`${styles.itemProduct}`}>
            <div className={`${styles.imageContainer} border flex justify-center`}>
                <img src={image} className={`${styles.productImage}`} alt="" />
            </div>
            <div className={`${styles.itemInfo}`}>
                <a href="" className={`${styles.itemName} text-xs`}>{title}</a>
                <div className={``}>
                    <span>U$ {price}</span>
                </div>
            </div>
            <div>
                <a href="" className="">Comprar</a>
            </div>
        </div>
    );
};

export default ItemProduct;
