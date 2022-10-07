import React from "react";
import './Modal.css'

export default class Modal extends React.Component {
   state = {
      isOpen: false
   }

   render() {
      return (
         <React.Fragment>
            <button onClick={() => this.setState({isOpen: true})}>?</button>

            {this.state.isOpen && (<div className="modal">
               <div className="modalBody">
                  <h2>советы тайм-менеджмента</h2>
                  <ul>
                     <li>оставляйте свободное время</li>
                     <li>важное несрочное на потом</li>
                     <li>системность - успех</li>
                  </ul>
                  <button onClick={() => this.setState({isOpen: false})}>х</button>
               </div>
            </div>)}
         </React.Fragment>
      )
   }
}