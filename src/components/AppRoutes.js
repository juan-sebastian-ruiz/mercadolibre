import { Route, Routes } from "react-router-dom";
import Search from "./Search";
import Items from "./Items";
import NotFound from "./NotFound";
import ItemsAPI from "./ItemsAPI";
import ItemDetail from "./ItemDetail";
import SearchAPI from "./SearchAPI";

export default function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Search/>} />
            <Route path="/items" element={<Items/>} />
            <Route path="/items/:id" element={<ItemDetail/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    );
}