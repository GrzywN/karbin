import NotFoundSection from '../components/not-found-section/not-found-section';

import imageNotFound from '../public/images/illustrations/PageNotFound.svg';

export function NotFound() {
  return (
    <NotFoundSection
      sectionTitle="Not found"
      imageSrc={imageNotFound}
      heading="Not found"
      paragraph="The page you were looking for does not exist."
      buttonText="Go to the home page"
    />
  );
}

export default NotFound;
