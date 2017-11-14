var Marty = require('marty-lib/src/core/marty');
var marty = new Marty('0.10.0-beta', react());

marty.use(require('marty-lib/src/core/index'));
marty.use(require('marty-lib/src/constants/index'));
marty.use(require('marty-lib/src/application/index'));
marty.use(require('marty-lib/src/store/index'));
marty.use(require('marty-lib/src/action-creators/index'));
marty.use(require('marty-lib/src/queries/index'));
marty.use(require('marty-lib/src/state-mixin/index'));
marty.use(require('marty-lib/src/app-mixin/index'));
marty.use(require('marty-lib/src/container/index'));
marty.use(require('marty-lib/src/http-state-source/index'));

module.exports = marty;

function react() {
  try {
    return module.parent.require('react');
  } catch (e) {
    return require('react');
  }
}
