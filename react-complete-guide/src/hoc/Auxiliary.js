// Higher Order Components that just returns its children does not need the react import, as it does not use render of jsx

const aux = (props) => props.children;

export default aux;