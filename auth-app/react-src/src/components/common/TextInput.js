import React from 'react'


const TextInput = ({ label, value, onChange, placeholder, id, type }) => {
  return (
    <form className="form-horizontal">
      <fieldset>
        <div className="form-group">
          <label htmlFor="inputEmail" className="col-lg-2 control-label">{label}</label>
            <div className="col-lg-10">
              <input 
                className="form-control"
  
                onChange={onChange}
                placeholder={placeholder}
                id={id}
                type={type}
              />
            </div>
        </div>
      </fieldset>
    </form>
  )
}

export {TextInput}



