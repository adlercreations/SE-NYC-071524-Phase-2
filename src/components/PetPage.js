import PetList from "./PetList";
import pets from "../data/pets";
import { useState } from "react";

console.log(pets)

function PetPage(){
    const [petsArray, setPetsArray] = useState(pets)
    const [searchText, setSearchText] = useState("")

    const filteredPets = petsArray.filter(pet => {
        return pet.name.toUpperCase().includes(searchText.toUpperCase())
    })
    
    function deletePet(id) {
        const updatedPetsData = pets.filter(p => {
            return p.id 
        })
    }

    return (
        <main>
            <div className="searchbar">
                <label htmlFor="search">Search Pets:</label>
                <input
                    type="text"
                    id="search"
                    placeholder="Type a name to search..."
                    onChange={(event) => setSearchText(event.target.value)}
                />
            </div>
            <Search setSearchText= {setSearchText} />
            <PetList pets={filteredPets} deletePet={deletePet}/>
        </main>
    );
}

export default PetPage;