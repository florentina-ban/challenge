const daysOfWeek = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thusrday', 'Friday','Saturday'];


export function getStringFromDate(date: Date){
    const day = date.getDate().toString();
    const month = date.getMonth().toString();
    const year = date.getFullYear().toString();

    const dayName = daysOfWeek[date.getDay()];

    return dayName+": "+ day+"-"+month+"-"+year;
    //format : 31-12-2021
}

export function getDateFromString(dateString: string){
    const values = dateString.split("-");
    const date=new Date(+values[2], +values[1], +values[0]);
    return date;
}