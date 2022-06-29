
/* coremethod_config */
var DIR_AJAX = "/ajax";

/* ## get_device */
function get_device() {
    var pf = navigator.platform;
    var ua = navigator.userAgent;

    // ipad
    if (/ipad/i.test(pf)) {
        return "tablet";
    }

    // iphone
    else if (/iphone/i.test(pf)) {
        return "mobile";
    }

    // android
    else if (/linux armv7/i.test(pf)) {
        // gallerytab
        if (/SHW-M/i.test(ua)) {
            return "tablet";
        }

        // android phone
        else {
            return "mobile";
        }
    }

    // ??
    else {
        return "pc";
    }
}



















