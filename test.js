var test = require('tape');
var localStorage = require('./').localStorage;
var sessionStorage = require('./').sessionStorage;

test('localStorage', function(t) {
  t.plan(5);
  t.equal(localStorage.length, 0);
  localStorage.setItem('test', '42');
  t.equal(localStorage.getItem('test'), '42');
  t.equal(localStorage.length, 1);
  localStorage.removeItem('test');
  t.equal(localStorage.getItem('test'), null);
  t.equal(localStorage.length, 0);
});

test('sessionStorage', function(t) {
  t.plan(5);
  t.equal(sessionStorage.length, 0);
  sessionStorage.setItem('test', '42');
  t.equal(sessionStorage.getItem('test'), '42');
  t.equal(sessionStorage.length, 1);
  sessionStorage.removeItem('test');
  t.equal(sessionStorage.getItem('test'), null);
  t.equal(sessionStorage.length, 0);
});
