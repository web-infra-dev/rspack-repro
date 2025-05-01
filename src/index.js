import a from 'a';
import b from 'b';

console.log('a', a);
console.log('b', b);

import('./render').then(exports => {
    exports.render()
})
