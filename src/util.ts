import moment from "moment/moment";
import { PBImage } from "@src/types";
import { fileUrl } from "@src/pb";

export const renderDateRange = (dateFrom: string, dateTo: string) => {
  return `${moment(dateFrom).format("l")} - ${moment(dateTo).format("l")}`;
};

export const getImageUrl = (image: PBImage): string => {
  return `${fileUrl}/images/${image.id}/${image.image}`;
};
