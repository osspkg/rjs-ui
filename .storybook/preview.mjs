import '!style-loader!css-loader!sass-loader!../src/_styles/_index.scss';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: { disable: true },
  controls: {
    expanded: true,
    matchers: {
      color: /^([a-zA-Z]+)Color$/,
      date: /Date$/,
    },
  },
  options: {
    storySort: (a, b) => {
      if (a[1].kind === 'Introduction') return -1;
      if (b[1].kind === 'Introduction') return 1;

      return a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true });
    },
  },
};
