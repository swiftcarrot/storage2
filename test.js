var test = require('tape');
var ls = require('./').localStorage;
var ss = require('./').sessionStorage;

test('localStorage', function(t) {
  t.plan(6);
  t.equal(ls.length, 0);
  ls.setItem('test', '42');
  t.equal(ls.getItem('test'), '42');
  t.equal(ls.key(0), 'test');
  t.equal(ls.length, 1);
  ls.removeItem('test');
  t.equal(ls.getItem('test'), null);
  t.equal(ls.length, 0);
});

test('sessionStorage', function(t) {
  t.plan(6);
  t.equal(ss.length, 0);
  ss.setItem('test', '42');
  t.equal(ss.getItem('test'), '42');
  t.equal(ss.key(0), 'test');
  t.equal(ss.length, 1);
  ss.removeItem('test');
  t.equal(ss.getItem('test'), null);
  t.equal(ss.length, 0);
});
