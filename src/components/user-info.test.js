import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import UserInfoComponent from './user-info/user-info';

test('renders content', () => {
  const userInfoComponent = {
    content: 'profile',
    important: true,
  };
  const component = render(<UserInfoComponent props />);

  //   component.getByText('This is a test');
  //   component.getByText('make not important');

  //expect(component.container).toHaveTextContent(userInfoComponent.content);
});

test('clicking the button calls event handles once', () => {
  const userInfoComponent = {
    content: 'test',
    important: true,
  };

  const mockHandler = jest.fn();
  const component = render(<UserInfoComponent props />);
  const btn = component.getByText('Edit profile');
  fireEvent.click(btn);

  //expect(mockHandler).toHaveBeenCalled(0);
});
