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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ArticlePostDto', 'model/ArticleQueryProfilePostDto', 'model/AuthenticatePostDto', 'model/LoginModel', 'model/UserPostDto', 'api/ArticlesApi', 'api/AuthenticateApi', 'api/UsersApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/ArticlePostDto'), require('./model/ArticleQueryProfilePostDto'), require('./model/AuthenticatePostDto'), require('./model/LoginModel'), require('./model/UserPostDto'), require('./api/ArticlesApi'), require('./api/AuthenticateApi'), require('./api/UsersApi'));
  }
}(function(ApiClient, ArticlePostDto, ArticleQueryProfilePostDto, AuthenticatePostDto, LoginModel, UserPostDto, ArticlesApi, AuthenticateApi, UsersApi) {
  'use strict';

  /**
   * API_for_Senior_Project.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var CryptoQueryApi = require('index'); // See note below*.
   * var xxxSvc = new CryptoQueryApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new CryptoQueryApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new CryptoQueryApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new CryptoQueryApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version v1
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The ArticlePostDto model constructor.
     * @property {module:model/ArticlePostDto}
     */
    ArticlePostDto: ArticlePostDto,
    /**
     * The ArticleQueryProfilePostDto model constructor.
     * @property {module:model/ArticleQueryProfilePostDto}
     */
    ArticleQueryProfilePostDto: ArticleQueryProfilePostDto,
    /**
     * The AuthenticatePostDto model constructor.
     * @property {module:model/AuthenticatePostDto}
     */
    AuthenticatePostDto: AuthenticatePostDto,
    /**
     * The LoginModel model constructor.
     * @property {module:model/LoginModel}
     */
    LoginModel: LoginModel,
    /**
     * The UserPostDto model constructor.
     * @property {module:model/UserPostDto}
     */
    UserPostDto: UserPostDto,
    /**
     * The ArticlesApi service constructor.
     * @property {module:api/ArticlesApi}
     */
    ArticlesApi: ArticlesApi,
    /**
     * The AuthenticateApi service constructor.
     * @property {module:api/AuthenticateApi}
     */
    AuthenticateApi: AuthenticateApi,
    /**
     * The UsersApi service constructor.
     * @property {module:api/UsersApi}
     */
    UsersApi: UsersApi
  };

  return exports;
}));
