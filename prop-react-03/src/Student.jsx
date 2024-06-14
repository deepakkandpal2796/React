import propType from 'prop-types'

function Student(prop){
    return (
        <div className="student">
            <p>Name : {prop.name}</p>
            <p>Age : {prop.age}</p>
            <p>Student : {prop.isStudent ? 'Yes' : 'No'}</p>
        </div>
    );
}

Student.propType = {
    name: propType.string,
    age: propType.number,
    isStudent: propType.bool
}

Student.defaultProps = {
    name: 'No Name',
    age: -20,
    isStudent: false,
}
export default Student