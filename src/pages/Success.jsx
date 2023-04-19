import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

export const Success = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <FontAwesomeIcon
          icon={faCircleCheck}
          size="10x"
          style={{ color: '#05c212' }}
        />
        <h1 style={{ color: '#05c212' }}>Successful payment!</h1>
      </div>
    </div>
  );
};
