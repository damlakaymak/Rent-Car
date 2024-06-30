import { useState } from "react";
import { CarType } from "../types";
import Button from "./Button";
import Modal from "./Modal";
import generateImage from "../utils/generatedImage";

interface Props {
  car: CarType;
}

const Card = ({ car }: Props) => {
  const [isOpen,setIsOpen] = useState<boolean>(false)

  return (
    <div className="car-card group">
      <h2 className="car-card__content-title">
        {car.make} {car.model}
      </h2>

      <div className="flex mt-6 text-[32px]">
        <span className="font-semibold text-[19px]">₺</span>
        {Math.round(Math.random() * 7000) + 1500}

        <span className="font-semibold text-[19px] self-end">/gün</span>
      </div>

      <div className="relative w-full h-40 my-3">
        <img className="w-full h-full object-contain" src={generateImage(car)} />
      </div>

      <div className="w-full">
        <div className="flex w-full justify-between  group-hover:hidden">
          <div className="flex-center flex-col">
            <img width={25} src="/steering-wheel.svg"/>
            <p>{car.transmission === "a" ? "otomatik" : "Manuel"}</p>
          </div>



          <div className="flex-center flex-col">
            <img width={25} src="/tire.svg"/>
            <p>{car.drive}</p>
          </div>




          <div className="flex-center flex-col">
            <img width={25} src="/gas.svg"/>
            <p>{car.fuel_type}</p>
          </div>
        </div>

        <div className="hidden group-hover:flex">

          <Button 
         handleClick={(e)=>{
          setIsOpen(true)
         }}
          title="Daha Fazla" designs="w-full py-[25px]" icon="right-arrow.svg"/>
        </div>
      </div>
      <Modal car={car}
      isOpen={isOpen} 
      close={()=>setIsOpen(false)}/>
    </div>
  );
};

export default Card;
