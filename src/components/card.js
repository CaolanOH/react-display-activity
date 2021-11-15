
const card = (person) => {
const name = `${person.data.name.title} ${person.data.name.first} ${person.data.name.last}`
const picture = person.data.picture.large
const quote = person.data.quote 
    return (
        <div className="card">
            <img className="card-image" src={picture} alt="Employee"></img>
            <div className="card-content">
                <h3>Name{name}</h3>
                <h3>"{quote}"</h3>
            </div>   
        </div>
    )
}

export default card
