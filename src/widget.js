import EvmuxAppsApi from 'evmux-app-framework/src/EvmuxAppsApi/EvmuxAppsApi' // or use <script tag>


const updateBackgroundAndCubeColors = (settingsData) => {
  document.getElementsByClassName("area")[0].style.backgroundColor=settingsData.backgroundColor;    
    let elements =  document.getElementsByClassName("liBackgroundColor")
    for(var i = 0; i < elements.length; i++){
      elements[i].style.backgroundColor = settingsData.cubeColor;
    }

  document.getElementById("textToDisplay").innerText = settingsData.title
}

let api = new EvmuxAppsApi();

api.registerEvent('settingsUpdated', (res, eventData) => {
  debugger
  updateBackgroundAndCubeColors(eventData);
})

api.getSettings().then((res) => {
  if (res.response) {
    updateBackgroundAndCubeColors(res.response);
  }
  
  api.reportLoaded().then((appSettings) => {
    console.log("initial settings after reportLoaded ", appSettings);
  })
})