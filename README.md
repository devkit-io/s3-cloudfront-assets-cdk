# s3-cloudfront-assets-cdk

Effortlessly host your static assets on AWS S3 and serve them with lightning speed through AWS CloudFront using the power of AWS CDK.

[View the repository on GitHub](https://github.com/devkit-io/s3-cloudfront-assets-cdk/tree/main)

## Features

- **AWS S3**: Robust and scalable storage for your static assets.
- **AWS CloudFront**: Provides low-latency and fast content delivery.
- **AWS CDK**: Infrastructure as code, ensuring reliable deployments and configurations.

## Pre-requisites

1. AWS account.
2. AWS CLI installed and configured.
3. Node.js & NPM.
4. AWS CDK installed (`npm install -g aws-cdk`).

## Setup & Deployment

### Configuration

Before deployment, ensure the configuration meets your needs. Edit the `deployment/bin/config.ts` file:

```typescript
export const configuration = {
  repoName: "YOUR_REPO_NAME",          // Name of your repository
  certificateArn: "YOUR_CERT_ARN",    // ARN of your SSL certificate in AWS Certificate Manager
  domainName: "YOUR_DOMAIN_NAME",     // Desired domain name for your CloudFront distribution
};
```

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/devkit-io/s3-cloudfront-assets-cdk.git
    cd s3-cloudfront-assets-cdk
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Bootstrap AWS CDK** (if you haven't done this before):
    ```bash
    cdk bootstrap
    ```

4. **Deploy to AWS**:
    ```bash
    cdk deploy
    ```

Post-deployment, the CDK will display the CloudFront distribution URL.

## Usage

Upon deployment, simply upload your assets to the designated S3 bucket. They'll then be readily accessible through the provided CloudFront distribution URL or the custom domain name you've configured.

## Contribution

Contributions to this repository are not available as the project is locked to customization.

## License

MIT License. See [LICENSE](LICENSE) for detailed information.

## Support & Issues

For support or to address any issues, please raise an issue on the [GitHub repository](https://github.com/devkit-io/s3-cloudfront-assets-cdk/tree/main).

---

Deploy, relax, and enjoy your swift and scalable static asset delivery!
