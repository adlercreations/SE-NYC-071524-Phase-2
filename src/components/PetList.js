import { useState } from "react";
import Pet from "./Pet";

function PetList({pets, deletePet}){

    const [pets, setPets] = useState(props.pets)

    function deletePet(pet){
        
    }

    const petComponents = props.pets.map(pet => {
        return <Pet key={pet.id} pet={pet} deletePet={deletePet} />
    })

    return (
        <ul className="pet-list">{petComponents}</ul>
    );
}

export default PetList;