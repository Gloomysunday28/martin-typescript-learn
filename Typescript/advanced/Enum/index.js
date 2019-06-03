var Days;
(function (Days) {
    Days[Days["Sun"] = 7] = "Sun";
    Days[Days["Mon"] = 8] = "Mon";
    Days[Days["Tue"] = 9] = "Tue";
    Days[Days["Wen"] = 10] = "Wen";
    Days[Days["Thu"] = 11] = "Thu";
    Days[Days["Fri"] = 12] = "Fri";
    Days[Days["Sat"] = 13] = "Sat";
})(Days || (Days = {}));
console.log(Days["Sun"] === 0);
console.log(1 /* "Green" */ === 1);
var directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
