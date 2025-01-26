import { Filters } from "./Filters";

export function Header ({changeFilters}) {
    return (
        <>
            <h1>Shopping cart 🛒</h1>
            <Filters changeFilters={changeFilters}/>
        </>
    )
}