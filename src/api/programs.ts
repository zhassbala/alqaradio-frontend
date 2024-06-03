import { IProgram, IResponse } from "@/types";
import { api } from "./api";

export const getProgram = async (programId: number | string): Promise<IResponse<IProgram>> => {
  console.log(programId);
  try {
    const { data } = await api.get("/programs/" + programId, {
      params: {
        populate: "*",
      },
    });
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getPrograms = async (): Promise<IResponse<IProgram[]>> => {
  const { data } = await api.get("/programs", {
    params: {
      populate: "*",
    },
  });
  return data;
};
