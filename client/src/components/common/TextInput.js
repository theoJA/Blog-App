import React from 'react'


const TextInput = ({ label, onBlur, placeholder, id, type }) => {
  return (
    <form className="form-horizontal">
      <fieldset>
        <div className="form-group">
          <label htmlFor="inputEmail" className="col-lg-4 col-md-3 col-sm-2 control-label">{label}</label>
          <div className="col-lg-4 col-md-6 col-sm-8">
            <input 
              className="form-control"
              onBlur={onBlur}
              placeholder={placeholder}
              id={id}
              type={type}
            />
          </div>
          <div className="col-lg-4 col-md-3 col-sm-2"></div>
        </div>
      </fieldset>
    </form>
  )
}

export {TextInput}



