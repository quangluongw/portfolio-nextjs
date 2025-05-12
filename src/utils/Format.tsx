export const FormatDate = ({ date }:{date:string}) => {
    const formatDate = new Intl.DateTimeFormat("vi-VN").format(new Date(date));
    return formatDate;
  };