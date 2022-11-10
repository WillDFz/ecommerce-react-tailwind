// Styles
import styles from "./styles.module.scss";

const Newsletter = () => {
    return (
        <section
            className={`${styles.newsletterSection} main-foreground my-5 p-3`}
        >
            <div className="xl:max-w-xl xl:mx-auto">
                <h1 className="text-lg font-bold py-2">Newsletter</h1>
                <h5 className="mb-3">Receba nossas novidades!</h5>
            </div>
            <form className="xl:max-w-xl xl:mx-auto">
                <input
                    type="text"
                    name="name"
                    className="w-full rounded outline-none mb-3 p-3"
                    placeholder="Seu nome"
                    required
                />
                <input
                    type="email"
                    name="email"
                    className="w-full rounded outline-none mb-3 p-3"
                    placeholder="E-mail"
                    required
                />
                <input
                    type="submit"
                    className="w-full main-background text-center text-secondary rounded mb-3 py-3"
                    placeholder="Enviar"
                />
            </form>
        </section>
    );
};

export default Newsletter;
