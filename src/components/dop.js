import './todo.css'

const Dop = ({list}) => {
    return (
        <ul className="dop">
            {list.map((i,index)=><li key={index}>{i}</li>)}
        </ul>
    )
}
export default Dop