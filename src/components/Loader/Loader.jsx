import { memo } from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <ThreeDots
      height="90"
      width="90"
      radius="9"
      color="#e7fc00"
      ariaLabel="three-dots-loading"
      wrapperStyle={{ justifyContent: 'center' }}
      wrapperClassName="loader"
      visible={true}
    />
  );
};

export default memo(Loader);
