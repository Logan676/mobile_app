import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { Button } from '@dealer/shared';

describe('Button', () => {
  it('renders label and handles clicks', async () => {
    const handler = vi.fn();
    render(<Button label="Press" onPress={handler} />);
    const btn = screen.getByRole('button', { name: /press/i });
    expect(btn).toHaveTextContent('Press');
    await userEvent.click(btn);
    expect(handler).toHaveBeenCalledTimes(1);
  });
});
