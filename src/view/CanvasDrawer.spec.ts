import { CanvasDrawer } from './CanvasDrawer';
import { Simulation } from '../domain/simulation';

describe('CanvasDrawer', () => {
  it('Correct default build', () => {
    const simulation = ({
      Accept: jest.fn()
    } as any) as Simulation;
    const visitor = new CanvasDrawer(simulation);
    expect(visitor).toBeInstanceOf(CanvasDrawer);
  });

  it('Correct draw', () => {
    const simulation = ({
      Accept: jest.fn(),
    } as any) as Simulation;
    const ctx = jest.fn();
    const value = {
      clearRect: jest.fn(),
    };
    ctx.mockReturnValue(value);

    const visitor = new CanvasDrawer(simulation);
    const context = ({
      getContext: ctx,
    } as any) as HTMLCanvasElement;
    visitor.draw(context);
    expect(value.clearRect).toBeCalled();
  });
});
