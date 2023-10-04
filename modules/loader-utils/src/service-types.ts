// loaders.gl, MIT license

import type {ImageSource, ImageSourceProps} from './lib/sources/image-source';

/** Export interface source */
export interface Service<SourceT = ImageSource, SourcePropsT = ImageSourceProps> {
  source?: SourceT;
  props?: SourcePropsT;
  type: string;
  testURL: (url: string) => boolean;
  create(props: SourcePropsT): SourceT;
}
