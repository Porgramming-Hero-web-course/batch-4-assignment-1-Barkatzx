"use strict";
{
    function calculateShapeArea(shape) {
        if (shape.shape === "circle") {
            return parseFloat((Math.PI * shape.radius * shape.radius).toFixed(2));
        }
        else
            shape.shape === "rectangle";
        {
            return shape.width * shape.height;
        }
        throw new Error("Unknow shape type");
    }
    const circleArea = calculateShapeArea({
        shape: "circle",
        radius: 5,
    });
    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });
    console.log(circleArea);
    console.log(rectangleArea);
}
