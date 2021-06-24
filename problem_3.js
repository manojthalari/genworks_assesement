var compareVersion = function (version1, version2) {
    let v1 = version1.split(".");
    let v2 = version2.split(".");
    let length = 0;
    let status = 0;
    let count = 0;
    for (let i = 0; i < v1.length; i++) {
        v1[i] = Number(v1[i]);
    }
    for (let i = 0; i < v2.length; i++) {
        v2[i] = Number(v2[i]);
    }
    if (v1.length < v2.length) {
        length = v1.length;
    } else {
        length = v2.length;
    }
    for (let i = 0; i < length; i++) {
        if (v1[i] > v2[i]) {
            count++;
            return status = 1;
        } else if (v1[i] < v2[i]) {
            count++
            return status = -1;
        } else {
            count++
            status = 0;
        }
    }
    if (status === 0 && v1.length !== v2.length) {
        if (v1.length > v2.length) {
            for (let i = count; i < v1.length; i++) {
                if (v1[i] > 0) {
                    status = 1;
                }
            }
        } else if (v1.length < v2.length) {
            for (let i = count; i < v2.length; i++) {
                if (v2[i] > 0) {
                    status = -1;
                }
            }
        }
    }
    return status;
};