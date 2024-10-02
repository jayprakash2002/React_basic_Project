function hnadleFormSubmit(event){
    event.preventDefault();
    console.log("form was submitted");
}



export default function Form(){
    return(
    <form>
        <input placeholder="Write something" />
        <button onClick={hnadleFormSubmit}>Submit</button>
    </form>
        
    );
} 