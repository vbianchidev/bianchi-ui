import { FillNullPipe } from './fill-null-pipe';

describe('FillNullPipe', () => {
  it('create an instance', () => {
    const pipe = new FillNullPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return "-" for null, undefined or empty string', () => {
    const pipe = new FillNullPipe();
    expect(pipe.transform(null)).toBe('-');
    expect(pipe.transform(undefined)).toBe('-');
    expect(pipe.transform('')).toBe('-');
  });
});
