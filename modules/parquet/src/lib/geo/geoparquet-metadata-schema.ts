// loaders.gl, MIT license

/* eslint-disable camelcase */

/**
 * Geoparquet JSON schema for geo metadata
 * @see https://github.com/geoarrow/geoarrow/blob/main/metadata.md
 * @see https://github.com/opengeospatial/geoparquet/blob/main/format-specs/geoparquet.md
 */
export const GEOPARQUET_METADATA_JSON_SCHEMA = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  title: 'GeoParquet',
  description: 'Parquet metadata included in the geo field.',
  type: 'object',
  required: ['version', 'primary_column', 'columns'],
  properties: {
    version: {type: 'string', const: '1.0.0-beta.1'},
    primary_column: {type: 'string', minLength: 1},
    columns: {
      type: 'object',
      minProperties: 1,
      patternProperties: {
        '.+': {
          type: 'object',
          required: ['encoding', 'geometry_types'],
          properties: {
            encoding: {type: 'string', const: 'WKB'},
            geometry_types: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                pattern: '^(GeometryCollection|(Multi)?(Point|LineString|Polygon))( Z)?$'
              }
            },
            crs: {
              oneOf: [
                {
                  $ref: 'https://proj.org/schemas/v0.5/projjson.schema.json'
                },
                {type: 'null'}
              ]
            },
            edges: {type: 'string', enum: ['planar', 'spherical']},
            orientation: {type: 'string', const: 'counterclockwise'},
            bbox: {
              type: 'array',
              items: {type: 'number'},
              oneOf: [
                {
                  description: '2D bbox consisting of (xmin, ymin, xmax, ymax)',
                  minItems: 4,
                  maxItems: 4
                },
                {
                  description: '3D bbox consisting of (xmin, ymin, zmin, xmax, ymax, zmax)',
                  minItems: 6,
                  maxItems: 6
                }
              ]
            },
            epoch: {type: 'number'}
          }
        }
      },
      additionalProperties: false
    }
  }
};
