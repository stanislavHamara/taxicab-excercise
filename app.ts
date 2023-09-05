import { data } from "./data";
import { Coordinates, Direction } from "./types";

const parseDirections = (directions: string[]) => {

    let currentDirection = Direction.N
    let currentCoordinates: Coordinates = { x: 0, y: 0 }

    directions.forEach(direction => {
        console.log({ direction })
        const turnDirection = direction[0]
        const distance = parseInt(direction.slice(1))
        if ((turnDirection !== 'R' && turnDirection !== 'L')) {
            throw Error(`Input data is invalid. "${turnDirection}" is not a valid turn direction`)
        } else if ( isNaN(distance)) {
            throw Error(`Input data is invalid. "${direction}" does not contain numeric distance value`)
        }

        console.log({ direction })
    })
}

parseDirections(data)