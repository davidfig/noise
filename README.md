## noise.js
a javascript simple noise generator
based on code from from [scratchapixel.com](http://www.scratchapixel.com/old/lessons/3d-advanced-lessons/noise-part-1/creating-a-simple-1d-noise/), via [Michael Bromley](http://www.michaelbromley.co.uk/blog/90/simple-1d-noise-in-javascript)

## Installation

    npm install yy-noise

# API Reference
creates simple 1D noise this.generator

**Kind**: global class  

* [SimpleNoise](#SimpleNoise)
    * [new SimpleNoise(options, [maxVertices], [amplitude], [scale])](#new_SimpleNoise_new)
    * [.get(x)](#SimpleNoise+get) ⇒ <code>number</code>
    * [.lerp(a, b, t)](#SimpleNoise+lerp) ⇒ <code>number</code>

<a name="new_SimpleNoise_new"></a>

### new SimpleNoise(options, [maxVertices], [amplitude], [scale])

| Param | Type | Default |
| --- | --- | --- |
| options | <code>object</code> |  | 
| [maxVertices] | <code>number</code> | <code>256</code> | 
| [amplitude] | <code>number</code> | <code>1</code> | 
| [scale] | <code>number</code> | <code>1</code> | 

**Example**  
```js
const noise = new SimpleNoise({maxVertices: 512, noise: 0.5, scale: 0.25});

     // changes amplitude of noise function
     noise.amplitude = amplitude;

     // sets scale of noise function
     noise.scale = scale;

     // returns the value based on n (usually incremented along an axis)
     for (let x = 0; x < 100; x++)
     {
         noise.get(n);
     }
```
<a name="SimpleNoise+get"></a>

### simpleNoise.get(x) ⇒ <code>number</code>
gets a value

**Kind**: instance method of <code>[SimpleNoise](#SimpleNoise)</code>  

| Param | Type |
| --- | --- |
| x | <code>number</code> | 

<a name="SimpleNoise+lerp"></a>

### simpleNoise.lerp(a, b, t) ⇒ <code>number</code>
Linear interpolation function.

**Kind**: instance method of <code>[SimpleNoise](#SimpleNoise)</code>  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> | The lower integer value |
| b | <code>number</code> | The upper integer value |
| t | <code>number</code> | The value between the two |


* * *

Copyright (c) 2016 YOPEY YOPEY LLC - MIT License - Documented by [jsdoc-to-markdown](https://github.com/75lb/jsdoc-to-markdown)