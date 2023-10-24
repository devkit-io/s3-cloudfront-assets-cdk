import {Stack, StackProps} from "aws-cdk-lib";
import { Distribution, OriginAccessIdentity } from "aws-cdk-lib/aws-cloudfront";
import { S3Origin } from "aws-cdk-lib/aws-cloudfront-origins";
import {Bucket, BlockPublicAccess} from "aws-cdk-lib/aws-s3";
import {Construct} from "constructs";
import {Certificate} from "aws-cdk-lib/aws-certificatemanager";

export interface DeploymentStackProps extends StackProps {
  certificateArn?: string;
  domainNames?: string[];
}

export class AssetCloudfrontDeploymentStack extends Stack {
  constructor(scope: Construct, id: string, props: DeploymentStackProps) {
    super(scope, id, props);

    const bucket = new Bucket(this, 'WebsiteBucket', {
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL
    });

    const originAccessIdentity = new OriginAccessIdentity(this, 'OAI');

    bucket.grantRead(originAccessIdentity);

    const distributionProps: any = {
      defaultBehavior: {
        origin: new S3Origin(bucket, {
          originAccessIdentity: originAccessIdentity,
        })
      }
    };

    // If certificateArn is provided, then add certificate to CloudFront distribution
    if (props.certificateArn) {
      distributionProps.certificate = Certificate.fromCertificateArn(this, 'Certificate', props.certificateArn);
    }

    // If domainNames are provided, then add them to CloudFront distribution
    if (props.domainNames && props.domainNames.length > 0) {
      distributionProps.domainNames = props.domainNames;
    }

    const cloudfrontImages = new Distribution(this, 'AssetImagesCdnDistribution', distributionProps);
  }
}
