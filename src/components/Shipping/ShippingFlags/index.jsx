import store from "../../../../pages/api/store.json";

const ShippingFlags = () => {
    const shipping = store.shipping;
    return (
        <>
        <h1 className="text-secondary font-bold mb-3">Meios de envios</h1>
        <div className="flex">
            {shipping.map((flag) => (
                <div key={flag.id} className="mr-2">
                    <img src={flag.image} className="h-7" alt="" />
                </div>
            ))}
        </div>
        </>
    );
};

export default ShippingFlags;
