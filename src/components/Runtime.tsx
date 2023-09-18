function Runtime(){

    return(
    <div className="d-flex flex-column align-items-start border-bottom pt-5 pb-5">
        <div className="pb-5"><h2>Runtime</h2></div>

        <div className="row w-100">
            <div className="col-sm-4">
                <img className="logo-runtime" src="/assets/node.svg" alt="" />
                <h3>NodeJS</h3> 
            </div>
            <div className="col-sm-4">
                <img className="logo-runtime" src="/assets/deno.svg" alt="" />
                <h3>Deno</h3>
            </div>
            <div className="col-sm-4">
                <img className="logo-runtime" src="/assets/bun.svg" alt="" />
                <h3>Bun</h3>
            </div>
        </div>
    </div>
    )

}

export default Runtime