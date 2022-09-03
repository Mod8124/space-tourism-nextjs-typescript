import { render, screen } from '@testing-library/react';
import Cta from '../index';

const Mock = () => {
  return (
    <Cta subTitle='eso1' title='eso2' para='eso3'></Cta>
  );
};

describe('Cta', () => {

  it('test if cta renders the title h1 ',() => {
    render(<Mock></Mock>);

    const title = screen.getByTestId('test');
    expect(title).toBeInTheDocument();
  });

  it('test if the cta renders the paragraph', ()=> {
    render(<Mock></Mock>);
    const para = screen.getByText('eso3');
    expect(para).toBeInTheDocument();
  });

  it('test if the cta renders the subTitel(optional)', ()=> {
    render(<Mock></Mock>);
    const subTitle = screen.getByText('eso1');
    expect(subTitle.innerHTML).toBe('eso1');
  });
});
  