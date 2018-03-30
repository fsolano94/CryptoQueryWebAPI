/**
 * CryptoQuery API
 * API for Senior Project
 *
 * OpenAPI spec version: v1
 * Contact: fsolano@nevada.unr.edu
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CryptoQueryApi);
  }
}(this, function(expect, CryptoQueryApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CryptoQueryApi.UsersApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('UsersApi', function() {
    describe('usersByIdDelete', function() {
      it('should call usersByIdDelete successfully', function(done) {
        //uncomment below and update the code to test usersByIdDelete
        //instance.usersByIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('usersByIdGet', function() {
      it('should call usersByIdGet successfully', function(done) {
        //uncomment below and update the code to test usersByIdGet
        //instance.usersByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('usersByIdUpdatePasswordPost', function() {
      it('should call usersByIdUpdatePasswordPost successfully', function(done) {
        //uncomment below and update the code to test usersByIdUpdatePasswordPost
        //instance.usersByIdUpdatePasswordPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('usersGet', function() {
      it('should call usersGet successfully', function(done) {
        //uncomment below and update the code to test usersGet
        //instance.usersGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('usersPost', function() {
      it('should call usersPost successfully', function(done) {
        //uncomment below and update the code to test usersPost
        //instance.usersPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
