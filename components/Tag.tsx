import React from "react"

const Tag: React.FunctionComponent = ({children}) => {
    return (
        <div className="ml-0.5 inline-block align-middle mt-[-0.1rem]">
            <div className="text-xxs border rounded-md leading-3 px-[5px] py-[2px] border-lightgray font-bold">
                {children}
            </div>
    </div>
    )
  }
  
  export default Tag