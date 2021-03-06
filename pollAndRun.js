function pollAndRun(evaluateFunction, intervalMilliseconds, maxSeconds, executeFunction, fallbackFunction) {
    'use strict';
    var intervalId;
    var intervalCounter = 0;
    var evalResult;
    intervalId = setInterval(function () {
            intervalCounter += 1;
            evalResult = evaluateFunction();
            if (evalResult || ((intervalCounter * intervalMilliseconds) >= (maxSeconds * 1000))) {
                clearInterval(intervalId);
                if (evalResult) {
                    executeFunction(evalResult);
                } else {
                    if (fallbackFunction) {
                        fallbackFunction();
                    }
                }
            }
        }, intervalMilliseconds);
}
