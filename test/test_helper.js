import jsdom from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

// create jsdom versions of objects that are normally provided by the brower
// this lets them be discovered by react for testing
global.document = doc;
global.window = win;

// hoist jsdom objects on to node.js global object
// this lets properties provided by window be used without a prefix
Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});

chai.use(chaiImmutable);