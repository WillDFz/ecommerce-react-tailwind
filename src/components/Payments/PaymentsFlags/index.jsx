import store from "../../../../pages/api/store.json";

const PaymentsFlags = () => {
    const payments = store[0].payments;
    return (
        <>
            <h1 className="text-secondary font-bold mb-3">Formas de pagamento</h1>
            <div className="flex">
                {payments.map((payment) => (
                    <div key={payment.id} className="mr-2">
                        <img src={payment.image} className="h-7" alt="" />
                    </div>
                ))}
            </div>
        </>
    );
};

export default PaymentsFlags;
