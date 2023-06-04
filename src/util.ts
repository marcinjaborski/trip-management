import moment from "moment/moment";
import { PBImage } from "@src/types";
import { fileUrl } from "@src/pb";

export const renderDateRange = (dateFrom: string, dateTo: string) => {
  return `${moment(dateFrom).format("l")} - ${moment(dateTo).format("l")}`;
};

export const getImageUrl = (image: PBImage): string => {
  return `${fileUrl}/images/${image.id}/${image.image}`;
};

export const emailValidator = (email: string, errorMessage: string): true | string => {
  return !!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/) || errorMessage;
};

export const confirmPasswordValidator = (
  password: string,
  confirmPassword: string,
  errorMessage: string
): true | string => {
  return password === confirmPassword || errorMessage;
};
