import handleAll from "./types";
import getUserAgent from "./sources/userAgent";
import hasUserAgentData from "./sources/userAgentData";
import getAppVersion from "./sources/appVersion";
import hasWebdriver from "./sources/webDriver";
import getRTT from "./sources/rtt";
import getWindowOuterSize from "./sources/windowOuterSize";
import arePermissionsInconsistent from "./sources/permissions";
import getWebGL from "./sources/webgl";
import getScreen from "./sources/screen";
import getDeviceMemory from "./sources/deviceMemory";
import isBigEndian from "./sources/endian";
import getHardwareConcurrency from "./sources/hardwareConcurrency";
import hasChrome from "./sources/chrome";
import isSelenium from "./sources/selenium";
import getEvalLength from "./sources/evalLength";
import isPhantomJS from "./sources/phantomjs";
import getPluginsLength from "./sources/pluginsLength";
import arePluginsConsistent from "./sources/pluginsConsistence";
import getErrorTrace from "./sources/errorTrace";

export default async function collect() {
    return handleAll({
        "user_agent": getUserAgent,
        "user_agent_data": hasUserAgentData,
        "app_version": getAppVersion,
        "rtt": getRTT,
        "window_outer_size": getWindowOuterSize,
        "notification_permissions": arePermissionsInconsistent,
        "webgl": getWebGL,
        "screen": getScreen,
        "device_memory": getDeviceMemory,
        "endian": isBigEndian,
        "cores": getHardwareConcurrency,
        "chrome": hasChrome,
        "selenium": isSelenium,
        "phantomjs": isPhantomJS,
        "webdriver": hasWebdriver,
        "eval_length": getEvalLength,
        "plugins_length": getPluginsLength,
        "plugins_consistence": arePluginsConsistent,
        "error_trace": getErrorTrace
    })
}