import { data } from "./data";
import { Coordinates, Direction } from "./types";


// Enums are just numbers in disguise so we can use mod operator to circle through the 4 values
const calculateCurrentDirection = (turn: 'R' | 'L', direction: Direction) => {
    if (turn === 'R') {
        return (direction + 1) % 4;
    } else if (turn === 'L') {
        return (direction + 3) % 4;
    }
}

const calculateCurrentCoordinates = (direction: Direction, distance: number, coordinates: Coordinates) => {
    switch (direction) {
        case Direction.N:
            coordinates.y += distance;
            break;
        case Direction.E:
            coordinates.x += distance;
            break;
        case Direction.S:
            coordinates.y -= distance;
            break;
        case Direction.W:
            coordinates.x -= distance;
            break;
    }

    return coordinates
}


const parseDirections = (directions: string[]) => {

    let currentDirection = Direction.N
    let currentCoordinates: Coordinates = { x: 0, y: 0 }

    directions.forEach(direction => {
        const turnDirection = direction[0]
        const distance = parseInt(direction.slice(1))
        if ((turnDirection !== 'R' && turnDirection !== 'L')) {
            throw Error(`Input data is invalid. "${turnDirection}" is not a valid turn direction`)
        } else if ( isNaN(distance)) {
            throw Error(`Input data is invalid. "${direction}" does not contain numeric distance value`)
        }

        currentDirection = calculateCurrentDirection(turnDirection, currentDirection)
        currentCoordinates = calculateCurrentCoordinates(currentDirection, distance, currentCoordinates)

        console.log({currentDirection})
        console.log({currentCoordinates})
    })

}

parseDirections(data)