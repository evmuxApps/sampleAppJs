
import appsObserver from 'evmux-app-framework/src/AppsObserver/AppsObserver'

appsObserver.init();
import appsDataManager from 'evmux-app-framework/src/AppsDataManager/AppsDataManager'

let userAppInstanceId = "914155de-633a-476b-957a-6a7a9e01d6e9";
let componentId = "b893da10-5cec-4f11-876c-716addbad4ae"

appsDataManager.updateUserAppInstance(userAppInstanceId, { id: userAppInstanceId})


let userAppSettingsIFrame = document.getElementById("userAppSettingsIFrame")
userAppSettingsIFrame.src = `settings.html?appInstanceId=${userAppInstanceId}&compId=settings_${componentId}`;
let userAppIFrame = document.getElementById("userAppIFrame")
userAppIFrame.src = `widget.html?appInstanceId=${userAppInstanceId}&compId=${componentId}`;