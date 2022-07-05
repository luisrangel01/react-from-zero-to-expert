import { render, screen } from '@testing-library/react';

import { GifExpertApp } from '../src/GifExpertApp';

describe('Tests on <GifExpertApp />', () => {
  test('should', () => {
    render(<GifExpertApp />);
    expect(screen.getByText('GifExpertApp')).toBeTruthy();
  });
});
