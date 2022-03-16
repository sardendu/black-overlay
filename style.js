const styled = require('styled-components').default;

const SlideWrapper = styled.div.withConfig({
  displayName: 'SlideWrapper',
})`
  align-items: center;
  justify-content: center;
  background:url("https://assets.vogue.com/photos/61400914a36a9a12a6efcb5c/master/w_2580%2Cc_limit/GettyImages-1340157738.jpg"); 
  width:400px; 
  height:500px;
  background-size: 100% 300px;
  background-repeat: no-repeat;
  background-color: black;
  background-position: center;
`;

const ContentWrapper = styled.div.withConfig({
  displayName: 'ContentWrapper',
})`
    background-color:rgba(0,0,0,0.8);
    color:white;
    width:100%; 
    height:100%;
    text-align:center;
    font-family: 'Vogue Avant Garde';
    font-style: normal;
    font-weight: 400;
    /* or 109% */
    text-align: center;
    letter-spacing: 1.8px;
/* discovery/body/white/background */

color: #FFFFFF;

`;

const ContentHed = styled.div.withConfig({
  displayName: 'ContentHed',
})`
position: relative;
width: 303px;
left: calc(50% - 303px/2 - 0.5px);
top: 37.56%;
text-transform: uppercase;
bottom: 54.53%;
font-size: 22px;
line-height: 24px;

`;

const ContentRedirect = styled.div.withConfig({
  displayName: 'ContentRedirect',
})`
position: relative;
width: 303px;
left: calc(50% - 303px/2 - 0.5px);
top: 42%;
bottom: 54.53%;
font-size: 18px;
line-height: 24px;
`;

const ContentLink = styled.a.withConfig({
  displayName: 'ContentLink',
})`
  text-decoration: none;
  color: inherit;
`;

module.exports = {
  SlideWrapper,
  ContentWrapper,
  ContentHed,
  ContentLink,
  ContentRedirect,
};