import store from "../../../../pages/api/store.json";

import styles from "./styles.module.scss";

const SocialLinks = () => {
    const socialLinks = store.social;
    return (
        <div className={`${styles.socialContainer} flex`}>
            {socialLinks.map((socialLink) => (
                <a key={socialLink?.id} href={socialLink?.url} target="_blank" rel="noopener noreferrer" className={`${styles.socialLink} main-foreground flex justify-center items-center rounded w-10 h-10 mr-3`}>
                    <img src={socialLink?.icon} className="h-5" alt="" />
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;
