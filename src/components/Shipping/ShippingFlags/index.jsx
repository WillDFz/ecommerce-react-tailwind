import store from "../../../../pages/api/store.json";

const ShippingFlags = () => {
    const shipping = store[0].shipping;
    return (
        <div>
            {shipping.map((flag) => (
                <div key={flag.id} className="">
                    
                </div>
            ))}
        </div>
    );
};

export default ShippingFlags;
