// Styles
import styles from "./styles.module.scss";

const SearchInput = () => {
    return (
        <>
            <form>
                <div className="form-group ">
                    <input
                        type="text"
                        className={`${styles.searchInput} w-full h-10 mb-6 pl-4 bg-transparent text-xs text-white rounded outline-none`}
                        name=""
                        placeholder="O que você está procurando?"
                    />

                    <button className={`${styles.searchBtn} absolute right-1 top-1 p-2`}>
                        <img
                            src="/svg/search.svg"
                            className={`${styles.searchIcon} h-4`}
                            alt=""
                        />
                    </button>
                </div>
            </form>
        </>
    );
};

export default SearchInput;
