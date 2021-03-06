/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the ODataResponseListGatewayDatasource class.
 * @constructor
 * Odata response wrapper for a Power BI Gateway datasource collection
 * @member {string} [odatacontext]
 * 
 * @member {array} [value] The gateway datasources
 * 
 */
function ODataResponseListGatewayDatasource() {
}

/**
 * Defines the metadata of ODataResponseListGatewayDatasource
 *
 * @returns {object} metadata of ODataResponseListGatewayDatasource
 *
 */
ODataResponseListGatewayDatasource.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ODataResponse[List[GatewayDatasource]]',
    type: {
      name: 'Composite',
      className: 'ODataResponseListGatewayDatasource',
      modelProperties: {
        odatacontext: {
          required: false,
          serializedName: 'odata\\.context',
          type: {
            name: 'String'
          }
        },
        value: {
          required: false,
          serializedName: 'value',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'GatewayDatasourceElementType',
                type: {
                  name: 'Composite',
                  className: 'GatewayDatasource'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = ODataResponseListGatewayDatasource;
