import react from 'react';

const Card = (props) =>{
    return(
        <div className="card-container">
            <p>{props.name}</p>

        </div>
    );
}

export default Card;

/*
const Card = ({name, username, email, phone}) =>{
    return (
        <div className="card-container">
            <p>{name}</p>
            <p>{username}</p>
            <p>{email}</p>
            <p>{phone}</p>
          
        </div>
    )
};

export default Card;
*/