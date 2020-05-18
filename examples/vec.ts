import { Vector, Direction } from '../src'

const v = new Vector() // This automatically assigns the coordinates: 0, 0, 0

console.log(v.toString())
// Prints: 0, 0, 0

const above = v.clone().offset(Direction.UP, 2)

console.log(above)
// Prints: 0, 2, 0