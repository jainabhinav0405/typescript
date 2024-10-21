var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
function getDirection(direction) {
    return direction;
}
// console.log(getDirection(Direction.Right)); 
console.log(getDirection(Direction.Down));
