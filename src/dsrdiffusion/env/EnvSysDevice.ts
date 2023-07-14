/***************************************************************************/
/*                                                                         */
/*  Copyright 2018-2023 by                                                 */
/*  Vily(vily313@126.com)                                                  */
/*                                                                         */
/***************************************************************************/

class EnvSysDevice {

    private static s_mobileFlag = 0;
    private static s_safariFlag = 0;
    private static s_Android_Flag = 0;
    private static s_IOS_Flag = 0;
    private static s_IPad_Flag = 0;
    /**
     * zh-CN, en-US, ect....
     */
    private static s_language: string = "";
    /**
     * set web html body background color
     * @param color a color string, the default value is "white"
     */
    static SetWebBodyColor(color: string = "white"): void {

        const body = document.body;
        body.style.background = color;
    }
    static SetLanguage(language: string): void {
        EnvSysDevice.s_language = language;
    }
	static IsChineseLanguage(): boolean {
		let lg = EnvSysDevice.GetLanguage();
		return lg == "zh-CN";
	}
    static GetLanguage(): string {
        if (EnvSysDevice.s_language != "") {
            return EnvSysDevice.s_language;
        }
        EnvSysDevice.s_language = navigator.language;
        return EnvSysDevice.s_language;
    }
    static GetDevicePixelRatio(): number {
        return window.devicePixelRatio;
    }
    /**
     * 返回当前是不是window操作系统 PC端
     */
    static IsWindowsPCOS(): boolean {
        return !(EnvSysDevice.IsSafariWeb() || EnvSysDevice.IsMobileWeb());
    }
    static TestSafariWeb(): boolean {
        //return /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
        return /Safari/.test(navigator.userAgent) && /Mac OS/.test(navigator.userAgent);
    }
    static IsMobileWeb(): boolean {
        if (EnvSysDevice.s_mobileFlag > 0) {
            return EnvSysDevice.s_mobileFlag == 2;
        }
        return EnvSysDevice.TestMobileWeb();
    }
    static IsSafariWeb(): boolean {
        if (EnvSysDevice.s_safariFlag > 0) {
            return EnvSysDevice.s_safariFlag == 2;
        }
        EnvSysDevice.s_safariFlag = EnvSysDevice.TestSafariWeb() ? 2 : 1;
        return EnvSysDevice.s_safariFlag == 2;
    }
    static IsIOS(): boolean {
        if (EnvSysDevice.s_IOS_Flag > 0) {
            return EnvSysDevice.s_IOS_Flag == 2;
        }
        let boo: boolean = false;
        if (/iPad|iPhone|iPod/.test(navigator.platform)) {
            boo = true;
        } else {
            boo = navigator.maxTouchPoints != undefined &&
                navigator.maxTouchPoints > 2 &&
                /MacIntel/.test(navigator.platform);
        }
        EnvSysDevice.s_IOS_Flag = boo ? 2 : 1;
        return boo;
    }

    static IsIpadOS(): boolean {
        if (EnvSysDevice.s_IPad_Flag > 0) {
            return EnvSysDevice.s_IPad_Flag == 2;
        }
        let boo: boolean = navigator.maxTouchPoints > 0 &&
            navigator.maxTouchPoints > 2 &&
            /MacIntel/.test(navigator.platform);
        if (!boo && (/iPod|iPad|iPadPro|iPodPro/i.test(navigator.userAgent))) {
            boo = true;
        }
        EnvSysDevice.s_IPad_Flag = boo ? 2 : 1;
        return boo;
    }

    static IsAndroidOS(): boolean {
        if (EnvSysDevice.s_Android_Flag > 0) {
            return EnvSysDevice.s_Android_Flag == 2;
        }
        let boo: boolean = EnvSysDevice.TestMobileWeb();

        if (boo && (/Android|Linux/i.test(navigator.userAgent))) {
            boo = true;
        }
        else {
            boo = false;
        }
        EnvSysDevice.s_Android_Flag = boo ? 2 : 1;
        return boo;
    }
    private static TestMobileWeb(): boolean {
        if (EnvSysDevice.s_mobileFlag > 0) {
            return EnvSysDevice.s_mobileFlag == 2;
        }
        if (/mobile/.test(location.href)) {
            EnvSysDevice.s_mobileFlag = 2;
            return EnvSysDevice.s_mobileFlag == 2;
        }

        if (/Android/i.test(navigator.userAgent)) {
            if (/Mobile/i.test(navigator.userAgent)) {
                EnvSysDevice.s_mobileFlag = 2;
                return EnvSysDevice.s_mobileFlag == 2;
            } else {
                EnvSysDevice.s_mobileFlag = 1;
                return EnvSysDevice.s_mobileFlag == 2;
            }
        } else if (/webOS|iPhone|iPod|iPad|iPodPro|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            EnvSysDevice.s_mobileFlag = 2;
            return EnvSysDevice.s_mobileFlag == 2;
        }
        EnvSysDevice.s_mobileFlag = 1;
        return EnvSysDevice.s_mobileFlag == 2;
    }
}
export default EnvSysDevice;
