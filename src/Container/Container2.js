import Card from 'react-bootstrap/Card';

function BodyShorthandExample() {
  const cardBodyStyle = {
    fontWeight: 'bold', 
    textAlign: 'center',
    margin: '20px',
    border:'2px solid grey' 
  };

  return <Card body style={cardBodyStyle}>Why Choose LeetCheet !</Card>;
}

export default BodyShorthandExample;
