import { Link } from 'react-router-dom';

export default function SearchResult(props) {
    return (
        <>
            <Link to={`/items/${props.id}`} className='link-area'>
                <div className="search-result">
                    <img alt="" srcSet={props.picture} />
                    <div className="search-result-info">
                        <h2 className="price">{props.price.toLocaleString("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 })}</h2>
                        <p className="title">{props.title}</p>
                    </div>
                    <span>{props.condition}</span>
                </div>
            </Link>
            <div className="divider"></div>
        </>
    );
}