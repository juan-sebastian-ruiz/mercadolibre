import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function SearchAPI(props) {

    const location = useLocation().search;
    const [searchResults, setSearchResults] = useState({})

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(location);
        const q = urlSearchParams.get('search') != null ? urlSearchParams.get('search') : urlSearchParams.get('q');
        const fetchData = async () => {
            const { data } = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${q}`)
            data.results = data.results.slice(0, 4);
            const items = normalizeData(data);

            if (props.fetchData != undefined) {
                props.fetchData(items);
            } else {
                setSearchResults(items)
            }
        }
        fetchData()
    }, [location]);

    const normalizeData = (data) => {
        //const categories = getCategories(data.filters);
        const items = [];
        data.results.map((result) => {
            items.push(
                {
                    "id": result.id,
                    "title": result.title,
                    "price": {
                        "currency": result.currency_id,
                        "amount": result.price,
                        "decimals": 0
                    },
                    "picture": result.thumbnail,
                    "condition": result.condition,
                    "free_shipping": result.shipping.free_shipping
                }
            )
        })
        return (
            {
                "author": {
                    "name": "Juan Sebastian",
                    "lastname": "Ruiz Castañeda"
                },
                "categories": [],
                "items": items
            }
        )
    }

    const getCategories = (data) => {
        /*const filter = data.filter(filter => filter.id === 'category')[0];
        const results = [];
        filter.values.map((indx) => {
            results.push(indx.values)
        })*/
        return 'none';
    }

    return (
        <>
            {searchResults.author !== undefined &&
                <pre>{JSON.stringify(searchResults)}</pre>
            }
        </>
    )
}