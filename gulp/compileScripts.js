import gulp from 'gulp';
import minifyJs from 'gulp-terser';

// Import from files

import {pathBuild, pathSrc} from './conf.js';

// Task configuration
const js = () =>
  gulp
      .src(`${pathSrc.js}/**/*.js`)
      .pipe(minifyJs())
      .pipe(gulp.dest(`${pathBuild.js}`));

export {js};
