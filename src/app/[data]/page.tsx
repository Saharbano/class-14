const dynamicJsondata = (props:any) =>{
    return(
    <>
    <h1 className=" text-5xl  ">
        {props.params.data}
    </h1>
    </>
    )
}

export default dynamicJsondata