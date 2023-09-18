import JSData from '../assets/jslibrary.json'

function Techno(){
    const technos = JSData.data

    return (
        
        technos.map((t,idx)=> {
            return (
                <div key={idx} className="d-flex justify-content-start align-items-center techno">
                    <div>
                        <img className="logo me-3" src={`https://sebastiengravel.github.io/order-out-of-js/assets/${t.logo}`} alt={t.name} />
                    </div>
                    <div className="text-start">
                        <h3>{t.name}</h3>
                        <p className='type'>Type : {t.type}</p>
                        { t.npm[0] !== "" 
                            ? 
                            <div className="npm-container">
                                {   
                                    t.npm.map((n,idx) => {
                                        return( 
                                            <p key={idx}>{n}</p>
                                        )
                                    }) 
                                }
                            </div>
                            :
                            ""
                        }
                        <a href={t.url} target="_blank">Documentation</a>
                    </div>
                </div>
            )
        })
        
    )
}

export default Techno