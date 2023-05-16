const GalleryArticle = ({item}) => {

    return (
        <article>
            <header>
                <h2>{item.galTitle}</h2>
                <span>{item.galPhotographyLocation}</span>
            </header>
            <div>
                <img src={item.galWebImageUrl}></img>
            </div>
            <footer>
                <div>{item.galSearchKeyword.split(',')}</div>
            </footer>
        </article>
    );
}

export default GalleryArticle;