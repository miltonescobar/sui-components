# MoleculeRating

`MoleculeRating` will display a rating showing how good or popular someone o something is.


## Installation

```sh
$ npm install @s-ui/react-molecule-rating --save
```

## Usage

```js
import MoleculeRating, {MoleculeRatingSizes} from '@s-ui/react-molecule-rating'
```

### Basic usage

```js
<MoleculeRating value={2} label="25 opiniones"/>
```

### With Link

```js
<MoleculeRating value={4} label="25 opiniones" link href="https://www.adevinta.com/"/>        
```

### With MEDIUM size

```js
<MoleculeRating value={4} label="25 opiniones" size={MoleculeRatingSizes.MEDIUM} link href="https://www.adevinta.com/"/>        
```

### With CUSTOM icons

```js
import {IconStarFilled, IconStarHalfFilled, IconStarEmpty} from './Icons'

const customPropsStar = {
  IconStarFilled,
  IconStarHalfFilled,
  IconStarEmpty
}

<MoleculeRating
    value={3.5}
    size={MoleculeRatingSizes.LARGE}
    label="25 opiniones"
    {...customPropsStar}
/>
```



> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/molecule/rating/demo).**