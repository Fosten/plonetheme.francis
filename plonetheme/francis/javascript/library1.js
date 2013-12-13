var dayOfWeek = (new Date).getDay();
var hours = ["Closed",          // Sunday
             "8:30 a.m. to 4:00 p.m. EST",   // Monday
             "8:30 a.m. to 4:00 p.m. EST",   // Tuesday
             "8:30 a.m. to 4:00 p.m. EST",   // Wednesday
             "8:30 a.m. to 4:00 p.m. EST",   // Thursday
             "8:30 a.m. to 4:00 p.m. EST",   // Friday
             "Closed"];  // Saturday
var todaysHours = hours[dayOfWeek];
document.getElementById("hours").innerHTML = todaysHours;