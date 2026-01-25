    import React from 'react'
    import {createContext} from 'react'
    export const themecontext =createContext();
    const Themecontext = (props) => {
        const [mode,setMode]=React.useState("dark");
      return (
        <div>
            <themecontext.Provider value={[mode,setMode]}> 
            {props.children}
            </themecontext.Provider>
        </div>
      )
    }
    
    export default Themecontext