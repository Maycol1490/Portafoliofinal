import './DiagonalTransition.css';

function DiagonalTransition({ active }) {
  const stripes = [];

  for (let i = 0; i < 7; i++) {
    stripes.push(
      <div
        key={i}
        className={`stripe ${active ? 'animate' : ''}`}
        style={{ animationDelay: `${i * 100}ms` }}
      />
    );
  }

  return <div className={`diagonal-transition ${active ? 'show' : ''}`}>{stripes}</div>;
}

export default DiagonalTransition;