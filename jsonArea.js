var _JSON_CHILD_KEY = "children";

Array.prototype.editJson = async function (editedData, uniqueData) {
    var BreakException = {};
    const key = Object.keys(uniqueData)[0];
    const uniqe = uniqueData[key];
    let ths = this;
    let json;
    try {
        this.forEach((item) => {
            function findData(data) {
                let find = data[key] == uniqe;
                if (!find) {
                    if (
                        typeof data[_JSON_CHILD_KEY] != "undefined" &&
                        data[_JSON_CHILD_KEY].length
                    ) {
                        alldata(data[_JSON_CHILD_KEY]);
                    }
                } else {
                    let stJson = JSON.stringify(ths);
                    let stData = JSON.stringify(data);
                    let stEdited = JSON.stringify(editedData);
                    let split = stJson.split(stData);
                    json = split.join(stEdited);
                    throw BreakException;
                }
            }
            var alldata = function (data) {
                if (Array.isArray(data)) {
                    data.forEach((child) => {
                        findData(child);
                    });
                } else {
                    findData(data);
                }
            };
            alldata(item);
        });
    } catch (e) {
        if (e !== BreakException) throw e;
    }
    return JSON.parse(json);
};

Array.prototype.deleteJson = async function (data) {
    let stJson = JSON.stringify(this);
    let stData = JSON.stringify(data);
    let split = stJson.split(stData);
    if (split[0].slice(-1) === "[") {
        if (split[1].slice(0, 1) === ",") {
            split[1] = split[1].slice(1);
        }
        split = split.join("");
    } else {
        split[0] = split[0].slice(0, -1);
        split = split.join("");
    }
    return JSON.parse(split);
};
