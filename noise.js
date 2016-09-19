/**
 * @file noise.js
 * @author David Figatner
 * based on code from http://www.scratchapixel.com/old/lessons/3d-advanced-lessons/noise-part-1/creating-a-simple-1d-noise/
 * via http://www.michaelbromley.co.uk/blog/90/simple-1d-noise-in-javascript
 * @license MIT
 */

const Random = require('yy-random');

/**
 * creates simple 1D noise this.generator
 * @example
 *      const noise = new SimpleNoise({maxVertices: 512, noise: 0.5, scale: 0.25});
 *
 *      // changes amplitude of noise function
 *      noise.amplitude = amplitude;
 *
 *      // sets scale of noise function
 *      noise.scale = scale;
 *
 *      // returns the value based on n (usually incremented along an axis)
 *      for (let x = 0; x < 100; x++)
 *      {
 *          noise.get(n);
 *      }
 */
class SimpleNoise
{
    /**
     * @param {object} options
     * @param {number} [maxVertices=256]
     * @param {number} [amplitude=1]
     * @param {number} [scale=1]
     */
    constructor(options)
    {
        this.maxVertices = options.maxVertices || 256;
        this.maxVerticesMask = this.maxVertices - 1;

        this.amplitude = options.amplitude || 1;
        this.scale = options.scale || 1;

        this.r = [];

        for (let i = 0; i < this.maxVertices; i++)
        {
            this.r.push(Random.generator());
        }
    }

    /**
     * gets a value
     * @param {number} x
     * @return {number}
     */
    get(x)
    {
        const scaledX = x * this.scale;
        const xFloor = Math.floor(scaledX);
        const t = scaledX - xFloor;
        const tRemapSmoothstep = t * t * (3 - 2 * t);

        // Modulo using &
        const xMin = xFloor & this.maxVerticesMask;
        const xMax = (xMin + 1) & this.maxVerticesMask;

        const y = this.lerp(this.r[xMin], this.r[xMax], tRemapSmoothstep);

        return y * this.amplitude;
    };

    /**
    * Linear interpolation function.
    * @param {number} a The lower integer value
    * @param {number} b The upper integer value
    * @param {number} t The value between the two
    * @return {number}
    */
    lerp(a, b, t )
    {
        return a * (1 - t) + b * t;
    }
}

module.exports = SimpleNoise;