# UX

- visit web site
- map showing your location (google maps)
- button to place a marker and to name it
- button to access all markers (list)
- button to clear current marker
- button to open marker in google maps

## use cases

- saving a marker(s)
- loading a marker (from whatever storage we use)
- open markers in maps (more prominent)
- delete markers
- rendering the list of markers

- render multiple markers(?)


# pages

- map page on open
- list of markers
- view marker page
    - show map of all markers
    - list of markers below

# data

```js
/**
 * @typedef {Object} Marker
 * @prop {Date} created
 * @prop {number} lat
 * @prop {number} long
 * @prop {string} label
 * 
 * @typedef {Array<Marker>} Markers
 */
let exampleMarker = {
    created : 'Aug 12, 2019',
    lat : '0',
    long : '0',
    label : 'null island!'
}
```

# infrastructure

- nodejs running in docker
- container will run on a spare PC
- ngrok for reverse proxy

# components

# hosting and pipeline
