import logo from '../logo.svg';
const Hello = () => {
    let name = '양소윤';
    let git = 'https://github.com/marine-yang-so-yun';
    return (
        <main className='container'>
            <article data-theme="dark">
                <div>
                <img src={logo} alt="logo" className ='App-logo'/>
                </div>
                <footer>
                    <hgroup>
                        <h1>{name}</h1>
                        <h2><a href={git}>{git}</a></h2>
                    </hgroup>
                    
                </footer>
            </article>
        </main>
    );

}

export default Hello;
