import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/vue';
import HelloWorld from './HelloWorld.vue';

describe('HelloWorld.vue', () => {
  test('should render', () => {
    const { container } = render(HelloWorld);

    expect(
      screen.getByRole('heading', { name: 'Hello world' })
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
