let LogoContent = `
<div style="display:flex;background-image:url('../../../images/logos/bigwhiskeylogored.gif');margin-right:625px;width:258px;height:150px;"></div>
<div style="display:flex;position:absolute;width:306px;height:78px;">
<a href="index.html"><img src="../../../images/logos/logored.png" class="logo"></a></div>

`;
document.querySelector('#logocontainer').insertAdjacentHTML('beforeend', LogoContent);
