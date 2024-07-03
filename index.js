
function bearingDistance(coordinateOfPointA, coordinateOfPointB){

    // the difference between the X values of the coordinate
    changeEasting = coordinateOfPointB[0] - coordinateOfPointA[0]
    // the difference between the Y values of the coordinate
    changeNorthing = coordinateOfPointB[1] - coordinateOfPointA[1]
    // Calculating the distance
    distance = (Math.sqrt((changeNorthing)**2 + (changeEasting)**2)).toFixed(3)
    distance = parseFloat(distance)

    // Bearing determination
    bearingRad = Math.atan(changeEasting/changeNorthing)
    bearing = parseFloat(bearingRad)
    bearing = (bearingRad*180/Math.PI)
    if (changeEasting > 0 && changeNorthing > 0){
        ans = bearing
    }else if (changeEasting > 0 && changeNorthing < 0){
        ans = bearing + 180
    }else if (changeEasting < 0 && changeNorthing < 0){
        ans = bearing + 180
    }else{
        ans = bearing + 360 
    }

    // To convert bearing from decimal degree to degrees, minutes and seconds
    const degree = Math.floor(ans)
    const minuteDec = (ans - degree)*60
    const minute = Math.floor(minuteDec)
    const second = ((minuteDec - minute)*60).toFixed(2)

    return`The distance between the two points is ${distance}m, with a bearing of ${degree}°${minute}'${second}" .`
}

module.exports = bearingDistance


