import moment from "moment/moment";

export const renderDateRange = (dateFrom: string, dateTo: string) => {
  return `${moment(dateFrom).format("l")} - ${moment(dateTo).format("l")}`;
};
