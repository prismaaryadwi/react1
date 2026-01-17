import Logos from './assets/Asset1 2logo voltace.png'

function Container2() {
    return(
        <>
        <header>
            <img src={Logos} alt=''></img>
            <nav className='Mainnav'>
                <ul>
                    <li><a href='https://www.youtube.com/watch?v=lJ5uJNc7K_o'>BERANDA</a></li>
                    <li><a href='#'>INFO</a></li>
                    <li><a href='#'>TAGWALL</a></li>
                    <li><a href='#'>ALLTOOLS</a></li>
                    <li><a href='#'>TEAM</a></li>
                </ul>
            </nav>
            <nav className='reglog'>
                <ul>
                    <li><a href='#' className='button'>Register</a></li>
                    <li><a href='#' className='button'>Login</a></li>
                </ul>

            </nav>
            <h1>
                WELCOME TO
            </h1>
            <p><span>Artisan's Alley</span></p>

            <p className="Scroll-p">SCROLL TO SEE MORE</p>
            <span className="scroll-arrow">
            </span>

        </header>
        
            <div className="data">
            <div className="r1">
                <p>Member :</p>
                <h1>400+</h1>
            </div>
            <div className="r2">
                <p>Admin :</p>
                <h1>10</h1>
            </div>
            <div className="r3">
                <p>Design Post :</p>
                <h1>2.5k+</h1>
            </div>
        </div>

        </>
    )
}

export default Container2