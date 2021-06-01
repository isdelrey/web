import React from "react"

const Tag: React.FunctionComponent = ({children}) => {
    return (
        <div className="ml-0.5 inline-block align-middle"  style={{marginTop: "-0.1rem"}}>
            <div className="text-xxs border rounded-md leading-3 border-lightgray font-bold"  style={{padding: "2px 5px"}}>
                {children}
            </div>
    </div>
    )
  }
  
  export default Tag