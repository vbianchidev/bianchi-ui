import { BuiFillNullPipe } from './bui-fill-null-pipe';

describe('BuiFillNullPipe', () => {
  it('create an instance', () => {
    const pipe = new BuiFillNullPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return "-" for null, undefined or empty string', () => {
    const pipe = new BuiFillNullPipe();
    expect(pipe.transform(null)).toBe('-');
    expect(pipe.transform(undefined)).toBe('-');
    expect(pipe.transform('')).toBe('-');
  });
});
