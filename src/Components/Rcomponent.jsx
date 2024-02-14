import '../CSS/App.css'


function Rcomponent(props){

    console.log(props.path)
    return(
<>
        <table>
            <tr>
                <td>
                    <p style={{textAlign:'right'}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
                    mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                    </p>
                </td>

                <td>
                    <img style={{height:'500px',width:'500px'}}src={props.path}></img>
                </td>
        
            </tr>
        </table>
</>
    )
}

export default Rcomponent;