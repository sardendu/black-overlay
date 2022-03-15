const styled = require('styled-components').default;

const SlideWrapper = styled.div.withConfig({
  displayName: 'SlideWrapper',
})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: rgba(0,0,0,0.3);
  color: white;
  height:500px;
`;

const ContentWrapper = styled.div.withConfig({
  displayName: 'ContentWrapper',
})`

`;

const ContentHed = styled.div.withConfig({
  displayName: 'ContentHed',
})`

`;

const ContentRedirect = styled.div.withConfig({
  displayName: 'ContentRedirect',
})`

`;

module.exports = {
  SlideWrapper,
  ContentWrapper,
  ContentHed,
  ContentRedirect,
};
