format (new Date (), "long")
// 20 de febrero de 2024

format (new Date(), "short")
// '20/2/24'

format (new Date (), "long", "en")
// February 20, de 2024

const time =parse("07:44", "HH:mm")
const newTime =addMinute(time)
format(newTime, { time: "short"})
// '07:45'

const date =parse("12-02-1985", "DD-MM-YYYY")
const newDate =addYear(date, 39)
format(newDate, { date: "short"})
// '12/2/44'


