import '../CSS/App.css'


function Lcomponent(props){

    console.log(props.path)
    return(
<>
        <table>
            <tr>
                <td>
                    <img src={props.path}></img>
                </td>

                <td style={{textAlign:'center', width:'800px',padding:'10%'}}>
                    <h1>Light, Fast and Powerful</h1>
                    <p >
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
                        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                    </p>
                </td>
                
            </tr>
        </table>
</>
    )
}

export default Lcomponent;