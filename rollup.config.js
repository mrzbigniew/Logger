import nodeResolve from 'rollup-plugin-node-resolve';
import commonCJS from 'rollup-plugin-commonjs';

export default {
    entry: 'index.js' ,
    format: 'umd' ,
    moduleName: 'logger' ,
    plugins: [nodeResolve() , commonCJS()] ,
    dest: 'bundle.js'
};