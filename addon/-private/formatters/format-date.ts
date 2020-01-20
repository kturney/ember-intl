/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

import memoize from 'fast-memoize';
import { BaseFormatter, FormatterOptions, FormatterContext } from './-base';

export type Dateish = string | number | Date;

/**
 * @private
 * @hide
 */
export default class FormatDate extends BaseFormatter<Dateish> {
  createNativeFormatter = memoize((locales, options) => {
    return new Intl.DateTimeFormat(locales, options);
  });

  constructor() {
    super([
      'locale',
      'format',
      'localeMatcher',
      'timeZone',
      'hour12',
      'formatMatcher',
      'weekday',
      'era',
      'year',
      'month',
      'day',
      'hour',
      'minute',
      'second',
      'timeZoneName'
    ]);
  }

  format(value: Dateish, options: FormatterOptions | undefined, ctx: FormatterContext) {
    return this._format(new Date(value), this.readOptions(options), undefined, ctx);
  }
}