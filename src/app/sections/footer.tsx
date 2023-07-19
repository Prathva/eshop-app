const menus = ["Copyright © 2023 Tailwind Labs Inc.", "Trademark Policy", "Edit this page on GitHub"]
const Footer = () => {
    return (
        <>
            <footer className=" bg-gray-900 text-white text-center px-28 py-6">
                <div className="grid grid-cols-3 gap-0">
                   {menus.map((menu) => (
                   <>
                    <div>{menu}</div>
                   </>
                   ))}
                </div>
            </footer>
        </>
    )
}

export default Footer;