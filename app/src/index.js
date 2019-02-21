/**
 * Copyright 2019 Rajab Mkomwa. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */

import _ from 'lodash';
import './style.css';
import { helloFunction } from './webpack-library.min.js';

if (process.env.NODE_ENV !== 'production') {
  console.warn('Currently running on development mode!');
}
function component() {
  let element = document.createElement('div');

  console.log(helloFunction());

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());
