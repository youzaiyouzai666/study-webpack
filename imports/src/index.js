// import * as _ from 'lodash';

// const _ = require('lodash');
function component(){
    return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
        var element = document.createElement('div');
        var btn = document.createElement('button');

        element.innerHTML = _.join(['Hello','webpack'],'');

        btn.innerHTML = 'Click me and check the console!';
        btn.onclick = printMe;

        element.appendChild(btn);

        return element;
    }).catch(error => 'An error occurred while loading the component');
}
document.body.appendChild(component());