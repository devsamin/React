export default function Friend({friends}){
    console.log(friends)
    const {name, email} = friends
    return (
        <div className="box">
            <h4>Name : {name}</h4>
            <h4>Email : {email}</h4>
        </div>
    )
}