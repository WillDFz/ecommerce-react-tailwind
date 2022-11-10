const Topbar = () => {
    return (
        <div className="container mx-auto hidden xl:block">
            <div className="grid grid-cols-12">
                <div className="col-span-6 flex items-center">
                    <a
                        href=""
                        className="text-primary text-xs font-light mr-1 p-4 hover:text-secondary"
                        rel="noopener noreferrer"
                    >
                        Home
                    </a>
                    <a
                        href=""
                        className="text-primary text-xs font-light mr-1 p-4 hover:text-secondary"
                        rel="noopener noreferrer"
                    >
                        Perguntas frequentes
                    </a>
                    <a
                        href=""
                        className="text-primary text-xs font-light mr-1 p-4 hover:text-secondary"
                        rel="noopener noreferrer"
                    >
                        Politíca de privacidade
                    </a>
                </div>
                <div className="col-span-6 flex items-center justify-end">
                    <a
                        href=""
                        className="text-primary text-xs flex items-center"
                        rel="noopener noreferrer"
                    >
                        <img src="svg/user.svg" className="h-5 mr-2" alt="" /> Minha
                        conta
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
