import React from "react";
import Button from "./Button";
import { useSearchParams } from "react-router-dom";

const ShowMore = () => {
  const [params, setParams] = useSearchParams();

  const limit = Number(params.get("limit")) || 5;
  console.log(limit);
  const increaseLimit = () => {
    const newLimit = limit + 5;
    params.set("limit", String(newLimit));
    setParams(params);
  };

  return (
    <div className="w-2full flex-center gap-5 my-10">
      {limit < 30 && <Button title="Daha Fazla" handleClick={increaseLimit} />}
    </div>
  );
};

export default ShowMore;
