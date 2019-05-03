// importer le fichier react 
import React , {fragment} from 'react';
 
const Membre = ({nom, age ,children}) => {
    return (
    <fragment>
        <h2>"{nom}" -> {age} ans </h2>
        <p>{children}</p>
    </fragment>
    )
} 

//exporter le fichier Membre.js 
export default Membre 
