export default function EmptyMenuAdmin({onReset}) {
    return ( 
        <div>
            <h1>Le menu est vide ?</h1>
            <span>Cliquez ci-dessous pour le réinitialiser</span>
            <button onClick={onReset}>Générer de nouveaux produits</button>
        </div> 
    )
}