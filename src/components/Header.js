const Header = ({ companyName, companyLogo }) => {
    return (
        <nav className="bg-white border-b">
            <div className="flex items-center space-x-8 py-2 px-3 max-w-screen-xl mx-auto md:px-8">
                <div className="flex-none lg:flex-initial">
                    <a href="/">
                        <img className="rounded-md"
                            src={companyLogo}
                            width={50}
                            height={50}
                            alt="Company Logo"
                        />
                    </a>
                </div>
                <div className="flex-1 flex text-center">
                    <div className={`bg-white z-20 w-full top-16 left-0 p-4 lg:static lg:block lg:border-none`}>
                        <h1 className="text-gray-800 text-3xl font-bold">{companyName}</h1>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;