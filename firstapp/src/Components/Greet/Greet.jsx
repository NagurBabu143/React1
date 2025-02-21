import Hello from "../Hello/Hello"
import './Greet'
const Greet = ()=>{
    
    let name ="nagur"
    return(
        <div>
            <Hello/>
            <p class="greet">hii {name}</p>
        </div>
    )
}
 export default Greet