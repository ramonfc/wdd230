const date1 = "Monday, 20 March 2023 - Monday, 3 April 2023";
const date2 = "Monday, 3 April 2023";

const date3 = "Mon Jun 19 2023 - Tue Jul 04 2023";

/**
 * Given the closure date, return a short version Ex:. 
 * Given: "Monday, 20 March 2023 - Monday, 3 April 2023"
 * returns: "Mon Mar 20 2023 - Mon Apr 03 2023"
 * Given: "Monday, 3 April 2023"
 * returns: Mon Apr 03 2023
 * @param {String} date input date
 * @returns {String} the date in short version
 */
const formatDates = (date) => {
    const dateList = date.split(" - ");  
    const modified = dateList.map(element => {
       return (new Date(element)).toDateString();
    });
    return modified.join(" - ");
}


const formatDates2 = (date)=> {
  const dateList = date.split(" - ");  
    const modified = dateList.map(element => {
      let createdDate = new Date(element);
      let day = createdDate.toDateString().split(" ")[0];
      let editedDate = createdDate.toISOString().split("T")[0];
      let dateToSend = `${day} ${editedDate}`;
      return dateToSend;
    });
    return modified.join(" - ");
}

// console.log(formatDates(date2))


const closureInfo = [
    {
      "2022": [
        "Monday, 19 September 2022 - Monday, 3 October 2022",
        "Saturday, 24 December 2022 - Monday, 26 December 2022",
        "Saturday, 31 December 2022 - Sunday, 1 January 2023"
      ]
    },
    {
      "2023": [
        "Monday, 20 March 2023 - Monday, 3 April 2023",
        "Thursday, 29 June 2023",
        "Monday, 18 September 2023 - Monday, 2 October 2023",
        "Sunday, 24 December 2023 - Tuesday, 26 December 2023"
      ]
    }
  ];

// const dates = closureInfo.map(date => Object.keys(date)[0]);
// dates.map((element, index) => {
//     console.log(`${element} has ${closureInfo[index][element].length} elements`)
// });

const dates2 = closureInfo.map(date => Object.entries(date)[0]);
dates2.forEach(year => {
  console.log(`${year[1].map(date=> `<p>${formatDates2(date)}</p>` )}\n`)
})

// const dates3 = closureInfo.map(date => Object.values(date)[0]);
// console.log("dates3: ", dates3)
