import { useSearchParams } from "react-router-dom";
import Select, { SingleValue } from "react-select"
type OptionsType = {

  label:string;
  value:string;
}



type Props = {

  options: OptionsType[]
  name:string;
}
const Filter = ({options , name}:Props) => {
  const [params , setParams] = useSearchParams();

  const handleChange = (e:SingleValue<OptionsType>) =>{
params.set(name, e?.value as string);
setParams(params)
  }


const selectedOpt = {
label:params.get(name) || options[0].label,
value:params.get(name) || options[0].label,

}


  return (
    <div className="w-fit">
<Select 
defaultValue={selectedOpt}
onChange={handleChange} options={options} className="text-black min-w-[100px]"/>
    </div>
  )
}

export default Filter
