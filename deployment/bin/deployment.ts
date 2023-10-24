#!/usr/bin/env node

import * as cdk from 'aws-cdk-lib';
import {configuration} from "./config"
import {AssetCloudfrontDeploymentStack} from "../lib/stack";

const app = new cdk.App();

// due to optionals being in the dynamically generated config, this is to avoid a typescript error
let config: Record<string,any> = configuration;
new AssetCloudfrontDeploymentStack(app, `${config.repoName}-AssetStack`, {
    certificateArn: config.certificateArn,
    domainNames: config.domainName ? [config.domainName] : undefined,
});
