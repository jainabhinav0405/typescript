enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
  }
  

function getDirection(direction:Direction): string{
    return direction;
}

console.log(getDirection(Direction.Down))