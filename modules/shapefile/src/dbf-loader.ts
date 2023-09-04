import type {Loader, LoaderWithParser, LoaderOptions} from '@loaders.gl/loader-utils';
import type {ObjectRowTable} from '@loaders.gl/schema';
// import type {DBFResult} from './lib/parsers/parse-dbf';
import {parseDBF, parseDBFInBatches} from './lib/parsers/parse-dbf';

// __VERSION__ is injected by babel-plugin-version-inline
// @ts-ignore TS2304: Cannot find name '__VERSION__'.
const VERSION = typeof __VERSION__ !== 'undefined' ? __VERSION__ : 'latest';

export type DBFLoaderOptions = LoaderOptions & {
  dbf?: {
    encoding?: string;
  };
};

/**
 * DBFLoader - DBF files are used to contain non-geometry columns in Shapefiles
 */
export const DBFWorkerLoader: Loader<ObjectRowTable, ObjectRowTable, DBFLoaderOptions> = {
  name: 'DBF',
  id: 'dbf',
  module: 'shapefile',
  version: VERSION,
  worker: true,
  category: 'table',
  extensions: ['dbf'],
  mimeTypes: ['application/x-dbf'],
  options: {
    dbf: {
      encoding: 'latin1'
    }
  }
};

/** DBF file loader */
export const DBFLoader: LoaderWithParser<ObjectRowTable, ObjectRowTable, DBFLoaderOptions> = {
  ...DBFWorkerLoader,
  parse: async (arrayBuffer, options) => parseDBF(arrayBuffer, options),
  parseSync: parseDBF,
  parseInBatches: parseDBFInBatches
};
