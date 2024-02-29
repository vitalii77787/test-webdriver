import {config as defaultConfig} from  './wdio.conf.js'

defaultConfig.user = process.env.BROWSERSTACK_USERNAME;
defaultConfig.key = process.env.BROWSERSTACK_ACCESS_KEY;

defaultConfig.services = [
    ['browserstack', {
    testObservability: true,
    testObservabilityOptions: {
        projectName: "My test project",
        buildName: `Test build ${Date.now()}`
    },
}]
];

export const config  = defaultConfig;