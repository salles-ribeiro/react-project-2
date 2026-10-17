function InputCreateAccount(props) {
  return (
    <>
        <div className="create-account-inputs">
            <label>{props.label}</label>
            <input type={props.type} placeholder={props.placeholder}/>
        </div>
    </>
  )
}

export default InputCreateAccount