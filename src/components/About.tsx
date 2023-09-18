function About(){

    return(
        <div className="d-flex flex-column align-items-start border-bottom border-warning pb-5 ">
            <p className="about pb-3">
                Hello, this is a personal page where, in an attempt to save time and keep my sanity, I have compiled the most common javascript frameworks, libraries and utilities and centralize it for quick reference to their documentations and installations. 
            </p>
            <p className="about">
                This list is not complete and some elements may be missing, feel free to contribute if you wish. In a future update I will also add the formulas for yarn, pnpm and bun, but for my personal use it is not a rush.
            </p>
        </div>
    )
}

export default About