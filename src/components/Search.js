import { useState } from "react"

function Search(props){

    const[pets, setPets] = useState(props.pets)

    setPets(pets.filter(pet => {
        return pet.name.toUpperCase().includes(props.searchText.toUpperCase())
    }))

    return (
        <div className="searchbar">
            <label htmlFor="search"></label>
        </div>
    )
}