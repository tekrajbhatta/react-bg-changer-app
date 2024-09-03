
function Button({btnColor, btnText}) {
  return (
   <>
       <button className={`bg-${btnColor}-500 hover:bg-{btnColor}-700 text-white py-2 px-4 mx-2 rounded-3xl`}> {btnText}</button>
    </>
  )
}

export default Button
