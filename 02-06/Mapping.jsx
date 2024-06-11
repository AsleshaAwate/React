function Mapping({students}){
    console.log(students);

    return(
        <div>
            <h1>Mapping</h1>
            <div>
                {students.map((students)=><h2>{students}</h2>)}
            </div>
        </div>
        
    )
}

export default Mapping;