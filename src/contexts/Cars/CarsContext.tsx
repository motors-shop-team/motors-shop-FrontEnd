"use client";

import { iChildrenProps } from "@/interfaces";
import { createContext, useState } from "react";
import { Car } from "@/components/CarFilter/interface";
import { ICarsContext } from "./interface";
import api from "@/services/api";

export const CarsContext = createContext<ICarsContext>({} as ICarsContext);

export const CarsProvider = ({ children }: iChildrenProps) => {
  const [cars, setCars] = useState<Car[]>([]);

  const getAllCarsRequest = () => {
    api
      .get(`/cars`)
      .then((res) => {
        const carData = res.data;
        setCars(carData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <CarsContext.Provider
      value={{
        cars,
        setCars,
        getAllCarsRequest,
      }}
    >
      {children}
    </CarsContext.Provider>
  );
};