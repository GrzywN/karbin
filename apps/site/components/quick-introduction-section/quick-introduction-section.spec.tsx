import { render } from '@testing-library/react';

import QuickIntroductionSection from './quick-introduction-section';

describe('QuickIntroductionSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <QuickIntroductionSection
        sectionTitle="Lorem ipsum"
        text={
          <>
            Lorem ipsum dolor sit{' '}
            <strong>amet consectetur, adipisicing elit.</strong> Eius tenetur
            obcaecati <em>quisquam</em> ut perferendis reprehenderit suscipit
            voluptatibus consequuntur ducimus in?
          </>
        }
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
