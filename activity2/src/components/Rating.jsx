import Star from './Star';

const Rating = ({ value, maximumValue = 5 }) => {
  return (
    <div style={{ display: 'flex', gap: '4px' }}>
      {Array.from({ length: maximumValue }, (_, i) => (
        <Star key={i} filled={i < value} />
      ))}
    </div>
  );
};

export default Rating;
