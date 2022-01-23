import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ItemsAPI(props) {

    const { id } = useParams();

    const [item, setItem] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`https://api.mercadolibre.com/items/${id}`)
            const { data: { plain_text } } = await axios.get(`https://api.mercadolibre.com/items/${id}/description`)
            const item = normalizeData(data, plain_text);

            if (props.fetchData != undefined) {
                props.fetchData(item);
            } else {
                setItem(item)
            }
        }
        fetchData()
    }, [])

    const normalizeData = (data, description) => {
        return {
            'author': {
                'name': 'Juan Sebastian',
                'lastname': 'Ruiz Castañeda',
            },
            'item': {
                'id': data.id,
                'title': data.title,
                'price': {
                    'currency': data.currency_id,
                    'amount': data.price,
                    'decimals': 2,
                },
                'picture': data.pictures?.[0].url,
                'condition': data.condition,
                'free_shipping': data.shipping.free_shipping,
                'sold_quantity': data.sold_quantity,
                'description': description
            }
        }
    }

    return (
        <>
            {item.author !== undefined &&
                <pre>{JSON.stringify(item)}</pre>
            }
        </>
    )
}