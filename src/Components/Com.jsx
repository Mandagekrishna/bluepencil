
import land from '../Images/LANDING0.png'
import image2 from '../Images/LANDING.png'

import Lcomponent from "../Components/Lcomponent";
import LC1 from "../Images/LC1.png"
import Lc2 from "../Images/Lc2.png"
import lc3 from "../Images/Lc3.png"
import RC from '../Images/rc.png'
import Rcomponent from "../Components/Rcomponent";
import Menu from './Menu';


function Comp(props){

   
    return(
<>
<div>
        <table >
                <tr >
                    <td style={{textAlign:'center', width:'800px',padding:'10%'}}>
                        <p >
                         ipsum dolor sit amet, consectetuer adipiscing elit. 
                        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        </p>
                    </td> 
                                                                                        
                    <td  style={{backgroundImage:`url(${land})`, width:'900px'}} >
                        <img src={image2}></img>
        
                    </td>
        
                </tr>
        </table>
</div>


      <Rcomponent path={RC}></Rcomponent>
      <Lcomponent path = {LC1}></Lcomponent>
      <Lcomponent path = {Lc2}></Lcomponent>
      <Lcomponent path = {lc3}></Lcomponent>

      <div style={{alignItems:'center', justifyContent:'center', marginLeft:'35%'}}>
        <h1  style={{textAlign:'center', width:'500px'}}>Price to Suit Everyone</h1>
        <p style={{textAlign:'center', width:'500px'}}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
             Aenean commodo ligula eget dolor. Aenean massa. 
             Cum sociis natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus </p>
      </div>
</>
    )
}

export default Comp;