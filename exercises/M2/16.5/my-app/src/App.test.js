import renderWithRedux from './helpers/renderWithRedux';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Tests add numbers', () => {
  it('has a button and text 0', () => {
    const { queryByText } = renderWithRedux(<App />, { clickReducer: { counter: 1 }});
    const addBtn = queryByText(/Click here/);
    expect(addBtn).toBeInTheDocument();
    expect(queryByText('1')).toBeInTheDocument();
    let clickAmount = 4;
    for (let iterator = 0; iterator < clickAmount; iterator += 1 ) {
      userEvent.click(addBtn);
    };
    expect(queryByText('5')).toBeInTheDocument();
  });
});
