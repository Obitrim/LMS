export class ObjectParser {
  static parseField(obj: { [key: string]: any }, key: string): string {
    const shouldConcatenate = key.includes('+');
    const isNested = key.includes('.');

    if (!isNested && !shouldConcatenate) {
      return obj[key] == undefined ? 'N/A' : (obj[key] as string);
    }

    if (shouldConcatenate) {
      return key
        .split('+')
        .map((_key) => this.parseField(obj, _key))
        .join(' ');
    }

    const nests = key.split('.');
    if (nests.length > 1) {
      const firstPart = nests.shift() as string;
      if (obj[firstPart] !== undefined) {
        return this.parseField(obj[firstPart], nests.join('.'));
      } else {
        return '';
      }
    }

    return '';
  }
}
