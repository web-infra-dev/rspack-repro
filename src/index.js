import { result } from '/Users/yangjian/project/rspack-repro/src/mock_a.js';
console.log('result:', result);
import('./render').then((exports) => {
  exports.render();
});
