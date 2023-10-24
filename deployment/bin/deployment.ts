#!/usr/bin/env node

import * as cdk from 'aws-cdk-lib';
import {configuration as config} from "./config"
import {AssetCloudfrontDeploymentStack} from "../lib/stack";

const app = new cdk.App();
new AssetCloudfrontDeploymentStack(app, `${config.repoName}-AssetStack`, {
    certificateArn: config.certificateArn,
    domainNames: config.domainName ? [config.domainName] : undefined,
});
