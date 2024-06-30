import { CarType } from "../types";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "85d284999cmsh27c05a104eba045p1f3108jsn7cf65432c2c9",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

type FilterType = {
  make?: string;
  model?: string;
  limit?: string;
  fuel_type?: string;
  year?: string;
};

export const fetchCars = async (paramsObj: FilterType): Promise<CarType[]> => {
  const {
    limit = "5",
    make = "bmw",
    model = "",
    fuel_type = "",
    year = "",
  } = paramsObj;
  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&model=${model}&fuel_type=${fuel_type}&year=${year}&limit=${limit}`;

  const res = await fetch(url, options);
  return await res.json();
};
