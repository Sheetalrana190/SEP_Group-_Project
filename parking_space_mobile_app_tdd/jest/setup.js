// jest/setup.js
jest.mock('@react-navigation/bottom-tabs', () => {
  return {
    createBottomTabNavigator: () => ({
      Navigator: ({ children }) => children,
      Screen: ({ children }) => children,
    }),
  };
});

jest.mock('react-native-safe-area-context', () => {
  return {
    SafeAreaProvider: ({ children }) => children,
    useSafeAreaInsets: () => ({ top: 0, bottom: 0, left: 0, right: 0 }),
  };
  
});

jest.spyOn(console, 'error').mockImplementation((message) => {
  if (message.includes('BackHandler is not supported on web')) return;
  console.warn(message);
});