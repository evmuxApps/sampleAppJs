
import EvmuxAppsApi from 'evmux-app-framework/src/EvmuxAppsApi/EvmuxAppsApi'
let api = new EvmuxAppsApi();
window.evmuxApi = api
import resetStyles from './css/reset.css'
import evmuxUiStyles from './css/evmuxUiStyles.css'

// handle dark/light mode
let styleVersion = new URLSearchParams(window.location.search).get('styleVersion')
document.querySelector('body').classList.remove('light')
document.querySelector('body').classList.remove('dark')
document.querySelector('body').classList.add(styleVersion ? styleVersion : 'light')

// default settings
let appSettings = {
  title: "evmux test app",
  backgroundColor: "#7f1ed9",
  cubeColor: "#ffffff"
}

let currentColor = ""
let onKeyUpOrOnTextChange = () => {
  appSettings.title = document.getElementById('myTextToDetect').value
  api.updateSettings(appSettings)
}


api.getSettings().then((res) =>
{

  appSettings = res.response || appSettings
  if (!res.reponse) {
    api.updateSettings(appSettings)
  }

  let backgroundColorInputElement = document.getElementById('backgroundColorSelector');
  backgroundColorInputElement.value = appSettings.backgroundColor
  document.querySelector('#backgroundColorSelector').dispatchEvent(new Event('input', { bubbles: true }));

  let cubeColorSelectorInputElement = document.getElementById('cubeColorSelector');
  cubeColorSelectorInputElement.value = appSettings.cubeColor
  document.querySelector('#cubeColorSelector').dispatchEvent(new Event('input', { bubbles: true }));

  const elem = document.getElementById('myTextToDetect');
  elem.value = appSettings.title
  elem.addEventListener("keyup", onKeyUpOrOnTextChange)
  elem.addEventListener("change", onKeyUpOrOnTextChange)


  document.addEventListener('coloris:pick', event => {
    appSettings[currentColor] = event.detail.color;
    api.updateSettings(appSettings)
  });

});


document.querySelector('#backgroundColorSelector').addEventListener('click', e => {
  currentColor = "backgroundColor"
});

document.querySelector('#cubeColorSelector').addEventListener('click', e => {
  currentColor = "cubeColor"
});
  
