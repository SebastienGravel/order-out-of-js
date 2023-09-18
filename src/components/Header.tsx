function Header() {

    return(
        <>
            <img src={`${import.meta.env.VITE_IMG_URL}ordoabjs-2.svg`} alt="" width="150" />
            <h1 className='pb-5'>Order out of JS</h1>
        </>
    )

}

export default Header