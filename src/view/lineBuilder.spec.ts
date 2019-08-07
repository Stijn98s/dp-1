import { LineBuilder } from './lineBuilder';

describe('LineBuilder', () => {
  it('Correct default build', () => {
    const line = LineBuilder.Create();

    expect(line.X).toBe(0);
    expect(line.Y).toBe(0);
    expect(line.EndX).toBe(0);
    expect(line.EndY).toBe(0);
    expect(line.Enabled).toBe(false);
  });

  it('Correct edit enabled', () => {
    const line = LineBuilder.Create().SetEnabled(true);

    expect(line.X).toBe(0);
    expect(line.Y).toBe(0);
    expect(line.EndX).toBe(0);
    expect(line.EndY).toBe(0);
    expect(line.Enabled).toBe(true);
  });

  it('Correct edit X', () => {
    const line = LineBuilder.Create().SetX(55);

    expect(line.X).toBe(55);
    expect(line.Y).toBe(0);
    expect(line.EndX).toBe(0);
    expect(line.EndY).toBe(0);
    expect(line.Enabled).toBe(false);
  });

  it('Correct edit Y', () => {
    const line = LineBuilder.Create().SetY(55);

    expect(line.X).toBe(0);
    expect(line.Y).toBe(55);
    expect(line.EndX).toBe(0);
    expect(line.EndY).toBe(0);
    expect(line.Enabled).toBe(false);
  });

  it('Correct edit X', () => {
    const line = LineBuilder.Create().SetEndX(55);

    expect(line.X).toBe(0);
    expect(line.Y).toBe(0);
    expect(line.EndX).toBe(55);
    expect(line.EndY).toBe(0);
    expect(line.Enabled).toBe(false);
  });

  it('Correct edit Y', () => {
    const line = LineBuilder.Create().SetEndY(55);

    expect(line.X).toBe(0);
    expect(line.Y).toBe(0);
    expect(line.EndX).toBe(0);
    expect(line.EndY).toBe(55);
    expect(line.Enabled).toBe(false);
  });

  it('Invalid edit X', () => {
    expect(() => {LineBuilder.Create().SetX(101)}).toThrow(Error);
    expect(() => {LineBuilder.Create().SetX(-1)}).toThrow(Error);
  });

  it('Invalid edit Y', () => {
    expect(() => {LineBuilder.Create().SetY(101)}).toThrow(Error);
    expect(() => {LineBuilder.Create().SetY(-1)}).toThrow(Error);
  });

  it('Invalid edit endX', () => {
    expect(() => {LineBuilder.Create().SetEndX(101)}).toThrow(Error);
    expect(() => {LineBuilder.Create().SetEndX(-1)}).toThrow(Error);
  });

  it('Invalid edit endY', () => {
    expect(() => {LineBuilder.Create().SetEndY(101)}).toThrow(Error);
    expect(() => {LineBuilder.Create().SetEndY(-1)}).toThrow(Error);
  });

  it('Enabled draw', () => {
    const line = LineBuilder.Create().SetEnabled(true);

    const context = ({
      canvas: {
        height: 100,
        width: 100,
      },
      moveTo: jest.fn(),
      lineTo: jest.fn(),
      stroke: jest.fn(),
    } as any) as CanvasRenderingContext2D;

    line.draw(context);

    expect(context.strokeStyle).toBe('black');
  });
});
