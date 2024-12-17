/*eslint-disable no-unused-vars*/

import React,{useState} from "react";

const Form =()=>{
    
    return(
        <div className="flex justify-center mt-5">
            <input type="text"
                    placeholder="username"
                    required
                    value={username}
                    onChange={handleachange}
                    className="bg-slate-500 text-white" 
                    />
                    <input type="e-mail"className="bg-slate-500 text-white" onChange={emailChange}  />
                    <button className="bg-red-500 text-white">Submit</button>

        </div>
    );
};

export default Form;
